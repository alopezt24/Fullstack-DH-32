#  Sesiones, cookies, registro y login



### 1. Entidad de usuarios

- Implementamos la entidad de usuarios replicando la de productos
    - Rutas: **src/routes/userRouter.js**
        -en app.js hacer la ruta hacia usuarios
    - Controlador: **src/controllers/userController.js**
    - Vistas: **login.ejs --- profile.ejs --- user-register.ejs**
    - Directorio para imágenes: **public/images/users/**
    - DB usuarios: **src/data/user.json**

### 2. Login y perfil


- Implementamos las rutas correspondientes en nuestro router de usuarios
    - **/register** (GET y POST)
    - **/login** (GET y POST)
    - **/profile** (GET)
    - **/logout** (GET)


- Implementamos en el controller los 5 metodos para cada ruta
     - **register** (nos muestra el formulario)
    - **store** (guarda un usuario, osea hacemoos la logica del post del formulario de register)
    - **authenticate**  (hacemos toda la logica con el posteo del form de login)
    - **profile**  (nos muestra la viste profile con los datos del logueo)
    - **logout** (mata la session y la cookie) 

- Implementamos la encriptación de contraseñas
    - `npm i bcryptjs`
    - Lo requerimos en el controlador de usuarios
    - Lo implementamos en el método **create**, `bcrypt.hashSync(...)`
    - Lo implementamos en el método **login**, `bcrypt.compareSync(...)`

- Implementamos el uso de sesiones
    - `npm i express-session`
    - Lo requerimos en **src/app.js**
    - Lo inicializamos con la configuración mínima sugerida `{ secret..., resave..., saveUninitialized...}`
    - Creamos la sesión al hacer el login y guardamos los datos del usuario en ella.
    - Destruimos la sesión al hacer logout

### 3. Middlewares de autenticación, rutas de huésped y rutas de usuario

- Implementamos un middleware de autenticación. Él se encargará de verificar si existe un usuario en sesión y en ese caso hará disponible su información para las vistas.
    - Creamos la carpeta **src/middlewares**
    - Creamos el middleware **src/middlewares/auth**
    - Lo implementamos en **src/app.js**
    - Modificamos la barra de navegación para que muestre los enlaces que correspondan según el usuario esté logeado o no.

- Implementamos dos middlewares para tener rutas de usuarios y de huéspedes
    - Creamos el middleware **src/middlewares/guestRoute**
        - Si un usuario accede a esta ruta, lo redirigimos
    - Creamos el middleware **src/middlewares/userRoute**
        - Si un huésped (alquien no logeado) accede a esta ruta, lo redirigimos
    - Los implementamos en **src/routes/usersRouter.js**

### 4. Implementamos la funcionalidad de recordar al usuario

- Implementamos el módulo de manejo de cookies
    - `npm i cookie-parser`
    - Lo requerimos en **src/app.js**
    - Lo inicializamos con **app.use(...)**

- Implementamos la funcionalidad para recordar al usuario

    - Controlador
        - Utilizamos el modulo **crypto** para generar un token seguro
        - Creamos la cookie con el token si llega el campo **remember** durante el **login**
        - Destruimos la cookie y el documento durante el **logout**


- Modificamos nuestro middleware de autenticación para que detecte la cookie y loguee al usuario