'use strict'

const chai = require('chai')
const expect = chai.expect
const split_input_data = require('../src/utils/split_input_data')
const Hotel = require('../src/entities/hotel')


describe('test utils functions', function () {
  it('should return splited input data', function () {
    expect(split_input_data.split_input_data("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).
      to.deep.equal({type_of_client: 'Regular', array_of_days: ["16Mar2009(mon)"," 17Mar2009(tues)"," 18Mar2009(wed)"]});
  });
  
  it('should return Bridgewood', function () {
    const bridgewood_hotel = new Hotel("Bridgewood", 4, [60, 160, 160, 160, 160, 160, 60], [50, 110, 110, 110, 110, 110, 50])

    expect(bridgewood_hotel.getName()).to.equal("Bridgewood");
  });

  
  it('should return price with value of R$520 for Regular client in Ridgewood Hotel', function () {
    const ridgewood_hotel = new Hotel("Ridgewood", 5, [150, 220, 220, 220, 220, 220, 150], [40, 100, 100, 100, 100, 100, 40])

    expect(ridgewood_hotel.calculate_price_days("Regular", ["26Mar2009(thur)", " 27Mar2009(fri)", "28Mar2009(sat)"])).to.equal(590);
  });
})