// Banco de preguntas — Normativa Aeronáutica, 2do Parcial (actualizado)
// correcta = índice de la opción correcta en el orden de "opciones" (0 = a, 1 = b, 2 = c).
// estado: "archivo" = respuesta del banco; "corregida" = cambiada tras verificar en la norma;
//         "noconfirmada" = no se encontró en la norma vigente, se deja la del banco.
// fijaUltima: true si la última opción depende de las otras ("Ninguna de las anteriores"), así queda siempre última.
const PREGUNTAS = [
  {
    "id": 1,
    "tema": "RAAC 39 — Directivas de Aeronavegabilidad",
    "pregunta": "Las Directivas de Aeronavegabilidad del país del poseedor del Certificado Tipo son: (RAAC 39)",
    "opciones": [
      "Aplicables mediante la adición de una Carátula emitida por el Departamento de Certificación Aeronáutica.",
      "Aplicables cuando son consideradas de cumplimiento mandatorio por la autoridad de aviación civil del país del poseedor del certificado tipo.",
      "Aplicables si expresamente la Dirección de Aeronavegabilidad lo determina en cada caso particular."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 39.13: Las Directivas de Aeronavegabilidad emitidas por la autoridad de aviación civil del Estado de Diseño (poseedor del Certificado Tipo) resultan de cumplimiento mandatorio en la República Argentina para los productos aeronáuticos matriculados en el país cuando dicha autoridad las considere mandatorias."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 2,
    "tema": "RAAC 39 — Directivas de Aeronavegabilidad",
    "pregunta": "Las Directivas de Aeronavegabilidad emitidas por un país que no es el emisor original del CT resultan (RAAC 39)",
    "opciones": [
      "De aplicación mandatoria en las aeronaves matriculadas en la República Argentina y en los productos y artículos que las equipan.",
      "De aplicación parcialmente mandatoria en las aeronaves matriculadas en la República Argentina y en los productos y artículos que las equipan.",
      "No aplicables en las aeronaves matriculadas en la República Argentina, ni en los productos y artículos que las equipan."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 39: Por regla general de soberanía reglamentaria, las DA emanadas de terceros países que no sean el Estado de diseño del producto no aplican automáticamente a la flota argentina, salvo que la ANAC emita una DA nacional propia que adopte dicha medida."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 3,
    "tema": "RAAC 39 — Directivas de Aeronavegabilidad",
    "pregunta": "¿Un Boletín de Servicio puede ser referenciado en una Directiva de Aeronavegabilidad? (DNAR / RAAC 39)",
    "opciones": [
      "SÍ.",
      "NO.",
      "No, salvo que en ese Boletín de Servicio se encuentre el texto 'Aprobada por la FAA'."
    ],
    "correcta": 0,
    "notas": [
      "Es práctica estándar y reglamentaria que una DA obligatoria haga referencia expresa a un Boletín de Servicio (Service Bulletin - SB) emitido por el fabricante, adoptando sus instrucciones técnicas y plazos de cumplimiento con carácter mandatorio."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 4,
    "tema": "RAAC 39 — Directivas de Aeronavegabilidad",
    "pregunta": "No se puede operar una aeronave a la cual le aplique una Directiva de Aeronavegabilidad salvo que: (RAAC 39)",
    "opciones": [
      "Cumpla con un método alternativo de cumplimiento o con un cambio en el tiempo de cumplimiento aprobado por la Autoridad Aeronáutica.",
      "Cumpla con los requerimientos de dicha Directiva de Aeronavegabilidad.",
      "Las dos anteriores son válidas."
    ],
    "correcta": 2,
    "notas": [
      "RAAC/DNAR 39.3: nadie puede operar un producto al que aplique una DA salvo que cumpla sus requisitos, o un método alternativo de cumplimiento, o un cambio en el tiempo de cumplimiento aprobado por la Autoridad."
    ],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 5,
    "tema": "RAAC 39 — Directivas de Aeronavegabilidad",
    "pregunta": "Todas las Directivas de Aeronavegabilidad emitidas por la ANAC: (RAAC 39)",
    "opciones": [
      "Serán incorporadas automáticamente a la Parte 39, aunque no se encuentren listadas en cada edición de la Parte 39.",
      "Para cobrar vigencia, serán incorporadas una por una a la Parte 39 mediante resolución ministerial.",
      "Cobran vigencia únicamente una vez publicadas en el boletín anual de la organización."
    ],
    "correcta": 0,
    "notas": [
      "RAAC/DNAR 39.13: las DA emitidas por la Autoridad \"serán incorporadas a esta Sección ..., aunque no se encuentren listadas en esta edición\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 6,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "El Fabricante puede: (RAAC / DNAR Parte 43)",
    "opciones": [
      "Aprobar para retornar al servicio cualquier aeronave de acuerdo a un Certificado Tipo en vigencia.",
      "Aprobar para retornar al servicio cualquier aeronave autorizada por la DA de acuerdo a un Certificado Tipo en vigencia.",
      "Aprobar para retornar al servicio cualquier aeronave fabricada por él de acuerdo a un Certificado Tipo en vigencia, siempre que sea titular de un Certificado bajo la Parte 145."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 43.7: El titular de un Certificado Tipo puede aprobar para retorno al servicio cualquier producto fabricado por él bajo dicho CT, cumpliendo con los requisitos de organización y certificación aplicables."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 7,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "En el RAAC / DNAR Parte 43 están fijados los ítems que como mínimo deben realizarse en: (RAAC Parte 43)",
    "opciones": [
      "Una inspección de 100 horas.",
      "Una inspección progresiva.",
      "Una alteración mayor de un ala, superficie de empenaje o fuselaje."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 43, Apéndice D (Alcance y detalle de los ítems a ser incluidos en una inspección de 100 horas y anual): Enumera taxativamente los sistemas, componentes e inspecciones visuales y funcionales mínimas."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 8,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "¿Hay algún sistema que analice performances del avión, que se encuentre consignado en el RAAC / DNAR Parte 43?",
    "opciones": [
      "El sistema anemométrico.",
      "El sistema Pitot.",
      "El sistema altimétrico."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 43, Apéndice E: Regula los ensayos e inspecciones del sistema altimétrico (altímetro barométrico, sistema de presión estática y equipo transpondedor de altitud)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 9,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Realizar la inspección anual es cumplir necesariamente para cualquier aeronave los ítems de: (RAAC Parte 43)",
    "opciones": [
      "Una inspección de 100 horas.",
      "Una inspección de 200 horas.",
      "Ninguna de las anteriores es correcta."
    ],
    "correcta": 2,
    "notas": [
      "Cada modelo de aeronave requiere cumplir las instrucciones específicas de aeronavegabilidad continuada del fabricante (ICA) y su programa de mantenimiento; los ítems del Apéndice D son una base genérica mínima, no un sustituto exclusivo para 'cualquier' aeronave."
    ],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 10,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Si una aeronave no está en condiciones de aeronavegabilidad el Representante Técnico debe: (RAAC / DNAR Parte 43)",
    "opciones": [
      "Inmovilizar la aeronave hasta que se encuentre en condiciones de aeronavegabilidad.",
      "Colocar en los Registros de Mantenimiento dicha condición permitiendo el libre desplazamiento de la aeronave.",
      "Informar mediante el formulario de Dificultades en Servicio exclusivamente."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 43.11: El certificador debe asentar en los registros que la aeronave no está en condiciones de aeronavegabilidad y entregar copia de las discrepancias al propietario. La norma no faculta el secuestro o inmovilización forzosa del bien."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 11,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Personas autorizadas para aprobar el Retorno al Servicio: (PARTE 43)",
    "opciones": [
      "Un Ingeniero Aeronáutico.",
      "Un Mecánico sin habilitación.",
      "El poseedor del Certificado de Taller Aeronáutico."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 43.7: Las personas autorizadas para aprobar el retorno al servicio de aeronaves o componentes son los titulares de talleres aeronáuticos de reparación (TAR/OMA) dentro del alcance de sus habilitaciones y especificaciones de operación."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 12,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "El formulario de Registro de Inspecciones, Reparaciones y Alteraciones, es el: (PARTE 43)",
    "opciones": [
      "DNA 8310.3.",
      "DNA 337.",
      "DNA 103."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 43 Apéndice B: Las reparaciones y alteraciones mayores deben registrarse obligatoriamente en el formulario DNA 337 y remitirse a la ANAC dentro de las 48 horas."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 13,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Una reparación mayor es una de aquellas que: (RAAC Parte 43)",
    "opciones": [
      "Está listada en el Apéndice A de la Parte 43 exclusivamente.",
      "Está listada en el Apéndice A de la Parte 43, e incluye aumento de resistencia, refuerzos, empalmes y la fabricación de miembros estructurales primarios o sus reemplazos, y/o se realiza por medio de remachado y/o soldadura.",
      "Está listada en el Apéndice A de la Parte 43, no se realiza por medio de remachado y/o soldadura, y no incluye aumento de resistencia, refuerzos, empalmes ni la fabricación de miembros estructurales primarios o sus reemplazos."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 43 Apéndice A (Reparaciones Mayores): Incluye aquellas que afectan miembros estructurales principales, requieren refuerzos, empalmes, soldadura estructural o alteran la resistencia y características de vuelo."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 14,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "El DNAR / RAAC Parte 43 trata de: (RAAC Parte 43)",
    "opciones": [
      "Mantenimiento, Mantenimiento Preventivo, Fabricación y Alteración.",
      "Mantenimiento, Mantenimiento Preventivo, Reconstrucción y Alteración.",
      "Mantenimiento, Mantenimiento Preventivo, Alteración y Modificación."
    ],
    "correcta": 1,
    "notas": [
      "Título de la norma: \"Parte 43 – Mantenimiento, Mantenimiento Preventivo, Reconstrucción y Alteraciones\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 15,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Cuando se realiza una inspección anual se debe utilizar una lista de chequeo que debe contener: (PARTE 43)",
    "opciones": [
      "Ítems de inspección.",
      "Ítems de inspección y espacio para la firma del que realizó el trabajo únicamente.",
      "Ítems de inspección, espacio para la firma del que realizó el trabajo y otro para el sello del inspector interviniente."
    ],
    "correcta": 2,
    "notas": [
      "DNAR 43.15(c): la inspección se hace con una lista de control con el alcance de los ítems del Apéndice D. Y la DNAR 43.2(c) exige que \"todos los Registros, Formularios, o Listas de control utilizados\" lleven la firma y sello de quien realizó el trabajo y de quien lo supervisó o inspeccionó. Por eso la lista debe tener ítems, firma del que hizo el trabajo y sello del inspector."
    ],
    "estado": "corregida",
    "fijaUltima": false
  },
  {
    "id": 16,
    "tema": "RAAC 43 — Mantenimiento y Retorno al Servicio",
    "pregunta": "Mantenimiento preventivo significa: (RAAC Parte 43 / RAAC 1)",
    "opciones": [
      "Operaciones de preservación simples o menores y el cambio de partes estándar pequeñas que no significan operaciones de montaje complejas.",
      "Operaciones de modificación de diseño tipo menor realizadas en línea de vuelo.",
      "Cualquier tarea de inspección estructural que no requiera desarme completo del fuselaje."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 1 y RAAC 43 Apéndice A(c): El mantenimiento preventivo está limitado a operaciones sencillas de preservación y reemplazo de pequeñas partes estándar especificadas en el reglamento."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 17,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El especialista en Materiales Compuestos tiene derecho a una: (RAAC Parte 65)",
    "opciones": [
      "Constancia de idoneidad.",
      "Certificado de Competencia.",
      "Certificado de recurrencia."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 65 Subparte F: Se otorga un Certificado de Competencia a especialistas calificados en ensayos no destructivos, materiales compuestos y tareas especiales."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 18,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El poseedor de solamente una Licencia de Mecánico de Mantenimiento de Aeronaves: (RAAC Parte 65)",
    "opciones": [
      "Puede retornar al servicio una aeronave menor de 2000 kg.",
      "No puede retornar al servicio una aeronave menor de 5700 kg.",
      "Puede retornar al servicio una aeronave menor de 5700 kg."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 65: La licencia básica por sí misma no confiere privilegios para retornar al servicio una aeronave; se requiere poseer la correspondiente habilitación de aeronave o habilitación de tipo en vigor."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 19,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El código ATA (definiciones de RAAC Parte 65):",
    "opciones": [
      "Estandariza los Manuales de las Organizaciones de Mantenimiento.",
      "Estandariza el contenido de los Capítulos de Sistemas y Componentes de las Aeronaves.",
      "Estandariza el contenido de los Capítulos de los Manuales de Control de Calidad."
    ],
    "correcta": 1,
    "notas": [
      "El formato ATA 100 / iSpec 2200 es la norma técnica internacional que numera y estandariza los capítulos temáticos de sistemas y componentes en toda la documentación aeronáutica."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 20,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El Técnico Aeronáutico que cumple tareas en la oficina técnica de un TAR y es Representante Técnico del mismo: (RAAC Parte 65)",
    "opciones": [
      "No debe poseer Certificado Psicofisiológico Clase III emitido según la Parte 67.",
      "Debe poseer Certificado Psicofisiológico Clase III emitido según la Parte 67 obligatoriamente.",
      "Debe poseer Certificado Psicofisiológico Clase III con limitaciones emitido según la Parte 67."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 65 y 67: El certificado psicofisiológico Clase III rige para controladores de tránsito aéreo y operadores específicos; los técnicos e ingenieros de oficina técnica o RT no requieren Clase III."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 21,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El Certificado de Competencia de Certificador Aeronáutico: (RAAC Parte 65)",
    "opciones": [
      "Es aplicable al Mecánico de Equipos Radioeléctricos.",
      "Es aplicable al Mecánico de Mantenimiento de Aeronaves.",
      "Es aplicable, entre otros, al Técnico en Aviónica."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 65.191 y 65.193: el Certificador Aeronáutico es para Ingenieros o Técnicos de una organización de mantenimiento; entre los títulos válidos está \"Técnico en Aviónica o Técnico en Telecomunicaciones Aeronáuticas\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 22,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El poseedor de una Licencia de Mecánico de Mantenimiento de Aeronaves tiene: (RAAC 65).",
    "opciones": [
      "La posibilidad de obtener una Habilitación Categoría \"A\" después de un tiempo mínimo de 2 años, Categoría \"B\" después de un tiempo mínimo de 2 años, y Categoría \"C\" después de un tiempo mínimo de 1 año.",
      "La posibilidad de obtener una Habilitación Categoría \"A\" después de un tiempo mínimo de 2 años de ejercicio en la Licencia MMA, Categoría \"B\" después de un tiempo mínimo de 1 año de ejercicio de la Habilitación A, y Categoría \"C\" después de un tiempo mínimo de 2 años de ejercicio de la Habilitación B.",
      "La posibilidad de obtención de Habilitaciones Categoría \"A\" después de un tiempo mínimo de 2 años, Categoría \"B\" después de un tiempo mínimo de 1 año, y Categoría \"C\" después de un tiempo mínimo de 1 año."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 65: Establece la progresión cronológica de experiencia mínima requerida para ascender de Habilitación 'A' hacia 'B' (1 año) y posteriormente hacia 'C' (2 años)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 23,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El Certificado de Competencia en Tareas Especiales de Mantenimiento: (RAAC Parte 65)",
    "opciones": [
      "Es aplicable al Reparador de Globos Libres Tripulados.",
      "Es aplicable al Idóneo en Tareas Aeronáuticas.",
      "Es aplicable al Certificador Aeronáutico."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 65 Subparte L (65.201): el Certificado de Competencia en Tareas Especiales de Mantenimiento comprende Soldaduras, Ensayos No Destructivos, Materiales Compuestos, Estructuras de Planeador/Motoplaneador, Reparador de Globos Libres Tripulados y Reparador de Aeronaves Experimentales. El Idóneo tiene una constancia del Representante Técnico (RAAC 145) y el Certificador Aeronáutico es la Subparte K."
    ],
    "estado": "corregida",
    "fijaUltima": false
  },
  {
    "id": 24,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "Aviónica es: (RAAC Parte 65)",
    "opciones": [
      "Una Licencia independiente.",
      "Un Certificado de Competencia.",
      "Una Habilitación."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 65: Aviónica está categorizada legalmente como una Habilitación técnica para titulares de licencias aeronáuticas compatibles."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 25,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "El RAAC Parte 65 comprende entre otros al otorgamiento de: (RAAC Parte 65)",
    "opciones": [
      "Licencia de Mecánico de Mantenimiento de Aeronaves, Constancia de Idóneo.",
      "Habilitación de Mecánico de Mantenimiento de Aeronaves, Certificado de Competencia.",
      "Licencia de Mecánico de Mantenimiento de Aeronaves, Certificado de Representante Técnico."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 65 regula el régimen formal de Licencias técnicas, sus Habilitaciones y los Certificados de Competencia (la constancia de idóneo la emite el TAR/RT, no la Parte 65 de forma directa)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 26,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "Una persona que posee una Licencia expedida de acuerdo a la PARTE 65 no puede desempeñar sus funciones a menos que en los dos años precedentes haya prestado servicios por al menos 6 meses con: (PARTE 65)",
    "opciones": [
      "Una Licencia de Mecánico Radioeléctrico de Aeronaves.",
      "Una Licencia de Mecánico de Mantenimiento de Aeronaves.",
      "Cualquiera de las dos Licencias citadas anteriormente."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 65.75 (MMA) y 65.185 (MERA): ambas licencias exigen haber trabajado al menos 6 meses dentro de los 24 meses precedentes (o hacer un curso recurrente / evaluación)."
    ],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 27,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "Ingeniero Aeronáutico es: (DNAR / RAAC Parte 65)",
    "opciones": [
      "Toda persona poseedora del diploma de la especialidad, expedido o revalidado por la Universidad Nacional y reconocido por el Ministerio de Cultura y Educación.",
      "Toda persona poseedora del diploma de la especialidad, expedido por la Universidad Nacional y reconocido por el Ministerio de Cultura y Educación.",
      "Toda persona poseedora de título de la especialidad, expedido o revalidado por la Universidad Nacional y reconocido por el Ministerio de Educación y registrado formalmente."
    ],
    "correcta": 2,
    "notas": [
      "No se encontró esta definición en las RAAC vigentes (viene de la DNAR vieja). Se deja la respuesta del banco. Ojo: la opción a) se parece mucho al texto clásico de la DNAR (\"diploma ... expedido o revalidado por Universidad Nacional y reconocido por el Ministerio de Cultura y Educación\"); conviene confirmarla con la cátedra."
    ],
    "estado": "noconfirmada",
    "fijaUltima": false
  },
  {
    "id": 28,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "'Dirigir' en los términos de la normativa técnica aeronáutica representa: (DNAR / RAAC 65)",
    "opciones": [
      "Coordinar para que la realización de una tarea, de acuerdo a datos técnicos, se cumpla sin que signifique la vuelta al servicio del producto al que se le realiza la tarea.",
      "Verificar para que la inspección de la tarea, de acuerdo a datos técnicos, signifique la vuelta al servicio del producto.",
      "Coordinar para que la realización de la tarea, de acuerdo a datos técnicos, realizando la vuelta al servicio del producto al que se le realiza la tarea."
    ],
    "correcta": 0,
    "notas": [
      "No se encontró la definición de \"Dirigir\" en las RAAC vigentes. Se deja la respuesta del banco: dirigir es coordinar la tarea según datos técnicos, sin que eso signifique aprobar el retorno al servicio."
    ],
    "estado": "noconfirmada",
    "fijaUltima": false
  },
  {
    "id": 67,
    "tema": "RAAC 65 — Personal Aeronáutico",
    "pregunta": "La Habilitación en Aviónica se puede obtener solo si se posee: (RAAC Parte 65)",
    "opciones": [
      "Una Licencia de Mecánico Radioeléctrico de Aeronaves (MERA).",
      "Una Licencia de Mecánico de Mantenimiento de Aeronaves (MMA).",
      "Un Certificado de Competencia para Técnico en Aviónica."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 65: La Habilitación en Aviónica se otorga exclusivamente a los titulares de la Licencia de Mecánico Radioeléctrico de Aeronaves (MERA) que cumplan los requisitos de capacitación correspondientes."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 29,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "En la Subparte E de la Parte 91 de las RAAC vigentes, en particular se imponen requisitos especiales para la inspección de los siguientes sistemas y/o instrumentos:",
    "opciones": [
      "TCAS y ACAS.",
      "Altímetro y Transponder.",
      "Pitot y radar de a bordo."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 91.411 y 91.413: Fijan inspecciones y ensayos de calibración obligatorios cada 24 meses calendario para el sistema estático/altímetro y el transpondedor ATC."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 30,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "La Parte 91 de las Regulaciones Argentinas de Aviación Civil está relacionada con: (RAAC 91)",
    "opciones": [
      "Con la operación de aeronaves de gran porte exclusivamente.",
      "Con el mantenimiento general de aeronaves exclusivamente.",
      "Con todas aquellas operaciones que resulten posibles y legales de realizar con las aeronaves y sobre las aeronaves."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 91 abarca tanto las reglas de tránsito, vuelo y operación general como los requisitos de inspección y mantenimiento continuado (Subparte E)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 31,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "El explotador de una aeronave no operada bajo la Parte 121 o 135 debe asegurarse que a la misma se le realice: (RAAC 91)",
    "opciones": [
      "Una Inspección Anual únicamente.",
      "Una Inspección Anual según lo definido en la Parte 43 y una Inspección cada 100 horas.",
      "Una Inspección progresiva obligatoriamente."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 91.409: Requiere la inspección anual obligatoria cada 12 meses calendario para toda aeronave, y adicionalmente una inspección cada 100 horas para las destinadas a instrucción o alquiler comercial."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 32,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "En la Parte 91 de las RAAC vigentes, se establece claramente que el responsable primario por la operación y mantenimiento de la aeronave es:",
    "opciones": [
      "El piloto al mando.",
      "El propietario o explotador.",
      "El Representante Técnico."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 91.403: El propietario o explotador de la aeronave es el responsable primario de mantener la aeronave en condiciones de aeronavegabilidad continua."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 33,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "La Inspección Anual que debe hacerse a las aeronaves siguiendo la PARTE 43 está estipulada en: (PARTE 43)",
    "opciones": [
      "RAAC 121.",
      "RAAC 135.",
      "RAAC 91."
    ],
    "correcta": 2,
    "notas": [
      "El mandato reglamentario general que impone la realización de la inspección anual emana de la RAAC Parte 91 (Sección 91.409)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 34,
    "tema": "RAAC 91 — Reglas de Operación y Mantenimiento",
    "pregunta": "Los Programas de Mantenimiento que se mencionan tanto en las RAAC Parte 91 Sección 91.409 (Aviones grandes), en la Parte 135 Sección 135.411 (a)(2) (Aviones de más de 10 asientos para pasajeros), y en la Parte 121 Sección 121.367,",
    "opciones": [
      "No precisan aprobación de parte de la Autoridad Aeronáutica.",
      "Precisan de la aprobación de la Autoridad Aeronáutica.",
      "Dependiendo del lugar de operación de la aeronave, precisan de la Aprobación de la Autoridad Aeronáutica."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 91.409, RAAC 135.411(a)(2) y RAAC 121.367: Todos los programas de mantenimiento de aeronaves grandes y de transporte comercial regular o no regular requieren aprobación formal y expresa de la Autoridad Aeronáutica (ANAC) en sus especificaciones de operación."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 35,
    "tema": "RAAC 119 — Certificación de Explotadores",
    "pregunta": "Una vez cumplidos los requisitos contenidos en la Parte 119 de las RAAC vigentes, el solicitante:",
    "opciones": [
      "Puede iniciar operaciones de transporte aéreo regular y/o no regular de inmediato.",
      "Debe cumplir con otros requisitos (Partes 121 y/o 135 según corresponda) para poder iniciar operaciones de transporte aéreo regular y/o no regular.",
      "Puede optar por iniciar operaciones de transporte aéreo regular o no regular sin otra certificación."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 119: La Parte 119 otorga el marco de certificación de la empresa, pero las operaciones no pueden iniciarse sin certificar el cumplimiento de los reglamentos de operación específicos (RAAC 121 o RAAC 135)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 36,
    "tema": "RAAC 119 — Certificación de Explotadores",
    "pregunta": "Un Explotador de Servicios Aéreos está habilitado para realizar operaciones de transporte aéreo mediante: (PARTE 119)",
    "opciones": [
      "El Certificado de Aeronavegabilidad de sus aeronaves exclusivamente.",
      "Las Especificaciones de Operación exclusivamente.",
      "El CESA y las Especificaciones de Operación."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 119: El instrumento habilitante es el Certificado de Explotador de Servicios Aéreos (CESA / AOC) conjuntamente con sus Especificaciones de Operación (OpSpecs)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 37,
    "tema": "RAAC 119 — Certificación de Explotadores",
    "pregunta": "La autoridad aeronáutica emite el Certificado de Explotador de Servicios Aéreos y junto con éste, las Especificaciones Relativas a las Operaciones. Las Especificaciones Relativas a las Operaciones contienen: (RAAC Parte 119)",
    "opciones": [
      "Tipo de Aeronave, matrícula, número de serie y configuración de cada aeronave autorizada, aeropuertos regulares o de alternativa, tripulantes (especificando sus funciones), tipos de operaciones autorizadas, autorizaciones y limitaciones de rutas aéreas y límites de tiempo para recorridas generales.",
      "Contienen autorizaciones, condiciones y limitaciones relacionadas con aspectos exclusivamente operacionales sin detalles de mantenimiento.",
      "Contienen autorizaciones, condiciones y limitaciones relacionadas exclusivamente con el mantenimiento de la aeronavegabilidad de las aeronaves del explotador."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 119.33 / OpSpecs: Detallan taxativamente los tipos de aeronaves, matrículas, rutas, aeródromos, autorizaciones especiales y especificaciones de mantenimiento continuo."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 38,
    "tema": "RAAC 119 — Certificación de Explotadores",
    "pregunta": "El Personal directivo requerido para operaciones conducidas según las RAAC 121: (RAAC Parte 119)",
    "opciones": [
      "Es definido por el explotador, pero se encuentra sujeto a la aceptación de la Autoridad Aeronáutica.",
      "Es definido por el explotador y no se encuentra sujeto a la aceptación de la Autoridad Aeronáutica.",
      "Se encuentra definido en las RAAC 119 y se encuentra sujeto a la aceptación de la Autoridad Aeronáutica."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 119.65: La Parte 119 define taxativamente los cargos gerenciales y técnicos obligatorios (Director de Operaciones, Jefe de Pilotos, Director de Mantenimiento, Jefe de Seguridad) y exige su aprobación formal por la ANAC."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 39,
    "tema": "RAAC 119 — Certificación de Explotadores",
    "pregunta": "Las operaciones aéreas regulares nacionales, internacionales y suplementarias: (RAAC Parte 119)",
    "opciones": [
      "Deben ceñirse a la Parte 121, cuando las aeronaves operadas tienen una capacidad de menos de 30 pax y/o menos de 3400 kg de carga paga.",
      "Deben ceñirse a la Parte 121 cuando las aeronaves operadas tienen más de 30 asientos de pax, y/o más de 3400 kg de carga paga.",
      "Deben ceñirse a la Parte 135 cuando las aeronaves operadas tienen menos de 30 asientos de pax y/o menos de 3400 kg de carga paga."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 119: Establece el umbral de capacidad comercial que obliga a certificar y operar bajo RAAC 121 a aquellas aeronaves con más de 30 asientos de pasajeros o más de 3.400 kg de carga paga."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 40,
    "tema": "RAAC 121 / 135 — Operaciones Comerciales",
    "pregunta": "Un Explotador de Servicios Aéreos certificado según la Parte 119 y que opere según la Parte 121 de las RAAC:",
    "opciones": [
      "Solo puede realizar, o hacer que otro realice, el mantenimiento de sus aeronaves en un Taller Aeronáutico de Reparaciones certificado según la Parte 145.",
      "Puede contratar a otro explotador de servicios aéreos -sólo certificado según la Parte 119 y que opere según las Partes 121 y/o 135-, para que éste realice el mantenimiento de sus aeronaves.",
      "Sin estar certificado según la Parte 145 como Taller Aeronáutico de Reparaciones, puede realizar el mantenimiento de sus aeronaves; o bien puede contratar a otro explotador de servicios aéreos -certificado bajo la Parte 119 y que opere según la Parte 121 aeronaves similares a las suyas-, para que éste realice el mantenimiento de sus aeronaves."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 121.367 / Subparte L: La reglamentación autoriza al explotador 121 a realizar el mantenimiento de su propia flota bajo su propio sistema de mantenimiento aprobado, o contratar a otro operador 121 con aeronaves similares."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 41,
    "tema": "RAAC 121 / 135 — Operaciones Comerciales",
    "pregunta": "Las Operaciones Regulares Internas e Internacionales que se realicen en cumplimiento de los requisitos de las RAAC 121, pueden desarrollarse exclusivamente con:",
    "opciones": [
      "Aviones turborreactores; aviones turbohélices y alternativos con una configuración de más de 19 asientos de pasajeros (excluyendo tripulación); o aviones turbohélices y alternativos con un peso máximo certificado de despegue superior a 5 700 kg.",
      "Excepto monomotores, cualquier tipo de avión, siempre y cuando se cumplan los requisitos contenidos en la Parte 121 o en la Parte 135, según corresponda.",
      "Aviones Turbohélices y alternativos que tengan una configuración de 19 asientos de pasajeros o menos y peso de 5 700 kg o menos."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 121.159: \"Ningún explotador podrá operar un avión monomotor bajo esta Parte\". La Parte 121 no fija tipos de avión por asientos o peso; según 121.9, las aeronaves de hasta 30 asientos y 3400 kg de carga paga van por la Parte 135. Por eso: cualquier avión excepto monomotores, cumpliendo la 121 o la 135 según corresponda."
    ],
    "estado": "corregida",
    "fijaUltima": false
  },
  {
    "id": 42,
    "tema": "RAAC 121 / 135 — Operaciones Comerciales",
    "pregunta": "Un Sistema para el Análisis y Vigilancia continuos (CASS) es requerido por las partes 121 y 135 para:",
    "opciones": [
      "Evaluar el cumplimiento y la efectividad de su organización de mantenimiento exclusivamente a nivel presupuestario.",
      "Evaluar el cumplimiento y la efectividad de su Programa de Inspección y de Mantenimiento.",
      "Evaluar el cumplimiento y la efectividad de los procedimientos de mantenimiento en tierra."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 121.373: El CASS (Continuous Analysis and Surveillance System) tiene por objeto auditar y evaluar de manera continua la efectividad y el cumplimiento del programa de inspección y mantenimiento."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 43,
    "tema": "RAAC 121 / 135 — Operaciones Comerciales",
    "pregunta": "De modo integral, el Manual General de Mantenimiento (MGM) del Explotador Aerocomercial aceptado por la autoridad aeronáutica, es el documento que contiene: (RAAC 121 y 135)",
    "opciones": [
      "Los procedimientos del Explotador Aerocomercial para realizar mantenimiento de las aeronaves que conforman su flota.",
      "Las políticas y procedimientos del Explotador Aerocomercial relacionadas con las operaciones de mantenimiento.",
      "Los acuerdos de mantenimiento que el Explotador Aerocomercial mantiene con los Talleres Aeronáuticos de Reparación."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 121.369: El MGM establece formalmente la estructura de control, deberes y responsabilidades, y todas las políticas y procedimientos aplicables a las operaciones de mantenimiento de la empresa."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 44,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "¿Está definido taxativamente la cantidad de empleados de un TAR? (RAAC Parte 145)",
    "opciones": [
      "No.",
      "Sí.",
      "Sí, en el caso de TAR con limitaciones."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.151: La reglamentación no impone un número fijo de personal; exige disponer de personal suficiente y calificado para planificar, ejecutar y certificar las tareas dentro de su alcance."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 45,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Idóneo en Tareas Aeronáuticas: (RAAC Parte 145)",
    "opciones": [
      "Tiene un Certificado emitido por la Autoridad Aeronáutica.",
      "Tiene una Constancia emitida por la Autoridad Aeronáutica.",
      "Tiene una Constancia emitida por el Representante Técnico del TAR."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145, Apéndice C: \"Las Constancias de Idóneo en Tareas Aeronáuticas serán otorgadas por el Representante Técnico\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 46,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Taller Aeronáutico de Reparación puede contratar el mantenimiento a una persona NO certificada. (DNAR 145)",
    "opciones": [
      "Sí, para algunas funciones de trabajo y acepta el control de calidad de dicha persona",
      "No",
      "Sí, para algunas funciones de trabajo y siempre que extiende su control de calidad sobre el contratado."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.217(b): el TAR puede contratar una función de mantenimiento a una persona no certificada si la Autoridad acepta esa función y el TAR extiende su control de calidad sobre esa persona y verifica el trabajo antes del retorno al servicio."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 47,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Categoría de Planta de Poder Clase II es: (RAAC Parte 145)",
    "opciones": [
      "Motores a turbinas de más de 400 HP.",
      "Motores alternativos de más de 400 HP.",
      "Motores alternativos de más de 600 HP."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145.59(b): Clase I = motores alternativos de 400 HP o menos; Clase II = motores alternativos de más de 400 HP; Clase III = motores a turbina."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 48,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El personal de un Taller de Reparaciones Satélite: (RAAC Parte 145)",
    "opciones": [
      "No está permitido compartir su actividad con el Taller Aeronáutico de Reparaciones principal.",
      "Puede compartir su actividad con el Taller Aeronáutico de Reparaciones principal.",
      "Puede compartir su actividad con el Taller Aeronáutico de Reparaciones principal incluyendo al personal de inspección final."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145: El taller satélite depende del taller principal; el personal técnico puede compartir actividades conforme al manual de procedimientos de la organización."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 49,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "La calibración del equipo de inspección: (PARTE 145)",
    "opciones": [
      "Debe ser trazable a Patrones Nacionales.",
      "Debe ser realizada a intervalos regulares.",
      "Las dos respuestas anteriores son correctas."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.109: Los instrumentos de medición y equipos de prueba deben calibrarse periódicamente con trazabilidad formal a patrones nacionales o internacionales reconocidos."
    ],
    "estado": "archivo",
    "fijaUltima": true
  },
  {
    "id": 50,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "En un Taller Aeronáutico Extranjero de Reparaciones el responsable para la supervisión o la inspección final de un trabajo en aeronave con matrícula argentina (PARTE 145)",
    "opciones": [
      "Se le acepta el idioma local.",
      "No se hace exigencia de idioma.",
      "Se le exige comprender e interpretar el idioma en el cual se encuentran escritos los procedimientos."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145: El personal certificador en talleres del exterior que intervengan sobre aeronaves de matrícula LV/LQ debe dominar el idioma en el que están redactados los manuales y registros aplicables."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 51,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Categoría de Estructura de Aeronaves Clase I es: (RAAC Parte 145)",
    "opciones": [
      "Aeronaves de construcción compuesta certificadas bajo la Parte 25 y/o 29.",
      "Aeronaves de construcción íntegramente metálica certificadas bajo la Parte 22, 23, 27 y/o 31.",
      "Aeronaves de construcción compuesta certificadas bajo la Parte 22, 23, 27 y/o 31."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.59(a): Clase I = aeronaves de construcción compuesta certificadas según las Partes 22, 23, 27 y/o 31. Clase II = compuesta, Partes 25 y/o 29. Clase III = íntegramente metálica, Partes 22, 23 y/o 27. Clase IV = íntegramente metálica, Partes 25 y/o 29."
    ],
    "estado": "corregida",
    "fijaUltima": false
  },
  {
    "id": 52,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Supervisor de un TAR: (PARTE 145)",
    "opciones": [
      "Tiene dependencia de la Gerencia de Control de Calidad.",
      "Tiene dependencia de Oficina Técnica.",
      "Tiene dependencia de la Gerencia de Mantenimiento."
    ],
    "correcta": 2,
    "notas": [
      "El supervisor de producción responde funcionalmente a la jefatura de mantenimiento/hangar, garantizando la separación de funciones con respecto al área de aseguramiento de calidad."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 53,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Con que plazo máximo se debe informar a la DA de una falla, malfuncionamiento y defectos (PARTE 145)",
    "opciones": [
      "24 hs",
      "72 hs",
      "96 hs"
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.221: El titular del TAR debe reportar formalmente a la autoridad cualquier falla o defecto no aeronavegable dentro de un plazo máximo de 96 horas de detectado."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 54,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "La Categoría que se otorga a un Taller de Reparaciones Aeronáuticas que se dedica exclusivamente a procedimientos e inspección de ensayos no destructivos se define como: (PARTE 145)",
    "opciones": [
      "Especial.",
      "Restringida.",
      "Limitada."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.61: Las organizaciones que prestan servicios técnicos auxiliares específicos (END, tratamientos superficiales, soldadura) reciben una Habilitación Limitada."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 55,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Representante Técnico de un TAR debe: (PARTE 145)",
    "opciones": [
      "Comunicar por escrito la asunción de la función de Representante Técnico al Taller Aeronáutico de Reparación solamente.",
      "Comunicar por escrito la asunción de la función de Representante Técnico a la Autoridad Aeronáutica.",
      "Comunicar por escrito la asunción de la función de Representante Técnico al Consejo Profesional."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145: La designación formal y asunción del RT debe ser notificada fehacientemente por escrito a la ANAC para su aprobación y registro oficial."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 56,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Se deberán mantener actualizados los Registros de personal de: (PARTE 145)",
    "opciones": [
      "Conducción, Supervisión, Inspección.",
      "Inspección, Mecánicos.",
      "Inspección, Conducción, Supervisión, Mecánicos."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.161: El taller debe mantener al día el listado con nombres, licencias, habilitaciones y alcance de autorización de todo su personal de mando, control y ejecución."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 57,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un Taller de Reparación Satélite: (RAAC Parte 145)",
    "opciones": [
      "Debe tener Habilitación formal de la ANAC.",
      "No necesita Habilitación.",
      "Utiliza la Habilitación del Taller de Reparación contratante sin trámite propio."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.107: Cada instalación satélite debe ser auditada, aprobada e incluida taxativamente en las especificaciones de operación del taller habilitado."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 58,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El programa de Entrenamiento del personal del TAR incluye según la normativa al Representante Técnico en la recepción de los mismos: (RAAC Parte 145)",
    "opciones": [
      "No lo incluye taxativamente.",
      "Sí lo incluye taxativamente para funciones de mantenimiento técnico.",
      "Sí lo incluye taxativamente para temas de Factores Humanos."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.163: La capacitación recurrente en Factores Humanos es mandatoria para todo el personal de la organización técnica, incluyendo los mandos directivos y Representantes Técnicos."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 59,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un Taller Aeronáutico de Reparación que obtenga su Certificado: (PARTE 145)",
    "opciones": [
      "Deberá tener un Manual de Procedimientos y un Manual del TAR.",
      "Deberá tener un Manual de Procedimientos y un Manual de Control de Calidad.",
      "Deberá tener un Manual de Control de Calidad y un Manual del TAR."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145: Es requisito disponer del Manual de la Organización de Mantenimiento (MOM) y del Manual de Control y Aseguramiento de Calidad aprobados."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 60,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Si el Titular de un Certificado de Habilitación de un Centro de Mantenimiento realiza algún cambio de ubicación física del mismo: (PARTE 145)",
    "opciones": [
      "Podrá realizarlo sin aprobación previa de la Autoridad Aeronáutica.",
      "Podrá realizarlo sin aprobación previa de la Autoridad Aeronáutica, si existe una petición formal previa del Titular del Certificado.",
      "Deberá ser aprobado previamente por la Autoridad Aeronáutica."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.105: Ningún taller puede operar en una nueva ubicación edilicia sin la previa inspección y aprobación formal de la ANAC."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 61,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Un Taller Aeronáutico de Reparaciones habilitado debe poseer: (PARTE 145)",
    "opciones": [
      "Edificios, registros, clientes, documentos de aviación.",
      "Edificios, instalaciones, equipos, materiales, personal y documentación técnica, conforme lo requiere la Parte 145.",
      "Experiencia en el rubro, solvencia económica, recursos financieros."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145 Subparte C (Requisitos de instalaciones y equipamiento): El TAR debe disponer de los edificios, instalaciones, equipos, herramientas, materiales, personal calificado y datos técnicos necesarios para ejecutar los trabajos conforme a su habilitación."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 62,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Taller Aeronáutico de Reparaciones que realiza mantenimiento sobre aeronaves de Explotadores Aéreos que operan bajo las RAAC 121 y 135, debe tener un SMS que sirva para: (RAAC Parte 145)",
    "opciones": [
      "Identificar los peligros, corregirlos y neutralizarlos exclusivamente a nivel presupuestario.",
      "Identificar los peligros sin evaluar sus consecuencias para reducir costos operativos.",
      "Identificar los peligros y evaluar sus consecuencias; asegurar que se apliquen correcciones necesarias para mantener un nivel aceptable de seguridad; desarrollar una vigilancia permanente y una evaluación periódica del nivel de seguridad logrado; y tener como meta mejorar el nivel global de seguridad en forma continua."
    ],
    "correcta": 2,
    "notas": [
      "RAAC 145.223: El SMS (Safety Management System) exige gestión proactiva de riesgos, auditorías continuas y mejora sistemática de la seguridad operacional."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 63,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El tiempo mínimo que se deben guardar los registros de ejecución de tareas de mantenimiento es de: (PARTE 145)",
    "opciones": [
      "Cinco años.",
      "Dos años.",
      "Siete años."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.219(c): el TAR \"debe conservar los registros requeridos por esta Sección por lo menos 5 años\" desde que el artículo fue retornado al servicio."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 64,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Certificado de Taller Aeronáutico Nacional: (PARTE 145)",
    "opciones": [
      "Tiene vigencia hasta la fecha de su vencimiento.",
      "Tiene vigencia por cuatro años.",
      "Tiene vigencia por un año."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.55(a): los certificados de TAR nacionales \"tienen vigencia desde la fecha en que fueron emitidos hasta la fecha que determine la Autoridad Aeronáutica\"."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 65,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "El Certificado de Taller Aeronáutico Extranjero: (PARTE 145)",
    "opciones": [
      "No tiene vencimiento.",
      "Vence a los 12 meses.",
      "Vence a los 24 meses."
    ],
    "correcta": 1,
    "notas": [
      "RAAC 145.55(b): los certificados de taller extranjero \"vencen a los 12 meses, a partir de su fecha de emisión\" (la renovación puede ser por 24 meses)."
    ],
    "estado": "archivo",
    "fijaUltima": false
  },
  {
    "id": 66,
    "tema": "RAAC 145 — Talleres Aeronáuticos de Reparación (TAR)",
    "pregunta": "Dentro de los privilegios de un Taller Aeronáutico de Reparaciones se encuentra la de: (PARTE 145)",
    "opciones": [
      "Aprobar el retorno al servicio de un avión después de realizar mantenimiento, mantenimiento preventivo y/o alteraciones.",
      "Aprobar el retorno al servicio de un avión después de realizar una reparación mayor, y sin otra intervención.",
      "Ninguna de las anteriores."
    ],
    "correcta": 0,
    "notas": [
      "RAAC 145.201 (Privilegios y limitaciones): Un Taller Aeronáutico de Reparaciones habilitado puede realizar mantenimiento, mantenimiento preventivo y alteraciones sobre cualquier aeronave o artículo para el que esté habilitado, y aprobar su correspondiente retorno al servicio."
    ],
    "estado": "archivo",
    "fijaUltima": true
  }
];
