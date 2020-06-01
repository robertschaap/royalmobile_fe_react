export interface ContentCopy {
  readonly [key: string]: string;
}

export const contentCopy: ContentCopy = Object.freeze({
  'common.errorMissing': 'Something should\'ve been here, but it isn\'t.',
  'common.loadMore': 'Load More',
  'common.mobile': 'Mobile',
  'common.royal': 'Royal',
  'common.royalMobile': 'RoyalMobile',

  'navigation.business': 'For Your Business',
  'navigation.consumer': 'Products For You',
  'navigation.contact': 'Contact',
  'navigation.help': 'Help',
  'navigation.home': 'Home',
  'navigation.myAccount': 'My Account',
  'navigation.ourProducts': 'Our Products',

  'benefits.get': 'GET',
  'benefits.threeMonthsFree': 'Three months free inside of your regular bundle when you refer a friend',
  'benefits.doubleData': 'Double data in your bundle plus a 5 euro discount when you combine with Royal Internet',

  'contact.contactUs': 'Contact us',

  'order.readyToOrder': 'I\'m ready to order!',
  'order.renewContract': 'I\'m ready to renew my contract!',
  'order.totalMonthlyPayment': 'Total monthly payment',
  'order.totalOneTimePayment': 'Total one-time payment',

  'product.configurePlan.shippingFee': 'Shipping',
  'product.configurePlan': 'Configure your plan',
  'product.connectionFee': 'Connection Fee',
  'product.customiseDevice': 'Customise your device',
  'product.data': 'Data',
  'product.deviceSpecifications': 'Device Specifications',
  'product.discounts': 'Discounts',
  'product.monthly': 'Monthly',
  'product.monthlyPayment': 'Your monthly payment',
  'product.oneTimePayment': 'Your one-time payment',
  'product.phoneCostUpfront': 'Phone cost upfront',
  'product.pickDeviceCapacity': 'Pick your device capacity',
  'product.pickDeviceColor': 'Pick your device color',
  'product.summingUp': 'Summing it all up',

  'subscription.duration.1year': '1 year contract',
  'subscription.duration.2year': '2 year contract',

  'usp.freeShipping': 'Free Shipping on All Orders',
  'usp.noConnectionFeeAcquisition': 'No Connection Fee For New Customers',
  'usp.noFalsePromises': 'Guaranteed no False Promises',
});

export default contentCopy;
