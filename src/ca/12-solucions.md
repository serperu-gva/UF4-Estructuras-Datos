# Solucions UF05. Estructures de Dades Dinàmiques I

::: Avís important
    dasfd
:::    
>IMPORTANT: 
<div style="
  border-left: 4px solid #ffcccb;
  background-color: #fff0f5;
  padding: 12px 16px;
  border-radius: 6px;
  margin: 1em 0;
  color: #b03060;
">
  ⚠️ <strong>Atenció:</strong> Després d’un nextInt(), el Scanner no consumeix el salt de línia (\n) que queda quan prems Enter.
Això fa que el següent nextLine() llegisca directament una línia buida.
</div>

🧠 Solució

Després de cada nextInt() has d’afegir una línia per "buidar" el Scanner:

##### Exercicis - Vectors

# 🧠 Exercici v1

## 📋 Enunciat
a) Declara i inicialitza un vector de 8 enters. Mostra el contingut del vector per pantalla.  
b) Mostra quants valors són positius i quants negatius.  
c) Mostra la suma i la mitjana dels valors del vector.  
d) Indica quin és el valor màxim i en quina posició es troba.

## 🛠️ Solució proposada

1. Es crea un vector d’enters amb 8 valors (positius, negatius i zero).  
2. Es compten quants nombres són **positius** i quants són **negatius**.  
   (El 0 no es compta com cap dels dos.)  
3. Es calcula la **suma** de tots els elements i la seua **mitjana**.  
4. Es busca el **màxim valor** del vector i també la **posició** on està.

### Resultat esperat
Mostra per pantalla:
- El nombre de positius i negatius.  
- La suma i la mitjana.  
- El valor més gran i la seua posició dins del vector.

## 📦 Codi Java

```java
   public static void main(String[] args) {
         // a) Declara i inicialitza un vector de 8 enters
        int[] v = { 3, -1, 7, 0, -5, 9, 2, -8 };

        // b) Positius vs negatius. El 0 es neutre, ni positiu ni negatiu
        int pos = 0, neg = 0;

        for (int i = 0; i < v.length; i++) {
            if (v[i] > 0)
                pos++;
            else if (v[i] < 0)
                neg++;

        }
        System.out.println("Positius: " + pos + " | Negatius: " + neg);

        // c) Suma i mitjana
        int suma = 0;
        for (int i = 0; i < v.length; i++) {
            suma += v[i];
         }
            
        double mitjana = (double) suma / v.length;
        System.out.println("Suma: " + suma + " | Mitjana: " + mitjana);

        // d) Màxim i posició
        int max = v[0], posMax = 0;
        for (int i = 1; i < v.length; i++) {
            if (v[i] > max) {
                max = v[i];
                posMax = i;
            }
        }
        System.out.println("Màxim: " + max + " a la posició " + posMax);
    }

```


# 🧠 Exercici V2

## 📋 Enunciat
a) Declara i ompli un vector amb N paraules, on N és un número introduït per teclat i les paraules són cadenes també introduïdes per teclat.
b) Mostra aquelles paraules que comencen per vocal.
c) Mostra quina és la paraula més llarga, i indica el tamany.

## 🛠️ Solució proposada

### Explicació pas a pas
1. L’usuari indica **quantes paraules** vol escriure.  
2. El programa llig eixes paraules una per una i les guarda en un vector.  
3. Mostra **quines paraules comencen per una vocal** (a, e, i, o, u).  
4. Busca la **paraula més llarga** i mostra quants caràcters té.

### Resultat esperat
- Llista de paraules que comencen amb vocal.  
- La paraula més llarga i la seua longitud.


## 📦 Codi Java

```java
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        System.out.print("Introdueix número de paraules: ");
        int numParaules = sc.nextInt();

        String[] paraules = new String[numParaules];
        //com hem llegit int en scanner i ara volem llegir strings netegem el buffer
        sc.nextLine();
        for (int i = 0; i < numParaules; i++) {

            System.out.print("Paraula " + (i + 1) + ": ");
            paraules[i] = sc.nextLine();

        }

        // b) Paraules que comencen per vocal
        System.out.println("Paraules que comencen per vocal:");

        for (int i = 0; i < numParaules; i++) {
            // Agafem la primera lletra de la paraula
            String paraula = paraules[i];
            char primera = paraula.charAt(0); // primera lletra

            // Passem la lletra a minúscula si era majúscula
            if (primera == 'A')
                primera = 'a';
            if (primera == 'E')
                primera = 'e';
            if (primera == 'I')
                primera = 'i';
            if (primera == 'O')
                primera = 'o';
            if (primera == 'U')
                primera = 'u';

            // Comprovem si és una vocal
            if (primera == 'a' || primera == 'e' || primera == 'i' || primera == 'o' || primera == 'u') {
                System.out.println(paraula + " comença per vocal");
            }
        }

        // c) Paraula més llarga i tamany
        String max = paraules[0];
        for (int i = 0; i < numParaules; i++) {
            if (paraules[i].length() > max.length()) {
                max = paraules[i];
            }

        }

        System.out.println("La paraula més llarga és " + max + " i té " + max.length() + " caràcters.");

    }
```

