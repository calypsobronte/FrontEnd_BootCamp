# Notas del BootCamp - FrontEnd

## Semana **`1`** del 27 de junio al 1 de julio `(Introducción a: Git y GitHub, Webtask, SCRUM, Markdown, HMTL5 y CSS3)`

* #### 27 Junio del 2017 `(Inicio del BootCamp Front-End)`
   ##### Preparacion del ambiente
  *  ###### Intalar Git y  Git Bash
   instala Git y  Git Bash, en el `Sistema Operativo` de tu preferencia [Descargar Git ¡Aca!] []

   >**Notas:**  En `Linux` y `Mac Os` ya viene preinstalado el Git y con el siguiente comando podreas saber que versión viene instalado.
   ```bash
        git --version
    ```

   Despues de haber instalado correctamente la aplicacion, procedemos a buscar `Git Bash` como lo muestra la imagen :

   ![Abrir consola Git Bash][consola]

   Al abrir la consola y nos dara una vista como esta:

   ![Consola][Consola Git Bash]

   procederemos a configurar nuestro Git con los siguientes comandos:

   ```bash
  git config --global user.name "<Su nombre o nick>"
  git config --global user.email "<Y Su correo electronico>"
  ```
    *  ###### Crear una cuenta en GitHub
    Si ya tienes una cuenta en GitHub puedes saltar al siguiente paso, pero si no tienes una cuenta en GitHub, puedes crear una nueva cuenta con su correo electronico en el siguiente link: [Registrate :octocat:][] :point_down:

    ![Registro][Register]

  *  ###### Configuración de la  SSH Keys
      * Para crear la llave privada o publica se utilizara la consola con los siguientes comandos:
     `ssh -v` luego `ls -a ~/.ssh` le damos una segunda vez al comando -> ` ls -a ~/.ssh` despues le damos para generar las claves  `ssh-keygen` despues ponemos este comando donde nos mostrara la llave publica y privada  
     * Ingresamos al correo electronico
     * Nos llega un codigo con 6 digitos, la copiar, despues volvemos a poner el comando `ls ~/.ssh` al final ponemos este ultimo comando que nos genera un codigo que sera en si nuestra llave en este caso sera publica
     `cat ~/.ssh/id_rsa.pub`. Es siguiente paso copiamos la llave que esta genero se:
    * Ingresar al GitHub [SSH and GPG Keys][]
    * Le damos en `New SSH Keys`
    * Pegamos la llave que nos habia generado con el `cat ~/.ssh/id_rsa.pub` que sera algo como:
      >ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCwcTqUIzZPaBsid2psVp0vaoLQ983UHj2wwmv5r6L5usNTQZppRvtbw2W6EW8fX8VaCnek5C2yDncKLvP6XJQTnKZTkqRXJS8UCwVy2VE+puLq02C+hZPhJdHXd0Hox5NQuwznZPYL4CesDYE4FsnYdpvtyRe6v3Wx1MjET1sjY7am6Z/oD7u6Uoa4pGbacWCgE+USKZ4StooTZYllo7aK4FYH1dqotH5TRiOpK+8WSQsFtvxjMmueK0oS/rrU7jMwIp1XUrjgTOt32LYj4N6fSy7l133egfaV8nhmJDpf6jVk5jHQPfqGg0jBDaGE9UAqcUVme48TwYr Prueba prueba@prueba

        * Generamos la llave.
        En la imagen nos muestra lo antes mencionado:

        `Configuracion de SSH Keys`![Configured the SSH Keys][Configured the SSH Keys]

        `SSH Keys`![SSH Keys][SSH Keys]

  *  ###### Instalar Node.js
  Instalar Node.js [Node.js][]
  Si lo tienes ya instalado podemos mirar en que versión se instalado `node -v`

  *  ###### Descargar un editor de codigo

    ```bash
    Sublime 3
    Atom
    brackets
    VS Code
    NotePad ++
    ```

  *  ###### Instalar NPM para utilizar WebTask
  Instalaremos el npm para realizar el primer ejercicio y  el reto en parejas en el cual se estara integrando con  la pagina [webtask.io][] que nos generara una URL que podemos utilizarla o compartirla.

    Comandos:
    >npm i -g wt-cli: instalación del webtaks
    >>wt -h: lista de los comandos que hay disponibles en webtask
    >>>wt ls: lista de  webtask que estan creadas
    >>>>wt init `<su correo con el cual se Registro en webtask>`
    >>>>>wt edit: carga la pagina
    >>>>>>wt create y nombre archivo subirlo desde la PC o en la nube

    Luego utilizaremos webtask que sera uno de los primeros acercamientos a un editor de codigo.

    ![webtask][webtask]
    Puedes ingresar a esta plataforma asociandolo con `GitHub`, `Facebook`, `Google`, `Microsoft`.

    ![Login webtask][webtask_login]
    Nuestra primera vista::point_down:

    ![Edit webtask][webtask_edit]


