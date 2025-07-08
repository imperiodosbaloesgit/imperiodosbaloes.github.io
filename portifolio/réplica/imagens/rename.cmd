@echo off
setlocal enabledelayedexpansion

:: Etapa 1: Renomear para nomes temporários para evitar conflitos
set tempcount=1
for %%e in (jpg jpeg png bmp gif) do (
    for %%f in (*%%e) do (
        ren "%%f" "temp_!tempcount!.%%e"
        set /a tempcount+=1
    )
)

:: Etapa 2: Renomear os temporários para fotoN.jpg
set count=1
for %%f in (temp_*) do (
    ren "%%f" "foto!count!.jpg"
    set /a count+=1
)

echo Renomeado !count!-1 arquivos para fotoN.jpg com sucesso.
pause
