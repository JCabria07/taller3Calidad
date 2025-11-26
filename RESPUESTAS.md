## PARTE 4:

De acuerdo a esto, En los logs los fallos se ven porque cada etapa marca su estado: el linter reporta errores de reglas, las pruebas muestran **FAIL** si un test falla y la cobertura indica cuando no se cumple el umbral. En este proyecto un run fallido ocurrió al ejecutar los archivos compilados en dist/test/index.test.js, generando un SyntaxError y deteniendo el job con Job failed


## PARTE 5:

Parte 5 – IA y ética
Métodos para detectar código generado por IA
- Patrones y estilo: se analizan rasgos típicos de salidas generativas (estructuras repetidas, comentarios genéricos, uniformidad en nombres y formato) y se estima la probabilidad de autoría automática.
- Clasificadores entrenados: modelos que comparan características del código (tokenización, n‑gramas, complejidad, distribución de operadores) contra corpus humanos y de IA para dar un puntaje de “origen probable”.
Por qué no es posible asegurar la autoría al 100%
- Edición humana y falsos positivos/negativos: una persona puede refactorizar o reescribir código generado hasta hacerlo indistinguible, y los modelos pueden imitar estilos humanos; por eso los detectores entregan probabilidades, no certezas.
- Contexto y variabilidad: el estilo depende del equipo, las guías y el tooling; sin trazabilidad del proceso, la atribución absoluta es impracticable.
Políticas razonables de uso de IA en educación y calidad
- Transparencia: pedir que se declare explícitamente qué partes se apoyaron en IA y con qué herramientas.
- Verificación de comprensión: complementar entregas con preguntas orales, revisiones en vivo o ejercicios sin asistencia para evaluar dominio real.
- Uso responsable: permitir IA para apoyo (borradores, documentación, refactor) pero exigir justificación técnica y pruebas que validen el resultado.
- Énfasis en calidad y proceso: evaluar claridad, pruebas, cobertura, trazabilidad de cambios y capacidad de explicar decisiones, más allá del origen del código.
