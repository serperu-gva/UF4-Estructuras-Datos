# Exercicis

## Exercicis - Vectors

### Exercici V1

**a)** Declara i inicialitza un vector de 8 enters. Mostra el contingut del vector per pantalla.  
**b)** Mostra quants valors són positius i quants negatius.  
**c)** Mostra la suma i la mitjana dels valors del vector.  
**d)** Indica quin és el valor màxim i en quina posició es troba.  

### Exercici V2

**a)** Declara i ompli un vector amb N paraules, on N és un número introduït per teclat i les paraules són cadenes també introduïdes per teclat.  
**b)** Mostra aquelles paraules que comencen per vocal.  
**c)** Mostra quina és la paraula més llarga, i indica el tamany.  

### Exercici V3

**a)** Introdueix en un vector 10 paraules donades per l'usuari. Mostra-les.  
**b)** Indica si hi ha paraules repetides. Mostra-les.  

### Exercici V4

S'està analitzant un qüestionari amb 10 preguntes, cadascuna amb 4 possibles solucions (1, 2, 3 o 4), realitzat per diversos estudiants.

**a)** Declara un vector on s'emmagatzemen les respostes correctes del test. Usa números enters aleatoris entre 1 i 4.  
**b)** Emmagatzema les respostes d'un estudiant en un altre vector. Resposta 0 es considerarà com no contestada.  
**c)** Mostra quantes preguntes ha contestat correctament, quantes ha contestat incorrectament, i quantes no ha contestat.  
**d)** Calcula i mostra la nota obtinguda. Si la nota ix negativa, serà 0. Usa la següent equació:

- `nota = (n_correctes - 0.33 * n_incorrectes) / n_total`.  

### Exercici V5

Un sistema ha de controlar un conjunt d'usuaris que s'autentiquen amb nom i contrasenya. Només cal emmagatzemar i comprovar aquestes dades, sense xifrar.

**a)** Declara i inicialitza dos vectors paral·lels amb 5 noms d'usuari i les seues contrasenyes. Genera les contrasenyes com a un conjunt aleatori d'enters.  
**b)** Permet iniciar sessió: demana nom i contrasenya, i valida si coincideixen. Mostra un missatge informant del resultat.  
**c)** Mentre la sessió no s'inicie correctament, el programa demanarà usuari i contrasenya constantment, fins que s'introduïsca "fi" com a nom.  
**d)** Si has iniciat correctament la sessió, mostra un menú amb dos opcions: una per a tancar sessió i una altra que permet canviar la contrasenya actual.  

## Exercicis - String

### Exercici S1

Una aplicació web vol validar contrasenyes segons certes normes abans de registrar-les. Un valor numèric indicarà la fiabilitat de la contrasenya:

- Valor de 0 indica contrasenya molt segura.
- Per cada comprovació que no supere, augmentarà en 1.

**a)** Demana a l'usuari una contrasenya. Indica si la longitud és superior o inferior a 8 caràcters.  
**c)** indica si conté, almenys, una majúscula.  
**d)** Indica si conté, almenys, un dígit.  
**e)** Indica el nivell de seguretat, mostrant el missatge "Molt segura!", "Segura" o "Molt insegura. Canvia-la!" segons les comprovacions superades.

::: tip NOTA
Una forma de comprovar si un caràcter és una lletra majúscula és amb la següent instrucció:  
`Character.isUpperCase(cadena.charAt(i))`  
Aquesta instrucció retorna `true` si el caràcter en la posició `i` de `cadena` és una lletra majúscula, i retorna `false` en cas contrari.

De forma equivalent, es pot comprovar que un caràcter és un número amb:  
`Character.isDigit(cadena.charAt(i))`
:::

### Exercici S2

En una carpeta hi ha diversos noms de fitxer. Cal analitzar-los per identificar els seus tipus i validar noms vàlids.  

**a)** Desa 8 noms de fitxer (amb extensió) en un vector de String. Mostra'ls.  
**b)** Mostra aquells que no tenen extensió.  
**c)** Mostra aquells noms que acaben en ".txt".
**d)** Mostra quins noms contenen espais.
**e)** Canvia tots els noms perquè estiguen en minúscules.
**f)** Mostra només els noms dels fitxers sense l'extensió.

### Exercici S3

Es volen fer una sèrie de comprovacions en una frase. Realitza-les i mostra el resultat.

