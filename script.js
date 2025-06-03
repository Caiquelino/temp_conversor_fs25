function converterCtoF(tempC) {
    const tempF = (tempC*9/5) + 32
    console.log(`Temperatura = ${tempF} F`);
    return tempF
}

function converter(){
    console.log('Ei Clicou!')
    let tempC = document.getElementById('tempC').value
    console.log(`Temp °C: ${tempC}`);

    /*Chamando a Função que converte de C para F */
    const resultado = converterCtoF(tempC)

    document.getElementById('resultado').innerHTML = resultado
    
}
