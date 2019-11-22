export interface Subscription {
  id: number;
  duration: string;
  data: string;
  benefits_long: string[],
  benefits_short: string;
  regular_price: "20"
}

export const subscriptionsStub: Subscription[] = [{
  id: 1,
  duration: "2_year",
  data: "10gb",
  benefits_long: [
    "unlimited calls",
    "unlimited texts",
    "unlimited roaming",
  ],
  benefits_short: "unlimited<br/> calls, text, roaming",
  regular_price: "20",
}];