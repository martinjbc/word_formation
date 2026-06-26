from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    NextPageTemplate,
    PageBreak,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parent
OUT = ROOT / "intermedio10_repaso" / "output"
SRC = ROOT / "intermedio10_repaso" / "sources"
OUT.mkdir(parents=True, exist_ok=True)
SRC.mkdir(parents=True, exist_ok=True)


PALETTE = {
    "navy": colors.HexColor("#12324a"),
    "blue": colors.HexColor("#dcecf7"),
    "green": colors.HexColor("#e2f2e7"),
    "yellow": colors.HexColor("#fff2cc"),
    "red": colors.HexColor("#f7dddd"),
    "gray": colors.HexColor("#f4f6f8"),
    "ink": colors.HexColor("#1f2933"),
    "line": colors.HexColor("#bac7d5"),
}


styles = getSampleStyleSheet()
styles.add(
    ParagraphStyle(
        name="CoverTitle",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=29,
        textColor=PALETTE["navy"],
        alignment=TA_CENTER,
        spaceAfter=16,
    )
)
styles.add(
    ParagraphStyle(
        name="CoverSub",
        parent=styles["Normal"],
        fontSize=12,
        leading=16,
        textColor=PALETTE["ink"],
        alignment=TA_CENTER,
        spaceAfter=8,
    )
)
styles.add(
    ParagraphStyle(
        name="H1x",
        parent=styles["Heading1"],
        fontName="Helvetica-Bold",
        fontSize=15,
        leading=18,
        textColor=PALETTE["navy"],
        spaceBefore=6,
        spaceAfter=6,
    )
)
styles.add(
    ParagraphStyle(
        name="H2x",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=13,
        textColor=PALETTE["navy"],
        spaceBefore=5,
        spaceAfter=4,
    )
)
styles.add(
    ParagraphStyle(
        name="Bodyx",
        parent=styles["BodyText"],
        fontSize=8.6,
        leading=11,
        textColor=PALETTE["ink"],
        spaceAfter=3,
    )
)
styles.add(
    ParagraphStyle(
        name="Smallx",
        parent=styles["BodyText"],
        fontSize=7.5,
        leading=9.2,
        textColor=PALETTE["ink"],
    )
)
styles.add(
    ParagraphStyle(
        name="Tinyx",
        parent=styles["BodyText"],
        fontSize=6.8,
        leading=8.1,
        textColor=PALETTE["ink"],
    )
)
styles.add(
    ParagraphStyle(
        name="Headerx",
        parent=styles["BodyText"],
        fontName="Helvetica-Bold",
        fontSize=7.6,
        leading=9.2,
        textColor=colors.white,
    )
)


def esc(text):
    return (
        str(text)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace("\n", "<br/>")
    )


def p(text, style="Bodyx"):
    return Paragraph(esc(text), styles[style])


def bullet(text):
    return p("- " + text, "Bodyx")


def box(title, body, color="blue"):
    data = [[p(title, "Smallx")], [p(body, "Bodyx")]]
    t = Table(data, colWidths=[17.2 * cm], hAlign="LEFT")
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PALETTE[color]),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("BOX", (0, 0), (-1, -1), 0.7, PALETTE["line"]),
                ("INNERGRID", (0, 0), (-1, -1), 0.3, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 6),
                ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                ("TOPPADDING", (0, 0), (-1, -1), 4),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return KeepTogether([t, Spacer(1, 5)])


def table(headers, rows, widths=None, tiny=False):
    style_name = "Tinyx" if tiny else "Smallx"
    data = [[p(h, "Headerx") for h in headers]]
    data += [[p(c, style_name) for c in row] for row in rows]
    if widths is None:
        widths = [17.2 * cm / len(headers)] * len(headers)
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="LEFT")
    t.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PALETTE["navy"]),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("BACKGROUND", (0, 1), (-1, -1), colors.white),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALETTE["gray"]]),
                ("GRID", (0, 0), (-1, -1), 0.25, PALETTE["line"]),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 4),
                ("RIGHTPADDING", (0, 0), (-1, -1), 4),
                ("TOPPADDING", (0, 0), (-1, -1), 3),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
            ]
        )
    )
    return KeepTogether([t, Spacer(1, 6)])


def header_footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(PALETTE["ink"])
    canvas.drawString(1.4 * cm, 1.0 * cm, doc.title_text)
    canvas.drawRightString(19.6 * cm, 1.0 * cm, f"Pagina {doc.page}")
    canvas.restoreState()


def build_pdf(filename, title, subtitle, flow):
    doc = BaseDocTemplate(
        str(OUT / filename),
        pagesize=A4,
        rightMargin=1.4 * cm,
        leftMargin=1.4 * cm,
        topMargin=1.25 * cm,
        bottomMargin=1.35 * cm,
    )
    doc.title_text = title
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="normal", frames=frame, onPage=header_footer)])
    story = [
        Spacer(1, 2.3 * cm),
        Paragraph(esc(title), styles["CoverTitle"]),
        Paragraph(esc(subtitle), styles["CoverSub"]),
        Spacer(1, 0.8 * cm),
        box(
            "Como usar este PDF",
            "Lee primero las cajas de Exam Tip y Common Mistake. Luego revisa las tablas. Si tienes poco tiempo, ve directo a 'Lo que debes memorizar'.",
            "yellow",
        ),
        PageBreak(),
    ]
    story.extend(flow)
    doc.build(story)


def write_md(name, title, sections):
    lines = [f"# {title}", ""]
    for heading, body in sections:
        lines += [f"## {heading}", "", body.strip(), ""]
    (SRC / name).write_text("\n".join(lines), encoding="utf-8")


