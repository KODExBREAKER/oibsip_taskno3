// Fahrenheit Converter
function fTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {
        case 'F':
            temperature = inputDegreeValue;
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 32) * (5 / 9));
            break;
        case 'K':

            temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
            break;
    }
    return temperature;
}

// Celcius Converter

function cTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {

        case 'C':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue * (9 / 5)) + 32);
            break;
        case 'K':
            temperature = eval(inputDegreeValue + 273.15);
            break;

    }

    return temperature;
}

// Kelvin Converter

function kTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {
        case 'K':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 273.15));
            break;

    }
    return temperature;
}
var form = document.querySelector('form');
form.onsubmit = function(e) {
    // window.alert("faf");
    e.preventDefault();
    var a = convertInputDegree();
    document.getElementById("convertedDegree").innerHTML = a;
    // window.alert(a)
}

function convertInputDegree() {

    let inputDegree = document.getElementById('inputDegree').value;
    // console.log(inputDegree);
    let t = document.getElementById('selectInputDegreeType');
    // let value = e.
    selectInputDegreeType = t.options[t.selectedIndex].value;
    // let selectInputDegreeType = e.options[e.selectedIndex].text;
    t = document.getElementById('selectConversionType');
    conversionType = t.options[t.selectedIndex].value;
    // console.log(selectInputDegreeType, conversionType);

    let resultValue = 0;

    switch (selectInputDegreeType) {

        case "C":
            resultValue = cTo(inputDegree, conversionType);
            break;

        case "F":
            resultValue = fTo(inputDegree, conversionType);
            break;

        case "K":
            resultValue = kTo(inputDegree, conversionType);
            break;

    }
    // console.log(resultValue, "   desf");
    return resultValue;
}