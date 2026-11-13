# Simulador RAAC · Normativa Aeronáutica 2do Parcial

Aplicación web para practicar las preguntas modelo del 2do parcial de Normativa Aeronáutica (RAAC Partes 39, 43, 65, 91, 119, 121, 135 y 145).

- 67 preguntas multiple choice del 2do parcial.
- Las preguntas salen en orden aleatorio y las opciones a, b y c también se mezclan cada vez.
- Elegís una opción, apretás **Enter** y te dice al instante si es **Correcta** o **Incorrecta** (la buena queda marcada en verde). Con otro **Enter** pasás a la siguiente.
- Al final te muestra la nota, cuántas hiciste bien y mal, y si **aprobaste** (60% o más) o **no aprobaste**.
- Podés practicar de nuevo, repasar solo las que te salieron mal o elegir otra cantidad de preguntas (10, 20, 30, todas o el número que quieras) y filtrar por tema (RAAC 39, 43, 65, 91, 119, 121/135, 145).

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La aplicación (pantallas, estilos y lógica). |
| `preguntas.js` | El banco de preguntas. Si querés corregir o agregar preguntas, se edita solo este archivo. |
| `README.md` | Este texto. |

No necesita instalar nada: es HTML + JavaScript puro, funciona abriendo `index.html` en cualquier navegador.

## Cómo usarla

1. Elegí cuántas preguntas querés (o escribí un número) y qué temas.
2. Tocá **Empezar**.
3. Elegí la respuesta con el mouse/dedo o con el teclado:
   - `1` `2` `3` o `A` `B` `C` eligen la opción.
   - Las flechas `↑` `↓` también se mueven entre opciones.
   - `Enter` responde. `Enter` de nuevo pasa a la siguiente.
4. Al final ves el resultado y la lista de las que fallaste con la respuesta correcta.

En el celular se usa igual, con los botones **Responder** y **Siguiente**.

## Cómo subirla a GitHub y publicarla como página web (GitHub Pages)

### Opción A: desde la página de GitHub (sin instalar nada)

1. Entrá a <https://github.com> e iniciá sesión (si no tenés cuenta, creala gratis).
2. Arriba a la derecha tocá **+** → **New repository**.
3. Ponele un nombre, por ejemplo `simulador-raac`. Dejalo en **Public** (GitHub Pages gratis necesita repositorio público). Tocá **Create repository**.
4. En la página del repositorio nuevo, tocá el link **uploading an existing file**.
5. Arrastrá los tres archivos: `index.html`, `preguntas.js` y `README.md`. Abajo tocá **Commit changes**.
6. Andá a **Settings** (pestaña del repositorio) → en el menú de la izquierda **Pages**.
7. En **Build and deployment** → **Source** elegí **Deploy from a branch**. En **Branch** elegí `main` y la carpeta `/ (root)`. Tocá **Save**.
8. Esperá 1 o 2 minutos y recargá la página de Settings → Pages. Arriba va a aparecer el link de tu sitio, algo así:

   `https://TU-USUARIO.github.io/simulador-raac/`

Ese link lo podés compartir con tus compañeros.

### Opción B: con Git desde la terminal

```bash
git clone https://github.com/TU-USUARIO/simulador-raac.git
cd simulador-raac
# copiá acá index.html, preguntas.js y README.md
git add .
git commit -m "Simulador de preguntas RAAC"
git push
```

Después activá GitHub Pages igual que en los pasos 6 a 8.

### Actualizar el sitio

Cada vez que subas una versión nueva de un archivo (por ejemplo `preguntas.js` corregido), GitHub Pages se actualiza solo en uno o dos minutos. Si no ves el cambio, recargá con `Ctrl + F5` (o `Cmd + Shift + R` en Mac).

## Cómo editar o agregar preguntas

Abrí `preguntas.js` (en GitHub podés tocar el archivo y después el lápiz ✏️ para editarlo en el navegador). Cada pregunta tiene esta forma:

```js
{
  "id": 63,
  "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
  "pregunta": "El tiempo mínimo que se deben guardar los registros de ejecución de tareas es de (Parte 145):",
  "opciones": [
    "Tres años.",
    "Cinco años.",
    "Siete años."
  ],
  "correcta": 1,
  "notas": ["RAAC 145.219(c): ... por lo menos 5 años ..."],
  "estado": "archivo",
  "fijaUltima": false
}
```

- **`opciones`**: los textos de las respuestas, sin la letra (la app pone a, b, c sola después de mezclarlas).
- **`correcta`**: el número de la opción correcta contando desde **0**. O sea: `0` = la primera, `1` = la segunda, `2` = la tercera.
- **`notas`**: aclaraciones que se muestran después de responder (variantes de otros años, artículo de la norma, etc.). Puede quedar vacío: `[]`.
- **`estado`**: `"archivo"` si la respuesta es la del banco, `"corregida"` si se cambió después de verificarla en la norma, `"noconfirmada"` si no se encontró en la norma. Las dos últimas muestran una etiqueta al responder.
- **`fijaUltima`**: ponelo en `true` cuando la última opción depende de las otras ("Ninguna de las anteriores", "Las dos anteriores son correctas"). Así esa opción queda siempre al final y solo se mezclan las otras.
- **`tema`**: el nombre del tema. Las preguntas con el mismo texto de tema se agrupan en el filtro de la pantalla de inicio.

Para agregar una pregunta, copiá un bloque completo `{ ... }`, pegalo antes del `];` final, poné una coma entre bloques y cambiá los datos.

Para cambiar el porcentaje de aprobación, en `index.html` buscá `var APROBACION = 60;` y cambiá el número.

## Respuestas corregidas o no confirmadas

El banco tiene 67 preguntas (RAAC 39, 43, 65, 91, 119, 121/135 y 145). Se compararon las respuestas marcadas en dos fuentes (la página de práctica y el PDF "Banco de Preguntas 2do Parcial") y, donde no coincidían, se verificaron en las RAAC/DNAR publicadas por la ANAC. En la app, al responder, aparece una etiqueta:

- **Corregida según la norma**: el banco marcaba otra respuesta y se cambió.
- **No confirmada en la norma**: no se encontró en la RAAC vigente; se dejó la respuesta del banco.

| Pregunta | Respuesta usada | Fuente |
|---|---|---|
| Lista de chequeo de la inspección anual | Ítems de inspección, firma del que hizo el trabajo y sello del inspector | DNAR 43.15(c) + 43.2(c): "todos los Registros, Formularios, o Listas de control" llevan firma y sello |
| Certificado de Competencia en Tareas Especiales de Mantenimiento | Reparador de Globos Libres Tripulados | RAAC 65 Subparte L (65.201) |
| Operaciones regulares bajo RAAC 121 | Excepto monomotores, cualquier avión, cumpliendo la 121 o la 135 | RAAC 121.159 y 121.9 |
| Estructura Clase I | Construcción compuesta, Partes 22, 23, 27 y/o 31 | RAAC 145.59(a) |
| Ingeniero Aeronáutico (definición) | La del banco (c), **no confirmada** | No figura en las RAAC vigentes |
| "Dirigir" (definición) | La del banco (a), **no confirmada** | No figura en las RAAC vigentes |

Conviene confirmar con la cátedra las dos marcadas como no confirmadas.