def q_block(num, question, answer, why, wrong, vocab=None, tip=None):
    items = [
        p(f"Pregunta {num}", "H2x"),
        box("Pregunta", question, "gray"),
        box("Respuesta", answer, "green"),
        box("Por que es correcta", why, "blue"),
    ]
    if wrong:
        items.append(box("Por que las otras no encajan", wrong, "red"))
    if vocab:
        items.append(table(["Ingles", "Espanol", "Uso / nota"], vocab, widths=[4.2 * cm, 4.2 * cm, 8.8 * cm]))
    if tip:
        items.append(box("Exam Tip", tip, "yellow"))
    return KeepTogether(items)


common_intro = [
    p("Mapa del simulacro", "H1x"),
    table(
        ["Parte", "Tema", "Que debes reconocer rapido"],
        [
            ["1", "Vocabulary multiple choice", "Collocations, compound adjectives, adjetivos de personalidad y reviews."],
            ["2", "Open cloze", "Preposiciones fijas: verb + prep, adjective + prep, expression + prep."],
            ["3-6", "Key word transformation", "Modal deduction: must, can't, might + infinitive / have + past participle."],
            ["7", "Relative pronouns", "who, which, whose para persona, cosa y posesion."],
            ["8", "Participle clauses", "Watching, Injured, Not wanting, Feeling, Having lost."],
            ["9-14", "Word formation / prefixes", "lost property, accidentally, suspect, semi-, bi-, self-."],
            ["15-18", "Reviews / useful expressions", "Order the words sin romper la estructura de la frase."],
        ],
        widths=[1.8 * cm, 5.0 * cm, 10.4 * cm],
    ),
    box(
        "Prioridad para manana",
        "1) Open cloze y preposiciones. 2) Modals of deduction. 3) Participles. 4) Reviews. 5) Vocabulary y prefixes. Eso cubre la mayoria del simulacro.",
        "yellow",
    ),
]


vocab_flow = [
    p("Capitulo 1: Vocabulary en contexto", "H1x"),
    box(
        "Que evalua",
        "No basta saber la traduccion. Debes ver la palabra antes y despues del espacio. En este texto, casi todo se resuelve por collocation: family-focused play, self-centred person, loyal friend, conventional drama.",
        "blue",
    ),
]

vocab_questions = [
    (
        1,
        "This family-_____ play tells a story about a stubborn mother and her daughter.",
        "D) focused. family-focused = centrado en la familia.",
        "focused forma un compound adjective natural con family. Describe el tema central de la obra: la familia.",
        "minded suele ir en open-minded; confident significa seguro de si mismo; informed significa informado. Ninguna forma una expresion natural aqui.",
        [
            ["family-focused", "centrado en la familia", "Compound adjective: family + focused."],
            ["stubborn", "terco / obstinado", "Persona que no cambia de opinion facilmente."],
            ["play", "obra de teatro", "No confundir con verb play = jugar / tocar."],
        ],
        "Cuando veas palabra + guion, piensa en compound adjectives: family-friendly, well-known, open-minded.",
    ),
    (
        2,
        "The mother is arrogant and _____.",
        "B) self-centred. self-centred = egocentrica / centrada en si misma.",
        "arrogant and self-centred es una combinacion muy natural para describir una personalidad negativa.",
        "easy-going = relajado; open-minded = de mente abierta; tech-savvy = habil con tecnologia. Son positivos o no tienen relacion con arrogant.",
        [
            ["arrogant", "arrogante", "Cree que es superior."],
            ["self-centred", "egocentrico", "Self = uno mismo; centred = centrado."],
            ["easy-going", "relajado", "Persona tranquila y flexible."],
            ["open-minded", "de mente abierta", "Acepta ideas diferentes."],
            ["tech-savvy", "habil con tecnologia", "Bueno usando tecnologia."],
        ],
        "Para personality adjectives, revisa si el tono es positivo o negativo. Arrogant pide otra palabra negativa.",
    ),
    (
        3,
        "The performances were incredible ... which made the play very _____.",
        "A) realistic. realistic = realista.",
        "Las actuaciones hicieron que los personajes parecieran reales. Por eso realistic encaja con performances y acting.",
        "responsible describe personas; well educated describe nivel de educacion; stubborn describe personalidad, no una obra.",
        [
            ["performance", "actuacion", "En teatro, cine o musica."],
            ["bring to life", "dar vida", "The actors brought the characters to life."],
            ["realistic", "realista", "Parece verdadero o creible."],
            ["crucial", "crucial", "Muy importante."],
        ],
        "En reviews, acting/performance suele combinar con realistic, powerful, moving, convincing.",
    ),
    (
        4,
        "The daughter's _____ friend ... adds interesting twists to the story.",
        "B) loyal. loyal friend = amigo leal.",
        "loyal friend es una collocation frecuente. El amigo apoya a la hija y la hace pensar en una vida mejor.",
        "glossy = brillante; futile = inutil; dense = denso. No describen bien a friend en este contexto.",
        [
            ["daughter", "hija", "Female child."],
            ["loyal", "leal", "Fiel, que apoya."],
            ["twist", "giro inesperado", "Cambio interesante en una historia."],
            ["futile", "inutil", "Sin resultado util."],
            ["dense", "denso", "Texto dificil o material compacto."],
        ],
        "Aprende collocations completas: loyal friend, close friend, childhood friend, trusted friend.",
    ),
    (
        5,
        "This is not a _____ drama; it mixes dark humor with deep emotions.",
        "B) conventional. conventional drama = drama convencional.",
        "La pista es 'it mixes dark humor with deep emotions'. Si mezcla estilos, no es convencional.",
        "funny y hilarious son casi lo contrario de drama serio; well informed describe una persona o texto, no un drama.",
        [
            ["conventional", "convencional", "Normal, tradicional, esperado."],
            ["dark humor", "humor negro", "Humor sobre temas serios o incomodos."],
            ["deep emotions", "emociones profundas", "Sentimientos intensos."],
            ["hilarious", "graciosisimo", "Muy divertido."],
        ],
        "Cuando una frase empieza con 'not a...', busca una palabra que contraste con la explicacion posterior.",
    ),
    (
        6,
        "The play is _____ of toxic family relationships, loneliness, and small-town life.",
        "C) insightful. insightful = profundo / perspicaz.",
        "Una obra insightful ayuda a entender mejor un tema. Aqui analiza relaciones toxicas, soledad y limites de pueblo pequeno.",
        "critical podria sonar posible, pero seria 'critical of' en tono de critica. thoughtful = reflexivo; encouraging = alentador. La mejor opcion para reseña positiva es insightful.",
        [
            ["insightful", "perspicaz / profundo", "Da comprension de un tema."],
            ["toxic relationship", "relacion toxica", "Relacion danina."],
            ["loneliness", "soledad", "Estado de sentirse solo."],
            ["small-town life", "vida de pueblo pequeno", "Vida con oportunidades limitadas."],
        ],
        "En reviews, memoriza: insightful about, thought-provoking, moving, well-written, powerful.",
    ),
]
for args in vocab_questions:
    vocab_flow.append(q_block(*args))

