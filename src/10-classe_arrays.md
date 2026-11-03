# La clase Arrays (Java)

En el paquete `java.util` se encuentra una clase estática llamada **Arrays**. Esta clase estática permite ser utilizada como si fuera un objeto (como ocurre con Math). Esta clase dispone de **métodos** muy interesantes para utilizar sobre arrays.

Su uso es:

`Arrays.método(argumentos);`

Algunos métodos son:

- **fill**: permite rellenar todo un array unidimensional con un determinado valor. Sus argumentos son el array que se quiere rellenar y el valor deseado:

Por ejemplo, rellenar un array de 23 elementos enteros con el valor -1.

::: tabs
== Java

```java
int valores[] = new int[23];
Arrays.fill(valores,-1); // Almacena -1 en todo el array ‘valores'
```

:::

También permite decidir desde qué índice hasta qué índice queremos rellenar:

::: tabs
== Java

```java
Arrays.fill(valores,5,8,-1); // Almacena -1 desde el 5.º hasta el 7.º elemento
```

:::

- **equals**: compara dos arrays y devuelve `true` si son iguales (`false` en caso contrario). Se consideran iguales si son del mismo tipo, tienen el mismo tamaño y contienen los mismos valores.

::: tabs
== Java

```java
Arrays.equals(valoresA, valoresB); // Devuelve true si los arrays son iguales
```

:::

- **sort**: permite ordenar un array en orden ascendente. También se pueden ordenar solo una serie de elementos, desde un punto determinado hasta otro.

::: tabs
== Java

```java
int x[]={4,5,2,3,7,8,2,3,9,5};
Arrays.sort(x); // Ordena x de menor a mayor
Arrays.sort(x,2,5); // Ordena x desde el 3.er hasta el 5.º elemento
```

:::

- **binarySearch**: permite buscar un elemento de forma ultrarrápida en un array ordenado. Devuelve el índice en el que se encuentra el elemento buscado.

Ejemplo:

::: tabs
== Java

```java
int x[]={1,2,3,4,5,6,7,8,9,10,11,12};
Arrays.sort(x);
System.out.println(Arrays.binarySearch(x,8)); // Nos devolvería 7
```

:::