----------------------------------------------------------------

* #### 28 Junio del 2017

   ##### Scrum
   *  ###### ¿Que es Scrum?

  ##### MarkDown

  Markdown es un lenguaje de _formato ligero_ que facilita la creación de elementos básicos de **HTML** (creado por [John Gruber][] en 2004 y ayudado por [Aaron Swartz][]) , con una *sintaxis fácil de usar* ya sea para crear formularios en nuestros editores o manejarlo directamente en  la  plataforma GitHub. ay varias apps moviles que utiliza esta sintaxis para darle una mejor experiencia a sus usuarios entre ellas esta: ** WhatsApp, Twitter **

  *  ###### ¿Que es MarkDown?
  Herramienta de conversión de texto plano a Html, dando formato a las palabras como hacerlas negritas o itálicas, agregar imágenes, y creando listas o tablas. En general, Markdown es sólo un texto normal con un poco de caracteres no-alfabeticos como # o \*.
  Mas informacion. [Guia Markdown][]

    Tiene **licencia BSD**, es decir, se distribuye libremente
      *  ###### Ventajas Markdown
            * Es facil de leer
            * Se puede escribir HTML simultaneamente
            * Es compatible con cualquier Dispositivo
            * Es Dificil de que se cometan errores
  *  ###### Sintaxis    
        * **Encabezados:**
        <!-- Headers -->
        crea headers HTML fácilmente precediendo al texto con una serie de símbolos de números `(#)`.

          # Esto es un <h1>
          ## Esto es un <h2>
          ### Esto es un <h3>
          #### Esto es un <h4>
          ##### Esto es un <h5>
          ###### Esto es un <h6>

      **Nota:** Markdown también nos proveé con dos alternativas para indicar **h1** y **h2**

          Esto es un h1

          =============

          Esto es un h2

          -------------
        * **Estilo de Texto:**
            <!-- Estilos para texto plano -->
            El texto puede ser fácilmente estilizado con italicas, negritas o tachado con símbolos: Asterisco `(*)` , Guión bajo `( _ )` , `(~)`.

            *Texto en itálicas.* = \*Texto en itálicas.*

            _Igual que este texto._ = \_Igual que este texto._

            **Texto en negrita.** = \*\*Texto en negrita.**

            __Igual que este texto.__ = \__Igual que este texto.__

            ***Texto con ambos estilos: itálica y negrita.*** = \*\*\*Texto con ambos estilos: itálica y negrita.\***

            **_Igual que este!_** = \*\*\_Igual que este!\_**

            *__¡O este texto!__* = \*\_\_¡O este texto!\_\_*

            ~~Texto tachado.~~ = \~\~Texto tachado.\~\~

            En `HTML` equivale:
            ```bash
            Negrita <b>
            Cursiva <i>
            Tachado <> (Falta)
            ```

        * **Salto de linea:**
        En algun momento necesitamos hacer un salto de linea para empezar otro parrafo en el cual se podra utilizar `<br />`.

            ¡Hay un <br /> arriba de mí!

            Nota: Selecciona la linea :point_up_2:  para que veas el salto: `¡Hay un <br /> arriba de mí!`
        * **Citas:**
        Las citas de bloque son fáciles y se pueden hacer con el caracter `>`; las citas pueden estar anidadas (una cita dentro de otra) añadiendo niveles `>>`
        ```bash
        > Inicio del primer nivel.
        >
        > > Cita anidada.
        >
        > Regreso al primer nivel.
        ```
        > Inicio del primer nivel.
        >
        > > Cita anidada.
        >
        > Regreso al primer nivel.

        * **Listas:**

        Las ***listas desordenadas*** se hacen usando asteriscos `*`, símbolos de más `+`, o guiones `-`.

          * Item 1
          * Item 2
            * Item 2.1
            * Item 2.2

            o
          + Item 1
          + Item 2
            + Item 2.1
            + Item 2.2

          o
          - Item 1
          - Item 2
            - Item 2.1
            - Item 2.2

          * Item 1
          * Item 2
            * Item 2.1
            * Item 2.2

            o
          + Item 1
          + Item 2
            + Item 2.1
            + Item 2.2

           o
          - Item 1
          - Item 2
            - Item 2.1
            - Item 2.2<br /><br />

      Las ***listas ordenada*** se hacen usando  un número seguido de un punto `1.`.
      1. Item 1
      2. Item 2
      3. Item 3

      O tambien lo puedes poner con un solo número y el automaticamente los ordenara `1. 2. 3.`
      1. Item 1
      1. Item 2
      1. Item 3

          ```bash
          1. Item 1
          1. Item 2
          1. Item 3
          ```

      También puedes usar ***sub-listas***
      1. Item 1
      2. Item 2
      3. Item 3
            * Sub-item
            * Sub-item
      4. Item 4

          ```bash
          1. Item 1
          2. Item 2
          3. Item 3
                * Sub-item
                * Sub-item
          4. Item 4
          ```

      En `HTML` Las listas `Oredenas` y `desordenadas` equivale a :
      ```bash
      desordenadas <ul>Hi!<li>
      ```
        * **Enlaces:**

          Se utilizan corchetes `[]` para el texto y paréntesis `()` para el enlace. Existen dos formas de hacer los links una de forma larga otra de forma corta.

          * ***Links URL***

              *Forma larga*: `[texto](http://www.hola.co)`

              *Forma corta*: `[texto][]` y en lo ultimo de nuestro documento cuando este programando ponermos lo sigiuente:`[texto]: http://www.hola.co "Este es un comentario"`
          * ***Imagenes***

            *Forma larga*: `![Texto de la imagen](/ruta/imagen.jpg)`

            *Forma corta:* `![Texto de la imagen][imagen]`y en lo ultimo de nuestro documento cuando este programando ponermos lo sigiuente:`[imagen]: /ruta/imagen.jpg "Comentario a la imagen"`

          Si deseas ver mas  ejemplos detallados sobre lo antes mencinado :point_right: [Ingresa ¡Aca!][]

          En `HTML` los enlaces de `las URL` y `las imagenes` equivale a :
          ```bash
          URL <a href="http://www.hola.co"></a>
          Imagenes <img src="../ruta/imagen.jpg">
          ```
  *  ###### Dillinger.io
  nuestro primer acercamiento a la sintaxis de *Markdown* lo haremos con el editor [dillinger.io][].

    Nuestro primer ejemplo hecho en este editor online con Markdown
    ```Markdown
    # Mi biografia
    Mi nombre es **Lina** soy de _medellin_.
    Lo que mas me gusta es:

    1. Programar
    2. dibujar
    3. Futbol

    Esta es mi foto:
    ![Foto de Lina](https://pbs.twimg.com/profile_images/848381649511481344/EDqmCcUY_400x400.jpg)

    Este es mi [Twitter](https://twitter.com/calypso_bronte)
    ```
    ![dillinger.io][dillinger]

