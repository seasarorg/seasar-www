@ECHO OFF

REM  Local environmental variables
SETLOCAL
SET COMPILE_CP=.;..\lib\hsqldb.jar
SET EXECUTE_CP=.;..\lib\hsqldb.jar;test;../src

REM  directory where compiled class file will be created
IF EXIST .\test (GOTO TEST_EXISTS)
MD test
:TEST_EXISTS

ECHO --------- compile ---------
javac -classpath %COMPILE_CP% -d test ..\src\org\hsqldb\sample\Testdb.java

REM  if compile error abort
IF ERRORLEVEL 1 (GOTO END)


ECHO ------------ execute ------------
ECHO -- data source access sample
REM get employee name
java -classpath %EXECUTE_CP% org.hsqldb.sample.Testdb

REM  -- end
:END

REM wait for key press
PAUSE

REM -- end local mode
ENDLOCAL
