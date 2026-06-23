const WORD_FAMILY_DATABASE = {
  quickRules: [
    "Despues de be, seem, look, become o feel normalmente va adjective.",
    "Despues de a, an, the, my, his o their normalmente va noun.",
    "Despues de very, really o extremely normalmente va adjective.",
    "Despues de un verbo normalmente puede ir adverb.",
    "Despues de can, should, must o may va verb.",
    "Despues de to va verb.",
    "Antes de un noun normalmente va adjective."
  ],
  essentials: [
    {
      title: "Primero categoria, luego sufijo",
      detail: "En los ejercicios del Britanico, el error mas comun es formar una palabra que existe pero no encaja. Decide si falta noun, verb, adjective o adverb antes de transformar."
    },
    {
      title: "Cuidado con los negativos",
      detail: "Palabras como responsible, possible, legal y patient suelen aparecer con contexto negativo: irresponsible, impossible, illegal, impatient."
    },
    {
      title: "Adjective vs adverb",
      detail: "Very + adjective: very careful. Verbo + adverb: work carefully. Be + adjective: is careful."
    },
    {
      title: "Personas y cosas",
      detail: "Bored/tired/excited/amazed describen como se siente una persona. Boring/tiring/exciting/amazing describen la cosa que causa la sensacion."
    },
    {
      title: "Sustantivos frecuentes",
      detail: "Decision, communication, education, development, performance, preference y responsibility aparecen mucho despues de the, a/an o preposiciones."
    },
    {
      title: "Spelling que cuesta puntos",
      detail: "Success -> successful, beauty -> beautiful, possible -> possibly, economy -> economic/economical, history -> historical."
    }
  ],
  families: [
    {
      base: "prefer",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "prefer", translation: "preferir" }],
        noun: [{ word: "preference", translation: "preferencia" }],
        adjective: [
          { word: "preferable", translation: "preferible", frequency: 5 },
          { word: "preferred", translation: "preferido", frequency: 2 }
        ],
        adverb: [{ word: "preferably", translation: "preferiblemente" }]
      },
      commonMistakes: ["preferred = preferido; preferable = preferible"],
      examExamples: [{ sentence: "They realized it was ____ to have a parent who cared.", answer: "preferable", explanation: "Despues de 'was' necesitamos un adjetivo. 'Preferable' significa preferible." }]
    },
    {
      base: "criticize",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [{ word: "criticize", translation: "criticar" }],
        noun: [{ word: "criticism", translation: "critica" }, { word: "critic", translation: "critico" }],
        adjective: [{ word: "critical", translation: "critico", frequency: 5 }],
        adverb: [{ word: "critically", translation: "criticamente" }]
      },
      commonMistakes: ["criticism es la accion/opinion; critic es la persona"],
      examExamples: [{ sentence: "The teacher spoke ____ about the weak ending.", answer: "critically", explanation: "La palabra modifica el verbo 'spoke', por eso va adverbio." }]
    },
    {
      base: "sympathy",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [{ word: "sympathize", translation: "simpatizar / compadecerse" }],
        noun: [{ word: "sympathy", translation: "simpatia / compasion" }],
        adjective: [{ word: "sympathetic", translation: "comprensivo / solidario", frequency: 5 }],
        adverb: [{ word: "sympathetically", translation: "con comprension" }]
      },
      commonMistakes: ["sympathetic no siempre significa simpatico; muchas veces significa comprensivo"],
      examExamples: [{ sentence: "My boss was very ____ when I explained the problem.", answer: "sympathetic", explanation: "Despues de 'was very' necesitamos un adjetivo." }]
    },
    {
      base: "enthusiasm",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [],
        noun: [{ word: "enthusiasm", translation: "entusiasmo" }, { word: "enthusiast", translation: "entusiasta" }],
        adjective: [{ word: "enthusiastic", translation: "entusiasta", frequency: 5 }],
        adverb: [{ word: "enthusiastically", translation: "con entusiasmo" }]
      },
      commonMistakes: ["enthusiastic lleva -astic; enthusiast es la persona"],
      examExamples: [{ sentence: "The students reacted ____ to the new project.", answer: "enthusiastically", explanation: "Modifica el verbo 'reacted', asi que falta un adverbio." }]
    },
    {
      base: "create",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "create", translation: "crear" }],
        noun: [{ word: "creation", translation: "creacion" }, { word: "creativity", translation: "creatividad" }, { word: "creator", translation: "creador" }],
        adjective: [{ word: "creative", translation: "creativo", frequency: 5 }],
        adverb: [{ word: "creatively", translation: "creativamente" }]
      },
      commonMistakes: ["creator es persona; creativity es cualidad"],
      examExamples: [{ sentence: "Children need activities that develop their ____.", answer: "creativity", explanation: "Despues de 'their' falta un sustantivo." }]
    },
    {
      base: "decide",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "decide", translation: "decidir" }],
        noun: [{ word: "decision", translation: "decision" }, { word: "indecision", translation: "indecision" }],
        adjective: [{ word: "decisive", translation: "decisivo", frequency: 4 }, { word: "indecisive", translation: "indeciso", frequency: 4 }],
        adverb: [{ word: "decisively", translation: "decisivamente" }]
      },
      commonMistakes: ["decision, no decidement"],
      examExamples: [{ sentence: "Managers must make quick ____ under pressure.", answer: "decisions", explanation: "Despues de 'quick' falta un sustantivo plural." }]
    },
    {
      base: "communicate",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "communicate", translation: "comunicar" }],
        noun: [{ word: "communication", translation: "comunicacion" }, { word: "communicator", translation: "comunicador" }],
        adjective: [{ word: "communicative", translation: "comunicativo", frequency: 3 }],
        adverb: [{ word: "communicatively", translation: "comunicativamente" }]
      },
      commonMistakes: ["communication es mucho mas frecuente que communicative"],
      examExamples: [{ sentence: "Good ____ is essential in a team.", answer: "communication", explanation: "Despues de un adjetivo falta un sustantivo." }]
    },
    {
      base: "succeed",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "succeed", translation: "tener exito" }],
        noun: [{ word: "success", translation: "exito" }],
        adjective: [{ word: "successful", translation: "exitoso", frequency: 5 }, { word: "unsuccessful", translation: "sin exito", frequency: 5 }],
        adverb: [{ word: "successfully", translation: "exitosamente" }, { word: "unsuccessfully", translation: "sin exito" }]
      },
      commonMistakes: ["successful lleva una sola l al final"],
      examExamples: [{ sentence: "Although she trained hard, her attempt was ____.", answer: "unsuccessful", explanation: "Despues de 'was' falta adjetivo y 'Although' marca contraste negativo." }]
    },
    {
      base: "educate",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "educate", translation: "educar" }],
        noun: [{ word: "education", translation: "educacion" }, { word: "educator", translation: "educador" }],
        adjective: [{ word: "educational", translation: "educativo", frequency: 5 }, { word: "educated", translation: "educado / instruido", frequency: 3 }],
        adverb: [{ word: "educationally", translation: "educativamente" }]
      },
      commonMistakes: ["educated describe a una persona instruida; educational describe algo relacionado con educacion"],
      examExamples: [{ sentence: "The trip was both fun and ____.", answer: "educational", explanation: "Despues de 'was' falta un adjetivo coordinado con 'fun'." }]
    },
    {
      base: "employ",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "employ", translation: "emplear" }],
        noun: [{ word: "employment", translation: "empleo" }, { word: "employer", translation: "empleador" }, { word: "employee", translation: "empleado" }, { word: "unemployment", translation: "desempleo" }],
        adjective: [{ word: "employed", translation: "empleado", frequency: 4 }, { word: "unemployed", translation: "desempleado", frequency: 5 }],
        adverb: []
      },
      commonMistakes: ["employer da trabajo; employee recibe el trabajo"],
      examExamples: [{ sentence: "Many people became ____ during the economic crisis.", answer: "unemployed", explanation: "Despues de 'became' falta adjetivo y el contexto es negativo." }]
    },
    {
      base: "develop",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "develop", translation: "desarrollar" }],
        noun: [{ word: "development", translation: "desarrollo" }, { word: "developer", translation: "desarrollador" }],
        adjective: [{ word: "developed", translation: "desarrollado", frequency: 4 }, { word: "developing", translation: "en desarrollo", frequency: 4 }],
        adverb: []
      },
      commonMistakes: ["development, no developation"],
      examExamples: [{ sentence: "The ____ of new skills takes time.", answer: "development", explanation: "Despues de 'The' y antes de 'of' falta sustantivo." }]
    },
    {
      base: "perform",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [{ word: "perform", translation: "realizar / actuar" }],
        noun: [{ word: "performance", translation: "rendimiento / actuacion" }, { word: "performer", translation: "artista / ejecutante" }],
        adjective: [{ word: "performing", translation: "escenico / de actuacion", frequency: 2 }],
        adverb: []
      },
      commonMistakes: ["performance puede ser rendimiento o actuacion segun contexto"],
      examExamples: [{ sentence: "Her ____ in the final exam was excellent.", answer: "performance", explanation: "Despues de 'Her' falta sustantivo." }]
    },
    {
      base: "appear",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "appear", translation: "aparecer" }, { word: "disappear", translation: "desaparecer" }],
        noun: [{ word: "appearance", translation: "apariencia / aparicion" }, { word: "disappearance", translation: "desaparicion" }],
        adjective: [{ word: "apparent", translation: "aparente", frequency: 3 }],
        adverb: [{ word: "apparently", translation: "aparentemente" }]
      },
      commonMistakes: ["appearance termina en -ance; disappear tiene una s y dos p"],
      examExamples: [{ sentence: "The sudden ____ of the lights frightened everyone.", answer: "disappearance", explanation: "Despues de 'the sudden' falta sustantivo y el contexto indica que se fueron las luces." }]
    },
    {
      base: "responsible",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [],
        noun: [{ word: "responsibility", translation: "responsabilidad" }, { word: "irresponsibility", translation: "irresponsabilidad" }],
        adjective: [{ word: "responsible", translation: "responsable", frequency: 5 }, { word: "irresponsible", translation: "irresponsable", frequency: 5 }],
        adverb: [{ word: "responsibly", translation: "responsablemente" }, { word: "irresponsibly", translation: "irresponsablemente" }]
      },
      commonMistakes: ["negative prefix ir- porque responsible empieza con r"],
      examExamples: [{ sentence: "It was ____ of him to leave the door unlocked.", answer: "irresponsible", explanation: "Despues de 'was' falta adjetivo y la accion es negativa." }]
    },
    {
      base: "possible",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [],
        noun: [{ word: "possibility", translation: "posibilidad" }, { word: "impossibility", translation: "imposibilidad" }],
        adjective: [{ word: "possible", translation: "posible", frequency: 5 }, { word: "impossible", translation: "imposible", frequency: 5 }],
        adverb: [{ word: "possibly", translation: "posiblemente" }, { word: "impossibly", translation: "imposiblemente" }]
      },
      commonMistakes: ["possible -> possibly; no possiblely"],
      examExamples: [{ sentence: "It is ____ to finish all this work in five minutes.", answer: "impossible", explanation: "Despues de 'is' falta adjetivo; cinco minutos no alcanzan." }]
    },
    {
      base: "legal",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "legalize", translation: "legalizar" }],
        noun: [{ word: "law", translation: "ley" }, { word: "legality", translation: "legalidad" }],
        adjective: [{ word: "legal", translation: "legal", frequency: 5 }, { word: "illegal", translation: "ilegal", frequency: 5 }],
        adverb: [{ word: "legally", translation: "legalmente" }, { word: "illegally", translation: "ilegalmente" }]
      },
      commonMistakes: ["negative prefix il- porque legal empieza con l"],
      examExamples: [{ sentence: "It is ____ to drive without a valid license.", answer: "illegal", explanation: "Despues de 'is' falta adjetivo y el contexto pide negativo." }]
    },
    {
      base: "patient",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [],
        noun: [{ word: "patience", translation: "paciencia" }, { word: "patient", translation: "paciente" }],
        adjective: [{ word: "patient", translation: "paciente", frequency: 5 }, { word: "impatient", translation: "impaciente", frequency: 5 }],
        adverb: [{ word: "patiently", translation: "pacientemente" }, { word: "impatiently", translation: "impacientemente" }]
      },
      commonMistakes: ["patient puede ser persona enferma o adjetivo; patience es el sustantivo abstracto"],
      examExamples: [{ sentence: "The children waited ____ for their turn.", answer: "patiently", explanation: "Modifica el verbo 'waited', asi que falta adverbio." }]
    },
    {
      base: "confident",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [],
        noun: [{ word: "confidence", translation: "confianza" }],
        adjective: [{ word: "confident", translation: "seguro / confiado", frequency: 5 }],
        adverb: [{ word: "confidently", translation: "con seguridad" }]
      },
      commonMistakes: ["confidence es noun; confident es adjective"],
      examExamples: [{ sentence: "She answered the questions ____.", answer: "confidently", explanation: "La palabra modifica 'answered', por eso va adverbio." }]
    },
    {
      base: "active",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [{ word: "activate", translation: "activar" }],
        noun: [{ word: "action", translation: "accion" }, { word: "activity", translation: "actividad" }],
        adjective: [{ word: "active", translation: "activo", frequency: 5 }, { word: "inactive", translation: "inactivo", frequency: 4 }],
        adverb: [{ word: "actively", translation: "activamente" }]
      },
      commonMistakes: ["action es accion puntual; activity es actividad"],
      examExamples: [{ sentence: "Students should participate ____ in class.", answer: "actively", explanation: "Modifica el verbo 'participate', asi que falta adverbio." }]
    },
    {
      base: "generous",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [],
        noun: [{ word: "generosity", translation: "generosidad" }],
        adjective: [{ word: "generous", translation: "generoso", frequency: 5 }],
        adverb: [{ word: "generously", translation: "generosamente" }]
      },
      commonMistakes: ["generosity cambia -ous a -osity"],
      examExamples: [{ sentence: "They donated money ____ to the hospital.", answer: "generously", explanation: "Modifica el verbo 'donated', por eso va adverbio." }]
    },
    {
      base: "danger",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "endanger", translation: "poner en peligro" }],
        noun: [{ word: "danger", translation: "peligro" }],
        adjective: [{ word: "dangerous", translation: "peligroso", frequency: 5 }],
        adverb: [{ word: "dangerously", translation: "peligrosamente" }]
      },
      commonMistakes: ["danger es noun; dangerous es adjective"],
      examExamples: [{ sentence: "The road was ____ icy after the storm.", answer: "dangerously", explanation: "Modifica el adjetivo 'icy', asi que falta adverbio." }]
    },
    {
      base: "care",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "care", translation: "cuidar / importar" }],
        noun: [{ word: "care", translation: "cuidado" }],
        adjective: [{ word: "careful", translation: "cuidadoso", frequency: 5 }, { word: "careless", translation: "descuidado", frequency: 5 }, { word: "caring", translation: "afectuoso", frequency: 3 }],
        adverb: [{ word: "carefully", translation: "cuidadosamente" }, { word: "carelessly", translation: "descuidadamente" }]
      },
      commonMistakes: ["careful = cuidadoso; careless = descuidado"],
      examExamples: [{ sentence: "Read the instructions ____ before you start.", answer: "carefully", explanation: "Modifica el verbo 'read', por eso va adverbio." }]
    },
    {
      base: "hope",
      level: "Intermedio 9",
      priority: 4,
      forms: {
        verb: [{ word: "hope", translation: "esperar" }],
        noun: [{ word: "hope", translation: "esperanza" }],
        adjective: [{ word: "hopeful", translation: "esperanzado", frequency: 4 }, { word: "hopeless", translation: "sin esperanza", frequency: 4 }],
        adverb: [{ word: "hopefully", translation: "ojala / con esperanza" }, { word: "hopelessly", translation: "sin esperanza" }]
      },
      commonMistakes: ["hopeful es positivo; hopeless es negativo"],
      examExamples: [{ sentence: "We are ____ that the weather will improve.", answer: "hopeful", explanation: "Despues de 'are' falta adjetivo." }]
    },
    {
      base: "beauty",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "beautify", translation: "embellecer" }],
        noun: [{ word: "beauty", translation: "belleza" }],
        adjective: [{ word: "beautiful", translation: "hermoso", frequency: 5 }],
        adverb: [{ word: "beautifully", translation: "hermosamente" }]
      },
      commonMistakes: ["beauty cambia a beautiful; no beautyful"],
      examExamples: [{ sentence: "The room was ____ decorated.", answer: "beautifully", explanation: "Modifica el participio 'decorated', por eso va adverbio." }]
    },
    {
      base: "interest",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "interest", translation: "interesar" }],
        noun: [{ word: "interest", translation: "interes" }],
        adjective: [{ word: "interesting", translation: "interesante", frequency: 5 }, { word: "interested", translation: "interesado", frequency: 5 }],
        adverb: [{ word: "interestingly", translation: "curiosamente" }]
      },
      commonMistakes: ["interested para la persona; interesting para la cosa"],
      examExamples: [{ sentence: "I was ____ in the documentary.", answer: "interested", explanation: "La persona siente interes: interested." }]
    },
    {
      base: "bore",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "bore", translation: "aburrir" }],
        noun: [{ word: "boredom", translation: "aburrimiento" }],
        adjective: [{ word: "boring", translation: "aburrido (cosa)", frequency: 5 }, { word: "bored", translation: "aburrido (persona)", frequency: 5 }],
        adverb: [{ word: "boringly", translation: "de forma aburrida" }]
      },
      commonMistakes: ["I am bored; the class is boring"],
      examExamples: [{ sentence: "The lecture was so ____ that several students fell asleep.", answer: "boring", explanation: "La lecture causa aburrimiento, por eso boring." }]
    },
    {
      base: "excite",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "excite", translation: "emocionar" }],
        noun: [{ word: "excitement", translation: "emocion" }],
        adjective: [{ word: "exciting", translation: "emocionante", frequency: 5 }, { word: "excited", translation: "emocionado", frequency: 5 }],
        adverb: [{ word: "excitedly", translation: "emocionadamente" }]
      },
      commonMistakes: ["excited persona; exciting cosa/situacion"],
      examExamples: [{ sentence: "The children waited ____ for the show to begin.", answer: "excitedly", explanation: "Modifica 'waited', entonces va adverbio." }]
    },
    {
      base: "tire",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "tire", translation: "cansar" }],
        noun: [{ word: "tiredness", translation: "cansancio" }],
        adjective: [{ word: "tiring", translation: "agotador", frequency: 5 }, { word: "tired", translation: "cansado", frequency: 5 }],
        adverb: [{ word: "tiredly", translation: "cansadamente" }]
      },
      commonMistakes: ["tired persona; tiring actividad"],
      examExamples: [{ sentence: "The journey was long and extremely ____.", answer: "tiring", explanation: "La actividad causa cansancio, por eso tiring." }]
    },
    {
      base: "amaze",
      level: "Intermedio 9",
      priority: 5,
      forms: {
        verb: [{ word: "amaze", translation: "asombrar" }],
        noun: [{ word: "amazement", translation: "asombro" }],
        adjective: [{ word: "amazing", translation: "asombroso", frequency: 5 }, { word: "amazed", translation: "asombrado", frequency: 5 }],
        adverb: [{ word: "amazingly", translation: "asombrosamente" }]
      },
      commonMistakes: ["amazed persona; amazing cosa/situacion"],
      examExamples: [{ sentence: "The view from the mountain was ____.", answer: "amazing", explanation: "La vista causa asombro, por eso amazing." }]
    },
    {
      base: "economy",
      level: "Intermedio 10",
      priority: 4,
      forms: {
        verb: [{ word: "economize", translation: "economizar" }],
        noun: [{ word: "economy", translation: "economia" }, { word: "economics", translation: "economia (ciencia)" }, { word: "economist", translation: "economista" }],
        adjective: [{ word: "economic", translation: "economico (de economia)", frequency: 5 }, { word: "economical", translation: "ahorrador / rentable", frequency: 4 }],
        adverb: [{ word: "economically", translation: "economicamente" }]
      },
      commonMistakes: ["economic = relacionado con economia; economical = que ahorra dinero"],
      examExamples: [{ sentence: "The country is facing serious ____ problems.", answer: "economic", explanation: "Antes de 'problems' falta adjetivo relacionado con economia." }]
    },
    {
      base: "history",
      level: "Intermedio 10",
      priority: 4,
      forms: {
        verb: [],
        noun: [{ word: "history", translation: "historia" }, { word: "historian", translation: "historiador" }],
        adjective: [{ word: "historic", translation: "historico/importante", frequency: 4 }, { word: "historical", translation: "historico/de la historia", frequency: 5 }],
        adverb: [{ word: "historically", translation: "historicamente" }]
      },
      commonMistakes: ["historic = importante en la historia; historical = relacionado con historia"],
      examExamples: [{ sentence: "The museum contains many ____ documents.", answer: "historical", explanation: "Documentos relacionados con la historia: historical." }]
    },
    {
      base: "sense",
      level: "Intermedio 10",
      priority: 4,
      forms: {
        verb: [{ word: "sense", translation: "percibir" }],
        noun: [{ word: "sense", translation: "sentido" }, { word: "sensitivity", translation: "sensibilidad" }],
        adjective: [{ word: "sensible", translation: "sensato", frequency: 5 }, { word: "sensitive", translation: "sensible/delicado", frequency: 5 }, { word: "senseless", translation: "sin sentido", frequency: 4 }],
        adverb: [{ word: "sensibly", translation: "sensatamente" }, { word: "sensitively", translation: "con sensibilidad" }]
      },
      commonMistakes: ["sensible = sensato; sensitive = sensible/delicado"],
      examExamples: [{ sentence: "It would be ____ to leave early and avoid traffic.", answer: "sensible", explanation: "Despues de 'be' falta adjetivo; significa sensato." }]
    },
    {
      base: "privacy",
      level: "Intermedio 10",
      priority: 4,
      forms: {
        verb: [],
        noun: [{ word: "privacy", translation: "privacidad" }],
        adjective: [{ word: "private", translation: "privado", frequency: 5 }],
        adverb: [{ word: "privately", translation: "en privado" }]
      },
      commonMistakes: ["private es adjective; privacy es noun"],
      examExamples: [{ sentence: "Employees should discuss personal problems ____.", answer: "privately", explanation: "Modifica el verbo 'discuss', por eso va adverbio." }]
    },
    {
      base: "convention",
      level: "Intermedio 10",
      priority: 3,
      forms: {
        verb: [],
        noun: [{ word: "convention", translation: "convencion" }],
        adjective: [{ word: "conventional", translation: "convencional", frequency: 4 }, { word: "unconventional", translation: "poco convencional", frequency: 4 }],
        adverb: [{ word: "conventionally", translation: "convencionalmente" }]
      },
      commonMistakes: ["unconventional puede ser positivo o negativo segun contexto"],
      examExamples: [{ sentence: "Her teaching methods are quite ____ but very effective.", answer: "unconventional", explanation: "'But very effective' sugiere que no son metodos normales." }]
    },
    {
      base: "fuss",
      level: "Intermedio 10",
      priority: 3,
      forms: {
        verb: [{ word: "fuss", translation: "hacer problema / quejarse" }],
        noun: [{ word: "fuss", translation: "alboroto / escandalo" }],
        adjective: [{ word: "fussy", translation: "quisquilloso / exigente", frequency: 4 }],
        adverb: [{ word: "fussily", translation: "quisquillosamente" }]
      },
      commonMistakes: ["fussy describe a una persona demasiado exigente"],
      examExamples: [{ sentence: "Children can be very ____ about food.", answer: "fussy", explanation: "Despues de 'be very' falta adjetivo." }]
    }
  ]
};