**a)** Introdueix una frase i desa-la.  
**b)** Indica si comença per majúscula i acaba per punt. Si no és el cas, modifica la cadena.  
**c)** Mostra la longitud de la frase i quantes paraules conté.  
**d)** Substitueix totes les aparicions de la paraula "Java" per "Python".  
**e)** Mostra la frase final.  

### Exercici S4

Una aplicació ha rebut una llista de correus electrònics que cal validar i analitzar.

**a)** Desa 5 correus en un vector de String. Mostra'ls.  
**b)** Mostra quins contenen el símbol "@" i acaben en ".com" o ".es".  
**c)** Mostra el domini de cada correu (substring, indexOf).  

### Exercici S5

Una aplicació d'accés necessita validar noms d'usuari segons normes específiques. A més, vol ajudar els usuaris a corregir errors comuns.

**a)** Desa 5 noms d'usuari. Mostra'ls.  
**b)** Mostra quins són vàlids: comencen amb lletra, tenen entre 5 i 12 caràcters, no contenen espais.  
**c)** Per a aquells que no siguen vàlids, suggereix una versió corregida (canvia el caràcter inicial si és un dígit, retalla o completa longituds, elimina espais).  
**d)** Afig una nova condició: tots els caràcters han de ser alfanumèrics. Modifica també el codi per a afegir suggeriment en cas de no superar aquesta nova comprovació.  

## Exercicis - Matrius

### Exercici M1

**a)** Declara i mostra una matriu de 3x4 amb valors enters inicialitzats directament al codi.  
**b)** Mostra la suma de tots els elements de la matriu.  
**c)** Mostra el major i el menor element de la matriu.  
**d)** Mostra la suma i la mitjana de cada fila.  
**e)** Mostra la suma i la mitjana de cada columna.  
**f)** Multiplica tots els valors per 2 i mostra la nova matriu.  

### Exercici M2

**a)** Declara i mostra una matriu de 3x3 de String amb paraules curtes inicialitzades directament al codi.  
**b)** Mostra quines paraules contenen més de 5 lletres, i substitueix-les per un asterisc ("*").  
**c)** De la matriu modificada, mostra quines paraules comencen per vocal i substitueix-les per un guió ("-").  
**d)** Considera que cada fila forma una frase. Mostra les tres frases, tenint en compte que:  

- Cada paraula ha d'estar separada per un espai
- Ha d'haver un punt final.

### Exercici M3

Una matriu conté els temps d'execució (en mil·lisegons) de diferents funcions d'un programa, mesurats durant diverses execucions.

**a)** Declara i mostra una matriu d'enters de 5 funcions per 4 execucions. Inicialitza-la per codi amb valors de fins a 3 xifres (entre 0 i 999).  
**b)** Mostra el temps mitjà de cada funció (fila).  
**c)** Mostra quina execució (columna) ha sigut globalment més ràpida (indica la columna i el temps mitjà d'execució).  
**d)** Mostra quines funcions han millorat rendiment respecte l'execució anterior.  

### Exercici M4

Tens una matriu de 5 alumnes i 4 assignatures. Cada valor és la nota (enter de 0 a 10) d'un alumne en una assignatura.

**a)** Introdueix les notes amb números aleatoris i mostra la matriu.  
**b)** Mostra la mitjana de cada alumne.  

- Per simplificar, pots usar un identificador per a cada alumne: "L'alumne [1] ha tret una mitjana de 7.3"

**c)** Mostra la mitjana de cada assignatura.  

- Per simplificar, pots usar un identificador per a cada assignatura: "L'assignatura [3] té una mitjana de 6.1"

**d)** Mostra els alumnes que han aprovat totes les assignatures.  

### Exercici M5

Tens una matriu String de 6x4 on cada fila representa una variable i cada columna representa una versió del programa. El contingut indica l'estat de la variable ("OK", "NULL" o "ERROR").

**a)** Declara inicialitza i mostra la matriu. Cada posició contindrà, de forma aleatòria, alguna de les tres cadenes possibles.  
**b)** Mostra quines variables han tingut, almenys, un "ERROR".  
**c)** Mostra en quina versió es produeixen més "NULL".  
**d)** Mostra un resum amb quantes vegades apareix cada estat globalment.  

## Exercicis - Estructures associatives

