
// Definição dos dados (JSON)


const catalogo = [
    {
        id: 1,
        titulo: "Inception",
        tipo: "filme",
        ano: 2010,
        generos: ["ficção científica", "ação"],
        nota: 9.2,
        assistido: true
    },
    {
        id: 2,
        titulo: "Breaking Bad",
        tipo: "serie",
        ano: 2008,
        generos: ["drama", "crime"],
        nota: 9.5,
        assistido: true
    },
    {
        id: 3,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        generos: ["ficção", "terror"],
        nota: 8.7,
        assistido: false
    },
    {
        id: 4,
        titulo: "The Matrix",
        tipo: "filme",
        ano: 1999,
        generos: ["ação"],
        nota: 8.9,
        assistido: true
    },
    {
        id: 5,
        titulo: "Interstellar",
        tipo: "filme",
        ano: 2014,
        generos: ["ficção científica", "drama"],
        nota: 9.0,
        assistido: false
    },
    {
        id: 6,
        titulo: "The Office",
        tipo: "serie",
        ano: 2005,
        generos: ["comédia"],
        nota: 8.8,
        assistido: true
    }
];



// Dados


console.log("CATÁLOGO COMPLETO:", catalogo);

// título do primeiro item
console.log("Primeiro título:", catalogo[0].titulo);

// ano do último item
console.log("Ano do último:", catalogo[catalogo.length - 1].ano);

// segundo gênero do terceiro item
if (catalogo[2].generos[1]) {
    console.log("Segundo gênero do terceiro:", catalogo[2].generos[1]);
} else {
    console.log("Esse item não possui segundo gênero.");
}



// Iterators



console.log("\nLista de títulos:");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});



const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("\nTítulos em maiúsculo:", titulosEmCaixaAlta);



const naoAssistidos = catalogo.filter(item => !item.assistido);
console.log(`\nNão assistidos: ${naoAssistidos.length}`);



const topFilme = catalogo.find(item => item.nota >= 9);

if (topFilme) {
    console.log(`\nFilme com nota >= 9: ${topFilme.titulo} (${topFilme.nota})`);
} else {
    console.log("\nNenhum item com nota >= 9");
}




// média geral
const mediaGeral =
    catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

// média assistidos
const assistidos = catalogo.filter(item => item.assistido);

const mediaAssistidos =
    assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log("\nMédia geral:", mediaGeral.toFixed(2));
console.log("Média assistidos:", mediaAssistidos.toFixed(2));



const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length > 0);

console.log("\nExiste item antes de 2000?", temAntigo);
console.log("Todos têm gênero?", todosTemGenero);



// B.4 - Saída na tela (DOM)

const total = catalogo.length;

const filmes = catalogo.filter(item => item.tipo === "filme").length;
const series = catalogo.filter(item => item.tipo === "serie").length;


const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

const output = document.getElementById("output");

output.innerHTML = `
  <h2>Resumo</h2>
  <p>Total de itens: ${total}</p>
  <p>Filmes: ${filmes}</p>
  <p>Séries: ${series}</p>
  <p>Não assistidos: ${naoAssistidos.length}</p>
  <p>Média geral: ${mediaGeral.toFixed(2)}</p>

  <h3>Top 3</h3>
  <ul>
    ${ranking.map(item => `<li>${item.titulo} - ${item.nota}</li>`).join("")}
  </ul>
`;