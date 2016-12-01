"use strict";
function EnterSwitch(message, first, second)
{
  do
  {
    var sEntry = window.prompt(message, first);
    sEntry = sEntry.trim().toUpperCase().charAt(0);
    if(sEntry == first || sEntry == second)
      return sEntry;
    else
      alert("Enter either " + first + " or " + second);
  }while(sEntry != first && sEntry != second)
}

function EnterNumber(message)
{
  while(true)
  {
    var nEntry = parseFloat(window.prompt(message, "0"));
    if(isNaN(nEntry))
      alert("Enter a number to continue");
    else
      return nEntry;
  }
}