# Taller / parcial 3 – Calidad de Software

EImplementación de un ppipline de **Integración Continua (CI)** con validación, pruebas y reporte. Simulado localmente con **nektos/act**

## Estrategia

- **Lenguaje:** TypeScript
- **Linter:** ESLint
- **Pruebas:** Jest con `ts-jest`
- **Cobertura:** Jest con umbral mínimo del 80%
- **Build:** Compilación con `tsc`

## Workflow

El archivo `.github/workflows/ci.yml` define el pipeline:

- Pull y Pull Rerquest
- Pasos: checkout, instalación de dependencias, linter, build, pruebas y cobertura
- El workflow falla si alguna etapa no pasa o si la cobertura es menor al **80%**


## ACT ¿Que hace?
- Ejecuta los workflows definidos en `.github/workflows/` localmente

### Requisitos
- Docker instalado y corriendo
- act instalado (`brew install act` en Mac/Linux o binario en Windows desde releases)

### Comando de ejecución
```bash
act push -W .github/workflows/ci.yml


thx