### Exercici H1

**a)** Demana una frase per teclat i emmagatzema cada paraula en un vector.  
**b)** Guarda cada paraula en una estructura associativa, on la clau siga la paraula i el valor siga el recompte.  
**c)** Mostra les paraules i el nombre de repeticions.  
**d)** Mostra quina paraula és la que més es repeteix.  

### Exercici H2

Construeix un traductor bàsic de paraules individuals.

**a)** Emmagatzema una llista de traduccions en una estructura clau-valor on la clau és una paraula en una llengua i el valor és la seua traducció en altra llengua. Afig, almenys, 5 elements clau-valor per teclat.  
**b)** Permet a l'usuari introduir una paraula i que el programa mostre la traducció. Si no està en el diccionari, ho indica.  
**c)** Permet afegir una nova traducció al diccionari durant l'execució del programa.  
**d)** Modifica el programa per a mostrar un menú que permetrà a l'usuari triar entre buscar una paraula al diccionari, afegir una nova paraula o acabar el programa.  
**e)** Afig una nova opció per a mostrar totes les paraules del diccionari.  

### Exercici H3

**a)** Permet afegir parelles "nom - número de telèfon" en una estructura clau-valor. Es podran afegir fins que l'usuari introduisca la cadena "fi" com a nom.  
**b)** Permet consultar el número de telèfon d'un nom donat.  
**c)** Permet esborrar un contacte donat el seu nom.  
**d)** Modifica el programa de forma que es mostre un menú que permeta triar a entre: afegir un nou contacte, esborrar-ne donat el nom i consultar el telèfon donat el nom.  

### Exercici H4

Un petit magatzem vol informatitzar el sistema de vendes i l'inventari. Cada producte es representa amb un nom, un preu unitari i una quantitat en estoc. A més, es vol dur un registre de quantes unitats s'han venut de cada producte.

**a)** Crea una estructura clau-valor on cada clau siga el nom d'un producte i el valor siga un vector amb el preu unitari i estoc.  
**b)** Emplena l'estructura amb 5 productes diferents, introduint per teclat tots els valors.  
**c)** Permet afegir un producte més, introduint per teclat el nom i el preu unitari, i amb estoc inicial de 100.  
**d)** Permet realitzar vendes: demana nom i quantitat, comprova si hi ha en estoc i actualitza els valors.  
**e)** Crea un menú que permeta a l'usuari triar entre afegir un producte, realitzar una venda o acabar el programa.  
**f)** Afig una nova opció al menú per a mostrar l'estat actual de l'estoc.  

### Exercici H5

En una plataforma de valoració s'ha preparat un test de 10 preguntes. Cada pregunta pot rebre una puntuació de 1 a 5 estrelles per part dels usuaris. Volem un programa que acumule els resultats en una estructura clau-valor niada, i que ens permeta calcular estadístiques per a cada pregunta i en conjunt.

La estructura serà:

- Clau exterior: número de pregunta (1…10)
- Valor exterior: una altra estructura clau-valor on
  - Clau interior: puntuació (1…5)
  - Valor interior: recompte d'usuaris que han donat eixa puntuació

**a)** Declara i inicialitza l'estructura amb valors enters aleatoris.  
**b)** Permet a l'usuari demanar un número de pregunta, i mostrar un histograma de les puntuacions per a eixa pregunta. Per exemple:  

```plaintext
Pregunta 3:
1: **
2: *
3: ****
4: **
5: *
```

**c)** Fes que, a més de l'histograma, calcule la puntuació mitjana de la pregunta. Per exemple, per a la pregunta anterior:  

```plaintext
mitjana = (1 * n_resp1 + 2 * n_resp2 + ··· + 5 * n_resp5) / (n_resp1 + n_resp2 + ··· + n_resp5)

on n_respX és el número de respostes (asteriscs) de la pregunta X:
  n_resp1 = 2
  n_resp2 = 1
  n_resp3 = 4
  n_resp4 = 2
  n_resp5 = 1
```

## Exercicis - Llistats

### Exercici L1

**a)** Demana valors enters a l'usuari fins que escriga un valor negatiu. Guarda'ls en una llista.  
**b)** Mostra la llista completa.  
**c)** Mostra quants valors hi ha i la suma total.  
**d)** Mostra només els valors parells.  
**e)** Mostra només els valors imparells.  
**f)** Permet a l'usuari demanar una posició (es demanarà fins que trie una correcta) i elimina el valor del llistat en eixa posició.  

