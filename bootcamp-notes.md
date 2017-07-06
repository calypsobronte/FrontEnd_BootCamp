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
    Si ya tienes una cuenta en GitHub puedes saltar al siguiente paso, pero si no tienes una cuenta en GitHub, puedes crear una nueva cuenta con su correo electronico en el siguiente link: [Registrate :octocat:][]:point_down:

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
    >>>>>wt edit: (mirar que hace este)
    >>>>>>wt create y nombre archivo subirlo desde la PC

    Luego utilizaremos webtask que sera uno de los primeros acercamientos a un editor de codigo.

    ![webtask][webtask]
    Puedes ingresar a esta plataforma asociandolo con `GitHub`, `Facebook`, `Google`, `Microsoft`.

    ![Login webtask][webtask_login]
    Nuestra primera vista::point_down:

    ![Edit webtask][webtask_edit]


----------------------------------------------------------------


* #### 28 Junio del 2017
   ##### MarkDown

  Markdown es un lenguaje de _formato ligero_ que facilita la creación de elementos básicos de **HTML** (creado por [John Gruber][] en 2004 y ayudado por [Aaron Swartz][]) , con una *sintaxis fácil de usar* ya sea para crear formularios en nuestros editores o manejarlo directamente en  la  plataforma GitHub. ay varias apps moviles que utiliza esta sintaxis para darle una mejor experiencia a sus usuarios entre ellas esta: ** WhatsApp, Twitter **

  *  ###### ¿Que es MarkDown?
  Herramienta de conversión de texto plano a Html, dando formato a las palabras como hacerlas negritas o itálicas, agregar imágenes, y creando listas o tablas. En general, Markdown es sólo un texto normal con un poco de caracteres no-alfabeticos como # o \*.

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

            *__¡O este texto!__* = \*\__¡O este texto!\__*

            ~~Texto tachado.~~ = \~~Texto tachado.~~

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

  ##### Scrum
 *  ###### ¿Que es Scrum?  




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