*  ##### Manejo de la terminal y comandos bash

|Comando| Descripción |
| ------ | ----------- |
| ls | Lista los contenidos  que esta en la carpeta que abrimos.|
| ls -l | Lista los contenidos que esta en la carpeta de una forma mas larga y con detalles.|
| ls -a | Lista los contenidos que esta en la carpeta incluyendo archivos ocultos.|
|||
| cd | nos redirecciona a la raiz del pc |
|cd (nombre de la carpeta)|nos permite ingresar a la carpeta que necesitamos |
| cd .. | retrocede a la carpeta anterior|
| cd - | Cambia de carpeta a la que sigue. |
|||
| mkdir (nombre de la carpeta) | crea una nueva carpeta sobre la principal|
|||
| rm -r (nombre de la carpeta) | Elimina la carpeta.|
| rm -rf (nombre de la carpeta) | Elimina la carpeta de una forma más forzada.|
|||
| cp (nombre archivo) (nombre archivo1) | Copia (nombre archivo) a (nombre archivo1).|
| cp -r (nombre de la carpeta)  (nombre de la carpeta1) | Copia (nombre de la carpeta)  a (nombre de la carpeta1) . |
|||
| rm (nombre archivo) | Remueve el archivo "file".|
| rm -f (nombre archivo) | Remueve el archivo "file" (Forzado).|
|||
| mv | Renombra el archivo o mover el archivo a otro destino diferente al actual|
| touch (nombre archivo) | crear un archivo ya sea .js .md .html .css|
|Ctrl + U|borra una línea.|
| more (nombre archivo)) | salir del archivo y tiene algo de similitud con el cat.|
|cat | abrir el archivo en la terminal |
|echo | imprimir un codigo |
|tab|podemos utilizarla para autocomplementar lo que estos digitando|
|pwd|Nos permite mirar en que enlace podemos hacer|
|Fleha arriba|Comandos anteriores|
|Flecha abajo|comandos siguientes|
----
* ##### Manejo de Comando Git y Control de versiones
  * Estados del Git:
    1. Archivo creado en la PC
    ```bash
     ~/documents/code/FrontEnd_BootCamp (master)
    ```
    2. <!--mirar si es staying-->Agregar lo que ya hemos hecho
    ```bash
    ~/documents/code/FrontEnd_BootCamp (master)
    $ git add .
    ```
    3. Realizar el comentarios para saber si ha subido correctamente a nuestro repositrio.
    ```bash
    ~/documents/code/FrontEnd_BootCamp (master)
    $ git commmit -m "Comentario"
    ```
    4. Por ultimo la subida a los archivos al repositorio con el `master`
    ```bash
    ~/documents/code/FrontEnd_BootCamp (master)
    $ git push origin2 master
    ```
  * Eliminar carpeta del repositorio (GitHub)

    ```bash
    rm -rf (Carpeta)
    git add --all
    git commit -m "Commit"
    git push origin2 master
    ```

