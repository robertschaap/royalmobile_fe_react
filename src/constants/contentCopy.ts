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

  'order.readyToOrder': 'I\'m ready to order!',
  'order.renewContract': 'I\'m ready to renew my contract!',

  'product.configurePlan': 'Configure your plan',
  'product.customiseDevice': 'Customise your device',
  'product.monthlyPayment': 'Your monthly payment',
  'product.oneTimePayment': 'Your one-time payment',
  'product.summingUp': 'Summing it all up',
  'product.pickDeviceColor': 'Pick your device color',
  'product.pickDeviceCapacity': 'Pick your device capacity',
  'product.phoneCostUpfront': 'Phone cost upfront',
  'product.deviceSpecifications': 'Device Specifications',

  'subscription.duration.1year': '1 year contract',
  'subscription.duration.2year': '2 year contract',

  'usp.freeShipping': 'Free Shipping on All Orders',
  'usp.noConnectionFeeAcquisition': 'No Connection Fee For New Customers',
  'usp.noFalsePromises': 'Guaranteed no False Promises',
});

export default contentCopy;
