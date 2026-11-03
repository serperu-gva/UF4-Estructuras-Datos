# Bucle for en formato foreach

Al trabajar con arrays es muy frecuente cometer errores al utilizar los índices. El error más habitual consiste en intentar acceder a un elemento mediante un índice que está fuera de los límites.

Para recorrer un array de una manera más práctica y sencilla, sin tener que preocuparnos por los límites, podemos utilizar el bucle `for` con el formato foreach.

::: tabs
== Java

```java
double nota[] = new double[4]; // Declaramos un vector
for (double n : nota) // Utilizamos una variable del tipo del vector
    System.out.print(n + " "); // La variable va tomando el valor
                               // de cada uno de los elementos del vector
```

:::

>***Ejemplo: for en formato foreach***
>
>::: tabs
>== Java
>
>```java
>import java.util.Scanner;
>/**
>* Recorrer un array con un for en formato foreach.
>*/
>public class UF06EjemploForeach {
>    public static void main(String[] args) {
>
>        double nota[] = new double[4];
>        int i;
>        Scanner entrada = new Scanner (System.in);
>
>        System.out.println("Para calcular la nota media necesito saber la ");
>        System.out.println("nota de cada uno de tus exámenes.");
>
>        for (i = 0; i < 4; i++) {
>            System.out.print("Nota del examen número " + (i + 1) + ": ");
>            nota[i] = entrada.nextDouble();
>        }
>        System.out.println("Tus notas son: ");
>        double suma = 0;
>        for (double n : nota) { // for en formato foreach
>            System.out.print(n + " "); // utilizamos directamente la variable n
>            suma += n;
>        }
>        System.out.println("\nLa media es " + suma / 4);
>   }
>}
>```
>
>:::