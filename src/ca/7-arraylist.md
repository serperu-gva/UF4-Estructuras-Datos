# 7. La classe ArrayList (Java)

Els ArrayList són una classe de la llibreria de col·leccions de Java que implementen la interfície List. Permeten emmagatzemar elements dins d'una llista dinàmica on la mida pot augmentar i disminuir segons es vagin afegint o eliminant elements.

La principal diferència entre arrays i ArrayList en Java és:

- Arrays:
  - Tenen mida fixa que s'ha d'especificar en crear-los.
  - Emmagatzemen dades de tipus primitiu o objectes.
  - No es poden modificar dinàmicament, la mida no canvia.

- ArrayList:
  - Mida dinàmica, creix i decreix automàticament.
  - Només poden emmagatzemar objectes (no tipus primitius).
  - Es poden modificar, afegint o eliminant elements.

Taula amb la correspondencia entre tipus primitius i tipus objecte:

<div align="center">

| Tipus primitiu  |            Tipus Objecte         |
|:-----------------:|:----------------------------------:|
| `byte`          | `Byte`                           |
| `short`         | `Short`                          |
| `int`           | `Integer`                        |
| `long`          | `Long`                           |
| `float`         | `Float`                          |
| `double`        | `Double`                         |
| `char`          | `Character`                      |
| `boolean`       | `Boolean`                        |

</div>
Alguns detalls importants dels ArrayList:

- Es declaren especificant el tipus de dades dels elements que emmagatzemaran entre < >.  
  Per exemple: `ArrayList<String> llista = new ArrayList<>();`
- Permeten accedir a elements específics mitjançant un índex que comença en 0.
- Poden inserir, eliminar, buscar elements de manera eficient.
- L'accés i recorregut és molt ràpid, ja que estan basats en arrays redimensionables.

1. Declarar i inicialitzar un ArrayList:

::: tabs
== Java

```java
ArrayList<String> noms = new ArrayList<>();
```

:::

2. Afegir elements amb `add()`:

::: tabs
== Java

```java
noms.add("Pau");
noms.add("Marta");
```

:::

3. Accedir a un element per la posició:

::: tabs
== Java

```java
String primerNom = noms.get(0); // retorna "Pau"
```

:::

4. Recórrer la llista i imprimir els elements:

::: tabs
== Java

```java
for(String nom : noms) 
  System.out.println(nom); 
```

:::

5. Eliminar un element per la posició:

::: tabs
== Java

```java
noms.remove(0); // elimina "Pau"
```

:::

>***Exemple complets d'un Array:***
>
>::: tabs
>== Java
>
>```java
>// Declarar array de 3 elements 
>int[] edats = new int[3];
>
>// Omplir
>edats[0] = 20; 
>edats[1] = 25;
>edats[2] = 30;
>
>// Accedir a un element
>int primeraEdat = edats[0]; 
>
>// Per eliminar el element, edats[1] hem de assignar-li un valor null
>edats[1] = null;
>
>// Ara conté [20, null, 30] però la mida segueix sent 3, encara que hi haga un element menys
>```
>
>:::

**IMPORTANT!**: Per a eliminar un element d'un array i que canvie el seu tamany cal:

- Crea un nou array amb una longitud 1 menor que l'original. 
- Copia tots els elements de l'array original excepte el que vols eliminar al nou array. 
- Assigna el nou array a l'array original.

>***Exemple complet d'un ArrayList:***
>
>::: tabs
>== Java
>
>```java
>// Declarar ArrayList
>ArrayList<Integer> edats = new ArrayList<>();
>
>// Afegir elements 
>edats.add(20);
>edats.add(25);
>
>// Accedir a un element
>int primeraEdat = edats.get(0);
>
>// Eliminar un element
>edats.remove(0);
>
>// La mida canvia dinàmicament
>```
>
>:::

La diferència principal amb un ArrayList és:

- En un ArrayList si eliminem un element, la mida es redueix automàticament.
- En canvi en un Array, encara que eliminem un element, la mida total continua sent la mateixa.
- Hem de desplaçar manualment els elements per "emplenar" la posició eliminada.
- L'Array sempre ocupa el mateix espai en memòria, encara que estigui parcialment buit.
