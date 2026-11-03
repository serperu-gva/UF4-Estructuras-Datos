# 7. La clase ArrayList (Java)

Los ArrayList son una clase de la biblioteca de colecciones de Java que implementan la interfaz List. Permiten almacenar elementos dentro de una lista dinámica cuyo tamaño puede aumentar y disminuir a medida que se van añadiendo o eliminando elementos.

La principal diferencia entre arrays y ArrayList en Java es:

- Arrays:
  - Tienen un tamaño fijo que se debe especificar al crearlos.
  - Almacenan datos de tipo primitivo u objetos.
  - No se pueden modificar dinámicamente, su tamaño no cambia.

- ArrayList:
  - Tienen un tamaño dinámico, crecen y decrecen automáticamente.
  - Solo pueden almacenar objetos (no tipos primitivos).
  - Se pueden modificar, añadiendo o eliminando elementos.

Tabla con la correspondencia entre tipos primitivos y tipos objeto:

<div align="center">

| Tipo primitivo | Tipo objeto |
|:--------------:|:-----------:|
| `byte`         | `Byte`      |
| `short`        | `Short`     |
| `int`          | `Integer`   |
| `long`         | `Long`      |
| `float`        | `Float`     |
| `double`       | `Double`    |
| `char`         | `Character` |
| `boolean`      | `Boolean`   |

</div>

Algunos detalles importantes de los ArrayList:

- Se declaran especificando entre `< >` el tipo de datos de los elementos que almacenarán.  
  Por ejemplo: `ArrayList<String> lista = new ArrayList<>();`
- Permiten acceder a elementos específicos mediante un índice que comienza en 0.
- Pueden insertar, eliminar y buscar elementos de manera eficiente.
- El acceso y el recorrido son muy rápidos, ya que están basados en arrays redimensionables.

## Operaciones básicas (aplicables a cualquier lenguaje)

| Operación | Descripción | Equivalente en otros lenguajes |
|-----------|-------------|-----------------------------------|
| **add / append / insert** | Añade un elemento al final o en una posición concreta | `append()` / `add()` / `insert()` |
| **get / access / index** | Accede a un elemento mediante su índice | `lista[i]` / `get(i)` |
| **set / update** | Cambia el valor de un elemento existente | `lista[i] = valor` / `set(i, valor)` |
| **remove / delete** | Elimina un elemento de la lista | `remove(i)` / `pop(i)` / `del lista[i]` |
| **size / length** | Devuelve el número de elementos | `len()` / `size()` / `length` |

1. Declarar e inicializar un ArrayList:

::: tabs
== Java

```java
ArrayList<String> nombres = new ArrayList<>();
```

:::

2. Añadir elementos con `add()`:

::: tabs
== Java

```java
nombres.add("Pau");
nombres.add("Marta");
```

:::

3. Acceder a un elemento por su posición:

::: tabs
== Java

```java
String primerNombre = nombres.get(0); // devuelve "Pau"
```

:::

4. Recorrer la lista e imprimir los elementos:

::: tabs
== Java

```java
for(String nombre : nombres) 
  System.out.println(nombre); 
```

:::

5. Eliminar un elemento por su posición:

::: tabs
== Java

```java
nombres.remove(0); // elimina "Pau"
```

<div style="
  border-left: 4px solid #ffcccb;
  background-color: #fff0f5;
  padding: 12px 16px;
  border-radius: 6px;
  margin: 1em 0;
  color: #b03060;">

⚠️ Para **eliminar** un elemento de un array y que cambie su tamaño es necesario:

- Crear un nuevo array con una longitud 1 menor que la del original.
- Copiar todos los elementos del array original, excepto el que se quiere eliminar, al nuevo array.
- Asignar el nuevo array al array original.

⚠️ La **diferencia** principal con un ArrayList es:

- En un ArrayList, si eliminamos un elemento, el tamaño se reduce automáticamente.
- En cambio, en un Array, aunque eliminemos un elemento, el tamaño total continúa siendo el mismo.
- Debemos desplazar manualmente los elementos para «rellenar» la posición eliminada.
- El Array siempre ocupa el mismo espacio en memoria, aunque esté parcialmente vacío.

</div>

:::

6. Ordenar la lista:

::: tabs
== Java

```java
Collections.sort(nombres); // ordena alfabéticamente
```

:::

7. Obtener la posición de un elemento en la lista:

::: tabs
== Java

```java
nombres.indexOf("Marta"); // devuelve la posición
```

:::

8. Saber si está el elemento:

::: tabs
== Java

```java
nombres.contains("Marta"); // devuelve true si encuentra el String
```

:::

9. Tamaño de la lista:

::: tabs
== Java

```java
nombres.size(); // devuelve el número de elementos de la lista
```

:::