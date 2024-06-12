## ¿qué es un endpoint?

Es un punto de acceso a una API, es decir, una URL que nos permite acceder a un recurso en un servidor

## Entonces, ¿qué es una API?

Es un conjunto de reglas que nos permiten interactuar con un servidor. API proviene de Application Programming Interface, es decir, una interfaz de programación de aplicaciones.

## ¿Para qué nos van a servir las APIs?

Nos van a permitir interactuar con servidores para obtener información, enviar información, modificar información, borrar información. Las RESTful APIs son las más comunes y se basan en el protocolo HTTP.

## ¿Qué es el protocolo HTTP?

Es el protocolo que nos permite transferir información en la web. HTTP proviene de HyperText Transfer Protocol.

## ¿Qué es una petición HTTP?

Es un mensaje que enviamos a un servidor para solicitar información. Las peticiones HTTP tienen un método, una URL, una versión de HTTP, una cabecera y un cuerpo.

## ¿Qué es un método HTTP?

Es un verbo que indica qué queremos hacer con un recurso. Los métodos más comunes son GET, POST, PUT, DELETE.

## ¿Qué es una respuesta HTTP?

Es un mensaje que envía un servidor después de recibir una petición. Las respuestas HTTP tienen una versión de HTTP, un código de estado, una cabecera y un cuerpo.

## ¿Qué es un código de estado HTTP?

Es un número que indica si una petición fue exitosa, si hubo un error, si el cliente necesita hacer algo más, etc. Los códigos de estado más comunes son 200, 201, 400, 401, 404, 500.

Aprendiendo Status Code con gatitos: https://http.cat/
Aprendiendo Status Code con LinkedIn: https:ww.linkedin.com/feed/update/urn:li:activity:7204524758292381696/

Callbacks y Promesas
¿Qué es un callback?
Es una función que se ejecuta después de que otra función termina de ejecutarse. Los callbacks pueden ser síncronos o asíncronos.

## ¿Qué es una promesa?

Es un objeto que representa el resultado de una operación asíncrona. Las promesas tienen tres estados: pendiente, resuelta, rechazada.

¿Qué es el método then?
Es un método que nos permite ejecutar una función después de que una promesa se resuelve.

Ejemplo de callback

const doSomethingAsync = (callback) => {
setTimeout(() => {
console.log('Inside setTimeout')
callback()
}, 2000)
}

Ejemplo con setTimeout para entender las demoras de ejecución
console.log('Starting setTimeout')

setTimeout(() => {
console.log('Inside setTimeout')
}, 2000)

console.log('Finishing setTimeout')