vocab_flow += [
    p("Vocabulario extra para reviews y teatro", "H1x"),
    table(
        ["Ingles", "Espanol", "Ejemplo util"],
        [
            ["playwright", "dramaturgo", "The playwright wrote a powerful story."],
            ["audience", "publico", "The audience loved the performance."],
            ["stage", "escenario", "The actors were on stage for two hours."],
            ["lead actress", "actriz principal", "The lead actress was incredible."],
            ["supporting actor", "actor secundario", "The supporting actor added humor."],
            ["plot", "trama", "The plot was easy to follow."],
            ["character", "personaje", "The characters felt realistic."],
            ["setting", "ambientacion", "The setting is a small town."],
            ["moving", "conmovedor", "It was a moving story."],
            ["thought-provoking", "que te hace pensar", "The ending was thought-provoking."],
            ["well-written", "bien escrito", "It was a well-written play."],
            ["predictable", "predecible", "The ending was predictable."],
        ],
        widths=[4.2 * cm, 4.5 * cm, 8.5 * cm],
    ),
    box(
        "Lo que debes memorizar",
        "family-focused, self-centred, realistic performance, loyal friend, conventional drama, insightful, toxic relationships, loneliness, dark humor, deep emotions, bring characters to life.",
        "yellow",
    ),
]


open_flow = [
    p("Capitulo 2: Open Cloze", "H1x"),
    box(
        "Regla principal",
        "En Open Cloze no adivines palabras sueltas. Memoriza bloques completos: prepare for, expose yourself to, insist on, impressed by, enthusiastic about, characteristic of.",
        "blue",
    ),
    table(
        ["#", "Frase del examen", "Respuesta", "Por que"],
        [
            ["1", "You can count on ___ to find useful materials.", "it", "count on it to + verb = contar con ello para... / estar seguro de que servira para..."],
            ["2", "expose yourself ___ different types of texts", "to", "expose yourself to = exponerte a."],
            ["3", "insist ___ practicing", "on", "insist on + -ing = insistir en hacer algo."],
            ["4", "impressed ___ the number of websites", "by", "impressed by = impresionado por."],
            ["5", "enthusiastic ___ learning English", "about", "enthusiastic about + noun/-ing = entusiasmado con."],
            ["6", "characteristic ___ a good learning community", "of", "characteristic of = caracteristico de."],
        ],
        widths=[1 * cm, 6.4 * cm, 2.2 * cm, 7.6 * cm],
    ),
    p("Explicacion pregunta por pregunta", "H1x"),
]

open_details = [
    ("count on it to", "contar con ello para / confiar en que servira para", "You can count on it to find useful materials.", "Puedes contar con ello para encontrar materiales utiles.", "No escribir 'count on to find'. Despues de count on necesitas objeto: it, me, him, them."),
    ("expose yourself to", "exponerte a", "Expose yourself to different types of texts.", "Exponte a diferentes tipos de textos.", "No usar 'expose yourself with'. La preposicion fija es to."),
    ("insist on + -ing", "insistir en hacer algo", "You should insist on practicing.", "Deberias insistir en practicar.", "Despues de on usa verbo con -ing: practicing, studying, reading."),
    ("impressed by", "impresionado por", "I was impressed by the number of websites.", "Me impresiono la cantidad de paginas web.", "Tambien existe impressed with, pero by encaja mejor cuando algo causa la impresion."),
    ("enthusiastic about", "entusiasmado con / por", "She is enthusiastic about learning English.", "Ella esta entusiasmada con aprender ingles.", "No usar 'enthusiastic for learning' en este patron."),
    ("characteristic of", "caracteristico de", "Helping each other is characteristic of a good community.", "Ayudarse entre si es caracteristico de una buena comunidad.", "El adjetivo/nombre characteristic pide of."),
]
for expr, es, ex, tr, mistake in open_details:
    open_flow.append(
        KeepTogether(
            [
                p(expr, "H2x"),
                table(
                    ["Expresion", "Espanol", "Ejemplo", "Traduccion"],
                    [[expr, es, ex, tr]],
                    widths=[3.8 * cm, 4.0 * cm, 5.2 * cm, 4.2 * cm],
                ),
                box("Common Mistake", mistake, "red"),
            ]
        )
    )