| Comando | Descripción |
| ------:| -----------:|
| git init  | inicio del majeo del Git. |
| git status | estado de los archivos. |
| touch    | crear archivo en cualquiera de las extenciones que existen. |
|git add .|con esto le damos la orden que se va a gregar lo que se ha echo en nuetra carpeta|
|git commit -m "comentarios"| le damos |

----------------------------------------------------------------

* #### 29 Junio del 2017

   ##### Topicos
   *  ###### ¿Que es topicos ?
   *  ###### ¿Que es HTML entities?

    ##### Estructura basica HTML
    ```Html
    <!DOCTYPE html>
    <html>
        <head>

        <head>
          <body>

          </body>
    </html>
    ```
    ##### Atributos del HTML
    ```Html
    <html lang="en"> (especifica que mi pagina va a estar en un idioma determinado)
    <meta charset="UTF-8"/> (CAracteres especiales)
    ```
    ##### Elementos de  HTML
    ```Html
    * <p> </p> (texto, parrafo)
    * <br />  (Salto de línea)
    * <hr /> (Línea horizontal)
    ```
    ##### Caracteres reservados en HTML
    ```Html
      < , > , &
    ```
    ##### Estado de los `Links` en HTML
    * ###### Link Absoluto:
      Este nos redirigue a otra pagina.
      * ###### Esquema Absoluto
        * Esquema (Schema) = `"https"`
        * Subdominio (Subdominio) = `"www"`
        * Dominio (Dominio) = Link de la página `"google"`
        * Camino (Path) = carpeta donde esta alojada `"imagen"`
    ```Html
    atributo="valor"
    <a href="https://www.google.com"> Google <a/>
    ```
      * ###### Esquema Relativo
        * imagen: Nombre de la carpeta donde esta alogada
        * index.html: donde se esta diriguiendo
    ```Html
    atributo="valor"
    <a href="https://www.google.com/imagen/index.html"> imagen <a/>
    ```
      * ###### Esquema a la Raiz
        * Servidor local, donde con el `.` punto se muestra cuantas carpetas se tiene para avanzar.
    ```Html
    atributo="valor"
    <a href="../imagen/index.html"> imagen <a/>
    ```

    ##### Tipo de listados en HTML
    ```Html
    <ul> </ul> (lista no ordenada)
    <ol> </ol> (lista  ordenada)
    <li> </li> (item de la lista)
    <div> </div> (bloque)
    ```
    ##### Imagenes en HTML
    Imagenes que pueden estar local o por medio de un servidor en el cual soporta cualquier tipo de formato como:
    1. jpg `fotos`
    2. gif `imagen con movimiento`
    3. png `imagen con trasparencia`
    4. svg `imagen realizada con vectores`
    ```Html    
      <img src=""> (Estructura)
      <img src="" width="100px"> (Tamaño)
      <img alt="Descripción de la imagen"> (Leyenda)
    ```     

    Quieres saber mas en [Html 5 Doctor][] encontras mas información.

