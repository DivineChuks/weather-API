const button = document.getElementById('Btn')
 input = document.querySelector('.input');
let name = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', showWeather);

function showWeather(e){
    let inputvalue = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=4be7c8419c8ad157ed27ff6cddef7187`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let countryValue = data.name;
        let tempValue = data.main.temp;
        let descValue = data.weather[0].description;
        let humidValue = data.main.humidity;
        let pressureValue = data.main.pressure;

        document.querySelector('.name').innerHTML = 'Country: ' +countryValue;
        document.querySelector('.temp').innerHTML = 'Temperature: ' +tempValue;
        document.querySelector('.desc').innerHTML = 'Description: ' +descValue;
        document.querySelector('.hum').innerHTML = 'Humidity: ' +humidValue;
        document.querySelector('.pres').innerHTML = 'Pressure: ' +pressureValue;

 
    })
    .catch(err => alert('Wrong City name'))
    document.querySelector('.input').value = "";

}

   //   let nameVal = data['name'];
    //  let tempVal = data['main']['temp'];
    //  var descValue = data['weather'][0]['description'];
    //  name.innerHTML = nameVal
    //  temp.innerHTML = tempVal
    //  desc.innerHTML = descValue

// function showWeather(){
//     let xmlHttp = new XMLHttpRequest()
//     xmlHttp.open('GET' , 'https://api.openweathermap.org/data/2.5/weather?q='+inputVal+'&appid=4be7c8419c8ad157ed27ff6cddef7187');
//     xmlHttp.send()

//     xmlHttp.onreadystatechange = (event) =>{
//         let res = xmlHttp.response
//         let result = JSON.parse(res)
//         console.log(result)
//     }
// }