open_flow += [
    p("Lista de preposiciones que mas conviene memorizar", "H1x"),
    table(
        ["Adjective + prep", "Verb + prep", "Expression"],
        [
            ["interested in = interesado en", "listen to = escuchar a", "take part in = participar en"],
            ["good at = bueno en", "depend on = depender de", "look forward to + -ing = esperar con ganas"],
            ["afraid of = tener miedo de", "believe in = creer en", "as well as = ademas de"],
            ["similar to = similar a", "apologise for = disculparse por", "in order to = para"],
            ["different from = diferente de", "suffer from = sufrir de", "on purpose = a proposito"],
            ["proud of = orgulloso de", "pay for = pagar por", "by accident = por accidente"],
            ["responsible for = responsable de", "prepare for = prepararse para", "at the weekend = el fin de semana"],
            ["famous for = famoso por", "insist on = insistir en", "in both languages = en ambos idiomas"],
        ],
        widths=[5.7 * cm, 5.7 * cm, 5.8 * cm],
        tiny=True,
    ),
    box(
        "Lo que debes memorizar",
        "prepare for, count on it to, expose yourself to, insist on + -ing, impressed by, enthusiastic about, characteristic of. Repasalo como bloques, no como palabras sueltas.",
        "yellow",
    ),
]


kwt_flow = [
    p("Capitulo 3: Key Word Transformation", "H1x"),
    box(
        "Regla de oro",
        "No cambies la palabra dada. Debes completar con 2 a 5 palabras. En este simulacro, el patron central es modal deduction: must, can't, might.",
        "blue",
    ),
    table(
        ["Idea en espanol", "Presente", "Pasado", "Ejemplo"],
        [
            ["Estoy seguro de que...", "must + verb", "must have + past participle", "She must be home. / She must have seen it."],
            ["Es imposible que...", "can't + verb", "can't have + past participle", "He can't be late. / He can't have forgotten."],
            ["Quizas...", "might/may/could + verb", "might/may/could have + past participle", "They might know. / They might have left."],
        ],
        widths=[4.0 * cm, 4.3 * cm, 4.9 * cm, 4.0 * cm],
    ),
]

kwt_questions = [
    (
        "I'm sure Georgia saw the message because she replied immediately.",
        "MUST",
        "Georgia must have seen the message because she replied immediately.",
        "saw es pasado. 'I'm sure' indica certeza. Por eso: must have + past participle.",
        "must saw / must seen / must have saw. El participio correcto de see es seen.",
    ),
    (
        "It is impossible that Peter forgot about the exam date.",
        "HAVE",
        "John/Peter can't have forgotten about the exam date.",
        "It is impossible that... se transforma en can't have + past participle cuando hablamos del pasado.",
        "El PDF cambia Peter por John. Si aparece asi en el examen, sigue la segunda oracion, pero reconoce que hay inconsistencia de nombres.",
    ),
    (
        "Perhaps Lois knows how to deal with the key word transformation exercise.",
        "MIGHT",
        "James/Lois might know how to deal with the key word transformation exercise.",
        "Perhaps = tal vez. En presente usamos might + base verb: might know.",
        "No usar might knows. Despues de modal, el verbo va en forma base.",
    ),
    (
        "I'm sure Rose is here because her car is outside.",
        "MUST",
        "Rose must be here because her car is outside.",
        "is here esta en presente. 'I'm sure' indica deduccion fuerte. Por eso must be.",
        "No usar must have been, porque eso seria pasado: debio haber estado.",
    ),
]
for i, (original, key, answer, why, mistake) in enumerate(kwt_questions, 1):
    kwt_flow.append(
        q_block(
            i,
            f"Original: {original}\nKey word: {key}",
            answer,
            why,
            mistake,
            None,
            "Detecta primero el tiempo: presente = modal + verb; pasado = modal + have + past participle.",
        )
    )

kwt_flow += [
    p("Patrones utiles para practicar", "H1x"),
    table(
        ["Frase pista", "Transformacion", "Ejemplo"],
        [
            ["I'm sure...", "must", "I'm sure she is tired. -> She must be tired."],
            ["I'm sure... pasado", "must have", "I'm sure he left. -> He must have left."],
            ["It is impossible...", "can't", "It is impossible he is here. -> He can't be here."],
            ["It is impossible... pasado", "can't have", "It is impossible she forgot. -> She can't have forgotten."],
            ["Perhaps / Maybe", "might / may / could", "Perhaps they know. -> They might know."],
            ["Perhaps / Maybe pasado", "might have", "Perhaps he missed the bus. -> He might have missed the bus."],
        ],
        widths=[4.0 * cm, 3.8 * cm, 9.4 * cm],
    ),
    box("Lo que debes memorizar", "must have seen, can't have forgotten, might know how to, must be here. Y sobre todo: modal + base verb; modal + have + past participle.", "yellow"),
]


rel_flow = [
    p("Capitulo 4: Relative Pronouns", "H1x"),
    table(
        ["Pronombre", "Uso", "Ejemplo", "Traduccion"],
        [
            ["who", "persona", "The lady who works here is the Head.", "La senora que trabaja aqui es la jefa."],
            ["which", "cosa / animal", "I watched a series which was interesting.", "Vi una serie que fue interesante."],
            ["whose", "posesion", "The author whose book you borrowed is famous.", "El autor cuyo libro prestaste es famoso."],
            ["that", "persona o cosa en defining clauses", "The student that passed was happy.", "El estudiante que aprobo estaba feliz."],
            ["where", "lugar", "The school where I study is near.", "La escuela donde estudio esta cerca."],
        ],
        widths=[2.6 * cm, 3.1 * cm, 6.3 * cm, 5.2 * cm],
    ),
    box("Atajo", "Si despues del espacio viene un sustantivo, probablemente necesitas whose: whose result, whose book, whose car.", "yellow"),
    p("Respuestas del simulacro", "H1x"),
    table(
        ["#", "Oracion", "Respuesta", "Por que"],
        [
            ["1", "That's the young man ___ B2 First result was the best.", "whose", "result pertenece al joven."],
            ["2", "I don't like students ___ don't do their homework.", "who", "students son personas."],
            ["3", "I watched a TV series ___ was really interesting.", "which", "series es cosa."],
            ["4", "The lady ___ works here is the Head...", "who", "lady es persona."],
            ["5", "The author ___ book you borrowed is very famous.", "whose", "book pertenece al autor."],
        ],
        widths=[1 * cm, 7.3 * cm, 2.4 * cm, 6.5 * cm],
    ),
    box("Common Mistake", "No confundas who's con whose. who's = who is / who has. whose = cuyo / cuya / de quien.", "red"),
    box("Lo que debes memorizar", "Persona = who. Cosa = which. Posesion = whose. Si dudas entre who y that, who suena mas limpio para personas en examen.", "yellow"),
]


