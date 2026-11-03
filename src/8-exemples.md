# Ejemplos

## Ejemplo 1

Crear y cargar un array.

::: tabs
== Java

```java
package curso.UF04ejemplos;
/**
* UF04 Ejemplo 1: Crear un array
*/
public class UF04Ejemplo01 {
    public static void main(String[] args) {
        // Declaración del array
        int n[] = new int[4];
        int suma;
        // Cargar valores
        n[0] = 26;
        n[1] = -30;
        n[2] = 0;
        n[3] = 100;
        // Mostrar contenido y realizar operaciones
        System.out.print("Los valores del vector son los siguientes: ");
        System.out.println(n[0] + ", " + n[1] + ", " + n[2] + ", " + n[3]);
        suma = n[0] + n[3];
        System.out.println("El primer elemento del vector más el último suman " + suma);
    }
}
```

:::

## Ejemplo 2

Mostrar el contenido de la posición del vector que solicite el usuario.

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
/**
* Mostrar el contenido de la posición del vector que solicite el usuario.
*/
public class UF04Ejemplo02 {
    public static void main(String[] args) {

        // Declaración de variables y carga de datos en el array
        Scanner entrada = new Scanner (System.in);
        int i;
        int x[] = new int[5];
        x[0] = 8;
        x[1] = 33;
        x[2] = 200;
        x[3] = 150;
        x[4] = 11;

        // Preguntar qué posición se quiere visualizar y mostrarla
        System.out.println("El vector tiene 5 elementos. ¿Cuál quieres ver? ");
        i = entrada.nextInt();
        System.out.printf("El elemento que se encuentra en la posición %d es el %d", i, x[i-1]);
    }
}
```

:::

## Ejemplo 3

Cargar un array con valores solicitados por pantalla.

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
/**
* UF04 Ejemplo 3: Cargar un array con valores solicitados por pantalla.
*/
public class UF04Ejemplo03 {
    public static void main (String[] args) {

        // Declaración de variables
        final int ELEMENTOS = 10;
        int i;
        int vector[]=new int[ELEMENTOS];
        Scanner entrada = new Scanner(System.in);

        // Solicitud de datos y carga del array
        System.out.println("Escribe " + ELEMENTOS + " números enteros.");
        for (i=0; i<vector.length; i++){
            System.out.print("Escribe el elemento " + (i+1) + ": ");
            if (entrada.hasNextInt()) 
                vector[i] = entrada.nextInt();
            entrada.nextLine();
        }
        System.out.print("\n");

        // Mostrar el contenido del array
        for (i=0; i<vector.length; i++){
            System.out.println("El elemento " + (i+1) + " del vector es: " + vector[i]);
        }
    }
}
```

:::

## Ejemplo 4

Recorrer un array y mostrar la media.

::: tabs
== Java

```java
package curso.UF04ejemplos;
/**
* UF04 Ejemplo 4: Recorrer un array y mostrar la media.
*/
public class UF04Ejemplo04 {
    public static void main(String[] args) {
        // Declaramos variables y cargamos el vector
        int i;
        float[] vectorNotas = {2f, 5.5f, 9f, 10f, 4.9f, 8f, 8.5f, 7f, 6.6f, 5f, 9f, 7f};
        float suma, media;

        // Recorremos el array para realizar la suma y calculamos la media
        suma=0;
        for(i = 0; i < vectorNotas.length; i++) 
            suma = suma + vectorNotas[i];
        media = suma / vectorNotas.length;

        System.out.println("La media es " + media);
    }
}
```

:::

## Ejemplo 5

A partir de las notas de los estudiantes de un aula, generad un gráfico de barras (o histograma) en el que se indique el número de estudiantes que han obtenido suspenso, aprobado, notable o excelente.

::: tabs
== Java

```java
package curso.UF04ejemplos;
/**
* UF04 Ejemplo 5: A partir de las notas de los estudiantes de un aula, generad un gráfico de 
barras (o histograma)
* en el que se indique el número de estudiantes que han obtenido suspenso, aprobado, notable o excelente.
*/
public class UF04Ejemplo05 {
    public static void main (String[] args) {
        // Declaración de variables
        int i, j;
        // Inicialización del vector
        float[] vectorNotas = {2f, 5f, 9f, 6.5f, 10f, 4.5f, 8.5f, 7f, 6f, 7.5f, 9f, 7f};
        // Inicialización de los contadores de las barras
        int barras[] = new int[4];
        // Cálculo del tamaño de cada barra
        for (i = 0; i < vectorNotas.length; i++) {
            // Acumulamos según el rango de notas al que corresponde
            if ((vectorNotas[i] >=0 )&&(vectorNotas[i] < 5)) {
                barras[0]++;
            } else if (vectorNotas[i] < 6.5) {
                barras[1]++;
            } else if (vectorNotas[i] < 9) {
                barras[2]++;
            } else if (vectorNotas[i] <= 10) {
                barras[3]++;
            }
        }
        // Mostramos el gráfico de barras
        System.out.println("Gráfico de barras de las notas");
        System.out.println("______________________________");
        for (i = 0; i < barras.length; i++) {
            switch(i) {
                case 0:
                    System.out.print("Suspenso : ");
                    break;
                case 1:
                    System.out.print("Aprobado : ");
                    break;
                case 2:
                    System.out.print("Notable : ");
                    break;
                case 3:
                    System.out.print("Excelente : ");
                    break;
            }
            // Imprimimos los "*".
            for (j = 0; j < barras[i]; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}
```

