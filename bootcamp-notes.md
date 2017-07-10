# Notas del BootCamp - FrontEnd

## Semana del 27 de junio al 1 de julio

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
    ```bash
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
| touch (nombre archivo) | crear un archivo ya sea .js .md .html .css|0.
|Ctrl + U|borra una línea.|
| more (nombre archivo)) | salir del archivo y tiene algo de similitud con el cat.|
|cat | abrir el archivo en la terminal |
|echo | imprimir un codigo |
|tab|podemos utilizarla para autocomplementar lo que estos digitando|
|pwd|Nos permite mirar en que enlace podemos hacer|
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

| Comando | Descripción |
| ------:| -----------:|
| git init  | inicio del majeo del Git. |
| git status | estado de los archivos. |
| touch    | crear archivo en cualquiera de las extenciones que existen. |
|git add .|con esto le damos la orden que se va a gregar lo que se ha echo en nuetra carpeta|
|git commit -m "comentarios"| le damos |


=================================================================

## Semana del 4 al 8 de julio

* #### 4 Julio del 2017
   #####
  *  ######

















<br />
<br />
<br />
<br />
<br />
<br />
<center>
  <footer>
     <a style="float: left" rel="license" href="https://creativecommons.org/licenses/by-sa/3.0/deed.en_US"><img alt="Creative Commons License" style="border-width:0" src="img/cc.png"></a>
<p>
<br />
<br />
      © 2017  -
        <a href="https://github.com/linamontano">Lina Montaño</a>
    </p>

  </footer>
  </center>

<!-- Enlaces de Webs -->
[Descargar Git ¡Aca!]:https://git-scm.com/downloads "Descargar Git"
[Registrate :octocat:]: https://github.com/join?source=header-home "Registrarse en GitHub"
[SSH and GPG Keys]: https://github.com/settings/keys "SSh Keys"
[Node.js]: https://nodejs.org/es/download/ "Descargar Node.js"
[Webtask.io]: https://webtask.io/ "Web Task"
[Aaron Swartz]: https://es.wikipedia.org/wiki/Aaron_Swartz "El Hijo del Internet"
[John Gruber]: https://en.wikipedia.org/wiki/John_Gruber "Creador de MarkDown"
[Ingresa ¡Aca!]: ejemplo_links.md "Ejemplos de Enlaces"
[dillinger.io]: http://dillinger.io/ "Editor MarkDown"
[Guia MarkDown]: https://guides.github.com/features/mastering-markdown/
"Guia Git para MarkDown"

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
[dillinger]: img\dillinger.JPG "Editor online dillinger.io"