part_flow = [
    p("Capitulo 5: Participle Clauses", "H1x"),
    box(
        "Para que sirven",
        "Reducen oraciones. En vez de 'While she was watching TV...', puedes escribir 'Watching TV...'. En el examen debes elegir la forma correcta del verbo.",
        "blue",
    ),
    table(
        ["Forma", "Cuanto se usa", "Ejemplo", "Idea"],
        [
            ["-ing", "accion activa o simultanea", "Watching TV, she heard a noise.", "Mientras veia TV."],
            ["Past participle", "sentido pasivo", "Injured in the accident, the boy...", "El chico que fue herido."],
            ["Not + -ing", "negativo", "Not wanting to be late, I took a taxi.", "Como no queria llegar tarde."],
            ["Having + past participle", "accion anterior", "Having lost his passport, he went to the embassy.", "Despues de haber perdido."],
        ],
        widths=[3.4 * cm, 4.1 * cm, 5.6 * cm, 4.1 * cm],
    ),
    p("Respuestas del simulacro", "H1x"),
    table(
        ["#", "Oracion", "Respuesta", "Explicacion"],
        [
            ["1", "(WATCH) TV, she suddenly heard a loud noise outside.", "Watching", "Accion activa y simultanea: mientras veia TV."],
            ["2", "The boy (INJURE) in the accident was taken to the hospital.", "Injured", "Pasiva: the boy who was injured."],
            ["3", "(NOT WANT) to be late..., I took a taxi.", "Not wanting", "Negativo + -ing: como no queria llegar tarde."],
            ["4", "(FEEL) tired, she decided to go to bed early.", "Feeling", "Causa: como se sentia cansada."],
            ["5", "(LOSE) his passport, he had to go to the embassy.", "Having lost", "Primero perdio el pasaporte; despues fue a la embajada."],
        ],
        widths=[1 * cm, 7.1 * cm, 2.5 * cm, 6.6 * cm],
    ),
    box("Common Mistake", "No uses 'Having lost' para acciones simultaneas. Usalo solo cuando una accion ocurre antes que la otra.", "red"),
    box("Lo que debes memorizar", "Watching = while she was watching. Injured = who was injured. Not wanting = because I did not want. Feeling = because she felt. Having lost = after he had lost.", "yellow"),
]


prefix_flow = [
    p("Capitulo 6: Prefixes y word formation", "H1x"),
    box("Que evalua", "Te dan parte de una palabra y debes completar con la forma natural. Muchas respuestas son collocations o prefijos: lost property office, semi-retired, bilingual, self-interest.", "blue"),
    table(
        ["#", "Pregunta", "Respuesta", "Explicacion"],
        [
            ["9", "___ property office", "lost", "lost property office = oficina de objetos perdidos."],
            ["10", "I ___ went to the wrong auditorium.", "accidentally", "Fue por accidente. Adverbio terminado en -ly."],
            ["11", "I ___ that the Cultural Station will be crowded.", "suspect", "suspect = sospechar / creer sin estar seguro."],
            ["12", "___-retired musician", "semi", "semi-retired = semi-retirado."],
            ["13", "___lingual tour guide", "bi", "bilingual = bilingue, habla dos idiomas."],
            ["14", "___-interest", "self", "self-interest = interes propio."],
        ],
        widths=[1 * cm, 6.0 * cm, 2.6 * cm, 7.6 * cm],
    ),
    p("Prefijos importantes", "H1x"),
    table(
        ["Prefijo", "Significado", "Ejemplos", "Espanol"],
        [
            ["un-", "opuesto", "unhappy, unfair, unclear", "infeliz, injusto, poco claro"],
            ["in-/im-/il-/ir-", "opuesto", "incorrect, impossible, illegal, irregular", "incorrecto, imposible, ilegal, irregular"],
            ["dis-", "opuesto / separar", "disagree, dishonest, disconnect", "discrepar, deshonesto, desconectar"],
            ["mis-", "mal / incorrectamente", "misunderstand, mislead", "malentender, enganar"],
            ["over-", "demasiado", "overcook, overcrowded", "cocinar demasiado, abarrotado"],
            ["under-", "insuficiente", "underpaid, underestimate", "mal pagado, subestimar"],
            ["bi-", "dos", "bilingual, bicycle", "bilingue, bicicleta"],
            ["semi-", "medio / parcialmente", "semi-retired, semi-final", "semi-retirado, semifinal"],
            ["self-", "uno mismo", "self-interest, self-centred", "interes propio, egocentrico"],
            ["inter-", "entre", "international, interact", "internacional, interactuar"],
            ["multi-", "muchos", "multicultural, multilingual", "multicultural, multilingue"],
        ],
        widths=[2.2 * cm, 3.4 * cm, 5.7 * cm, 5.9 * cm],
        tiny=True,
    ),
    box("Common Mistake", "lost property no significa 'propiedad perdida' palabra por palabra en espanol; como expresion equivale a objetos perdidos.", "red"),
    box("Lo que debes memorizar", "lost property office, accidentally, suspect, semi-retired, bilingual, self-interest. Para prefijos negativos: impossible, illegal, irregular, dishonest, unfair.", "yellow"),
]


