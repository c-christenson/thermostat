describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe("default settings", function(){
 
  it("the temperature starts at 20 degrees", function() {
    expect(thermostat.temp).toEqual(20);
  });

  it("the minimum temperature should be 10 degrees", function(){
    for(var x = 0; x < 10; x++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.temp).toEqual(10);
  });

  it("power saver mode is on by default", function(){
    expect(thermostat.powerSaverStatus).toBe(true)
    expect(thermostat.maxTemp).toEqual(25)
  });

});


describe("temperature changes", function(){

it("the temperature can be reset to 20 with the reset button", function(){
    thermostat.minTemp;
    thermostat.reset;
    expect(thermostat.temp).toEqual(20);
  });


  it("can increase the temperature with the increaseTemp function", function(){
    thermostat.increaseTemp();
    expect(thermostat.temp).toEqual(21);
  });

  it("can decrease the temperature with the decreaseTemp function", function(){
    thermostat.decreaseTemp();
    expect(thermostat.temp).toEqual(19);
  });

});


describe("power saver mode", function(){

  it("if power saver mode is off, the maximum temp is 32", function(){
    thermostat.powerSaverOff()
    expect(thermostat.maxTemp).toEqual(32)
  });

  it("if power saver mode is on, the maximum temp is 25", function(){
    thermostat.powerSaverOn()
    expect(thermostat.maxTemp).toEqual(25)
  });

});

});

  