@echo off
title Wordify - Word Formation Academy
echo ===================================================
echo   Wordify: Word Formation Academy - Lanzador
echo ===================================================
echo.

:: Cambiar al directorio del script para evitar fallos de ruta de ejecucion
cd /d "%~dp0"

:: Verificar si node esta disponible
where node >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [+] Detectado Node.js en el sistema.
    echo [+] Iniciando servidor en http://localhost:3000...
    start /min "Wordify Server" cmd /c "npx http-server -p 3000 ."
    timeout /t 2 >nul
    start http://localhost:3000
    exit
)

:: Verificar si python esta disponible
where python >nul 2>&1
if %ERRORLEVEL% equ 0 (
    echo [+] Detectado Python en el sistema.
    echo [+] Iniciando servidor en http://localhost:8000...
    start /min "Wordify Server" cmd /c "python -m http.server 8000"
    timeout /t 2 >nul
    start http://localhost:8000
    exit
)

:: Si no hay ninguno, abrir el archivo local directamente
echo [-] No se detecto Node.js ni Python.
echo [+] Abriendo el archivo index.html directamente en tu navegador predeterminado...
timeout /t 1 >nul
start index.html
exit
