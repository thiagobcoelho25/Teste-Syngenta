'use strict'

const chai = require('chai')
const expect = chai.expect
const split_input_data = require('../src/utils/split_input_data')
const data_hotels = require("../src/data/hoteis.json")


describe('test utils functions', function () {
  it('should return splited input data', function () {
    expect(split_input_data.split_input_data("Regular: 16Mar2009(mon), 17Mar2009(tues), 18Mar2009(wed)")).
      to.deep.equal({type_of_client: 'Regular', array_of_days: ["16Mar2009(mon)"," 17Mar2009(tues)"," 18Mar2009(wed)"]});
  });
  
  it('should return Bridgewood', function () {
    expect(split_input_data.calculate_most_cheap("Regular", ["20Mar2009(fri)", "21Mar2009(sat)", "22Mar2009(sun)"])).to.equal("Bridgewood");
  });

  
  it('should return price with value of R$520 for Regular client in Ridgewood Hotel', function () {
    expect(split_input_data.calculate_price_days(data_hotels.array_of_hotels[2].daily_rate.Regular.week, ["26Mar2009(thur)", " 27Mar2009(fri)", "28Mar2009(sat)"])).to.equal(590);
  });
})