var thermostat = new Thermostat();

  $(document).ready(function(){

  $('#temperature').text(thermostat.temp);

  $('.IncreaseTemp').click(function(){
    thermostat.increaseTemp();
  $('#temperature').text(thermostat.temp);
  });

  $('.DecreaseTemp').click(function(){
    thermostat.decreaseTemp();
  $('#temperature').text(thermostat.temp);
  });

  $('.Reset').click(function(){
    thermostat.reset();
  $('#temperature').text(thermostat.temp);
  });

  $('.PowerSaveOn').click(function(){
    thermostat.powerSaverOn();
  $('#temperature').text(thermostat.temp);
  });

  $('.PowerSaveOff').click(function(){
    thermostat.powerSaverOff();
  $('#temperature').text(thermostat.temp);
  });

});