### Exercici L2

**a)** Crea una llista amb noms d'alumnes. L'usuari va afegint noms fins que escriu "fi".  
**b)** Mostra el nombre d'alumnes i els seus noms en l'ordre original.  
**c)** Mostra els noms ordenats alfabèticament.  
**d)** Permet buscar un nom i indicar si està en la llista.  
**e)** Modifica el programa per a mostrar un menú amb les següents opcions:  

- Mostrar els alumnes ordenats alfabèticament.
- Buscar un alumne i, si existeix, indicar la posició.
- Afegir un alumne (si no es troba ja al llistat).
- Eliminar un alumne (si existeix).

### Exercici L3

S'han recollit les temperatures màximes de cada dia durant un mes. Es volen analitzar.

**a)** Emmagatzema 30 valors en una llista (números aleatoris entre 15 i 20, per exemple). Mostra el llistat dels dies junt amb la seua temperatura.  
**b)** Mostra la mitjana mensual, i també els dies amb temperatura superior a la mitjana.  
**c)** Mostra la longitud de la seqüència més llarga de dies seguits amb temperatures superiors a 30 °C.  

### Exercici L4

S'ha recollit el temps (en segons) que cada usuari ha tardat en respondre una enquesta. Es volen detectar patrons i casos sospitosos.

**a)** Genera un llistat de temps per a cada usuari amb números aleatoris entre 1 i 100. Mostra els temps i la mitjana.  
**b)** Mostra quins usuaris (indicant les posicions) han respost en menys de 10 segons (possibles bots). Per exemple:  

```plaintext
Els usuaris que han respost en menys de 10 segons són: 3, 6, 15, 27,
```

**c)** Mostra el percentatge d'usuaris que han tardat entre 20 i 60 segons.  

### Exercici L5

S'està celebrant un torneig d'escacs i es registren els resultats de les partides entre participants. Cada resultat indica el nom del guanyador i del perdedor.

**a)** Introdueix en un llistat els resultats de les partides. Cada posició del llistat indica una partida, i ha d'haver dos valors (guanyador, perdedor). Usa un vector per a emmagatzemar els dos valors en cada posició del llistat.  
**b)** Mostra la llista de jugadors únics que han participat (sense repetir).  
**c)** Mostra el nombre total de victòries per a cada jugador.  

---


<!--

## 1. Arrays

## 1.1. Arrays - Nivell A

1. Crea un programa que demane deu números reals per teclat, els emmagatzeme en un array, i després mostre tots els seus valors.
2. Crea un programa que demane deu números reals per teclat, els emmagatzeme en un array, i després mostre la suma de tots els valors.
3. Crea un programa que demane deu números reals per teclat, els emmagatzeme en un array, i després ho recórrega per a esbrinar el màxim i mínim i mostrar-los per pantalla.
4. Crea un programa que demane vint números enters per teclat, els emmagatzeme en un array i després mostre per separat la suma de tots els valors positius i negatius.
5. Crea un programa que demane vint números reals per teclat, els emmagatzeme en un array i després ho recórrega per a calcular i mostrar la mitjana: (suma de valors) / núm. de valors.
6. Crea un programa que demane dos valors enters N i M, després cree un array de grandària N, escriga M en totes les seues posicions i ho mostre per pantalla.
7. Crea un programa que demane dos valors enters P i Q, després cree un array que continga tots els valors des de P fins a Q, i el mostre per pantalla.

## 1.2. Arrays - Nivell B