----------------------------------------------------------------

  * #### 30 Junio del 2017

     ##### CSS `Estilos`
     *  ###### ¿Que es CSS ?

      ***Nota:*** CSS y HTML no son lenguejes de programacion  Forma corta de colores `#FFF` una forma mas abreviada `#F00`

      ###### CSS Rules
        - Selector
        - Propiedad
        - Valor
     ```CSS
       selector
       {
          propiedad: valor;
        }
        ejemplo:
        body
        {
           color: #F00;
         }
     ```
      ###### Tipos de estilo `Style`
      Existe tres fomas de realizar los estilos en nuestra plantilla:

       1. Adentro del  `<head> </head>` se pondara la etiqueta `<style> </style>`
      ```Html
          <style>
          body{
            color: #031634;
          }
          </style>
      ```
      2. Caundo estamos creando nuestros codigo podemos ponerle tambien estilo en linea dentro de la etiqueta
      ```Html
          <p style="color:#031634;">estilo</p>
      ```

      3. Tambien podemos crear una carpeta donde se aloge todos los estilos, en el cual conllevara un archivo con extencion `.css` donde lo podemos utilizar en toda nuestra pagina `html` con la etiqueta `<link/>`
      ```Html
          <link rel="stylesheet" type="text/css" href="style/main.css">
      ```
      ![Style][style]
      ###### Unidades de medidad `Pixeles`
      Existen diferentes tipo de medidas para las diferentes acciones que se va a realizar como: `px`, `em`, `vh`, `%`.
      ```Bash
      em: es el tamaño de la m de la base del texto, es decir el doble de px 14px; = 1em, 2em = 28px;
      ```
      ```Bash
      vh: Hace referencia a la centésima parte de la altura del viewport
      ```
      ```Bash
      px: pixeles o unidad de medida
      ```
      ```Bash
      %: toma el tamaño por porcentaje asignado relativamente por el contenedor padre
      ```
      ###### Elementos bloques y en línea
      ***Los Elementos en bloques*** ocupan todo el `width` de su contenedor padre. Entre dos Elementos bloques no se le suman los `Margin` ya que siempre va a prevalecer el mayor margen en el cual solo tomara uno.
      Miestras que los ***Elementos en linea*** ocupa todo el `width` de su contenedor, llegado el caso que se utilice el width no lo va a reconocer ya que maneja su propia dimension
      ###### Modelo de caja
      En el `HTML` siempre vamos a diagramar, como si tuvieramos un conjunto de cajas, donde cada caja siempre va ha tener su contenido, un padding, un borde, un margin por todos los costados de la caja.
      ```Bash
      Margin: muestra los bordes hacia fuera.
      Padding: muetra los borde hacia adentro.
      ```
      ###### Resetear estilos
      Para resetear los estilos que viene por default en los navegadores como lo es el `padding` y el `margin` se utiliza el selector `*`.
      ```CSS
      *{
        margin:0;
        padding:0;
      }
      ```
      los elementos viene por default con la  propiedad ***content-box*** donde va a sumar el tamaño del contenido de los padding y los borders. Si se desea quitar esto se puede hacer con la propiedad ***box-sizing*** en el cual no lo va a sumar y va a coger el tamaño del width.
      ```CSS
      {
        Box-sizzing: border-box;
      }
      ```
      ###### Selector de Clases
      los selectores son usados por etiquetas, clases mas los id.
      ***Etiqueta:***
      ```CSS
      p {
            propiedad: valor;
      }
      ```
      ***Clase:*** se le asigna un punto segido del nombre que le vamos a poner a la clase `.nombreClase`.<br />
      `CSS`
      ```CSS
      .nombreClase {
            propiedad: valor;
      }
      ```
      `HMTL`
      ```Html
      <p class="nombreClase">texto</p>
      ```
      ***Id:*** se  le asigna con el simbolo numeral mas el nombre del id.<br />
      `CSS`
      ```CSS
      #nombreClase {
            propiedad: valor;
      }
      ```
      `HMTL`
      ```Html
      <p id="nombreClase">texto</p>
      ```
      ###### Pseudo-Clases
      `:link` = un link que nunca ha sido visitado

          `:visited` = el estado cuando el link ya ha sido visitado

          `:hover` = el estado cuando el puntero del mouse está sobre el link

          `:active` = el estado cuando el link está siendo presionado

          `:focus` = un campo de formulario seleccionado

          `:empty` = selecciona elementos vacios

          `:not()` = selecciona a los elementos que no coincidan con el selector pasado como parametro

          `:selection` = para aplicar estilos a la seleccion

          `:target` = selecciona el destino de un enlace interno

          ```CSS
          p {
                propiedad: valor;
          }
          ```
          ###### Especifidad
          Tiene la importancia de las reglas declaradas en el `CSS`; `Specifity Calculator` es una herramienta que permite calcular la importancia de la reglas en `CSS`

  ***Nota -2:*** no se puede usar `id` en `CSS` cuando se este en la *Especifidad*
  `!important `tiene la maxima Especifidad  donde los ultimos seran los primeros.      
  ***Nota-1:*** para calcular el tamaño de un elemento en `css`  se hace con:
  ```CSS
  width:calc (100%-100px);
  ```
