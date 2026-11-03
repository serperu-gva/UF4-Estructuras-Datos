# 4. Matrices (vectores multidimensionales)

Los vectores pueden tener más de una dimensión. Los más utilizados son los vectores de 2 dimensiones, conocidos como matrices.

Las matrices se definen de la siguiente forma:

::: tabs
== Java

`tipo identificador[][];`  
`tipo[][] identificador;`

Ambas declaraciones son equivalentes.
:::

Por ejemplo, declaramos e instanciamos un vector de 3 x 3 (3 filas x 3 columnas).

![Matriz](/uf5/Matriu.jpg)

::: tabs
== Java

`double precios[][] = new int[3][3];`
:::

Accedemos a sus valores utilizando dobles corchetes.

::: tabs
== Java

```java
precios[0][0] = 7.5;
precios[0][1] = 12;
precios[0][2] = 0.99;
precios[1][0] = 4.75;
// etc.
```

:::

Veamos otro ejemplo en el que declaramos e instanciamos un vector de 3 filas x 6 columnas para almacenar las notas de 3 alumnos (la fila corresponde a un alumno y cada columna a las notas de ese alumno):

::: tabs
== Java

```java
int notas[][] = new int[3][6]; // Es equivalente a 3 vectores de tamaño 6
```

:::

Suponiendo que las notas ya están almacenadas, recorreremos la matriz (vector bidimensional) para mostrar las notas por pantalla. Hay que tener en cuenta que, como tiene dos dimensiones, necesitaremos un bucle anidado (uno para las filas y otro para las columnas de cada fila):

::: tabs
== Java

```java
// Para cada fila (alumno)
for (int i = 0; i < notas.length; i++) {
    System.out.print("Notas del alumno " + i + ": ");
    // Para cada columna (nota)
    for (int j = 0; j < notas[i].length; j++)
        System.out.print(notas[i][j] + " ");
}
```

:::