# 🧠 Exercici V3

## 📋 Enunciat
a) Introdueix en un vector 10 paraules donades per l'usuari. Mostra-les.
b) Indica si hi ha paraules repetides. Mostra-les.

## 🛠️ Solució proposada

### Explicació pas a pas
1. L’usuari introdueix **10 paraules**, que es guarden en un vector.  
2. Es mostra el vector complet amb totes les paraules.  
3. El programa busca si hi ha **paraules repetides**, ignorant majúscules i minúscules.  
4. Es fa servir un **altre vector addicional** per guardar les paraules que ja s’han trobat repetides, i així no mostrar-les dues vegades.  
5. Si no n’hi ha cap, mostra un missatge dient-ho.

### Resultat esperat
Mostra:
- La llista de paraules repetides (una sola vegada cadascuna).  
- O bé un missatge indicant que no n’hi ha.


## 📦 Codi Java

```java
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String[] vectorParaules = new String[10];

        for (int i = 0; i < vectorParaules.length; i++) {
            System.out.print("Paraula " + (i + 1) + ": ");
            vectorParaules[i] = sc.nextLine();
        }

        //La classe Arrays te un métode toString per a mostrar el array
        System.out.println("Totes les paraules: " + Arrays.toString(vectorParaules));
        /* Es equivalent a
            System.out.println("\nTotes les paraules:");
                for (int i = 0; i < vectorParaules.length; i++) {
                    System.out.println("- " + vectorParaules[i]);
            }
         */

        // Comprovem si alguna paraula està repetida
        boolean hiHaRepetides = false;
        String[] repetides = new String[vectorParaules.length]; // array per guardar les repetides
         int numRepetides = 0;
         

        System.out.println("Paraules repetides:");

        for (int i = 0; i < vectorParaules.length; i++) {
            for (int j = i + 1; j < vectorParaules.length; j++) {

                if (vectorParaules[i].equalsIgnoreCase(vectorParaules[j])) {
                    
                    // comprovem si ja està a l'array de repetides
                    boolean jaEsta = false;
                    for (int k = 0; k < numRepetides; k++) {
                        if (repetides[k].equalsIgnoreCase(vectorParaules[i])) {
                            jaEsta = true;
                            break;
                        }
                    }

                    // si no està, l'afegim i la mostrem
                    if (!jaEsta) {
                        repetides[numRepetides] = vectorParaules[i];
                        numRepetides++;
                        System.out.println("- " + vectorParaules[i]);
                        hiHaRepetides = true;
                    }
                }
            }
        }

        if (!hiHaRepetides) {
            System.out.println("No hi ha paraules repetides.");
        }
     }
```

# 🧠 Exercici V4

## 📋 Enunciat
S'està analitzant un qüestionari amb 10 preguntes, cadascuna amb 4 possibles solucions (1, 2, 3 o 4), realitzat per diversos estudiants.

a) Declara un vector on s'emmagatzemen les respostes correctes del test. Usa números enters aleatoris entre 1 i 4.
b) Emmagatzema les respostes d'un estudiant en un altre vector. Resposta 0 es considerarà com no contestada.
c) Mostra quantes preguntes ha contestat correctament, quantes ha contestat incorrectament, i quantes no ha contestat.
d) Calcula i mostra la nota obtinguda. Si la nota ix negativa, serà 0. Usa la següent equació:

>nota = (n_correctes - 0.33 * n_incorrectes) / n_total.

## 🛠️ Solució proposada

### Explicació pas a pas
1. Es generen **respostes correctes aleatòries** per a 10 preguntes.  
2. L’alumne introdueix les seues **respostes** (valors de 0 a 4, on 0 és “no contestada”).  
3. El programa compta:
   - Quantes són **correctes**.  
   - Quantes **incorrectes**.  
   - Quantes **no contestades**.  
4. Calcula la **nota final** segons la fórmula:

   ```
   nota = (correctes - 0.33 × incorrectes) / total de preguntes
   ```

   Si la nota és negativa, es posa a 0.  
5. Mostra els resultats per pantalla.

### Resultat esperat
- Nombre de respostes correctes, incorrectes i no contestades.  
- Nota final calculada.


## 📦 Codi Java