----------------------------------------------------------------

  * #### 1 Julio del 2017
     ##### Explicacion
      ***Elementos en Bloque***
      - Cuando los elementos son de tipo bloque no tienen encuenta los espacios que se generan entre las etiquetas , mientras que `inline` o `inline-block` tiene encuenta los espacios y el navegador se va hacer visible y se va  a redenderizar.

      ***Columnas mas los perfijos***
      - Podremos tener multiples columnas con o sin  texto  para esto debemos ponerlos asi:
        * `column-count:` Numero de columanas que se desea tener
        * `column-gap:`Espacio entre columnas
        * `Prefijos:` se utilizaran estos prefijos ***`-moz y -webkit`*** para que el navegador pueda reconocerlos sin ningun tipo de errores ya que estas propiedades son muy nuevas en los unicos navegadores que no funcionan es `Opera` y `Internet Explore 9`
        ```CSS
        .ColumnText{
        -moz-column-count: 5;
        -moz-column-gap: 1.5em;
        -webkit-column-count: 5;
        -webkit-column-gap: 1.5em;
        column-count:5;
        column-gap:1.5em
        }
        ```
      ***Otros elementos***
      * `Width:` elemento bloque `block-level`
      * `Max-Width:` para los dispositivos moviles
      * `Box-model:` Modelo de caja `box-sizing`
      * `Float:` Flotar(envolver imagenes con texto)
      * `Position:` Posición
      * `static:` estatica
      * `relative:` se mueve si el padre lo llama
      * `fixed:` es fijo no importa si se hace scroll
      * `absolute:` es engañoso, actua con el fixed

    ##### Juego Selector de clases CSS
    ![Juego "Selectors"][play_game]
    <br /><br />
    * A + B selects the adjacent sibling
    * A ~ B selects all the adjacent siblings
    * A > B selects direct children of an element
    * :fist-child Select a first child element inside of another element
    * :only-child Select an element that are the only element inside of another one.
    * :last-child Select the last element inside of another element
    * *:nth-child(A)* Select an element by its order in another element.
    * *:nth-last-child(A)* Select an element by its order in another element, counting from the back
    * *:first-of-type* Select the first element of a specific type
    * *:nth-of-type(A)* Selects a specific element based on its type and order in another element - or even or odd instances of that element.
    * *:nth-of-type(An+B)* The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.
    * *:only-of-type* Selects the only element of its type within another element.
    * *:last-of-type* Select the last element of a specific type.
    * *:empty* Selects elements that don't have any other elements inside of them.
    * *:not(X)* Selects all elements that don't match the negation selector.
    * *[attribute]* Select all elements that have a specific attribute.
    * *A[attribute]* Select all elements that have a specific attribute.
    * *[attribute="value"]* Select all elements that have a specific attribute value. Attribute selectors are case sensitive, each character must match exactly.
    * *[attribute^="value"]* Select all elements with an attribute value that starts with specific characters.
    * *[attribute$="value"]* Select all elements with an attribute value that ends with specific characters.
    * *[attribute*="value"]* Select all elements with an attribute value that contains specific characters anywhere. A useful selector if you can identify a common pattern in things like class, href or src attributes.

