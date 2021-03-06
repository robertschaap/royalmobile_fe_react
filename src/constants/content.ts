export interface Content {
  readonly [key: string]: string;
}

const content: Content = Object.freeze({
  'common.errorHeader': 'Whoops...',
  'common.errorMissing': 'Something should\'ve been here, but it isn\'t.',
  'common.loadMore': 'Load More',
  'common.mobile': 'Mobile',
  'common.royal': 'Royal',
  'common.sale': 'Sale',
  'common.skipNavigation': 'Skip navigation',
  'common.formHasErrors': 'There are some errors in the form, please check them above',

  'form.validate.isRequired': 'This field is required',

  'login.login': 'Login',
  'login.info': 'Enter your username and password below and click login to access your account. Don\'t have any credtials or can\'t remember? Visit the help page.',
  'login.username': 'Username',
  'login.password': 'Password',

  'navigation.ourProducts': 'Our Products',

  'pages.business': 'For Your Business',
  'pages.campaign': 'Campaign',
  'pages.consumer': 'Products For You',
  'pages.contact': 'Contact',
  'pages.error': 'Error',
  'pages.help': 'Help',
  'pages.home': 'Home',
  'pages.login': 'Login',
  'pages.myAccount': 'My Account',
  'pages.order': 'Order',
  'pages.orderDetails': 'Order Details',
  'pages.product': 'Product',
  'pages.thankYou': 'Thank You',

  'benefits.get': 'GET',
  'benefits.threeMonthsFree': 'Three months free inside of your regular bundle when you refer a friend',
  'benefits.doubleData': 'Double data in your bundle plus a 5 euro discount when you combine with Royal Internet',

  'contact.contactUs': 'Contact us',
  'contact.info': 'We can’t have you contacting us directly because phone lines cost money to operate, but feel free to drop by in one of our stores or reach out to us on social media.',

  'order.emptyCart': 'Your shopping cart is empty',
  'order.finaliseOrder': 'Finalise my order!',
  'order.keepShopping': 'I want to keep shopping',
  'order.monthlyPayment': 'Monthly payment',
  'order.oneTimePayment': 'One-time payment',
  'order.order': 'Your order',
  'order.paymentDetails': 'Your payment details',
  'order.personalDetails': 'Your personal details',
  'order.readyToOrder': 'I\'m ready to order!',
  'order.readyToPay': 'I\'m ready to pay!',
  'order.removeCartItem': 'Remove from order',
  'order.renewContract': 'I\'m ready to renew my contract!',
  'order.totalMonthlyPayment': 'Total monthly payment',
  'order.totalOneTimePayment': 'Total one-time payment',

  'order.form.bankAccount': 'Bank Account',
  'order.form.country': 'Country',
  'order.form.email': 'Email',
  'order.form.houseNumber': 'House number',
  'order.form.initials': 'Initials',
  'order.form.lastName': 'Last name',
  'order.form.sex': 'Sex',
  'order.form.zipCode': 'Zip code',

  'product.configurePlan': 'Configure your plan',
  'product.connectionFee': 'Connection Fee',
  'product.customiseDevice': 'Customise your device',
  'product.data': 'Data',
  'product.discounts': 'Discounts',
  'product.monthly': 'Monthly',
  'product.monthlyPayment': 'Your monthly payment',
  'product.oneTimePayment': 'Your one-time payment',
  'product.phoneCostUpfront': 'Phone cost upfront',
  'product.pickDeviceCapacity': 'Pick your device capacity',
  'product.pickDeviceColor': 'Pick your device color',
  'product.shippingFee': 'Shipping',
  'product.summingUp': 'Summing it all up',

  'subscription.duration.1year': '1 year contract',
  'subscription.duration.2year': '2 year contract',

  'usp.freeShipping': 'Free Shipping on All Orders',
  'usp.noConnectionFeeAcquisition': 'No Connection Fee For New Customers',
  'usp.noFalsePromises': 'Guaranteed no False Promises',
});

export default content;
