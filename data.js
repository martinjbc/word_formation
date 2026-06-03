const WORD_FORMATION_DATA = {
  studyPlan: {
    title: "Ruta de repaso para dejar de adivinar",
    description: "Usa este ciclo cada vez que practiques. Primero decides la categoria gramatical, luego el significado, y al final recien eliges el prefijo/sufijo correcto.",
    theory: [
      {
        title: "La regla principal",
        content: "En Word Formation no empieces preguntando 'que sufijo uso'. Empieza preguntando 'que funcion cumple el espacio en la frase'. La posicion del hueco te dice la categoria: noun, verb, adjective o adverb."
      },
      {
        title: "Como parafrasear",
        content: "Despues de identificar la categoria, explica la frase en espanol simple. Busca senales de significado: contraste (although, however), problema (unfortunately, no, without), resultado (because, so), intensidad (very, extremely, completely)."
      },
      {
        title: "Orden correcto de respuesta",
        content: "1) Categoria gramatical. 2) Sentido positivo o negativo. 3) Sufijo/prefijo. 4) Ortografia. Si saltas el paso 1 o 2, normalmente eliges una palabra que existe, pero no encaja en la frase."
      }
    ],
    guidedPractice: [
      {
        sentence: "The museum is free, but visitors are encouraged to make a small ____.",
        base: "DONATE",
        category: "noun",
        clue: "Despues de 'a small' falta un sustantivo.",
        paraphrase: "Los visitantes pueden hacer una pequena donacion.",
        answer: "donation"
      },
      {
        sentence: "The instructions were so complex that I had to ask the teacher to ____ them.",
        base: "CLEAR",
        category: "verb",
        clue: "Despues de 'to' falta un verbo en forma base.",
        paraphrase: "Pedi al profesor que las hiciera claras.",
        answer: "clarify"
      },
      {
        sentence: "The service was terrible and the staff were very ____.",
        base: "POLITE",
        category: "adjective",
        clue: "Despues de 'were very' falta un adjetivo.",
        paraphrase: "Como el servicio fue terrible, el personal no fue amable.",
        answer: "impolite"
      },
      {
        sentence: "The exam was ____ easy; everyone passed with top marks.",
        base: "SURPRISE",
        category: "adverb",
        clue: "La palabra modifica al adjetivo 'easy'.",
        paraphrase: "El examen fue sorprendentemente facil.",
        answer: "surprisingly"
      }
    ],
    routePractice: [
      {
        sentence: "The manager questioned the ____ of the report before sending it.",
        base: "ACCURATE",
        category: "noun",
        answer: "accuracy",
        paraphrase: "El manager queria saber si el reporte era exacto.",
        explanation: "Despues de 'the' y antes de 'of' falta un sustantivo. 'Accurate' cambia a 'accuracy'."
      },
      {
        sentence: "You should ____ your password if you think someone knows it.",
        base: "STRONG",
        category: "verb",
        answer: "strengthen",
        paraphrase: "Debes hacer tu password mas fuerte.",
        explanation: "Despues de 'should' falta un verbo base. 'Strong' forma el verbo irregular 'strengthen'."
      },
      {
        sentence: "The hotel room was small, dark and very ____.",
        base: "COMFORT",
        category: "adjective",
        answer: "uncomfortable",
        paraphrase: "La habitacion no era comoda.",
        explanation: "Despues de 'very' falta un adjetivo. El contexto negativo pide 'uncomfortable'."
      },
      {
        sentence: "The children waited ____ while the teacher prepared the activity.",
        base: "PATIENT",
        category: "adverb",
        answer: "patiently",
        paraphrase: "Los ninos esperaron con paciencia.",
        explanation: "La palabra modifica al verbo 'waited', por eso falta un adverbio: 'patiently'."
      },
      {
        sentence: "It was completely ____ to enter the building without permission.",
        base: "LEGAL",
        category: "adjective",
        answer: "illegal",
        paraphrase: "Entrar sin permiso estaba prohibido por ley.",
        explanation: "Despues de 'was completely' falta un adjetivo. Como es prohibido, se usa el negativo 'illegal'."
      },
      {
        sentence: "The sudden ____ of the lights frightened everyone in the room.",
        base: "APPEAR",
        category: "noun",
        answer: "disappearance",
        paraphrase: "Las luces desaparecieron/se apagaron de repente.",
        explanation: "Despues de 'the sudden' falta un sustantivo. El contexto pide ausencia, entonces 'disappearance'."
      },
      {
        sentence: "The new app will ____ users to track their progress every day.",
        base: "ABLE",
        category: "verb",
        answer: "enable",
        paraphrase: "La app hara posible que los usuarios sigan su progreso.",
        explanation: "Despues de 'will' falta un verbo base. 'Able' se transforma en el verbo 'enable'."
      },
      {
        sentence: "Although the plan looked simple, it was ____ difficult to complete.",
        base: "SURPRISE",
        category: "adverb",
        answer: "surprisingly",
        paraphrase: "Aunque parecia simple, fue sorprendentemente dificil.",
        explanation: "La palabra modifica al adjetivo 'difficult', por eso falta un adverbio: 'surprisingly'."
      }
    ],
    steps: [
      {
        label: "1. Detecta el hueco",
        detail: "Mira las palabras de la izquierda y derecha del espacio: articulo, preposicion, auxiliar, sustantivo, adjetivo o coma."
      },
      {
        label: "2. Nombra la categoria",
        detail: "Di en voz alta: necesito noun, verb, adjective o adverb. Si no puedes nombrarla, no transformes todavia."
      },
      {
        label: "3. Parafrasea la idea",
        detail: "Reescribe mentalmente la frase en espanol simple: positivo, negativo, causa, contraste, resultado o descripcion."
      },
      {
        label: "4. Forma la palabra",
        detail: "Elige sufijo o prefijo: -tion, -ment, -ness, -ity, -ful, -less, -able, -ly, un-, in-, im-, il-, ir-, dis-."
      },
      {
        label: "5. Revisa spelling",
        detail: "Comprueba cambios frecuentes: happy -> happiness/happily, possible -> possibly, strong -> strength/strengthen."
      }
    ],
    weeklyReview: [
      "Dia 1: Nivel 1 + 10 ejercicios solo marcando categoria: noun, verb, adjective, adverb.",
      "Dia 2: Nivel 2 + tabla de sufijos de sustantivos y adjetivos.",
      "Dia 3: Nivel 3 + verbos/adverbios; practica despues de modal, to, be, very, extremely.",
      "Dia 4: Nivel 4 + negativos; subraya pistas como unfortunately, no, without, fail, cancel, although.",
      "Dia 5: Nivel 5 + irregulares; crea mini tarjetas con root -> noun -> verb -> adjective.",
      "Dia 6: Simulacro mezclado; anota tus errores por causa: categoria, significado, prefijo o spelling.",
      "Dia 7: Repaso corto de errores y repeticion de los niveles con menos de 80%."
    ]
  },
  levels: [
    {
      id: 1,
      name: "Nivel 1: Conceptos Clave (Word Classes)",
      description: "Aprende a identificar qué categoría gramatical (sustantivo, verbo, adjetivo o adverbio) falta en una oración según su posición.",
      tips: [
        {
          title: "Sustantivos (Nouns)",
          content: "Suelen ir después de artículos (a, an, the), posesivos (my, your, his), adjetivos, o preposiciones. Funcionan como sujeto u objeto. Ej: *The **decision** was hard.*"
        },
        {
          title: "Verbos (Verbs)",
          content: "Expresan la acción. Suelen ir después del sujeto o de verbos auxiliares/modales (can, will, should). Ej: *You must **strengthen** your muscles.*"
        },
        {
          title: "Adjetivos (Adjectives)",
          content: "Describen sustantivos. Van ANTES del sustantivo o DESPUÉS de un verbo de estado como 'be', 'look', 'seem'. Ej: *It is a **beautiful** day. / She looks **happy**.*"
        },
        {
          title: "Adverbios (Adverbs)",
          content: "Describen verbos, adjetivos u otros adverbios. Suelen terminar en '-ly'. Si la oración ya está completa gramaticalmente, lo que falta suele ser un adverbio. Ej: *She ran **quickly**. / **Fortunately**, he passed.*"
        }
      ]
    },
    {
      id: 2,
      name: "Nivel 2: Sufijos de Sustantivos y Adjetivos (Noun & Adjective Suffixes)",
      description: "Cómo transformar palabras base en nombres (de personas o conceptos) y adjetivos descriptivos.",
      tips: [
        {
          title: "Creando Sustantivos de Concepto",
          content: "Sufijos comunes: `-ment` (development), `-tion/-sion` (production, decision), `-ness` (happiness), `-ity` (ability), `-ance/-ence` (attendance, difference), `-ship` (friendship), `-hood` (neighborhood)."
        },
        {
          title: "Creando Sustantivos de Persona",
          content: "Sufijos comunes: `-er` (employer, runner), `-or` (actor, creator), `-ist` (scientist, artist), `-ian` (politician, musician)."
        },
        {
          title: "Creando Adjetivos",
          content: "Sufijos comunes: `-ful` (lleno de: careful), `-less` (sin: careless), `-able/-ible` (capacidad: believable, flexible), `-ive` (active), `-ous` (dangerous), `-y` (windy), `-al` (industrial), `-ic` (scientific)."
        }
      ]
    },
    {
      id: 3,
      name: "Nivel 3: Creación de Verbos y Adverbios (Verbs & Adverbs)",
      description: "Domina la formación de verbos mediante sufijos y prefijos, y la conversión rápida a adverbios.",
      tips: [
        {
          title: "Sufijos de Verbo",
          content: "Sufijos comunes para crear verbos a partir de sustantivos o adjetivos: `-ise/-ize` (popularise, industrialise), `-ify` (beautify, satisfy), `-en` (shorten, strengthen, widen), `-ate` (activate)."
        },
        {
          title: "Prefijos de Verbo",
          content: "Prefijos comunes: `re-` (repetir: re-evaluate), `dis-` (deshacer: disappear, disagree), `co-` (cooperar: co-exist), `over-` (en exceso: overcook, overwork), `under-` (insuficiente: underpay, underestimate)."
        },
        {
          title: "Formación de Adverbios",
          content: "Casi siempre añadimos `-ly` al adjetivo. Reglas ortográficas:\n- Si termina en `-y`, cambia a `-ily` (happy -> happily).\n- Si termina en `-le`, cambia a `-ly` (possible -> possibly).\n- Si termina en `-ic`, añade `-ally` (scientific -> scientifically). *Excepción: public -> publicly.*"
        }
      ]
    },
    {
      id: 4,
      name: "Nivel 4: Formas Negativas (Negatives & Prefixes)",
      description: "¡Cuidado! Este es el error número 1 en los exámenes. A veces la gramática te pide un adjetivo, pero el sentido de la oración requiere su forma opuesta (negativa).",
      tips: [
        {
          title: "Prefijos Negativos Comunes",
          content: "- `un-`: El más común. (happy -> unhappy, believable -> unbelievable)\n- `in-`: Común en palabras de origen latín. (correct -> incorrect, active -> inactive)\n- `im-`: Antes de palabras que empiezan con **m** o **p**. (possible -> impossible, polite -> impolite, patient -> impatient)\n- `il-`: Antes de palabras que empiezan con **l**. (legal -> illegal, logical -> illogical)\n- `ir-`: Antes de palabras que empiezan con **r**. (responsible -> irresponsible, regular -> irregular)\n- `dis-`: Indica lo contrario o reversión. (honest -> dishonest, agree -> disagree, appear -> disappear)\n- `mis-`: Indica hacer algo mal o incorrectamente. (understand -> misunderstand, lead -> mislead)"
        },
        {
          title: "El Truco del Contexto en Exámenes",
          content: "Siempre lee la oración completa. Si dice: *'Unfortunately, his attempts to climb the mountain were... (SUCCESS)'*, la palabra que falta es **unsuccessful** (infructuosos), no *successful*, debido al contexto negativo de *Unfortunately*."
        }
      ]
    },
    {
      id: 5,
      name: "Nivel 5: Cambios Irregulares y Palabras Trampa (Irregulars & Tricky Words)",
      description: "Domina las palabras donde cambia la raíz interna (spelling changes) y los casos complejos de exámenes avanzados.",
      tips: [
        {
          title: "Cambio de vocal interna y longitud",
          content: "- **deep** (adjetivo) -> **depth** (sustantivo) -> **deepen** (verbo)\n- **wide** (adjetivo) -> **width** (sustantivo) -> **widen** (verbo)\n- **strong** (adjetivo) -> **strength** (sustantivo) -> **strengthen** (verbo)\n- **long** (adjetivo) -> **length** (sustantivo) -> **lengthen** (verbo)\n- **high** (adjetivo) -> **height** (sustantivo) -> **heighten** (verbo)"
        },
        {
          title: "Transformaciones Irregulares Comunes",
          content: "- **fly** (verbo) -> **flight** (sustantivo)\n- **choose** (verbo) -> **choice** (sustantivo)\n- **lose** (verbo) -> **loss** (sustantivo) -> **lost** (adjetivo)\n- **hot** (adjetivo) -> **heat** (sustantivo/verbo)\n- **young** (adjetivo) -> **youth** (sustantivo)\n- **speak** (verbo) -> **speech** (sustantivo)"
        },
        {
          title: "Palabras con Múltiples Sufijos (Diferentes Significados)",
          content: "- **care**: *careful* (cuidadoso), *careless* (descuidado), *caring* (afectuoso/que cuida).\n- **use**: *useful* (útil), *useless* (inútil), *used* (usado), *user* (usuario).\n- **respect**: *respectful* (respetuoso), *respectable* (digno de respeto), *respective* (respectivo)."
        }
      ]
    }
  ],

  words: [
    {
      root: "able",
      verb: "enable",
      noun: "ability, disability",
      adjective: "able, unable, disabled",
      adverb: "ably",
      negatives: "unable, disability, disabled",
      notes: "'Enable' significa activar o hacer capaz. 'Unable' es el adjetivo negativo común."
    },
    {
      root: "act",
      verb: "activate, act",
      noun: "action, activity, actor, actress, activation",
      adjective: "active, inactive",
      adverb: "actively",
      negatives: "inactive, inaction",
      notes: "Prestar atención a la diferencia entre 'action' (hecho/acción) y 'activity' (actividad física/social)."
    },
    {
      root: "agree",
      verb: "agree, disagree",
      noun: "agreement, disagreement",
      adjective: "agreeable, disagreeable",
      adverb: "agreeably, disagreeably",
      negatives: "disagree, disagreement, disagreeable, disagreeably",
      notes: "El verbo contrario es 'disagree'. No se dice 'unagree'."
    },
    {
      root: "appear",
      verb: "appear, disappear",
      noun: "appearance, disappearance",
      adjective: "apparent",
      adverb: "apparently",
      negatives: "disappear, disappearance",
      notes: "Cuidado con la ortografía de 'appearance' (termina en -ance, no -ence) y las dobles letras en 'disappear' (una 's', dos 'p')."
    },
    {
      root: "attend",
      verb: "attend",
      noun: "attendance, attention, attendant",
      adjective: "attentive, inattentive",
      adverb: "attentively, inattentively",
      negatives: "inattentive, inattentively",
      notes: "'Attendance' es asistencia. 'Attention' es atención. 'Attendant' es un asistente (como auxiliar de vuelo: flight attendant)."
    },
    {
      root: "beauty",
      verb: "beautify",
      noun: "beauty",
      adjective: "beautiful",
      adverb: "beautifully",
      negatives: "unbeautiful (raro)",
      notes: "Recuerda cambiar la 'y' por 'i' al formar 'beautiful' y 'beautify'."
    },
    {
      root: "believe",
      verb: "believe, disbelieve",
      noun: "belief, disbelief",
      adjective: "believable, unbelievable",
      adverb: "believably, unbelievably",
      negatives: "disbelieve, belief -> disbelief, unbelievable, unbelievably",
      notes: "El sustantivo tiene 'f' al final: 'belief' (creencia) / 'disbelief' (incredulidad). El verbo lleva 'v': 'believe'."
    },
    {
      root: "care",
      verb: "care",
      noun: "care, carefulness, carelessness",
      adjective: "careful, careless, caring",
      adverb: "carefully, carelessly",
      negatives: "careless, carelessly, carelessness",
      notes: "'-ful' indica presencia de cuidado; '-less' indica ausencia de este."
    },
    {
      root: "compare",
      verb: "compare",
      noun: "comparison",
      adjective: "comparable, incomparable, comparative",
      adverb: "comparatively, incomparably",
      negatives: "incomparable, incomparably",
      notes: "El sustantivo cambia la 'e' por 'i': 'comparison' (comparación)."
    },
    {
      root: "compete",
      verb: "compete",
      noun: "competition, competitor",
      adjective: "competitive",
      adverb: "competitively",
      negatives: "uncompetitive",
      notes: "'Competitor' es el competidor (persona), 'competition' es la competencia (evento o concepto)."
    },
    {
      root: "create",
      verb: "create",
      noun: "creation, creator, creativity",
      adjective: "creative",
      adverb: "creatively",
      negatives: "uncreative",
      notes: "'Creator' es el creador (persona); 'creativity' es la creatividad (cualidad)."
    },
    {
      root: "decide",
      verb: "decide",
      noun: "decision",
      adjective: "decisive, indecisive",
      adverb: "decisively, indecisively",
      negatives: "indecisive, indecisively, indecision",
      notes: "'Decisive' (decisivo/decidido); 'indecisive' (indeciso)."
    },
    {
      root: "deep",
      verb: "deepen",
      noun: "depth",
      adjective: "deep",
      adverb: "deeply",
      negatives: "none",
      notes: "Cambio irregular de vocal para el sustantivo: 'depth' (profundidad). El verbo es 'deepen'."
    },
    {
      root: "depend",
      verb: "depend",
      noun: "dependence, independence, dependent",
      adjective: "dependent, independent, dependable",
      adverb: "dependently, independently, dependably",
      negatives: "independence, independent, independently, unreliable (indirecto)",
      notes: "Se escribe con 'e': depend**ence**, depend**ent** (no con 'a'). 'Independent' lleva prefijo 'in-'."
    },
    {
      root: "employ",
      verb: "employ",
      noun: "employment, unemployment, employer, employee",
      adjective: "employed, unemployed, employable, unemployable",
      adverb: "none",
      negatives: "unemployment, unemployed, unemployable",
      notes: "'Employer' (empleador/jefe), 'employee' (empleado/trabajador). 'Unemployed' (desempleado)."
    },
    {
      root: "encourage",
      verb: "encourage, discourage",
      noun: "encouragement, discouragement, courage",
      adjective: "courageous, encouraging, discouraging",
      adverb: "courageously, encouragingly",
      negatives: "discourage, discouragement, discouraging, discouragingly",
      notes: "El antónimo de 'encourage' (alentar) es 'discourage' (desalentar)."
    },
    {
      root: "excite",
      verb: "excite",
      noun: "excitement",
      adjective: "exciting, excited",
      adverb: "excitingly",
      negatives: "unexciting",
      notes: "Adjetivos en -ed describen sentimientos (I am excited); en -ing describen la causa (The game is exciting)."
    },
    {
      root: "expect",
      verb: "expect",
      noun: "expectation, expectancy",
      adjective: "expected, unexpected",
      adverb: "expectedly, unexpectedly",
      negatives: "unexpected, unexpectedly",
      notes: "En los exámenes es muy común el uso de 'unexpectedly' (inesperadamente) al inicio de una oración."
    },
    {
      root: "friend",
      verb: "befriend",
      noun: "friend, friendship, friendliness",
      adjective: "friendly, unfriendly",
      adverb: "friendlily (raro, se prefiere 'in a friendly way')",
      negatives: "unfriendly, unfriendliness",
      notes: "'Friendly' termina en -ly pero es un ADJETIVO, no un adverbio. Su opuesto es 'unfriendly'."
    },
    {
      root: "happy",
      verb: "none",
      noun: "happiness",
      adjective: "happy, unhappy",
      adverb: "happily, unhappily",
      negatives: "unhappy, unhappily, unhappiness",
      notes: "Recuerda cambiar la 'y' por 'i' en 'happiness', 'happily', 'unhappiness'."
    },
    {
      root: "honest",
      verb: "none",
      noun: "honesty, dishonesty",
      adjective: "honest, dishonest",
      adverb: "honestly, dishonestly",
      negatives: "dishonest, dishonestly, dishonesty",
      notes: "Prefijo de negación: 'dis-'. Ejemplo: 'dishonest' (deshonesto)."
    },
    {
      root: "hope",
      verb: "hope",
      noun: "hope, hopefulness, hopelessness",
      adjective: "hopeful, hopeless",
      adverb: "hopefully, hopelessly",
      negatives: "hopeless, hopelessly, hopelessness",
      notes: "'Hopefully' (con suerte / ojalá) es un adverbio súper común para abrir comentarios en oraciones."
    },
    {
      root: "impress",
      verb: "impress",
      noun: "impression",
      adjective: "impressive, impressed",
      adverb: "impressively",
      negatives: "unimpressive",
      notes: "'Impression' es la impresión. 'Impressive' es algo impresionante."
    },
    {
      root: "know",
      verb: "know",
      noun: "knowledge",
      adjective: "knowledgeable, known, unknown",
      adverb: "knowingly, unknowingly",
      negatives: "unknown, unknowingly",
      notes: "'Knowledge' es conocimiento (sustantivo). 'Knowledgeable' es alguien culto o que sabe mucho del tema (adjetivo)."
    },
    {
      root: "like",
      verb: "like, dislike",
      noun: "liking, dislike, likeness",
      adjective: "likeable, unlike, alike",
      adverb: "unlikewise (raro)",
      negatives: "dislike, unlike",
      notes: "Como verbo, el opuesto es 'dislike' (no gustar). Como preposición/adjetivo, el opuesto es 'unlike' (a diferencia de / diferente)."
    },
    {
      root: "logic",
      verb: "none",
      noun: "logic",
      adjective: "logical, illogical",
      adverb: "logically, illogically",
      negatives: "illogical, illogically",
      notes: "Palabra que empieza con 'l', lleva prefijo 'il-': 'illogical'."
    },
    {
      root: "manage",
      verb: "manage",
      noun: "management, manager",
      adjective: "manageable, unmanageable",
      adverb: "manageably, unmanageably",
      negatives: "unmanageable, unmanageably",
      notes: "'Management' (gerencia/administración); 'manager' (gerente/administrador)."
    },
    {
      root: "origin",
      verb: "originate",
      noun: "origin, originality",
      adjective: "original, unoriginal",
      adverb: "originally, unoriginally",
      negatives: "unoriginal, unoriginally",
      notes: "'Originally' es comúnmente usado para decir 'en un principio' o 'al inicio'."
    },
    {
      root: "pain",
      verb: "pain",
      noun: "pain",
      adjective: "painful, painless",
      adverb: "painfully, painlessly",
      negatives: "painless, painlessly",
      notes: "'Painful' (doloroso); 'painless' (sin dolor)."
    },
    {
      root: "patience",
      verb: "none",
      noun: "patience",
      adjective: "patient, impatient",
      adverb: "patiently, impatiently",
      negatives: "impatient, impatiently, impatience",
      notes: "Empieza con 'p', así que lleva prefijo 'im-': 'impatient' (impaciente)."
    },
    {
      root: "please",
      verb: "please, displease",
      noun: "pleasure, displeasure",
      adjective: "pleasant, unpleasant, pleased, displeased",
      adverb: "pleasantly, unpleasantly",
      negatives: "displease, displeasure, unpleasant, unpleasantly, displeased",
      notes: "Cuidado: el sustantivo es 'pleasure' (placer); el adjetivo de clima o situación es 'pleasant' (agradable) y su opuesto es 'unpleasant' (desagradable)."
    },
    {
      root: "polite",
      verb: "none",
      noun: "politeness",
      adjective: "polite, impolite",
      adverb: "politely, impolitely",
      negatives: "impolite, impolitely, impoliteness",
      notes: "Lleva 'im-' por empezar con 'p': 'impolite' (maleducado/grosero)."
    },
    {
      root: "popular",
      verb: "popularise",
      noun: "popularity",
      adjective: "popular, unpopular",
      adverb: "popularly",
      negatives: "unpopular",
      notes: "El sustantivo es 'popularity'. La negación es 'unpopular'."
    },
    {
      root: "possible",
      verb: "none",
      noun: "possibility, impossibility",
      adjective: "possible, impossible",
      adverb: "possibly, impossibly",
      negatives: "impossible, impossibly, impossibility",
      notes: "Lleva prefijo 'im-'. Recuerda eliminar la 'e' final de 'possible' al añadir '-ly' -> 'possibly'."
    },
    {
      root: "power",
      verb: "empower, power",
      noun: "power",
      adjective: "powerful, powerless",
      adverb: "powerfully, powerlessly",
      negatives: "powerless, powerlessly",
      notes: "'Empower' significa empoderar o dar poder."
    },
    {
      root: "produce",
      verb: "produce",
      noun: "product, production, producer, productivity",
      adjective: "productive, unproductive",
      adverb: "productively, unproductively",
      negatives: "unproductive, unproductively",
      notes: "'Product' (producto físico), 'production' (producción como proceso), 'producer' (productor/persona)."
    },
    {
      root: "profession",
      verb: "none",
      noun: "profession, professional",
      adjective: "professional, unprofessional",
      adverb: "professionally, unprofessionally",
      negatives: "unprofessional, unprofessionally",
      notes: "'Professional' funciona tanto como sustantivo (un profesional) como adjetivo (profesional)."
    },
    {
      root: "real",
      verb: "realise",
      noun: "reality, realisation",
      adjective: "real, realistic, unrealistic",
      adverb: "really, realistically, unrealistically",
      negatives: "unrealistic, unrealistically, unreal",
      notes: "Verbo 'realise' (darse cuenta / hacer realidad). 'Reality' (realidad)."
    },
    {
      root: "rely",
      verb: "rely",
      noun: "reliability",
      adjective: "reliable, unreliable, reliant",
      adverb: "reliably, unreliably",
      negatives: "unreliable, unreliably, unreliability",
      notes: "'Reliable' (confiable). 'Unreliable' (inconfiable). El verbo es 'rely' (depender/confiar en)."
    },
    {
      root: "satisfy",
      verb: "satisfy, dissatisfy",
      noun: "satisfaction, dissatisfaction",
      adjective: "satisfied, dissatisfied, satisfactory, unsatisfactory, satisfying",
      adverb: "satisfactorily, unsatisfactorily",
      negatives: "dissatisfy, dissatisfaction, dissatisfied, unsatisfactory, unsatisfactorily",
      notes: "¡Cuidado! 'Dissatisfied' es para personas (sentirse insatisfecho). 'Unsatisfactory' es para cosas o resultados (un resultado no satisfactorio)."
    },
    {
      root: "science",
      verb: "none",
      noun: "science, scientist",
      adjective: "scientific",
      adverb: "scientifically",
      negatives: "unscientific",
      notes: "El adverbio duplica la 'l': 'scientifically' porque proviene del adjetivo en -ic (scientific -> scientifically)."
    },
    {
      root: "strong",
      verb: "strengthen",
      noun: "strength",
      adjective: "strong",
      adverb: "strongly",
      negatives: "none",
      notes: "Sustantivo irregular: 'strength' (fuerza). Verbo: 'strengthen' (fortalecer)."
    },
    {
      root: "succeed",
      verb: "succeed",
      noun: "success",
      adjective: "successful, unsuccessful",
      adverb: "successfully, unsuccessfully",
      negatives: "unsuccessful, unsuccessfully",
      notes: "El verbo es 'succeed' (tener éxito). El sustantivo es 'success' (éxito). Los adjetivos llevan una sola 'l' al final: 'successful', no 'successfull'."
    },
    {
      root: "understand",
      verb: "understand, misunderstand",
      noun: "understanding, misunderstanding",
      adjective: "understanding, understandable",
      adverb: "understandably, misunderstandingly",
      negatives: "misunderstand, misunderstanding, understandable -> ununderstandable (raro), understandably -> ununderstandably (raro)",
      notes: "El prefijo negativo común es 'mis-' para verbos y sustantivos: 'misunderstand' (entender mal), 'misunderstanding' (malentendido)."
    },
    {
      root: "value",
      verb: "value, evaluate",
      noun: "value, valuation, evaluation",
      adjective: "valuable, invaluable, valueless",
      adverb: "valuably",
      negatives: "valueless, invaluable (cuidado!)",
      notes: "¡MUY IMPORTANTE! 'Valuable' es valioso. 'Valueless' es sin valor (basura). Pero 'Invaluable' significa de valor incalculable (¡súper valioso!). No te confundas."
    },
    {
      root: "vary",
      verb: "vary",
      noun: "variety, variation, variable",
      adjective: "various, varied, variable, invariable",
      adverb: "variously, invariably",
      negatives: "invariable, invariably",
      notes: "'Invariably' significa invariablemente (siempre)."
    },
    {
      root: "wide",
      verb: "widen",
      noun: "width",
      adjective: "wide",
      adverb: "widely",
      negatives: "none",
      notes: "Sustantivo irregular: 'width' (ancho/amplitud). Verbo: 'widen' (ensanchar)."
    }
  ],

  questions: [
    {
      id: 1,
      levelId: 1,
      sentence: "The doctor told him that his recovery would depend on how ______ he followed the instructions.",
      word: "CARE",
      correctAnswer: "carefully",
      explanation: "Necesitamos un **adverbio** porque describe *cómo* debe seguir las instrucciones (modifica al verbo 'followed'). El adverbio de 'care' en sentido positivo es 'carefully'."
    },
    {
      id: 2,
      levelId: 1,
      sentence: "There has been a significant ______ in the number of people using public transport this year.",
      word: "GROW",
      correctAnswer: "growth",
      explanation: "Después de un adjetivo ('significant') y un artículo indefinido ('a'), necesitamos un **sustantivo**. El sustantivo derivado de 'grow' (crecer) es 'growth' (crecimiento)."
    },
    {
      id: 3,
      levelId: 2,
      sentence: "She is a very ______ person who always thinks of others before herself.",
      word: "THINK",
      correctAnswer: "thoughtful",
      explanation: "El espacio está antes del sustantivo 'person' y después de un intensificador ('very'). Necesitamos un **adjetivo** descriptivo. El adjetivo positivo para alguien considerado es 'thoughtful'."
    },
    {
      id: 4,
      levelId: 2,
      sentence: "The company announced the ______ of their new smartphone yesterday.",
      word: "DEVELOP",
      correctAnswer: "development",
      explanation: "Después del artículo 'the' y antes de la preposición 'of', requerimos un **sustantivo**. El sufijo típico para sustantivos que provienen de verbos terminados en '-op/-ep' es '-ment'. 'Development' (desarrollo)."
    },
    {
      id: 5,
      levelId: 4,
      sentence: "I'm afraid there has been a ______. I didn't order this steak.",
      word: "UNDERSTAND",
      correctAnswer: "misunderstanding",
      explanation: "El artículo indefinido 'a' nos indica que falta un **sustantivo**. Por el contexto de 'no ordené este filete', sabemos que es un error o 'malentendido'. Por ende, añadimos el prefijo 'mis-' y el sufijo '-ing': 'misunderstanding'."
    },
    {
      id: 6,
      levelId: 4,
      sentence: "It is highly ______ that the flight will be cancelled, as the storm has already passed.",
      word: "LIKE",
      correctAnswer: "unlikely",
      explanation: "Después del verbo 'is' y un adverbio modificador ('highly'), requerimos un **adjetivo**. Como la tormenta *ya pasó*, la probabilidad de cancelación es baja, por lo que requerimos el adjetivo negativo: 'unlikely' (improbable)."
    },
    {
      id: 7,
      levelId: 3,
      sentence: "To make the soup thicker, you should ______ the heat and let it simmer for ten minutes.",
      word: "LOW",
      correctAnswer: "lower",
      explanation: "Después del verbo modal 'should', necesitamos un **verbo en su forma base**. El verbo formado a partir de 'low' (bajo) es 'lower' (bajar/disminuir)."
    },
    {
      id: 8,
      levelId: 5,
      sentence: "The pool has a ______ of two meters, so it is safe for diving.",
      word: "DEEP",
      correctAnswer: "depth",
      explanation: "Después del artículo 'a' y antes de la frase 'of two meters', requerimos el **sustantivo** de dimensión. El sustantivo de 'deep' es irregular: 'depth' (profundidad)."
    },
    {
      id: 9,
      levelId: 5,
      sentence: "Regular exercise helps to ______ your bones and muscles.",
      word: "STRONG",
      correctAnswer: "strengthen",
      explanation: "Después de 'helps to', requerimos un **verbo en infinitivo**. El verbo derivado de 'strong' (fuerte) se forma añadiendo el sufijo '-en' al sustantivo 'strength': 'strengthen' (fortalecer)."
    },
    {
      id: 10,
      levelId: 4,
      sentence: "It was extremely ______ of him to leave the door unlocked when he went out.",
      word: "RESPONSIBLE",
      correctAnswer: "irresponsible",
      explanation: "Después de 'It was extremely [adjetivo] of him', necesitamos un **adjetivo**. Dejar la puerta abierta es una imprudencia, por lo que requerimos la forma negativa. Al empezar con 'r', añadimos el prefijo 'ir-': 'irresponsible'."
    },
    {
      id: 11,
      levelId: 2,
      sentence: "The museum is free, but visitors are encouraged to make a small ______.",
      word: "DONATE",
      correctAnswer: "donation",
      explanation: "Después del adjetivo 'small' requerimos un **sustantivo**. El sustantivo para la acción de donar es 'donation'."
    },
    {
      id: 12,
      levelId: 3,
      sentence: "The instructions were so complex that I had to ask the teacher to ______ them.",
      word: "CLEAR",
      correctAnswer: "clarify",
      explanation: "Después de 'had to ask the teacher to', requerimos un **verbo en infinitivo**. Para hacer que algo sea 'clear' (claro), el verbo correspondiente es 'clarify' (aclarar)."
    },
    {
      id: 13,
      levelId: 4,
      sentence: "The project was cancelled because the results were completely ______.",
      word: "SATISFY",
      correctAnswer: "unsatisfactory",
      explanation: "Buscamos un **adjetivo** después de 'were' y 'completely'. Como el proyecto se canceló, los resultados fueron malos o no satisfactorios. Para cosas o resultados se usa 'unsatisfactory'."
    },
    {
      id: 14,
      levelId: 5,
      sentence: "The ______ of the new bridge will allow larger ships to pass underneath.",
      word: "HIGH",
      correctAnswer: "height",
      explanation: "El artículo 'The' antes del espacio nos indica que necesitamos un **sustantivo**. El sustantivo de dimensión para 'high' es irregular: 'height' (altura)."
    },
    {
      id: 15,
      levelId: 1,
      sentence: "Many people believe that money doesn't guarantee ______.",
      word: "HAPPY",
      correctAnswer: "happiness",
      explanation: "Después del verbo transitivo 'guarantee', necesitamos el **sustantivo** (objeto directo). El sustantivo de 'happy' es 'happiness' (felicidad), cambiando la 'y' por 'i'."
    },
    {
      id: 16,
      levelId: 4,
      sentence: "She was so angry that she left the meeting in deep ______ with the decisions.",
      word: "AGREE",
      correctAnswer: "disagreement",
      explanation: "Después del adjetivo 'deep', necesitamos un **sustantivo**. Al estar molesta, significa que no estaba de acuerdo, por lo que requerimos el sustantivo negativo: 'disagreement' (desacuerdo)."
    },
    {
      id: 17,
      levelId: 3,
      sentence: "He looked at the map, but ______ there was no signal, so he couldn't load the route.",
      word: "FORTUNE",
      correctAnswer: "unfortunately",
      explanation: "Al inicio de una cláusula y seguido de una coma, se requiere un **adverbio de comentario**. Al no tener señal, la situación es mala (desafortunada). El adverbio negativo es 'unfortunately'."
    },
    {
      id: 18,
      levelId: 5,
      sentence: "To enter the private club, you need to show some proof of ______.",
      word: "MEMBER",
      correctAnswer: "membership",
      explanation: "Después de la preposición 'of', requerimos un **sustantivo**. El sustantivo abstracto para el estado de ser miembro es 'membership' (membresía/afiliación)."
    },
    {
      id: 19,
      levelId: 2,
      sentence: "The exam was ______ easy; everyone in my class passed with top marks.",
      word: "SURPRISE",
      correctAnswer: "surprisingly",
      explanation: "El espacio modifica al adjetivo 'easy', por lo que necesitamos un **adverbio**. El adverbio derivado de 'surprise' es 'surprisingly' (sorprendentemente)."
    },
    {
      id: 20,
      levelId: 4,
      sentence: "The queue at the ticket office was huge, and people were becoming ______.",
      word: "PATIENT",
      correctAnswer: "impatient",
      explanation: "Después del verbo 'becoming', necesitamos un **adjetivo** que describa a 'people'. Debido a la larga cola, la gente perdía la paciencia, por lo que requerimos la forma negativa. Empieza con 'p', así que añadimos 'im-': 'impatient' (impacientes)."
    },
    {
      id: 21,
      levelId: 3,
      sentence: "You need to ______ the rope before you pull it, or it will slip.",
      word: "TIGHT",
      correctAnswer: "tighten",
      explanation: "Después de 'need to', requerimos un **verbo**. A partir de 'tight' (apretado/tenso), el verbo es 'tighten' (tensar/apretar)."
    },
    {
      id: 22,
      levelId: 5,
      sentence: "The sudden ______ of the actor shocked his fans all over the world.",
      word: "DIE",
      correctAnswer: "death",
      explanation: "Después del adjetivo 'sudden' y del artículo 'The', requerimos un **sustantivo**. El sustantivo derivado del verbo 'die' (morir) es irregular: 'death' (muerte)."
    },
    {
      id: 23,
      levelId: 4,
      sentence: "His argument was completely ______; it made no sense at all.",
      word: "LOGIC",
      correctAnswer: "illogical",
      explanation: "Después de 'was completely', necesitamos un **adjetivo**. Como 'no tenía sentido alguno', requerimos la forma negativa. Al empezar con 'l', añadimos el prefijo 'il-': 'illogical' (ilógico)."
    },
    {
      id: 24,
      levelId: 2,
      sentence: "There is a wide ______ of food options in the hotel buffet.",
      word: "VARY",
      correctAnswer: "variety",
      explanation: "Después de 'a wide', requerimos un **sustantivo**. El sustantivo derivado de 'vary' que significa diversidad es 'variety' (variedad)."
    },
    {
      id: 25,
      levelId: 5,
      sentence: "The ______ of the room was measured in meters.",
      word: "WIDE",
      correctAnswer: "width",
      explanation: "El artículo 'The' nos indica que requerimos un **sustantivo**. El sustantivo de dimensión para 'wide' (ancho) es irregular: 'width' (ancho/anchura)."
    },
    {
      id: 26,
      levelId: 1,
      sentence: "The manager was highly impressed by the ______ of the team during the crisis.",
      word: "PROFESSION",
      correctAnswer: "professionalism",
      explanation: "El artículo 'the' nos indica la necesidad de un **sustantivo**. Buscamos la cualidad de comportarse como un profesional, que es 'professionalism' (profesionalidad)."
    },
    {
      id: 27,
      levelId: 4,
      sentence: "The service at the restaurant was terrible and the staff were very ______.",
      word: "POLITE",
      correctAnswer: "impolite",
      explanation: "Necesitamos un **adjetivo** después de 'were very'. Como el servicio fue pésimo, el personal fue maleducado. La forma negativa de 'polite' empieza con 'p', por lo que añadimos 'im-': 'impolite'."
    },
    {
      id: 28,
      levelId: 3,
      sentence: "The local government plans to ______ the old railway line to attract tourists.",
      word: "MODERN",
      correctAnswer: "modernise",
      explanation: "Después de 'plans to', necesitamos un **verbo en infinitivo**. A partir del adjetivo 'modern', formamos el verbo usando el sufijo '-ise' (o '-ize'): 'modernise' (modernizar)."
    },
    {
      id: 29,
      levelId: 5,
      sentence: "Although she studied hard, her attempts to pass the exam were ______.",
      word: "SUCCESS",
      correctAnswer: "unsuccessful",
      explanation: "Después de 'were', necesitamos un **adjetivo**. El conector contrastivo 'Although' (Aunque estudió duro...) implica que el resultado final fue malo. Por ende, usamos el adjetivo negativo: 'unsuccessful' (infructuoso/sin éxito)."
    },
    {
      id: 30,
      levelId: 2,
      sentence: "The house is situated in a very quiet ______.",
      word: "NEIGHBOUR",
      correctAnswer: "neighbourhood",
      explanation: "Después del adjetivo 'quiet' y del artículo 'a', necesitamos un **sustantivo**. Para referirse al barrio o vecindario (área), el sustantivo correspondiente es 'neighbourhood'."
    },
    {
      id: 31,
      levelId: 4,
      sentence: "It is ______ to drive a car without a valid license.",
      word: "LEGAL",
      correctAnswer: "illegal",
      explanation: "Después de 'It is [adjetivo] to...', necesitamos un **adjetivo**. Conducir sin licencia está prohibido por ley, por lo que requerimos la forma negativa. Empieza con 'l', por lo que añadimos 'il-': 'illegal'."
    },
    {
      id: 32,
      levelId: 3,
      sentence: "The software will automatically ______ the screen brightness depending on the ambient light.",
      word: "ADJUST",
      correctAnswer: "adjust",
      explanation: "Después del verbo auxiliar/modal 'will' y del adverbio 'automatically', necesitamos un **verbo en su forma base**. La palabra base 'adjust' ya es un verbo (ajustar)."
    },
    {
      id: 33,
      levelId: 5,
      sentence: "The search team has still not found the wreckage, so the plane's location remains ______.",
      word: "KNOW",
      correctAnswer: "unknown",
      explanation: "Después del verbo de estado 'remains' (permanece), requerimos un **adjetivo**. Al no haberlo encontrado, la ubicación no se conoce. El adjetivo negativo de 'know' es 'unknown' (desconocida)."
    },
    {
      id: 34,
      levelId: 2,
      sentence: "Winning the competition was a truly ______ achievement for the young athlete.",
      word: "REMARK",
      correctAnswer: "remarkable",
      explanation: "Antes del sustantivo 'achievement', requerimos un **adjetivo**. El adjetivo derivado de 'remark' que significa extraordinario o digno de mención es 'remarkable'."
    },
    {
      id: 35,
      levelId: 4,
      sentence: "Many people are currently ______ due to the economic downturn.",
      word: "EMPLOY",
      correctAnswer: "unemployed",
      explanation: "Después de 'are currently', requerimos un **adjetivo** que describa el estado de las personas. La crisis económica provoca que la gente no tenga trabajo. La forma adjetiva negativa es 'unemployed' (desempleados)."
    },
    {
      id: 36,
      levelId: 5,
      sentence: "His assistance was ______; we couldn't have completed the project without him.",
      word: "VALUE",
      correctAnswer: "invaluable",
      explanation: "El conector 'we couldn't have completed... without him' indica que su ayuda fue sumamente valiosa (invalorable). En inglés, el adjetivo para esto es 'invaluable' (¡no confundir con 'valueless', que significa inútil/sin valor!)."
    },
    {
      id: 37,
      levelId: 1,
      sentence: "You must check the ______ of the information before you publish it.",
      word: "ACCURATE",
      correctAnswer: "accuracy",
      explanation: "El artículo 'the' y el conector 'of' nos indican que requerimos un **sustantivo**. El sustantivo derivado de 'accurate' (preciso) es 'accuracy' (precisión/exactitud)."
    },
    {
      id: 38,
      levelId: 4,
      sentence: "It was highly ______ of you to leave your bag unattended in the airport.",
      word: "RESPONSIBLE",
      correctAnswer: "irresponsible",
      explanation: "Necesitamos un **adjetivo** después de 'It was highly... of you'. Dejar la maleta sola en un aeropuerto es una irresponsabilidad. Usamos el prefijo 'ir-' ante la raíz 'responsible': 'irresponsible'."
    },
    {
      id: 39,
      levelId: 5,
      sentence: "The long flight caused her feet to swell, so she felt very ______ in her tight shoes.",
      word: "COMFORT",
      correctAnswer: "uncomfortable",
      explanation: "Después de 'felt very', necesitamos un **adjetivo**. Al estar hinchados sus pies en zapatos ajustados, se sintió incómoda. El adjetivo negativo es 'uncomfortable'."
    },
    {
      id: 40,
      levelId: 3,
      sentence: "The new bypass will help to ______ the journey time to the airport.",
      word: "SHORT",
      correctAnswer: "shorten",
      explanation: "Después de 'help to', necesitamos un **verbo en infinitivo**. A partir del adjetivo 'short' (corto), creamos el verbo añadiendo el sufijo '-en': 'shorten' (acortar)."
    }
  ]
};
