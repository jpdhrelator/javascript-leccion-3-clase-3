# 🗺️ Desafío Práctico: El Arquitecto de Eventos

**Álgebra de Arreglos y Matrices**
**Tecnología:** JavaScript (Consola)

## 🎯 Misión

Te han contratado para diseñar la lógica de software para un gran evento. Tu trabajo consiste en gestionar las listas de invitados (usando álgebra de conjuntos) y organizar la distribución del salón (usando matrices).

¡Tú decides el tema! Puede ser un torneo de *eSports*, una gala de premios, una boda real o una conferencia de tecnología.

## 📝 Instrucciones

### 1. Definición del Escenario

Antes de codificar, escribe un comentario al inicio de tu archivo indicando qué tipo de evento estás organizando. Esto dará sentido a los datos que vas a crear.

---

### 🔹 Fase 1: Gestión de Invitados (Álgebra de Arreglos)

Tienes dos fuentes de invitados diferentes. Necesitas procesarlas para tener la lista definitiva.

1. **Listas Iniciales:**
Crea dos arreglos diferentes (`listaA` y `listaB`).
* Llénalos con nombres (Strings). Asegúrate de que **algunos nombres se repitan** en ambas listas y que otros sean únicos.
* *Ejemplo:* Si es un torneo, `listaA` pueden ser "Jugadores Locales" y `listaB` "Jugadores Online".


2. **La Lista Maestra (Unión):**
Necesitas una lista completa de todas las personas que podrían asistir.
* Genera un nuevo arreglo llamado `invitadosTotales` que contenga la **unión** de ambas listas.
* **Requisito:** No puede haber nombres duplicados en esta lista final.


3. **Los VIPs (Intersección):**
Las personas que aparecen en *ambas* listas iniciales son consideradas VIPs.
* Genera un nuevo arreglo llamado `listaVIP` aplicando la lógica de **intersección**.
* Muestra en consola: *"Tenemos [X] invitados VIP"*.


4. **Los Exclusivos (Diferencia):**
Queremos saber quiénes son exclusivos de la `listaA` (que no están en la `listaB`).
* Genera un arreglo `soloGrupoA` aplicando la lógica de **diferencia**.



---

### 🔹 Fase 2: El Mapa del Lugar (Matrices)

Ahora debes distribuir a la gente en el lugar del evento. Para esto usarás una matriz (un arreglo de arreglos) que represente un mapa de asientos o zonas.

5. **Creación del Mapa:**
Crea una matriz de dimensiones **3x3** (3 filas y 3 columnas).
* Inicialízala con el valor `0` (que representa "Asiento Vacío") en todas las posiciones.


6. **Asignación de Lugares:**
El evento ha comenzado a llenarse.
* Asigna manualmente el valor `1` (que representa "Ocupado") en al menos **4 posiciones diferentes** de tu matriz. Hazlo accediendo por sus índices (fila y columna).


7. **La Zona Reservada:**
Elige una posición específica (por ejemplo, la fila 1, columna 1) y coloca el nombre de uno de tus invitados VIP en lugar de un número.

---

### 🔹 Fase 3: Análisis del Mapa (Ciclos Anidados)

Necesitas un reporte del estado de tu salón.

8. **Escaneo de Disponibilidad:**
Utiliza **dos ciclos anidados** (uno dentro de otro) para recorrer toda tu matriz.
* Cuenta cuántos asientos siguen vacíos (cuántos ceros `0` quedan).
* Al finalizar los ciclos, imprime un mensaje: *"Quedan [X] asientos disponibles en el evento"*.



---

### 🔹 Fase 4: Perfil del Ganador (Arreglos Asociativos)

9. **Ficha Técnica:**
Crea un arreglo que funcione como estructura asociativa (o un objeto, según tu preferencia) para guardar los datos del "Invitado de Honor".
* Debe tener claves (índices de texto) para: `"Nombre"`, `"Edad"` y `"Categoría"`.
* Asigna valores a estas claves.
* Imprime en consola una frase que use estos datos, por ejemplo: *"El premio es para [Nombre], de la categoría [Categoría]"*.



---

### 🏁 Entrega

Tu código debe ejecutar todas las fases en orden y mostrar los resultados en la consola de forma clara. Asegúrate de usar comentarios para explicar qué lógica de conjuntos (Unión, Intersección, Diferencia) estás aplicando en cada paso.

---

