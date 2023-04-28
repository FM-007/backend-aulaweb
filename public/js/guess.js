function geraNumeroAleatorio() {
    return Math.floor(Math.random() * 100);
}

let numAleatorio = geraNumeroAleatorio();

function aleatorio() {
    let valor = parseInt(document.getElementById("aleatorio").value);

    if (valor === numAleatorio) {
        document.getElementById("resposta")
            .style.setProperty("background-color", "green");
    } else {
        document.getElementById("resposta")
            .style.setProperty("background-color", "red");
    }
}