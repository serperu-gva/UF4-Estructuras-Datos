# Ejercicios

## Ejercicios - Vectores

### Ejercicio V1

**a)** Declara e inicializa un vector de 8 números enteros. Muestra el contenido del vector por pantalla.  
**b)** Muestra cuántos valores son positivos y cuántos negativos.  
**c)** Muestra la suma y la media de los valores del vector.  
**d)** Indica cuál es el valor máximo y en qué posición se encuentra.  

### Ejercicio V2

**a)** Declara y rellena un vector con N palabras, donde N es un número introducido por teclado y las palabras son cadenas también introducidas por teclado.  
**b)** Muestra aquellas palabras que empiezan por vocal.  
**c)** Muestra cuál es la palabra más larga e indica su tamaño.  

### Ejercicio V3

**a)** Introduce en un vector 10 palabras proporcionadas por el usuario. Muéstralas.  
**b)** Indica si hay palabras repetidas. Muéstralas.  

### Ejercicio V4

Se está analizando un cuestionario con 10 preguntas, cada una con 4 posibles respuestas (1, 2, 3 o 4), realizado por varios estudiantes.

**a)** Declara un vector donde se almacenen las respuestas correctas del test. Utiliza números enteros aleatorios entre 1 y 4.  
**b)** Almacena las respuestas de un estudiante en otro vector. La respuesta 0 se considerará como no contestada.  
**c)** Muestra cuántas preguntas ha contestado correctamente, cuántas ha contestado incorrectamente y cuántas no ha contestado.  
**d)** Calcula y muestra la nota obtenida. Si la nota es negativa, será 0. Utiliza la siguiente ecuación:

- `nota = (n_correctas - 0.33 * n_incorrectas) / n_total`.  

### Ejercicio V5

Un sistema debe controlar un conjunto de usuarios que se autentican con nombre y contraseña. Solo es necesario almacenar y comprobar estos datos, sin cifrarlos.

**a)** Declara e inicializa dos vectores paralelos con 5 nombres de usuario y sus contraseñas. Genera las contraseñas como un conjunto aleatorio de números enteros.  
**b)** Permite iniciar sesión: solicita el nombre de usuario y la contraseña, y valida si coinciden. Muestra un mensaje informando del resultado.  
**c)** Mientras la sesión no se inicie correctamente, el programa solicitará constantemente el usuario y la contraseña, hasta que se introduzca "fin" como nombre de usuario.  
**d)** Si se ha iniciado sesión correctamente, muestra un menú con dos opciones: una para cerrar sesión y otra que permita cambiar la contraseña actual.  

## Ejercicios - String

### Ejercicio S1

Una aplicación web quiere validar contraseñas según ciertas normas antes de registrarlas. Un valor numérico indicará la fiabilidad de la contraseña:

- Un valor de 0 indica que la contraseña es muy segura.
- Por cada comprobación que no supere, aumentará en 1.

**a)** Solicita al usuario una contraseña. Indica si su longitud es superior o inferior a 8 caracteres.  
**c)** Indica si contiene, al menos, una letra mayúscula.  
**d)** Indica si contiene, al menos, un dígito.  
**e)** Indica el nivel de seguridad, mostrando el mensaje "¡Muy segura!", "Segura" o "Muy insegura. ¡Cámbiala!" según las comprobaciones superadas.

::: tip NOTA
Una forma de comprobar si un carácter es una letra mayúscula es mediante la siguiente instrucción:  
`Character.isUpperCase(cadena.charAt(i)`  
Esta instrucción devuelve `true` si el carácter en la posición `i` de `cadena` es una letra mayúscula, y devuelve `false` en caso contrario.

De forma equivalente, se puede comprobar si un carácter es un número con:  
`Character.isDigit(cadena.charAt(i))`
:::

### Ejercicio S2

En una carpeta hay varios nombres de archivo. Es necesario analizarlos para identificar sus tipos y validar los nombres.

**a)** Guarda 8 nombres de archivo (con extensión) en un vector de String. Muéstralos.  
**b)** Muestra aquellos que no tienen extensión.  
**c)** Muestra aquellos nombres que terminan en ".txt".
**d)** Muestra qué nombres contienen espacios.
**e)** Cambia todos los nombres para que estén en minúsculas.
**f)** Muestra solo los nombres de los archivos sin la extensión.

### Ejercicio S3

Se quieren realizar una serie de comprobaciones en una frase. Realízalas y muestra el resultado.

**a)** Introduce una frase y guárdala.  
**b)** Indica si empieza por mayúscula y termina en punto. Si no es el caso, modifica la cadena.  
**c)** Muestra la longitud de la frase y cuántas palabras contiene.  
**d)** Sustituye todas las apariciones de la palabra "Java" por "Python".  
**e)** Muestra la frase final.  

### Ejercicio S4

Una aplicación ha recibido una lista de correos electrónicos que es necesario validar y analizar.

**a)** Guarda 5 correos electrónicos en un vector de String. Muéstralos.  
**b)** Muestra cuáles contienen el símbolo "@" y terminan en ".com" o ".es".  
**c)** Muestra el dominio de cada correo electrónico (`substring`, `indexOf`).  

### Ejercicio S5

Una aplicación de acceso necesita validar nombres de usuario según unas normas específicas. Además, quiere ayudar a los usuarios a corregir errores comunes.

**a)** Guarda 5 nombres de usuario. Muéstralos.  
**b)** Muestra cuáles son válidos: empiezan con una letra, tienen entre 5 y 12 caracteres y no contienen espacios.  
**c)** Para aquellos que no sean válidos, sugiere una versión corregida (cambia el carácter inicial si es un dígito, recorta o completa la longitud y elimina los espacios).  
**d)** Añade una nueva condición: todos los caracteres deben ser alfanuméricos. Modifica también el código para añadir una sugerencia en caso de no superar esta nueva comprobación.  