8. Crea un programa que cree un array amb 100 números reals aleatoris entre 0.0 i 1.0, utilitzant Math.random(), i després li demane a l'usuari un valor real R. Finalment, mostrarà quants valors del array són igual o superiors a R.
9. Crea un programa que cree un array d'enters de grandària 100 i ho emplene amb valors enters aleatoris entre 1 i 10 (utilitza 1 + Math.random()10). Després demanarà un valor N i mostrarà en quines posicions del array apareix N.
10. Crea un programa per a realitzar càlculs relacionats amb l'altura (en metres) de persones. Demanarà un valor N i després emmagatzemarà en un array N altures introduïdes per teclat. Després mostrarà l'altura mitjana, màxima i mínima així com quantes persones mesuren per damunt i per davall de la mitjana.
11. Crea un programa que cree dos arrays d'enters de grandària 10. Després introduirà en el primer array tots els valors de l'1 al 10. Finalment, haurà de copiar tots els valors del primer array al segon array en ordre invers, i mostrar tots dos per pantalla.
12. Crea un programa que cree un array de 10 enters i després mostre el següent menú amb diferents opcions:  
a. Mostrar valors.  
b. Introduir valor.  
c. Eixir.  
L'opció ‘a' mostrarà tots els valors per pantalla. L'opció ‘b' demanarà un valor V i una posició P, després escriurà V en la posició P del array. El menú es repetirà indefinidament fins que l'usuari trie l'opció ‘c' que acabarà el programa.
13. Crea un programa que permeta a l'usuari emmagatzemar una seqüència aritmètica en un array i després mostrar-la. Una seqüència aritmètica és una sèrie de números que comença per un valor inicial V, i continua amb increments d'I. Per exemple, amb V=1 i I=2, la seqüència seria 1, 3, 5, 7, 9… Amb V=7 i I=10, la seqüència seria 7, 17, 27, 37… El programa sol·licitarà a l'usuari V, I a més de N (núm. de valors a crear).
14. Crea un programa que cree un array d'enters i introduïsca la següent seqüència de valors: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 etc. fins a introduir 10 deu vegades, i després la mostre per pantalla.  
NOTA: Utilitza els mètodes de la classe ‘arrays' per a ajudar-te a resoldre els següents exercicis.
15. Crea un programa que demane a l'usuari dos valors N i M i després cree un array de grandària N que continga M en totes les seues posicions. Després mostra el array per pantalla.
16. Crea un programa que cree un array d'enters i introduïsca la següent seqüència de valors: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, etc. fins a introduir 10 deu vegades, i després la mostre per pantalla. En aquesta ocasió has d'utilitzar arrays.fill().
17. Crea un programa que demane a l'usuari 20 valors enters i introduïsca els 10 primers en un array i els 10 últims en un altre array. Finalment, compararà tots dos arrays i li dirà a l'usuari si són iguals o no.
18. Crea un programa que cree un array de grandària 30 i ho emplene amb valors aleatoris entre 0 i 9 (utilitza Math.random()*10). Després ordena els valors del array i els mostrarà per pantalla.
19. Necessitem crear un programa per a mostrar el rànquing de puntuacions d'un torneig d'escacs amb 8 jugadors. Se li demanarà a l'usuari que introduïsca les puntuacions de tots els jugadors (habitualment valors entre 1000 i 2800, de tipus enter) i després mostre les puntuacions en ordre descendent (de la més alta a la més baixa).
20. Crea un programa que cree un array de grandària 1000 i ho emplene amb valors enters aleatoris entre 0 i 99 (utilitza Math.random()*100). Després demanarà per teclat un valor N i es mostrarà per pantalla si N existeix en el array, a més de quantes vegades.

## 2. String

**NOTA**: Utilitza mètodes de la classe String quan siga necessari per a ajudar-te a resoldre'ls

1. Crea un programa que demane una cadena de text per teclat i després mostre cada paraula de la cadena en una línia diferent.
2. Crea un programa que demane dues cadenes de text per teclat i després indique si són iguals, a més de si són iguals sense diferenciar entre majúscules i minúscules.
3. Crea un programa que demane per teclat tres cadenes de text: nom i dos cognoms. Després mostrarà un codi d'usuari (en majúscules) format per la concatenació de les tres
primeres lletres de cadascun d'ells. Per exemple si s'introdueix "Lionel", "Martí" i "Alcocebre" mostrarà "LIOMARALC".
1. Crea un programa que mostre per pantalla quantes vocals de cada tipus hi ha (quantes ‘a', quantes ‘e', etc.) en una frase introduïda per teclat. No s'ha de diferenciar entre majúscules i minúscules. Per exemple donada la frase "La meua mama m'acarona" dirà que hi ha:  
Núm. de A's: 7  
Núm. de E's: 1  
Núm. d'I's: 0  
Núm. d'O's: 1  
Núm. d'U's: 1  
1. Realitza un programa que llija una frase per teclat i indique si la frase és un palíndrom o no (ignorant espais i sense diferenciar entre majúscules i minúscules). Suposarem que l'usuari només introduirà lletres i espais (ni comes, ni punts, ni accents, etc.). Un palíndrom és un text que es llig igual d'esquerra a dreta que de dreta a esquerra. Per exemple:  
A cavall la vaca  
A una diputada tupida nua  
Mulla la llum  
Un aviador roda i va nu  