review_flow = [
    p("Capitulo 7: Reviews y ordenar palabras", "H1x"),
    box(
        "Que evalua",
        "Estas preguntas no son solo gramatica: son expresiones prefabricadas de opinion. Si las memorizas completas, las ordenas rapido y tambien las usas en Writing/Speaking.",
        "blue",
    ),
    table(
        ["#", "Palabras", "Respuesta correcta", "Traduccion / nota"],
        [
            ["15", "JUST / WAS / WHAT / THAT'S / THINKING / I", "That's just what I was thinking.", "Eso es justo lo que estaba pensando."],
            ["16", "WORTH / WAS / WELL / ATTENDING / IT", "It was well worth attending.", "Valio mucho la pena asistir."],
            ["17", "DISAGREE / THAT / ANYONE / WOULD / WITH", "that anyone would disagree with", "Despues de 'I don't think' va that como conector. No pongas that al final."],
            ["18", "LIKED / ABOUT / WHAT / PARTICULARLY / IT / I", "What I particularly liked about it", "Lo que particularmente me gusto de eso..."],
        ],
        widths=[1 * cm, 5.4 * cm, 5.2 * cm, 5.6 * cm],
    ),
    box(
        "Pregunta 17 explicada",
        "La frase completa es: I don't think that anyone would disagree with. El 'that' conecta con 'I don't think'. Tu respuesta 'anyone would disagree with that' cambia la estructura: ahi that funciona como objeto final, pero el ejercicio esperaba el conector despues de think.",
        "yellow",
    ),
    p("Expresiones de review para memorizar", "H1x"),
    table(
        ["Expresion", "Espanol", "Uso"],
        [
            ["It was well worth attending.", "Valio mucho la pena asistir.", "Recomendacion positiva."],
            ["It was well worth seeing.", "Valio mucho la pena verla.", "Obra, pelicula, exposicion."],
            ["What I particularly liked about it was...", "Lo que particularmente me gusto fue...", "Introducir punto fuerte."],
            ["The highlight was...", "Lo mejor fue...", "Mencionar lo mas destacado."],
            ["I was really impressed by...", "Me impresiono mucho...", "Opinion positiva."],
            ["It didn't live up to my expectations.", "No estuvo a la altura de mis expectativas.", "Opinion negativa."],
            ["I wasn't that impressed.", "No me impresiono tanto.", "Critica moderada."],
            ["The performance was outstanding.", "La actuacion fue sobresaliente.", "Elogio fuerte."],
            ["The plot was predictable.", "La trama fue predecible.", "Critica."],
            ["The ending was moving.", "El final fue conmovedor.", "Respuesta emocional."],
            ["I highly recommend it.", "La recomiendo mucho.", "Cierre positivo."],
            ["I would definitely go again.", "Definitivamente iria otra vez.", "Recomendacion personal."],
            ["It was a bit disappointing.", "Fue un poco decepcionante.", "Critica suave."],
            ["The actors brought the story to life.", "Los actores dieron vida a la historia.", "Teatro/cine."],
            ["There was a great atmosphere.", "Habia un gran ambiente.", "Evento cultural."],
        ],
        widths=[6.0 * cm, 5.6 * cm, 5.6 * cm],
        tiny=True,
    ),
    p("Plantilla corta para Writing: review", "H1x"),
    box(
        "Modelo",
        "I recently attended a play at the Britanico Theatre. What I particularly liked about it was the lead actress's performance. The plot was thought-provoking and the actors brought the story to life. It was well worth attending, and I would definitely recommend it.",
        "green",
    ),
    box("Lo que debes memorizar", "That's just what I was thinking. It was well worth attending. I don't think that anyone would disagree with. What I particularly liked about it was...", "yellow"),
]

