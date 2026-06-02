# Wordify: Word Formation Academy

¡Bienvenido a **Wordify**! Esta aplicación interactiva ha sido creada especialmente para ayudarte a dominar la sección de **Word Formation** en tus exámenes de inglés de ciclo (nivel intermedio a avanzado, enfocado en el currículo de El Británico y preparación para exámenes Cambridge).

## 🚀 Cómo Usar la Aplicación

La aplicación está diseñada para funcionar de forma **100% offline** y sin necesidad de instalar dependencias complejas. Tienes dos maneras de abrirla:

### Método 1: Apertura Directa (El más fácil y rápido)
1. Ve a la carpeta donde se encuentra este proyecto: `d:\Dev\sunedu_utilitarios\antigravity\word_formation`
2. Haz **doble clic** sobre el archivo [index.html](file:///d:/Dev/sunedu_utilitarios/antigravity/word_formation/index.html).
3. La aplicación se abrirá inmediatamente en tu navegador web predeterminado (Chrome, Edge, Firefox, etc.).

### Método 2: Servidor Local (Recomendado para una experiencia de red fluida)
Si deseas ejecutar la app mediante un servidor de desarrollo local, abre una terminal en esta carpeta y ejecuta uno de los siguientes comandos:

**Con Node.js (npm):**
```bash
npx http-server .
```
o también puedes iniciar el servidor incluido en el proyecto (si haces `npm install` primero):
```bash
npm run dev
```

**Con Python:**
```bash
python -m http.server 8080
```
Una vez iniciado, abre tu navegador y entra a `http://localhost:8080` o la dirección que te indique la terminal.

---

## 📖 Contenido de la Aplicación

La aplicación se divide en 4 secciones clave:
1. **Ruta**: Una guía visual estructurada por niveles (desde identificar partes de la oración hasta casos irregulares avanzados).
2. **Teoría**: Lecciones explicativas detalladas por nivel, abordando sufijos de sustantivos, adjetivos, verbos, adverbios y todos los prefijos negativos.
3. **Buscador (Word Matrix)**: Un buscador inteligente que filtra en tiempo real más de 50 familias de palabras importantes de nivel intermedio/avanzado con notas de exámenes.
4. **Práctica**: Un simulador interactivo con **40 ejercicios reales** estilo examen (fill-in-the-gaps) con oraciones complejas y explicaciones gramaticales inmediatas en español para que entiendas el *porqué* de cada respuesta.

¡Mucho éxito en tus exámenes del Británico! 💪

## Ruta de aprendizaje recomendada

Para mejorar en Word Formation no conviene memorizar sufijos de forma aislada. Usa siempre este orden:

1. Identifica que tipo de palabra falta: noun, verb, adjective o adverb.
2. Parafrasea la frase en espanol simple para entender si la idea es positiva, negativa, causa, contraste o resultado.
3. Elige el sufijo o prefijo correcto.
4. Revisa la ortografia final.
5. Anota cada error por causa: categoria, significado, prefijo/sufijo o spelling.

La pantalla Ruta ahora incluye un plan de repaso de 7 dias para practicar con ese metodo.