=================================================================

## Semana **`2`** del 4 al 8 de julio `(fundamentos de JavaScript, CSS,  y HTML semántico)`

* #### 4 Julio del 2017
   ##### CSS Floats (Flotantes)
  *  ###### ¿Que es CSS floats?
     ###### Maquetacion
     ***Floats:*** estos pueden floar de izquierda a derecha o viceversa.

     ***Full-bleed:*** Es cuando el elemento contiene la maquetación donde ocupa el 100% de la pantalla

     ***Overflow:*** hidden; (para texto e imagen)

     ***Notas:*** *Los flotantes no generan un `Height` po lo tanto tendreos que ponerle como propiedad `overflow:hidden` donde se encuentran los flotantes. Adicionalmente a esto si deseamos poner a flotar una imagen que la tenemos por los `medio object` y queremos que el texto se aline junto con la imagen se le da la misma propiedad anunciada con antelacion*

   ##### Introduccion a JavaScript
  *  ###### ¿Que es JavaScript?
  *  ###### ¿Que es una variable?
  *  ###### ¿Que es un algoritmo?
  *  ###### ¿Que es una funcion?

      ***Componentes basicos de JavaScript***

      `type of var` <!--tipo de variable-->  
      `var suma = 2 + 5` <!--declaracion de operaciones-->  
      `var a` <!--variable -->
      `var lista = []` <!--definicion de una array-->

      ***Objetos***
      ```js
      var humano = {
        ojos: "café",
        piel: "Blanco",
        edad: 20,
        esAdulto: false
        }
        humano
        Object {ojos: "café", piel: "Blanco", edad: 20, esAdulto: false}
        humano.edad
        20
        function suma (x, y)
        {
        return x + y;
        }
        /* undefined
        suma
        var miSuma = suma (34, 56);
        undefined
        miSuma
        90
        var otraSuma = suma
        undefined
        otraSuma (73, 67);
        140*/
      ```
      ```js
      var human = {
        eyes: "blue",
        skin: "white",
        age: 20,
        isOlder:false,
        city: Medellin,
        country:Colombia
        }
      ```
      `human.eyes or human["eyes"]`
      ```js
      var context{
        .query{
        name = 'David'
        pet = 'Dog'
        }
     }
      ```
      ***Funcion***
      ```js
      function suma(x + y){
      return x + y;
      }
      ```
      `suma();`

      `var miSuma = suma(5, 2);`

      `var Suma = suma();`
      ```js
      var humano = {
        nombre: 'Guillermo'
        caminar: function(){
        consolo.log('Caminando...');
        },
        sumar: function(x,y){
        return x + y;
        }
        }
      ```
      `humano.sumar(3,6)`
      
      `humano.caminar()`

      ***Ejercicio***

      Hacer la estructura de HTML con todos los componentes
      CSS-> page, sidebar, content, footer, column
      [Pagina][]
-----------------------------------------------------------------
* #### 5 Julio del 2017
   ##### Repaso del dia 4 de julio
   Algoritmo instrucciones para sumar
   Pseudocodigo variable x o y
   Funtion suma x + y
   Hay muchas metodologias para empezar haceer sceudocodio para poderse
   La sintaxis cambia
   Variables
   funciones
   Tipos que pueden ser nativos
   Declara  la vaariable ques sedefine como tipo tipado son numeros.

  **Ejercicio**
  ```js
  function calcularEdad(edad)
  {/* esta funcion me va a devolver si es menor de edad,
  si es mayor de edad o si es  de la  tercera edad (Es decir tiene mas de 60 años)*/
  }
  ```
  Puedes abrir el archivo
  [calcularEdad.js][]
  ##### Operadores
  * ###### Asignacion compuesta
    * Division `/` o ➗
    * Multiplicacion
    * Resta
    * Suma
  * ###### Incrementacion
    * ++ : Aumenta
  * ###### Igualdad
    * texto == Numero

----------------------------------------------------------------

* #### 6 Julio del 2017
   ##### Introduccion a JavaScript
  *  ###### ¿Que es JavaScript?
----------------------------------------------------------------

* #### 7 Julio del 2017
   ##### Introduccion a JavaScript
  *  ###### ¿Que es JavaScript?

----------------------------------------------------------------

* #### 8 Julio del 2017
   ##### Introduccion a JavaScript
  *  ###### ¿Que es JavaScript?

