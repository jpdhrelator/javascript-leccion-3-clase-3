// EVENTO: "REGRESO A DRANGLEIC"

// --- FASE 1: GESTIÓN DE INVITADOS  ---

let jugadoresPve = [
  "Solaire",
  "Patches",
  "Benhart",
  "Turk",
  "Anri",
  "Lucatiel",
  "Bufon Thomas",
  "Mildred",
];
let jugadoresPvp = [
  "Alva",
  "Aslatiel",
  "Forlorn",
  "Usurpadora",
  "Bufon Thomas",
  "Havel",
  "Mildred",
  "Solitario",
];

// Combinamos ambas listas y usamos 'Set' para eliminar duplicados
let jugadoresTotal = new Set([...jugadoresPve, ...jugadoresPvp]);
let unionJugadores = [...jugadoresTotal];

console.log(
  "------------------------------------ Evento vuelta a Drangleic --------------------------------------"
);
console.log("Jugadores PVE:", jugadoresPve);
console.log("Jugadores PVP:", jugadoresPvp);
console.log("Jugadores Totales Participando: ", unionJugadores);
console.log(
  "--------------------------------------------------------------------------"
);

// Filtramos los elementos que están presentes en AMBOS arreglos (jugadoresPve y jugadoresPvp)
let jugadoresNeutral = jugadoresPve.filter((x) => jugadoresPvp.includes(x));
console.log("Jugadores Neutrales: ", jugadoresNeutral);
console.log(
  "--------------------------------------------------------------------------"
);

// Filtramos los elementos que estan en jugadoresPve y NO  en jugadoresPvp
let soloJugadoresPve = [
  ...jugadoresPve.filter((x) => !jugadoresPvp.includes(x)),
];
console.log("Jugadores exclusivos PVE: ", soloJugadoresPve);

// --- FASE 2: EL MAPA DEL LUGAR  ---

// Arreglo bidimensional de 3x3 inicializado en 0 (Vacío)
let mapa = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Asignación por Coordenadas: Acceso manual a posiciones específicas [fila][columna]
mapa[0][1] = 1;
mapa[0][2] = 1;
mapa[2][0] = 1;
mapa[2][1] = 1;

// Zona Reservada: Asignación de un valor String (jugadorNeutral) en una celda de la matriz
mapa[1][1] = jugadoresNeutral[0];

console.log(
  "--------------------------------------- MAPA DEL EVENTO --------------------------------------- "
);
console.table(mapa);

// --- FASE 3: ANÁLISIS DEL MAPA  ---

let lugarVacio = 0;

// Recorrido de Matriz el ciclo externo recorre las filas (i) y el interno las columnas (j)
for (let i = 0; i < mapa.length; i++) {
  for (let j = 0; j < mapa[i].length; j++) {
    // Condicional para verificar disponibilidad
    if (mapa[i][j] === 0) {
      lugarVacio++;
    }
  }
}

console.log(`Quedan ${lugarVacio} lugares disponibles en el mapa`);

// --- FASE 4: PERFIL DEL GANADOR  ---

// Estructura de OBJETO: Almacena datos mediante pares Clave: Valor
let jugadorDestacado = {
  nombre: jugadoresPve[0],
  edad: 30,
  categoria: "Honorable",
};

// Uso de Template Literals para extraer datos del objeto
console.log(
  `Jugador destacado: ${jugadorDestacado.nombre} de ${jugadorDestacado.edad} años de edad en la categoria ${jugadorDestacado.categoria}`
);
console.log("Felicitaciones! Praise the sun ☀️");