``` java

        //declarem una constant per a les preguntes
        final int NUM_PREGUNTES = 10;
        Random rnd = new Random();

        // a) Respostes
        int[] solucions = new int[NUM_PREGUNTES];
        for (int i = 0; i < NUM_PREGUNTES; i++)
            solucions[i] =rnd.nextInt(5); //5 perq resposta 0 es no contestada

        // b) Respostes d'un estudiant (0 = no contestada)
        int[] respostesAlumne = new int[NUM_PREGUNTES];
        Scanner sc = new Scanner(System.in);
        System.out.println("Introdueix respostes (0-4):");
        for (int i = 0; i < NUM_PREGUNTES; i++) {
            System.out.print("P" + (i + 1) + ": ");
            respostesAlumne[i] = sc.nextInt();
        }

        // c) Comptatge
        int corr = 0, inc = 0, noCont = 0;
        for (int i = 0; i < NUM_PREGUNTES; i++) {
            if (respostesAlumne[i] == 0)
                noCont++;
            else if (respostesAlumne[i] == solucions[i])
                corr++;
            else
                inc++;
        }

        System.out.println("Correctes: " + corr + " | Incorrectes: " + inc + " | No contestades: " + noCont);

        // d) Nota
        double nota = (corr - 0.33 * inc) / NUM_PREGUNTES;
        if (nota < 0)
            nota = 0;
        System.out.println("Nota: " + String.format("%.2f", nota));
 ```

### Exercici V5

## 📋 Enunciat
Un sistema ha de controlar un conjunt d'usuaris que s'autentiquen amb nom i contrasenya. Només cal emmagatzemar i comprovar aquestes dades, sense xifrar.

a) Declara i inicialitza dos vectors paral·lels amb 5 noms d'usuari i les seues contrasenyes. Genera les contrasenyes com a un conjunt aleatori d'enters.
b) Permet iniciar sessió: demana nom i contrasenya, i valida si coincideixen. Mostra un missatge informant del resultat.
c) Mentre la sessió no s'inicie correctament, el programa demanarà usuari i contrasenya constantment, fins que s'introduïsca "fi" com a nom.
d) Si has iniciat correctament la sessió, mostra un menú amb dos opcions: una per a tancar sessió i una altra que permet canviar la contrasenya actual.

## 🛠️ Solució proposada


### Explicació pas a pas
1. Es creen dos vectors paral·lels:  
   - Un amb **noms d’usuaris**.  
   - I un altre amb **contrasenyes numèriques** de quatre enters.  
2. El programa demana **usuari i contrasenya** dins d’un bucle:
   - Si coincideixen, mostra *“Sessió iniciada!”*.  
   - Si no, permet tornar-ho a provar.  
   - Si l’usuari escriu “fi”, el programa acaba.  
3. Quan la sessió està iniciada, apareix un **menú amb dos opcions**:
   1. Canviar la contrasenya.  
   2. Tancar la sessió.  
4. Si es tria “1”, es demana una nova contrasenya i s’actualitza.  
   Si es tria “2”, la sessió es tanca i el programa finalitza.

### Resultat esperat
- El programa permet iniciar sessió, canviar la contrasenya o eixir de manera segura.  


## 📦 Codi Java

```java
    public static void main(String[] args) {

        // a) Vectors paral·lels
        String[] usuaris = { "anna", "borja", "carla", "david", "eric" };
        int[] contrasenyes = { 1234, 9955, 9634, 2244, 9832 };

        Scanner sc = new Scanner(System.in);
        boolean sessioIniciada = false;
        int idUsuari = -1;

        boolean eixir = false; // per saber si s'ha escrit "fi"
        while (!sessioIniciada && !eixir) {
            System.out.print("Usuari (o fi per eixir): ");
            String usuari = sc.nextLine();

            if (usuari.equalsIgnoreCase("fi")) {
                System.out.println("Programa finalitzat.");
                eixir = true; // marquem que volem eixir
            }
            if (!eixir) {
                System.out.print("Contrasenya: ");
                int pass = sc.nextInt();
                sc.nextLine(); // buidar després de nextInt()

                // Validació
                idUsuari = -1;
                for (int i = 0; i < usuaris.length; i++) {
                    if (usuaris[i].equals(usuari) && contrasenyes[i] == pass) {
                        idUsuari = i;
                    }
                }

                if (idUsuari != -1) {
                    sessioIniciada = true;
                    System.out.println("Sessió iniciada!");
                } else {
                    System.out.println("Credencials incorrectes. Torna-ho a intentar.");
                }
            }

        }
        // d) Menú després d'iniciar sessió
        while (sessioIniciada) {
            System.out.println();
            System.out.println("--- Menú ---");
            System.out.println("1) Canviar contrasenya");
            System.out.println("2) Tancar sessió");
            System.out.print("Opció: ");
            int op = sc.nextInt();
            sc.nextLine(); // buidar després de nextInt()

            switch (op) {
                case 1:
                    System.out.print("Introdueix nova contrasenya 4 números: ");
                    int nova = sc.nextInt();
                    sc.nextLine(); // buidar després de nextInt()
                    contrasenyes[idUsuari] = nova;
                    System.out.println("Contrasenya actualitzada.");
                    break;
                case 2:
                    sessioIniciada = false;
                    System.out.println("Sessió tancada. Adéu!");
                    break;
                default:
                    System.out.println("Opció no vàlida.");
            }
        }
    }
```