:::

## Ejemplo 6

Mostrar una tabla bidimensional (matriz 5x4) de notas.

::: tabs
== Java

```java
package curso.UF04ejemplos;
/**
* UF04 Ejemplo 6. Mostrar una tabla bidimensional de notas
*/
public class UF04Ejemplo06 {
    public static void main (String[] args) {
        // Inicialización de la matriz de notas
        float[][] vectorNotas = {
            { 4.5f, 6f, 5f, 8f},
            { 10f , 8f, 7.5f, 9.5f},
            { 3f , 2.5f, 0f, 6f},
            { 6f , 8.5f, 6f, 4f},
            { 9f , 7.5f, 7f, 8f}
        };
        // Mostramos el contenido de la matriz
        for (int i = 0; i < vectorNotas.length; i++) {
            System.out.print("Los valores de la fila " + i + " son: ");
            for (int j = 0; j < vectorNotas[i].length; j++) {
                System.out.print(vectorNotas[i][j] + " ");
            }
            System.out.println("");
        }
    }
}
```

:::

## Ejemplo 7

Buscar en una frase introducida por teclado la primera y la última aparición de un carácter indicado por el usuario.

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
/**
* UF04 Ejemplo 07: Buscar en una frase introducida por teclado la primera y última 
aparición de un carácter indicado por el usuario.
*/
public class UF04Ejemplo07 {
    public static void main(String[] args) { 
        // Declaración de variables
        String texto, textoCaracter;
        char caracter;
        int posInicio, posFin;
        Scanner entrada = new Scanner(System.in);

        // Solicitud de datos
        System.out.println("Escribe una línea de texto y pulsa INTRO:"); 
        texto = entrada.nextLine(); 
        System.out.println("¿Qué carácter quieres buscar? "); 
        textoCaracter = entrada.next(); 
        entrada.nextLine(); 
        caracter = textoCaracter.charAt(0); // Nos quedamos con el primero por si el usuario ha introducido más

        // Procesar datos
        posInicio = texto.indexOf(caracter); 
        posFin = texto.lastIndexOf(caracter);
        if (posInicio > -1){
            System.out.println("Las apariciones del carácter '" + caracter + "' son:" ); 
            System.out.println("Primera aparición: " + posInicio+1); 
            System.out.println("Última aparición: " + posFin+1); 
        } else { 
            System.out.println("Este carácter no se encuentra en el texto."); 
        } 
    } 
}
```

:::

## Ejemplo 8

Búsqueda secuencial

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
/**
* UF04 Ejemplo 8: Búsqueda secuencial
*/
public class UF04Ejemplo08 {
    public static void main (String[] args){
        int vector[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int numero, i;
        boolean encontrado;
        Scanner entrada = new Scanner (System.in);
        System.out.print("Introduce un número entero que buscar (0 a 10): ");
        numero = entrada.nextInt();
        encontrado=false;
        for (i=0; i<vector.length && !encontrado; i++){
            encontrado = (vector[i]==numero);
        }
        if (encontrado) {
            System.out.println("El número se encuentra en la posición: " + i);
        } else {
            System.out.println("El número no se encuentra en el vector."); 
        }
    }
}
```

:::

## Ejemplo 9

