# Heroku Deploy

https://adl-heroku-deploy.herokuapp.com

# Requisitos
1. Tener instalado node: https://nodejs.org/es/
2. Tener instalado postgreSQL: https://www.postgresql.org/download/
3. Tener una cuenta en Heroku: https://www.heroku.com/
4. Tener instalado Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
5. Tener instalado DBeaver: https://dbeaver.io/download/

# Instrucciones

1. Iniciar sesión en Heroku con usuario y contraseña.
2. Para desplegar esta aplicación, tendrás que llevar a cabo 3 procesos:
    a. Crear una aplicación en Heroku.
    b. Crear la base de datos y enlazarla a la aplicación recién creada en Heroku.
    c. Añadir un string de conexión en tu aplicación, dejar el puerto dinámico y hacer deploy utilizando Heroku CLI.

Comencemos:
<p>a.1. Primero crea una aplicación en Heroku.</p>
<p>a.2. Luego elige un nombre que este disponible para la aplicación y selecciona la región más cerca de dónde estés.</p>


<hr/>
<p>b.1. Vamos a data y seleccionamos ```Heroku Postgre```.</p>
<p>b.2. Instalamos Heroku Postgres.
</p>
<p>b.3. Luego seleccionamos un plan y enlazamos la base de datos a nuestra aplicación recientemente creada.
</p>
<p>b.4. Luego vamos a Settings y hacemos click en ```View Credentials```.
</p>
<p>b.5. Mantén esta ventana abierta, ya que utilizaremos está información a continuación.
</p>
<p>b.6. Abre DBeaver y elije base de datos PostgreSQL.
</p>
<p>b.7. Te preguntará si quieres descargar los driver files, selecciona ```Download```.
</p>
<p>b.8. Escribe la información que obtuviste en las credenciales de Heroku para: ```Host, Database, Username, Password``` y luego has un ```Test connection```.
</p>
<p>b.9. El ```Test connection``` será aprobado.
</p>
<p>b.10. Finalmente, selecciona la base de datos en DBeaver, has clic en SQL Editor y selecciona Open SQL Script.
</p>
<p>b.9. Escribe el SQL para crear la tabla y ejecutalo.
</p>

<hr/>

<p>c.1. Cambia el string de la instancia de Client, agregandole un objeto con 2 propiedades como muestra la siguiente imagen:
</p>
<p>c.2. Deja el puerto de manera dinámica como se muestra en la siguiente imagen:
</p>
<p>c.3 Por último, usa los comandos de Heroku CLI para poder desplegar la aplicación en Heroku.
</p>
