# 3. Vectores (vectores unidimensionales)

## 3.1. Declaración

En programación, **declarar** significa anunciar la existencia de una variable, estructura u objeto, indicando su nombre (**identificador**) y el **tipo de datos** que contendrá (si el lenguaje lo requiere). Esta acción informa al intérprete o compilador de que se reservan recursos para trabajar con la entidad.

Hay lenguajes de programación en los que la declaración se puede realizar de forma separada a la instanciación (la creación efectiva de la estructura u objeto y la reserva de espacio en memoria).

En el caso de los vectores, estos se declaran de la siguiente manera:

::: tabs
== Java

`tipo identificador[];`  
`tipo[] identificador;`

(ambas declaraciones son equivalentes)
:::

Donde `tipo` es el tipo de dato de los elementos del vector e `identificador` es el nombre de la variable.

Ejemplos:

::: tabs
== Java

```java
int notas[];  
double cuentas[];
```

:::

En este ejemplo se declara un vector de tipo `int` y otro de tipo `double`. Esta declaración indica para qué servirá el vector, pero **no reserva espacio en la memoria RAM al no conocerse todavía su tamaño**. Todavía no se puede utilizar el vector, falta instanciarlo.

## 3.2. Instanciación

En programación, **instanciar** significa crear una copia concreta de una estructura de datos y reservar espacio en memoria para poder utilizarla. Esta acción puede incluir la inicialización de sus valores y habilita la entidad para ser utilizada efectivamente dentro del programa. Para instanciar se utiliza el operador `new`, que es el que realmente crea la estructura o el objeto.

En el caso de los vectores, estos se declaran de la siguiente manera:

::: tabs
== Java

```java
int notas[]; // Declaramos ‘notas' como vector de tipo int
notas = new int[5]; // Instanciamos ‘notas' con tamaño 5

// Es habitual declarar e instanciar en una sola línea
int notas[] = new int[5];
```

:::

## 3.3. Almacenamiento

Los valores de un vector (o array unidimensional) se asignan y se consultan mediante el índice, que se especifica con la sintaxis propia de cada lenguaje.

>[!IMPORTANT] <strong>¡IMPORTANTE!</strong>
>En la mayoría de los lenguajes de programación, el primer elemento del vector se encuentra en la posición 0, es decir, el índice inicial es 0 y el último corresponde a la longitud del vector menos uno (C, Java, JavaScript, Python...).
>
>![Índice de vectores](/uf5/IndexVectors.jpg)
>
><br>Sin embargo, hay lenguajes en los que los vectores pueden comenzar en otra posición, como por ejemplo 1 (Fortran, Lua o MATLAB). En otros lenguajes (como Pascal), es posible configurar manualmente el índice inicial del vector.</br>

Por ejemplo, para almacenar el valor 2 en la tercera posición del vector escribiríamos:

::: tabs
== Java

```java
notas[2] = 2;
```

:::

También se pueden asignar valores al vector en la propia declaración e instanciación:

::: tabs
== Java

```java
int notas[] = {8, 10, 2, 3, 5};
int notas[] = new int[] {8, 10, 2, 3, 5}; // Equivalente al anterior
```

:::

Esto declara e inicializa un vector de cinco elementos. El ejemplo sería equivalente a:

::: tabs
== Java

```java
notas[0] = 8;
notas[1] = 10;
notas[2] = 2;
notas[3] = 3;
notas[4] = 5;
```

:::

**Se pueden declarar vectores** de cualquier tipo de datos (**enteros, booleanos, doubles**... e incluso **objetos**).

## 3.4. Longitud de un vector

Los vectores poseen una propiedad que indica su tamaño, es decir, el número de elementos que contienen. Esta propiedad puede variar en nombre y forma según el lenguaje de programación utilizado, por ejemplo: `length`, `size`, `count` o mediante una función específica.

Ejemplo:

::: tabs
== Java

En Java, se utiliza la propiedad **`length`**:

```java
int notas[] = new int[5]; // Vector de tipo int de tamaño 5
System.out.println(notas.length); // Mostrará un 5
```

Si el vector tiene 5 elementos, la propiedad `length` nos devolverá el valor entero 5, pero el primer elemento se encuentra en la posición 0 (`notas[0]`) y el último en la posición 4 (`notas[4]`).

:::

## 3.5. Recorrido de un vector

Para recorrer un vector (acceder a todos sus elementos) siempre será necesario un bucle.

En el siguiente ejemplo declaramos e instanciamos un vector de enteros con las notas de un alumno y después utilizamos un bucle `for` para recorrer el vector y mostrar todos los elementos.

::: tabs
== Java

```java
// Declaramos e instanciamos un vector de tipo int
int notas[] = new int[] {7, 3, 9, 6, 5};
// Como el vector tiene un tamaño de 5, sus elementos estarán en las posiciones de 0 a 4

// Recorremos el vector desde i=0 hasta i<5 (es decir, desde 0 hasta 4)
for (int i = 0; i < notas.length; i++) {
    System.out.println(notas[i]);
}
```

:::

Ahora calcularemos la nota media (sumar todas las notas y después dividir entre el número de notas):

::: tabs
== Java

```java
// Declaramos la suma y la media
int suma = 0;
int media;

// Recorremos el vector desde 0 hasta 4, acumulando las notas en suma
for (int i = 0; i < notas.length; i++) {
    suma += notas[i]; // Equivale a: suma = suma + notas[i]
}

// Calculamos la media y la mostramos por pantalla
media = suma / notas.length;
System.out.println("La nota media es: " + media);
```

:::

## 3.6. Copia de vectores

Para copiar vectores no basta con igualar un vector a otro como si fuera una variable simple.

Si partimos de dos vectores `v1` y `v2` y hacemos `v2 = v1`, lo que ocurriría sería que `v2` apuntaría a la posición de memoria de `v1`. Esto es lo que se denomina una copia de referencia:

![Apuntar a la memoria del vector](/uf5/ApuntarMemoriaVector.jpg)

Si, por ejemplo, queremos copiar todos los elementos del vector `v1` en el vector `v2`, existen varias formas de hacerlo.

### 3.6.1. Copiar los elementos uno a uno

Mediante un bucle:

::: tabs
== Java

```java
for (i = 0; i < v1.length; i++)
    v2[i] = v1[i];
```

:::

### 3.6.2. Otras formas de copiar un vector

::: tabs
== Java

Utilizar la función **`vectorcopy`**:

```java
System.vectorcopy(v_origen, i_origen, v_destino, i_destino, longitud);
// v_origen: Vector de origen
// i_origen: Posición inicial de la copia
// v_destino: Vector de destino
// i_destino: Posición inicial de destino
// longitud: Cantidad de elementos que se van a copiar

// Copiamos todos los elementos de v1 en v2
System.vectorcopy(v1, 0, v2, 0, v1.length);
```

:::