teacher_flow = [
    p("Capitulo 8: Lo que aviso el profesor", "H1x"),
    box(
        "Importante",
        "Tus capturas muestran dos formatos que probablemente vendran: 1) Word Formation con una palabra base a la derecha. 2) Key Word Transformation usando una palabra obligatoria. Estos ejercicios se ganan reconociendo patrones, no traduciendo palabra por palabra.",
        "yellow",
    ),
    p("A. Word Formation: correct form of the words", "H1x"),
    box(
        "Como resolverlo",
        "Mira la palabra antes y despues del espacio. Decide si necesitas adjective, noun, adverb o verb. Luego transforma la palabra base: PREFER -> preferable, SYMPATHY -> sympathetic, CONVENTION -> conventional.",
        "blue",
    ),
    table(
        ["#", "Contexto de la captura", "Word given", "Respuesta", "Por que"],
        [
            ["1", "it was ___ to have a parent...", "PREFER", "preferable", "Despues de was necesitas adjective. preferable = preferible."],
            ["2", "who seemed to be ___", "SYMPATHY", "sympathetic", "Despues de be necesitas adjective. sympathetic = comprensivo / empatico."],
            ["3", "parents should be ___, strict...", "CONVENTION", "conventional", "Adjective para describir parents. conventional = convencional / tradicional."],
            ["4", "respect their children's ___", "PRIVATE", "privacy", "Despues de possessive children's necesitas noun. privacy = privacidad."],
            ["5", "Be ___ if you don't agree...", "CRITICISM", "critical", "Despues de be necesitas adjective. critical = critico."],
            ["6", "teenagers are usually ___ about everything", "FUSS", "fussy", "Adjective. fussy = quisquilloso / exigente / que se queja por detalles."],
            ["7", "if they are ___ about the media", "ENTHUSIASM", "enthusiastic", "Adjective + about. enthusiastic = entusiasmado."],
        ],
        widths=[0.8 * cm, 5.2 * cm, 2.6 * cm, 2.8 * cm, 5.8 * cm],
        tiny=True,
    ),
    p("Familias de palabras de la captura", "H1x"),
    table(
        ["Base", "Noun", "Adjective", "Adverb", "Espanol clave"],
        [
            ["prefer", "preference", "preferable / preferred", "preferably", "preferir / preferencia / preferible"],
            ["sympathy", "sympathy", "sympathetic", "sympathetically", "simpatia / empatia / comprensivo"],
            ["convention", "convention", "conventional", "conventionally", "convencion / convencional"],
            ["private", "privacy", "private", "privately", "privado / privacidad"],
            ["criticise", "criticism", "critical", "critically", "criticar / critica / critico"],
            ["fuss", "fuss", "fussy", "-", "queja / quisquilloso"],
            ["enthusiasm", "enthusiasm", "enthusiastic", "enthusiastically", "entusiasmo / entusiasmado"],
        ],
        widths=[2.6 * cm, 3.0 * cm, 4.2 * cm, 3.4 * cm, 4.0 * cm],
        tiny=True,
    ),
    box(
        "Common Mistake",
        "No pongas la palabra base sin cambiarla. Ejemplo: 'they are enthusiasm' es incorrecto porque despues de are necesitas adjective: they are enthusiastic.",
        "red",
    ),
    p("Sufijos que debes reconocer rapido", "H1x"),
    table(
        ["Necesitas", "Sufijos frecuentes", "Ejemplos", "Traduccion"],
        [
            ["Adjective", "-able / -ible", "preferable, responsible, possible", "preferible, responsable, posible"],
            ["Adjective", "-ic / -ical", "sympathetic, critical, practical", "comprensivo, critico, practico"],
            ["Adjective", "-al", "conventional, personal, cultural", "convencional, personal, cultural"],
            ["Adjective", "-y", "fussy, noisy, risky", "quisquilloso, ruidoso, arriesgado"],
            ["Noun", "-cy", "privacy, accuracy, fluency", "privacidad, precision, fluidez"],
            ["Noun", "-tion / -sion", "criticism, decision, communication", "critica, decision, comunicacion"],
            ["Adverb", "-ly", "accidentally, critically, enthusiastically", "accidentalmente, criticamente, con entusiasmo"],
        ],
        widths=[3.0 * cm, 3.2 * cm, 6.3 * cm, 4.7 * cm],
        tiny=True,
    ),
    box(
        "Exam Tip",
        "Pregunta mental rapida: Que tipo de palabra falta? Si antes hay be/are/was, probablemente adjective. Si antes hay my/his/their/children's, probablemente noun. Si modifica un verbo, probablemente adverb.",
        "yellow",
    ),
    p("B. Key Word Transformation: same meaning", "H1x"),
    box(
        "Tres reglas obligatorias",
        "1) Usa la palabra dada sin cambiarla. 2) Mantén el mismo significado. 3) Usa entre 2 y 5 palabras. Las contracciones cuentan como 2 palabras en muchos examenes: don't = do + not.",
        "blue",
    ),
    table(
        ["#", "Original", "Key", "Respuesta", "Patron"],
        [
            ["1", "Helen said the views the room has are very impressive.", "IMPRESSED", "impressed by the views", "be impressed by = estar impresionado por."],
            ["2", "My grandmother grew up in the 1920s...", "GROWN", "grown up", "Having grown up... = Como crecio / habiendo crecido."],
            ["3", "My brother studies photography, so he can take the photos.", "WHO", "who studies photography", "relative clause para persona."],
            ["4", "My parents live in a small flat, so they will be delighted...", "HAVING", "having lived in", "participle clause con having + past participle."],
            ["5", "I'm sorry, but I don't know why we are doing this.", "POINT", "don't see the point", "see the point of + -ing = verle el sentido a."],
        ],
        widths=[0.8 * cm, 5.3 * cm, 2.1 * cm, 4.3 * cm, 4.7 * cm],
        tiny=True,
    ),
    p("Patrones KWT muy probables", "H1x"),
    table(
        ["Pista", "Transformacion", "Ejemplo"],
        [
            ["very impressive", "impressed by", "I was impressed by the performance."],
            ["grew up in...", "having grown up in...", "Having grown up in Lima, she knows the city well."],
            ["person + verb", "who + verb", "My brother, who studies photography, can take the photos."],
            ["live/lived in...", "having lived in...", "Having lived in a small flat, they will enjoy the house."],
            ["I don't know why...", "don't see the point of + -ing", "I don't see the point of doing this."],
            ["It is worth...", "well worth + -ing", "It was well worth attending."],
            ["Perhaps...", "might + verb", "She might know the answer."],
            ["I'm sure...", "must + verb / must have + pp", "He must be tired. / He must have left."],
        ],
        widths=[4.0 * cm, 5.0 * cm, 8.2 * cm],
        tiny=True,
    ),
    box(
        "Lo que debes memorizar",
        "Word Formation: preferable, sympathetic, conventional, privacy, critical, fussy, enthusiastic. KWT: impressed by, having grown up, who studies photography, having lived in, don't see the point of.",
        "yellow",
    ),
]


