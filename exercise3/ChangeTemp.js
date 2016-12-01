"use strict";
document.title = "°C to °F Converter";
document.write("<h1>Welcome to my Temperture Converter Script</h1>"
  + "<p>by Pahlo Correa</p>");
var sUnit = EnterSwitch("Is input temperature Celsius or Fahrenheit (C or F)?", "C", "F");
if(sUnit == "C")
{
  var nDeg = EnterNumber("Enter Celcius Temperature:");
  document.write ("<h2>" + nDeg + " &deg;C = " + (nDeg*1.8 + 32) +" &deg;F</h2>");
}
else if(sUnit == "F")
{
  var nDeg = EnterNumber("Enter Fahrenheit Temperature:");
  document.write ("<h2>" + nDeg + " &deg;F = " + (nDeg - 32)/1.8 +" &deg;C</h2>");
}
else
  alert("Error Trap: You must enter either C or F");