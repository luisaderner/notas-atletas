let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   function calculaMedia(notas) {
    notas = notas.sort(function(a, b) {
        return a - b;
    });

    let notasDosAtletas = notas.slice(1, 4);

    let soma = 0;
    notasDosAtletas.forEach(function(nota) {
        soma += nota;
    });

    let media = soma / notasDosAtletas.length;
    return media;
}

function calcularResultados(atletas) {
    atletas.forEach(function(atleta) {
        let nome = atleta.nome;
        let notas = atleta.notas;
        let media = calculaMedia(notas);
        let notasObtidas = notas.join(',');

        console.log(`Atleta: ${nome}`);
        console.log(`Notas Obtidas: ${notasObtidas}`);
        console.log(`Média Válida: ${media}\n`);
    });
}

calcularResultados(atletas);