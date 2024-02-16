# Aplicación de Gestión de Archivos

## Descripción

Esta es una aplicación web que permite a los usuarios autenticarse, enviar archivos al servidor y recibir una respuesta con los datos procesados. Los archivos enviados son leídos por el servidor y se devuelve un objeto que la aplicación frontend puede utilizar para separar los registros exitosos de los erróneos.

## Características

- **Autenticación de usuarios**: Los usuarios pueden iniciar sesión para acceder a las funcionalidades de la aplicación.
- **Envío de archivos**: Los usuarios con el rol "admin" pueden enviar archivos al servidor una vez que han iniciado sesión.
- **Procesamiento de archivos**: El servidor lee los archivos enviados y devuelve un objeto con los datos procesados.
- **Visualización de datos**: La aplicación frontend separa y muestra los registros exitosos y erróneos basándose en la respuesta del servidor.

## Instalación

## Clonar el repositorio

git clone https://github.com/Esteve-Paredes/Reto-Tecnico

## Cambiar al directorio del repositorio

cd Reto-Tecnico

## Instalar todas las dependencias

npm install