=================================================================

## Semana **`3`** del 10 al 15 de julio `(JSON, DOM, CSS Advanced Positioning, Responsive Design, SS Grid Layout,Web Typografy, Introduction to Scrum, GitHub, Open Source, jQuery)`

* #### 10 Julio del 2017
   ##### JSON
  *  ###### ¿Que es JSON?
  *  ###### Ejercicio de Humanos.JSON
      Crear la estructur a de JSON con la lista de `Humanos` donde
      ```
      5 humanos uno de ellos tener amigos
Lista
  humano
         nombre
	Edad
	Animales (perros gatos peces)
	Amigos boolean
Lista de amigos
      ```

  ##### Errores que aparece en Git y Clonar repositorio de Guillo
 *  ###### Error en Git Local o repositorio de GitHub

 *  ###### Clonar repositorio de Guillo
     ```GitHub
     ~/documents/code (master)
     $ git clone https://github.com/glrodasz/frontend-bootcamp.git Renombrar con otro nombre.
     ```
  ##### DOM (Document Object Model)
 *  ######

 ----------------------------------------------------------------

 * #### 11 Julio del 2017
    #####
   *  ###### ¿Que es ?

----------------------------------------------------------------

  * #### 12 Julio del 2017
  #####
 *  ###### ¿Que es ?

----------------------------------------------------------------

 * #### 13 Julio del 2017
    #####
   *  ###### ¿Que es ?

----------------------------------------------------------------

* #### 14 Julio del 2017
 #####
*  ###### ¿Que es ?

----------------------------------------------------------------

 * #### 15 Julio del 2017
    #####
   *  ###### ¿Que es ?


=================================================================

## Semana **`4`** del 17 al 22 de julio `()`

 * #### 17 Julio del 2017
    #####
   *  ###### ¿Que es ?











<!--<>-->


<br />
<br />
<br />
<br />
<br />
<br />
<center>
  <footer>
     <a style="float: left" rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="/img/cc.png"></a>
<p>
<br />
<br />
      © 2017  -
        <a href="https://github.com/linamontano">Lina Montaño</a>
    </p>

  </footer>
  </center>

<!--<>-->

<!-- Enlaces de Webs -->
[Descargar Git ¡Aca!]:https://git-scm.com/downloads "Descargar Git"
[Registrate :octocat:]: https://github.com/join?source=header-home "Registrarse en GitHub"
[SSH and GPG Keys]: https://github.com/settings/keys "SSh Keys"
[Node.js]: https://nodejs.org/es/download/ "Descargar Node.js"
[Webtask.io]: https://webtask.io/ "Web Task"
[Aaron Swartz]: https://es.wikipedia.org/wiki/Aaron_Swartz "El Hijo del Internet"
[John Gruber]: https://en.wikipedia.org/wiki/John_Gruber "Creador de MarkDown"
[Ingresa ¡Aca!]: /Otros/ejemplo_links.md "Ejemplos de Enlaces"
[dillinger.io]: http://dillinger.io/ "Editor MarkDown"
[Guia MarkDown]: https://guides.github.com/features/mastering-markdown/ "Guia Git para MarkDown"
[Pagina]: /Elements_Float/pagina.html "footer,Headers, column"
[Html 5 Doctor]: http://html5doctor.com/ "Html 5 Doctor"
[calcularEdad.js]: /javascript/calcularEdad.js "Calcular la edad"


<!--<>-->

<!-- Enlaces de Imagenes -->
[consola]: /img/Git_Bash.png  "Abrir Consola Git Bash"
[Consola Git Bash]: /img/Consola_git_bash.JPG "Consola Git Bash"
[Register]: /img/Github.JPG "Registrate"
[Configured the SSH Keys]: /img/Git_Bash.JPG "Configuración del SSH Keys"
[SSH Keys]: /img/Git_SSH_keys.png "LLave Privada o Publica"
[webtask]: /img/webtask.jpg "Web Task"
[webtask_login]: /img/webtask_login.JPG "Ingreso a la plataforma de WebTask"
[webtask_edit]: /img/webtask_edit.JPG "Nuestra primera vista del editor"
[dillinger]: /img/dillinger.JPG "Editor online dillinger.io"
[style]: /img/style.JPG "Ejemplo de estilo"
[play_game]: /img/selectores.jpg "Juego de selectores"
