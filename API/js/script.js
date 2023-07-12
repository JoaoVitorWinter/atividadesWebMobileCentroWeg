let botao = document.getElementById("pesquisar");
let input = document.getElementById("cidade");
async function buscarClima() {
    var resposta = document.getElementById("informacoesClima");
    try {
        var respostaFetch = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b67834381c14eb3b2d222433231107&q=${input.value.split(" ").join("_")}`);
        var respostaFetchConvertida = await respostaFetch.json();
        var respostaFetchAmanha = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3b67834381c14eb3b2d222433231107&q=${input.value.split(" ").join("_")}days=1&aqi=no&alerts=no`);
        var respostaFetchConvertidaAmanha = await respostaFetchAmanha.json();
        var respostaFetchDAmanha = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3b67834381c14eb3b2d222433231107&q=${input.value.split(" ").join("_")}days=2&aqi=no&alerts=no`);
        var respostaFetchConvertidaDAmanha = await respostaFetchDAmanha.json();
        resposta.innerHTML = `<h3>Agora:</h3>
        <p><i class="fa-solid fa-sun"></i>Temperatura: ${respostaFetchConvertida.current.temp_c}°C</p>
        <p><i class="fa-solid fa-temperature-three-quarters"></i>Sensação térmica: ${respostaFetchConvertida.current.feelslike_c}°C</p>
        <p><i class="fa-solid fa-droplet"></i>Umidade: ${respostaFetchConvertida.current.humidity}%</p>
        <p><i class="fa-solid fa-wind"></i>Velocidade do vento: ${respostaFetchConvertida.current.wind_kph} kph</p>
        <h3>Amanhã:</h3>
        <p><i class="fa-solid fa-sun"></i>Temperatura média: ${respostaFetchConvertidaAmanha.forecast.forecastday[0].day.avgtemp_c}°C</p>
        <p><i class="fa-solid fa-droplet"></i>Umidade média: ${respostaFetchConvertidaAmanha.forecast.forecastday[0].day.avghumidity}%</p>
        <p><i class="fa-solid fa-wind"></i>Velocidade do vento máxima: ${respostaFetchConvertidaAmanha.forecast.forecastday[0].day.maxwind_kph} kph</p>
        <h3>Depois de amanhã:</h3>
        <p><i class="fa-solid fa-sun"></i>Temperatura média: ${respostaFetchConvertidaDAmanha.forecast.forecastday[0].day.avgtemp_c}°C</p>
        <p><i class="fa-solid fa-droplet"></i>Umidade média: ${respostaFetchConvertidaDAmanha.forecast.forecastday[0].day.avghumidity}%</p>
        <p><i class="fa-solid fa-wind"></i>Velocidade do vento máxima: ${respostaFetchConvertidaDAmanha.forecast.forecastday[0].day.maxwind_kph} kph</p>`
    } catch (err) {
        console.log(err);
        resposta.innerHTML = "Aconteceu algum erro! Tente novamente.";
    } finally {
        resposta.style.display = "flex";
    }
}

botao.addEventListener("click", buscarClima);