## Ejercicios - Matrices

### Ejercicio M1

**a)** Declara y muestra una matriz de 3x4 con valores enteros inicializados directamente en el código.  
**b)** Muestra la suma de todos los elementos de la matriz.  
**c)** Muestra el elemento mayor y el menor de la matriz.  
**d)** Muestra la suma y la media de cada fila.  
**e)** Muestra la suma y la media de cada columna.  
**f)** Multiplica todos los valores por 2 y muestra la nueva matriz.  

### Ejercicio M2

**a)** Declara y muestra una matriz de 3x3 de String con palabras cortas inicializadas directamente en el código.  
**b)** Muestra qué palabras contienen más de 5 letras y sustitúyelas por un asterisco ("*").  
**c)** De la matriz modificada, muestra qué palabras empiezan por vocal y sustitúyelas por un guion ("-").  
**d)** Considera que cada fila forma una frase. Muestra las tres frases teniendo en cuenta que:  

- Cada palabra debe estar separada por un espacio.
- Debe haber un punto final.

### Ejercicio M3

Una matriz contiene los tiempos de ejecución (en milisegundos) de diferentes funciones de un programa, medidos durante varias ejecuciones.

**a)** Declara y muestra una matriz de números enteros de 5 funciones por 4 ejecuciones. Inicialízala mediante código con valores de hasta 3 cifras (entre 0 y 999).  
**b)** Muestra el tiempo medio de cada función (fila).  
**c)** Muestra qué ejecución (columna) ha sido globalmente más rápida (indica la columna y el tiempo medio de ejecución).  
**d)** Muestra qué funciones han mejorado su rendimiento respecto a la ejecución anterior.  

### Ejercicio M4

Tienes una matriz de 5 alumnos y 4 asignaturas. Cada valor es la nota (entero de 0 a 10) de un alumno en una asignatura.

**a)** Introduce las notas mediante números aleatorios y muestra la matriz.  
**b)** Muestra la media de cada alumno.  

- Para simplificar, puedes usar un identificador para cada alumno: "El alumno [1] ha obtenido una media de 7.3"

**c)** Muestra la media de cada asignatura.  

- Para simplificar, puedes usar un identificador para cada asignatura: "La asignatura [3] tiene una media de 6.1"

**d)** Muestra los alumnos que han aprobado todas las asignaturas.  

### Ejercicio M5

Tienes una matriz String de 6x4 donde cada fila representa una variable y cada columna representa una versión del programa. El contenido indica el estado de la variable ("OK", "NULL" o "ERROR").

**a)** Declara, inicializa y muestra la matriz. Cada posición contendrá, de forma aleatoria, una de las tres cadenas posibles.  
**b)** Muestra qué variables han tenido, al menos, un "ERROR".  
**c)** Muestra en qué versión se producen más "NULL".  
**d)** Muestra un resumen con cuántas veces aparece cada estado globalmente.  

## Ejercicios - Listas

### Ejercicio L1

**a)** Solicita números enteros al usuario hasta que escriba un valor negativo. Guárdalos en una lista.  
**b)** Muestra la lista completa.  
**c)** Muestra cuántos valores hay y la suma total.  
**d)** Muestra solo los valores pares.  
**e)** Muestra solo los valores impares.  
**f)** Permite al usuario solicitar una posición (se le preguntará hasta que elija una correcta) y elimina el valor de la lista que se encuentra en esa posición.  

### Ejercicio L2

**a)** Crea una lista con nombres de alumnos. El usuario irá añadiendo nombres hasta que escriba "fin".  
**b)** Muestra el número de alumnos y sus nombres en el orden original.  
**c)** Muestra los nombres ordenados alfabéticamente.  
**d)** Permite buscar un nombre e indicar si está en la lista.  
**e)** Modifica el programa para mostrar un menú con las siguientes opciones:  

- Mostrar los alumnos ordenados alfabéticamente.
- Buscar un alumno y, si existe, indicar su posición.
- Añadir un alumno (si todavía no se encuentra en la lista).
- Eliminar un alumno (si existe).

### Ejercicio L3

Se han recogido las temperaturas máximas de cada día durante un mes. Se quieren analizar.

**a)** Almacena 30 valores en una lista (números aleatorios entre 15 y 20, por ejemplo). Muestra la lista de los días junto con su temperatura.  
**b)** Muestra la media mensual y también los días con una temperatura superior a la media.  
**c)** Muestra la longitud de la secuencia más larga de días consecutivos con temperaturas superiores a 30 °C.  

### Ejercicio L4

Se ha recogido el tiempo (en segundos) que ha tardado cada usuario en responder una encuesta. Se quieren detectar patrones y casos sospechosos.

**a)** Genera una lista de tiempos para cada usuario con números aleatorios entre 1 y 100. Muestra los tiempos y la media.  
**b)** Muestra qué usuarios (indicando sus posiciones) han respondido en menos de 10 segundos (posibles bots). Por ejemplo:  

```plaintext
Los usuarios que han respondido en menos de 10 segundos son: 3, 6, 15, 27,
```

**c)** Muestra el porcentaje de usuarios que han tardado entre 20 y 60 segundos.  

### Ejercicio L5

Se está celebrando un torneo de ajedrez y se registran los resultados de las partidas entre participantes. Cada resultado indica el nombre del ganador y del perdedor.

**a)** Introduce en una lista los resultados de las partidas. Cada posición de la lista indica una partida y debe contener dos valores (ganador, perdedor). Utiliza un vector para almacenar los dos valores en cada posición de la lista.  
**b)** Muestra la lista de jugadores únicos que han participado (sin repetir).  
**c)** Muestra el número total de victorias de cada jugador.