function convert() {
    var input = document.getElementById("input").value;
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;
    var output = document.getElementById("output");
  
    if (inputUnit == "C" && outputUnit == "F") {
      output.innerHTML = (input * 9/5) + 32 + "°F";
    } else if (inputUnit == "F" && outputUnit == "C") {
        x =((input - 32) * 5/9).toFixed(20)
      output.innerHTML = x.slice(0, -18) + "°C";
    } else {
      output.innerHTML = "Temperature type is same as conversion type";
    }
  }