## 3. Matrius

1. Crea un programa que cree una matriu de grandària 5x5 que emmagatzeme els números de l'1 al 25 i després mostre la matriu per pantalla.
2. Crea un programa que cree una matriu de 10x10 i introduïsca els valors de les taules de multiplicar de l'1 al 10 (cada taula en una fila). Després mostrarà la matriu per pantalla.
3. Crea un programa que cree una matriu de grandària NxM (grandària introduïda per teclat) i introduïsca en ella NxM valors (també introduïts per teclat). Després haurà de recórrer la matriu i al final mostrar per pantalla quants valors són majors que zero, quants són menors que zero i quants són igual a zero.
4. Necessitem crear un programa per a emmagatzemar les notes de 4 estudiants (anomenats "Estudiant 1", "Estudiant 2", etc.) i 5 assignatures. L'usuari introduirà les notes per teclat i després el programa mostrarà la nota mínima, màxima i mitjana de cada estudiant.
5. Necessitem crear un programa per a registrar sous de dones i homes d'una empresa i detectar si existeix bretxa salarial entre tots dos. El programa demanarà per teclat la informació de N persones diferents (valor també introduït per teclat). Per a cada persona, demanarà el seu gènere (0 per a home i 1 per a dona) i el seu sou. Aquesta informació ha de guardar-se en una única matriu. Després es mostrarà per pantalla el sou mitjà de cada gènere.

## 4. HashMap

## 4.1. HashMap - Nivell A

1. Implementa un per gestionar les puntuacions dels jugadors. L'usuari ha d'afegir nous jugadors i les seues puntuacions, i també mostrar les puntuacions actuals.
2. Crea un programa per emmagatzemar paraules en anglès i les seues traduccions. L'usuari ha d'afegir noves paraules i obtindre les seues traduccions.

## 4.2. HashMap - Nivell B

3. Crea un programa en Java que permeta gestionar l'inventari d'una botiga. El programa hauria de ser capaç d'emmagatzemar el preu unitari i la quantitat disponible de diferents productes utilitzant un HashMap. L'usuari haurà de poder afegir nous productes, especificant el nom, preu unitari i la quantitat disponible. A més, el programa haurà de permetre mostrar l'inventari, mostrant per a cada producte la seua quantitat, preu unitari i el total acumulat de cada tipus de producte..
4. Escriu un programa en Java que facilite la gestió de les despeses en diferents categories. Utilitza un HashMap per emmagatzemar el preu unitari i la quantitat gastada per a cada categoria de despesa. L'usuari haurà de poder afegir noves despeses especificant la categoria, preu unitari i quantitat gastada. El programa també ha de permetre mostrar les despeses, indicant per a cada categoria la quantitat gastada, el preu unitari i el total acumulat de cada tipus de despesa.

## 5. ArrayList

## 5.1. ArrayList - Nivell A

1. Desenvolupa un programa que permeta als usuaris afegir comandes a una llista mitjançant un menú interactiu. Les comandes poden ser qualsevol text, des de tasques fins a productes d'una botiga. Després, mostra la llista completa de comandes.
2. Implementa un programa que mostre un menú on l'usuari pot gestionar una agenda de contactes. L'usuari pot afegir nous contactes (nom i número de telèfon) i mostrar la llista completa de contactes emmagatzemats en un ArrayList.
3. Crea un programa que utilitze un ArrayList per emmagatzemar nombres enters. L'usuari ha de poder afegir tants nombres com vullga. Després, calcula i mostra la mitjana dels nombres que ocupen posicions parelles a la llista.

## 5.2. ArrayList - Nivell B

4. Escriu un programa que utilitze un ArrayList per emmagatzemar una sèrie de paraules. L'usuari ha de poder afegir paraules a la llista. Després, elimina les paraules repetides i mostra la llista sense duplicats.
5. Implementa un programa que inverteix l'ordre dels elements d'un ArrayList. L'usuari pot afegir tants nombres com vullga, i el programa ha de mostrar la llista en l'ordre invers.
-->