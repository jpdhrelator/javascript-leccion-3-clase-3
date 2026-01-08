console.log("Bienvenido a la premiacion de  desarrolladores de videosjuegos!");

console.log("A continuacion, los videojuegos nominados son:");

// Lista de videojuegos nominados listaA con 5 elementos y listaB con 5 elementos y dos repeticiones entre ambas listas
let listaA = ["The Legend of Zelda", "Super Mario Bros", "Minecraft", "Fortnite", "Overwatch"];
let listaB = ["The Legend of Zelda", "Smash Bros.", "Minecraft", "Call of Duty", "Valorant"];
console.log("\nLista A:", listaA);
console.log("\nLista B:", listaB);

//Lista de videojuegos totales sin repeticiones
let invitadosTotales = [...new Set([...listaA, ...listaB])];
console.log("\nLista de invitados totales (sin repeticiones):", invitadosTotales);

//Lista de videojuegos VIP (intersección)
let listaVip = listaA.filter(videojuego => listaB.includes(videojuego));
console.log("\nTenemos " + listaVip.length + " juegos VIP (intersección):", listaVip);

// Juegos solo del Grupo A
let soloGrupoA = listaA.filter(videojuego => !listaB.includes(videojuego));
console.log("\nJuegos solo del Grupo A:", soloGrupoA);

console.log("\nFase 2 - Mapa del lugar donde los invitados asisten a la premiacion por el desarrollo del juego:");

//Mapa del lugar donde los invitados asisten a la premiacion por el desarrollo del juego
// 3 filas y 3 columnas inicialmente vacio como 0
let mapaTeatro = [
    [
        0, 0, 0
    ],
    [
        0, 0, 0
    ],
    [
        0, 0, 0
    ]
];

console.log("\nMapa inicial del teatro (0 = asiento vacio):");

for (let fila of mapaTeatro) {
    console.log(fila);
    
}
// Se asignan manualmente 4 asientos ocupados (1)
console.log("\nAsignando asientos a los invitados...");

mapaTeatro[0][1] = 1; // Primer fila, segunda columna
mapaTeatro[1][0] = 1; // Segunda fila, primera columna
mapaTeatro[1][2] = 1; // Segunda fila, tercera columna
mapaTeatro[2][1] = 1; // Tercer fila, segunda columna

console.log("\nMapa actualizado del teatro (1 = asiento ocupado):");

for (let fila of mapaTeatro) {
    console.log(fila);
}

// En fila 1 columna 1 se deja el nombre del desarrollador del juego "The Legend of Zelda"
mapaTeatro[0][0] = "Shigeru Miyamoto";

console.log("\n Fase 3 - Analisis del mapa con ciclos anidados:");

console.log("\n Se escanea disponibilidad de asientos:");

for (let i = 0; i < mapaTeatro.length; i++) {
    for (let j = 0; j < mapaTeatro[i].length; j++) {
        if (mapaTeatro[i][j] === 0) {
            console.log(" Asiento disponible en fila " + (i + 1) + ", columna " + (j + 1));
        }else if (mapaTeatro[i][j] === 1) {
            console.log(" Asiento ocupado en fila " + (i + 1) + ", columna " + (j + 1));
        } else {
            console.log(" Asiento en fila " + (i + 1) + ", columna " + (j + 1) + " reservado para el desarrollador: " + mapaTeatro[i][j]);
        }
    }
};

console.log("\n Fase 4 - Perfil del ganador:");

// Se crea un arreglo asociativo (objeto) con informacion del ganador

let ganador = [];
ganador["nombre"] = "Alex Johnson";
ganador["edad"] = 29;
ganador["categoria"] = "Mejor Juego del Año";

console.log("\n Perfil del ganador:");
console.log(" Nombre: " + ganador["nombre"]);
console.log(" Edad: " + ganador["edad"]);
console.log(" Categoria: " + ganador["categoria"]);