Búsqueda dicotómica o binaria mediante un programa.

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
import java.util.Arrays;
/**
* UF04 Ejemplo 09: Búsqueda dicotómica o binaria mediante un programa
*/
public class UF04Ejemplo09 {
    public static void main (String[] args){

        int vector[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int numero, posicion=-1;
        int izquierda=0; // Índice izquierdo inicial: primera posición
        int derecha=vector.length-1; // Índice derecho inicial: última posición
        int centro = (derecha + izquierda) / 2; // Índice central inicial en el centro del vector
        boolean encontrado;
        Scanner entrada = new Scanner (System.in);

        System.out.print("Introduce un número entero que buscar (0 a 10): ");
        numero = entrada.nextInt();
        // Primero ordenamos el vector y lo mostramos para realizar la comprobación visual
        Arrays.sort(vector);
        for (int i=0; i<vector.length; i++){
            System.out.print(vector[i] + " ");
        }

        encontrado=false;
        while (izquierda<=derecha && !encontrado) {
            if (numero==vector[centro]){
                encontrado=true;
                posicion=centro;
            } else {
                if (numero<vector[centro]){
                    derecha=centro-1;
                } else {
                    izquierda=centro+1;
                }
            }
            centro=(izquierda+derecha)/2;
        }
        if (encontrado) {
            System.out.println("\nEl número se encuentra en la posición: " + posicion);
        } else {
            System.out.println("\nEl número no se encuentra en el vector."); 
        }
    } 
}
```

:::

## Ejemplo 10

Búsqueda dicotómica o binaria utilizando la función `binarySearch`. Incluye un ejemplo del uso de la función `arraycopy`.

::: tabs
== Java

```java
package curso.UF04ejemplos;
import java.util.Scanner;
import java.util.Arrays;
/**
* Búsqueda dicotómica o binaria utilizando la función binarySearch.
* Incluye un ejemplo del uso de la función arraycopy.
*/
public class UF04Ejemplo10 {
    public static void main (String[] args){
        int vector1[] = {5, 7, 9, 3, 2, 8, 10, 1, 0, 5, 7};
        int vector2[] = new int[vector1.length];
        int numero, posicion;
        Scanner entrada = new Scanner (System.in); 
        System.out.print("Introduce un número entero que buscar (0 a 10): ");
        numero = entrada.nextInt();

        // Realizamos una copia del vector como ejemplo del uso de la función arraycopy
        System.arraycopy(vector1, 0, vector2, 0, vector1.length);
        Arrays.sort(vector2);
        for (int i=0; i<vector1.length; i++){
            System.out.print(vector1[i] + " ");
        }
        System.out.println("");
        for (int i=0; i<vector2.length; i++){
            System.out.print(vector2[i] + " ");
        }

        // Realizamos la búsqueda dicotómica utilizando la función
        posicion=Arrays.binarySearch(vector2, numero);
        if (posicion>0) {
            System.out.println("\nEl número se encuentra en la posición: " + posicion);
        } else {
            System.out.println("\nEl número no se encuentra en el vector."); 
        }
    }
}
```

:::

## Ejemplo 11

Rellenado y recorrido de un vector

Veremos un ejemplo de cómo rellenar y mostrar un vector de números enteros:

::: tabs
== Java

```java
public static void main(String[] args) {
    Scanner entrada = new Scanner(System.in);

    int[] vector = new int[5]; // Creación de un vector de números enteros de tamaño 5
    int i;

    System.out.print("Introduce los valores del vector: ");

    // Rellenar el vector con valores desde el teclado
    for(i = 0; i < vector.length; i++)
        vector[i] = entrada.nextInt();

    System.out.print("El vector introducido es: ");

    // Mostrar el vector
    for(i = 0; i < vector.length; i++)
        System.out.print(vector[i] + " ");

    System.out.println();
}
```

:::

Hacemos uso de la propiedad `length`. También podríamos haber puesto un 5 (tamaño del vector). La salida es:

::: tabs
== Java

```java
Introduce los valores del vector: 1 2 3 4 5
El vector introducido es: 1 2 3 4 5
```

:::

Podemos introducir los valores separados por espacios y, una vez introducido el quinto número, pulsar «Intro». También podemos introducir un valor por línea.

## Ejemplo 12

Eliminar un elemento de un array

>::: tabs
>== Java
>
>```java
>// Declarar un array de 3 elementos 
>int[] edades = new int[3];
>
>// Rellenar
>edades[0] = 20; 
>edades[1] = 25;
>edades[2] = 30;
>
>// Acceder a un elemento
>int primeraEdad = edades[0]; 
>
>// Para eliminar el elemento edades[1], debemos asignarle un valor null
>edades[1] = null;
>
>// Ahora contiene [20, null, 30], pero el tamaño sigue siendo 3, aunque haya un elemento menos
>```
>

## Ejemplo 13

Eliminar un elemento de un ArrayList

>
>::: tabs
>== Java
>
>```java
>// Declarar un ArrayList
>ArrayList<Integer> edades = new ArrayList<>();
>
>// Añadir elementos 
>edades.add(20);
>edades.add(25);
>
>// Acceder a un elemento
>int primeraEdad = edades.get(0);
>
>// Eliminar un elemento
>edades.remove(0);
>
>// El tamaño cambia dinámicamente
>```
>
>:::