quick_flow = []
quick_flow.extend(common_intro)
quick_flow += [
    p("Respuestas finales del simulacro", "H1x"),
    table(
        ["Bloque", "Respuestas"],
        [
            ["Vocabulary", "1 focused, 2 self-centred, 3 realistic, 4 loyal, 5 conventional, 6 insightful"],
            ["Open Cloze", "1 it, 2 to, 3 on, 4 by, 5 about, 6 of"],
            ["Key Word Transformation", "must have seen; can't have forgotten; might know how to; must be here"],
            ["Relative Pronouns", "whose, who, which, who, whose"],
            ["Participle Clauses", "Watching, Injured, Not wanting, Feeling, Having lost"],
            ["Word Formation", "lost, accidentally, suspect, semi-retired, bilingual, self-interest"],
            ["Reviews", "That's just what I was thinking; It was well worth attending; that anyone would disagree with; What I particularly liked about it"],
            ["Aviso del profesor", "preferable, sympathetic, conventional, privacy, critical, fussy, enthusiastic; impressed by; grown up; who studies; having lived; don't see the point"],
        ],
        widths=[5.2 * cm, 12.0 * cm],
    ),
    p("Repaso de emergencia: 20 minutos", "H1x"),
    table(
        ["Minutos", "Que leer", "Objetivo"],
        [
            ["0-4", "Open Cloze", "Memorizar expresiones completas con preposicion."],
            ["4-8", "Modals", "Distinguir presente vs pasado."],
            ["8-12", "Participles", "Distinguir -ing, injured, having lost."],
            ["12-16", "Reviews", "Memorizar expresiones completas."],
            ["16-20", "Vocabulary", "Repasar collocations y adjetivos."],
        ],
        widths=[2.5 * cm, 5.0 * cm, 9.7 * cm],
    ),
    box("Ultima recomendacion", "En el examen no traduzcas palabra por palabra. Busca patrones: adjective + preposition, verb + preposition, compound adjective, y frases prefabricadas de review.", "yellow"),
]


project_context = """# PROJECT_CONTEXT - BRITANICO Intermedio 10

Objetivo: crear material de repaso en espanol para un examen de Intermedio 10 del BRITANICO/OUP Navigate. El usuario leera los PDFs en el autobus, por lo que el material debe ser compacto, claro, bilingue y con poco espacio desperdiciado.

Preferencias:
- Explicar cada respuesta, no solo dar el solucionario.
- Incluir por que las otras opciones no encajan.
- Dar vocabulario Ingles -> Espanol.
- Usar tablas y cajas: Exam Tip, Common Mistake, Lo que debes memorizar.
- Priorizar lo que sale en el simulacro real.
- Mantener el proyecto separado de la app word_formation.

Temas detectados:
- Vocabulary multiple choice: family-focused, self-centred, realistic, loyal, conventional, insightful.
- Open Cloze: prepare for, count on it to, expose yourself to, insist on, impressed by, enthusiastic about, characteristic of.
- Key Word Transformation: modal deduction con must, can't, might.
- Relative pronouns: who, which, whose.
- Participle clauses: Watching, Injured, Not wanting, Feeling, Having lost.
- Prefixes: semi-, bi-, self-; tambien lost property, accidentally, suspect.
- Reviews: It was well worth attending; What I particularly liked about it; I don't think that anyone would disagree with.
- Aviso del profesor por capturas: vendra Word Formation tipo PREFER -> preferable, SYMPATHY -> sympathetic, CONVENTION -> conventional, PRIVATE -> privacy, CRITICISM -> critical, FUSS -> fussy, ENTHUSIASM -> enthusiastic. Tambien Key Word Transformation tipo IMPRESSED -> impressed by the views, GROWN -> grown up, WHO -> who studies photography, HAVING -> having lived in, POINT -> don't see the point.

Regla de estilo:
- Si una explicacion crece demasiado, convertirla en tabla.
- Todo ejemplo en ingles debe tener traduccion o nota en espanol.
- No hacer una landing page por ahora; para manana conviene PDF.
"""


def main():
    (SRC / "PROJECT_CONTEXT.md").write_text(project_context, encoding="utf-8")
    write_md("README_REPASO.md", "Repaso BRITANICO Intermedio 10", [("Contexto", project_context)])

    build_pdf(
        "00_Repaso_Rapido_Intermedio10.pdf",
        "Repaso Rapido - BRITANICO Intermedio 10",
        "Mapa del simulacro, respuestas finales y plan de emergencia para estudiar en el autobus.",
        quick_flow,
    )
    build_pdf(
        "01_Vocabulary_Explicado.pdf",
        "PDF 01 - Vocabulary Explicado",
        "Cada pregunta del bloque de vocabulario con traduccion, razonamiento y vocabulario extra.",
        vocab_flow,
    )
    build_pdf(
        "02_Open_Cloze_Preposiciones.pdf",
        "PDF 02 - Open Cloze y Preposiciones",
        "Expresiones fijas, errores comunes y preposiciones que mas conviene memorizar.",
        open_flow,
    )
    build_pdf(
        "03_Key_Word_Transformation_Modals.pdf",
        "PDF 03 - Key Word Transformation",
        "Modal verbs of deduction: must, can't, might en presente y pasado.",
        kwt_flow,
    )
    build_pdf(
        "04_Relative_Pronouns.pdf",
        "PDF 04 - Relative Pronouns",
        "who, which, whose, that, where con respuestas del simulacro.",
        rel_flow,
    )
    build_pdf(
        "05_Participle_Clauses.pdf",
        "PDF 05 - Participle Clauses",
        "Watching, Injured, Not wanting, Feeling y Having lost explicados con ejemplos.",
        part_flow,
    )
    build_pdf(
        "06_Prefixes_Word_Formation.pdf",
        "PDF 06 - Prefixes y Word Formation",
        "Prefijos, adverbios, collocations y palabras frecuentes del simulacro.",
        prefix_flow,
    )
    build_pdf(
        "07_Reviews_Expresiones.pdf",
        "PDF 07 - Reviews y Expresiones",
        "Frases para ordenar palabras, writing y speaking sobre eventos culturales.",
        review_flow,
    )
    build_pdf(
        "08_Aviso_Profesor_WordFormation_KWT.pdf",
        "PDF 08 - Aviso del Profesor",
        "Word Formation y Key Word Transformation segun los modelos de clase.",
        teacher_flow,
    )
    print("PDFs generados en:", OUT)
    for path in sorted(OUT.glob("*.pdf")):
        print(path.name, path.stat().st_size)


if __name__ == "__main__":
    main()
