# 5. Búsqueda con vectores

Existen dos maneras de buscar un elemento dentro de un vector: la búsqueda secuencial y la búsqueda dicotómica o binaria.

## 5.1. Búsqueda secuencial

La búsqueda secuencial es la más sencilla de las dos, ya que consiste en comparar los elementos del vector con el elemento que se desea buscar.

Un ejemplo es el siguiente, donde se devuelve la posición del elemento en el vector y, si no lo encuentra, devuelve el valor -1:

::: tabs
== Java

```java
public static int busquedaSecuencial(int[] v, int elemento){
    int i, posicion = -1;
    for(i = 0; i < v.length && posicion == -1; i++)
        if(v[i] == elemento)
            posicion = i;

    return posicion;
}
```

:::

## 5.2. Búsqueda dicotómica o binaria

En este caso, el vector debe estar ordenado. Se dividirá en dos para buscar el elemento en una parte del vector o en otra, y así sucesivamente hasta encontrar o no el elemento.

Un ejemplo es el siguiente:

::: tabs
== Java

```java
public static int busquedaDicotomica(int[] vector, int elemento)
{
    int izquierda = 0; // El índice 'izquierda' se establece en la posición 0
    int derecha = vector.length - 1; // El índice 'derecha' se establece en la última posición
    int centro = (izquierda + derecha) / 2; // El índice 'centro' se establece en la posición central
    int posicion;

    while (izquierda <= derecha && vector[centro] != elemento)
    {
        if (elemento < vector[centro])
            derecha = centro - 1; // Si el elemento es menor que el centro, cambiamos el índice 'derecha'
        else
            izquierda = centro + 1; // En caso contrario, cambiamos el índice 'izquierda'

        centro = (izquierda + derecha) / 2; // Actualizamos el centro
    }

    if (izquierda > derecha)
        posicion = -1; // Elemento no encontrado
    else
        posicion = centro; // Elemento encontrado en la posición 'centro'

    return posicion;
}
```

:::

<!-- ![Ejemplos de búsqueda dicotómica](/uf5/busquedaDicotomica.jpg) -->

En este caso, al igual que en el anterior, la función devuelve la posición del elemento o -1 si no lo encuentra. Es importante tener en cuenta que el vector debe estar ordenado para quedarnos con la parte desde la izquierda hasta el centro del vector o desde el centro del vector hasta la derecha, dependiendo de si el elemento que se desea buscar es mayor o menor que el elemento situado en el centro del vector.

Esta búsqueda es más eficiente que la secuencial, ya que no necesita recorrer el vector completo.