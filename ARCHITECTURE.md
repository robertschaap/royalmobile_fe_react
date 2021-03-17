# RoyalMobile | Webstore
This document provides some basic information on architectural decisions and structure of the application. High level the application is a web store that implements a REST api. Structurally the application can be seen as having the following layers

* Data fetching layer implemented in the store through Redux-Saga, which handles calls made to the REST api and updates the store with the resolved data.
* Data storage layer implemented in the store.
* Container view layer which handle business logic and communicate with the store by either sending it actions to perform or selecting data from it.
* Presentational view layer which renders the page and any data passed down to it by the container view layer.

## Choices
Being a personal project, some of the chosen technologies are somewhat arbitrary, but not without thought. Below are a few.

* React was chosen since I've mostly worked in it and wanted to play around with another React project
* Redux and Redux-Saga were chosen because the project I started professionally at the time had an implementation of it. That implementation was very heavy on business logic, so I wanted to play around with organisation a bit, while getting to learn Redux-Saga
* Styled Components was chosen because it was a popular choice. Personally I'm 50/50 between it and SCSS, however this gave me a chance to see if putting styles in a separate file and importing that into the main component (similar to SCSS modules) would work. It works quite nice and keeps your component clear.
* Some of the linting choices around eslint, typescript and stylelint are quite strict. Personally I don't mind this, it keeps dicussions around codestyle to a minimum and enforces consistency.
* The organisation around Pages/Containers/Components is loosely based on a project I've worked in. Ultimately its just a choice, if your codebase isn't substantially large, keeping your file structure flat generally seems to be the best choice.
* The import paths `../../` are a side-effect of using CRA + TypeScript. The setup at the time had some constraints when using aliases. Instead of focusing on more setup, I decided to live with it as an experiment. Turns out seeing a few dots and dashes isn't all that major, especially if your file hierarchy is flat and clear.
* Testing is quite heavily implemented because I wanted to build an application as close to how you'd build it in real life. Coverages is close to 100% for most components, in real live 80% is probably fine, but things like your store and global utilities should be heavily tested.
* The `api/cart/order` is inconsistent, the other endpoints take a `cartID` param directly after `/cart`. You could also envision that logic around the ordering process is its own rest endpoint, not a subsection of the basic cart functionality. Either way, I spotted this early on but decided to live with it for no other reason than sometimes you have to in the real world as well. I may refactor it at some point to enjoy the pain of having to keep several FE & BE implementations consistent.

## Store
Redux was chosen as the main source for global data due to its maturity and prevalence in the React landscape. Asynchronous behaviour is implemented through Redux-Saga. In broad strokes this is the setup:

* Reducers maintain a slice of the store (say `Products`). They are sent action objects and update the store based on it and any payload it contains. This should be a relatively flat operation and perform any complex mapping/filtering that relates business/view logic.
* Ducks contain actions and selectors to either send updates to the store or retrieve data from it. They _may_ be exported but only if they are used outside of the store (see Agnostic Approach).
* Sagas handle asynchronous behavior. A saga may not implement business logic, it listens to an action (say `fetchProduct`), performs something async, and then should respond with a success or error action. The `api` utility enforces this behaviour.

### Flow
The aforementioned roughly creates the following flow.

* A page or one of its nested container components sends an action to the store because it needs some data.
* The store updates its state to indicate that it is going into a fetch state.
* Redux saga intercepts the action if it is explicitly listening to it and does the actual API call.
* Provided the container is listening to the piece of store redux has just updated, it will receive an update and either do some business or view logic (like showing a loader in this case).
* When the call either resolves or rejects, redux saga sends an action to the store with the result.
* The store updates its state based on either action.
* Provided the container is listening to the piece of the store that redux is updating, it will receive an update and either do some business logic or pass it to the presentational layer.

Of note is that the retrieval of initial data is explicit. A container has to send a `fetchX` action to the store to begin the process of communicating with an API. Another option would be to merely `selectX` and have the store maintain some information on whether the fetch actually needs to be done, however this pushes logic into the store at the cost of implicit behaviour.

### Agnostic Approach
Since the container/view will need some level of knowledge that the store exists, we've tried to make sure that at a minimum it only knows that _a_ store exists.

* All logic relating to the store has been put away in `src/store`.
* The data fetching layer is internal to the store, basically the containers/view have no idea where it is coming from
* Dispatch/selector functions from redux are imported through the store, not directly from redux. Dispatching and selecting are not concepts unique to redux. As a result, containers that consume these have no idea about the underlying implementation, just that they are dispatching and selecting.
* Dispatching and selecting is done through functions (action creators, selectors) that abstract away redux's implementation. As a result, containers only know what type of data they are asking for, not that they are dispatching redux actions or selecting from its store.
* Only actions and selectors that containers need are exported from the store. As little knowledge as possible is exposed to the outside world. In this way for example, a container may initiate a fetch, but it has no concept of success, error or anything in between until the selector it may be listening to updates.

## Folder Structure
### `src/components`
For presentational React components. Components placed here should be "dumb" and not consume any state from the global store, nor implement any asynchronous behaviour. These may have styles in a separate `component.styles.ts` file. A component placed here should be shared, if it is only used by a single page, keep it co-located with the page itself.

### `src/constants`
Files that do not change or have no dynamic properties for the duration of the application's run time. Mainly routes and static content are kept here.

### `src/containers`
For "smart" components or components that act as global providers to the application. Containers are allowed to implement asynchronous behaviour and communicate with the store, however since most of them would implement functionality relating to a specific page, they should likely be co-located there. A container should focus on business logic and may have or implement any styling other than importing.

### `src/hooks`
Global React hooks that are or can be used throughout the application. If a hook is merely an extraction of a `useEffect` for readability/cleanliness, keep it co-located with the component in a `component.hooks.ts` or `component.utils.ts` file.

### `src/pages`
Pages may contain both "smart" and "dumb" components. The entry point should be a component suffixed with `Page`, i.e `ContactPage`. The top level component inside the folder should be a container component that only handles business logic. Nested components and containers are fine for organisation/separation purposes, but should not be nested at multiple levels. I.e a page folder may have sub-folders, but only one level deep.

### `src/store`
Contains everything related to the data store (see the store section).

### `src/stubs`
Exports a MirageJS stubs server which is used in local development and test environments to mock API data. Any endpoints added here should fulfill the base needs of said endpoint and strive not to implement business logic that the actual API would be implementing.

### `src/styles`
Global styles, variables, thememing and CSS resets. Styles added here should be global to the entire application otherwise implemented in local `component.styles.ts` files.

### `src/test`
Helpers for testing setup. These could ideally be put in a `/test` folder at the same level as `/src` but the default bootstrapped setup of CRA prevents us from doing so without ejecting it.

### `src/types`
Global types and interfaces for the application.

### `src/utils`
Global utilities for the application.
