@echo off
color 0b
title satomi
:top
echo ***************************************************************
echo.
echo options
echo.
echo ***************************************************************
echo.
echo [1] Start the bot
echo.
echo [e] Exit the console
echo.
echo ***************************************************************
echo Enter 1 or e depending on what you want to do:
echo.
set /p choice= 
echo.
echo ***************************************************************
if %choice%==1 goto choice

if %choice%==e (
exit
)


:choice
echo Connecting to Discord Servers....
CMD /k node index.js
PAUSE