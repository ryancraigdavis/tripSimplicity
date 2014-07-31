  var Mexico = [
  {
    name: 'Mexico'
  },
  {
    rate: 'MXN',
    currency: 'pesos'
  },
  {
    hotelCode: 'MX',
    noVisa: true
  }
];

  var UnitedKingdom = [
  {
    name: 'United Kingdom'
  },
  {
    rate: 'GBP',
    currency: 'pounds'
  },
  {
    hotelCode: 'GB',
    noVisa: true
  }
];

var France = [
  {
    name: 'France'
  },
  {
    rate: 'EUR',
    currency: 'euros'
  },
  {
    hotelCode: 'FR',
    noVisa: true
  }
];

var Canada = [
  {
    name: 'Canada'
  },
  {
    rate: 'CAD',
    currency: 'canadian dollars'
  },
  {
    hotelCode: 'CA',
    noVisa: true
  }
];

var China = [
  {
    name: 'China'
  },
  {
    rate: 'CNY',
    currency: 'yuan'
  },
  {
    hotelCode: 'CN'
  }
];

var countries = [France,Mexico,UnitedKingdom,China,Canada];

module.exports.getCountries = function(){
  return countries;
};