# Clase 3
# Hosting

Estos son los 2 Hosting que decidí investigar= Firebase - Netlify.

# Firebase Hosting

Costo: Gratis  
Limitaciones: Si  
Modelo de pago: Mensual  
Moneda de pago: USD  

## Introducción

Firebase es una herramienta de Google que ofrece diversos servicios con iniciativa "Free", entre ellas esta Firebase Hosting.

Firebase Hosting ofrece un servicio de hosting inicialmente gratuito.

-¿Porque inicialmente?-

Porque tiene sus limitaciones en su versión base que lo hablaremos luego. Pero lo bueno de Firebase, para los que recién arrancan, es que no necesitas pagar una membresía con costo fijo mensual, sino que puedes pasar a un plan que siga con la base gratis, cobrándote solo los Excesos.
¿Excesos?

Por ejemplo, el hosting con base gratis tiene un limite de almacenamiento de 10GB (muy generoso) y si te excedes del limite, te cobra $0.026 US por GB, es decir, la base gratis la tienes asegurada. Ahora, ¿Necesitas mas? No te preocupes, no necesitas pasar a un plan pago con costo fijo, se te cobrara solo los excesos, siendo un monto variable donde el desarrollador y/o dueño de la página jugara con la optimización (Esto tiene mucho sentido ya que otra herramienta es la base de datos noSQL o no relacional, basada en colecciones).

Este hosting esta pensado para páginas estáticas, landing page, y mas del lado del cliente, es decir, Front end. Firebase tiene otro servicio, Firebase Hosting App, que esta destinados a apps mas pesadas con interacción continua del lado del servidor y estructuras mas modernas, permitiendo el uso de más tecnologías.

Ahora volviendo a esta herramienta básica que provee Google, veremos lo que ofrece y sus limitaciones en version base y los montos que se cobran en caso de Excesos.

## Ofrece
-Dominio personalizado y SSL  
-Varios sitios por proyecto  

## Limitación
-Almacenamiento: 10GB  
-Transferencia de datos: 360MB por día  

## Costo en caso de aceptar pago por Excesos
-Almacenamiento: $0.026 por GB Extra  
-Transferencia de datos: $0.15 por GB Extra  

# Netlify

Costo: Gratis  
Limitaciones: Si  
Modelo de pago: Mensual  
Moneda de pago: USD  

## Introducción
Netlify te permite crear, alojar y mantener tu sitio web o aplicación con implementación continua, HTTPS, entre otros beneficios pagando o no su plan mensual.
Su base gratis es generosa para proyectos personales, prototipos o inicios.

A diferencia de Firebase hosting, en Netlify no puedes pasar a un plan proporcional a lo que uses por mes, siendo este una cuota fija en caso de querer otros beneficios.

Lo bueno es que puedes arrancar usando su base gratis y pasar el mismo proyecto a un plan pago en cualquier momento, permitiendo hacer tu proyecto escalable. También, te da un dominio gratis para arrancar que luego puedes cambiar en caso de tener uno propio.

Para resumir:
    Gratis: Ideal para proyectos pequeños, personales o de prueba, con limitaciones en tiempo de construcción, ancho de banda y funcionalidades avanzadas.
    Pago (Pro y personalizado): Ofrece mayor flexibilidad, rendimiento y soporte, adecuado para proyectos profesionales, comerciales y equipos más grandes.

Ahora nos enfocaremos en el plan gratis, sus limitaciones y lo que ofrece igual al pro. No analizaremos el plan pro ya que se haría muy extenso y tiene otro plan mas complejo de comparar, como el de empresas que es personalizado para C/U.

## Ofrece
-Deploy y Hosting
    -Despliegue continuo de proyectos desde repositorios Git.
    -Hosting estático con CDN global.
    -Certificado SSL automáticos.
-Dominio personalizado
    -En caso de tener un dominio propio, puedes reemplazar el asignado por Netlify gratis por otro.
-Construcción y despliegue
    -300 minutos de tiempo de construcción al mes.
    -Despliegue de aplicaciones JAMstack, sitios estáticos y funciones lambda.
-Ancho de banda y almacenamiento
    -100GB de ancho de banda mensual.
    -1 TB de almacenamiento para sitios estáticos.
-Funciones de Netlify
    -Acceso para 1 miembro del equipo.
-Soporte
    -Soporte por foro y documentación.

## Limitación
-Construcción simultánea: 1  
-Ancho de banda: 100GB  
-Minutos de construcción: 300 minutos  
-Sitios Web: 500   
-Funciones de borde: 1 Millón x Mes (Por Exceso 2 dólares x 0.5 M)  

## Igual al plan PRO
-Máximos de sitios Web: 500  
-Funciones sin servidor: 125k por sitio X mes (25 dólares por exceso)  
-Formularios: 100 por sitio por mes(por exceso 19 dólares)  
-Análisis del sitio: 9 dólares por sitio por mes  

# Comparación entre los 2 servicios
Tanto Firebase y Netlify tienen su plan base gratuito, pero ofrecen servicio totalmente distinto.

-¿Por qué?-

Firebase es un todo en uno, es decir, es un entorno de desarrollo en la nube y no solo se dedicado al hosting, si no que el hosting es solo una de sus herramientas a utilizar.

En cuanto a Netlify, es un servicio con algunas herramientas muy útiles fuera de su servicio Hosting, pero no deja de ser algo enfocado al alojamiento para tu página web y una herramienta más util para un desarrollador que dueño de página, ya que su plan esta enfocado para tener alojado multiples páginas.

## Sistema de pagó
En este tema, también son muy diferentes.
Firebase tiene un plan mensual variable, es decir, arranca de su base gratis cobrando solo los excesos.

Netlify por su parte tiene su base gratis pero para pasar al plan pro debes pagar una cuota fija mensual, lo que podría no hacerlo muy rentable para una página que se excede de los limites por poco.

## Base gratis (Solo Hosting)
### Ancho de banda:  
-Firebase: 360 MB x día x página Web | $0.15 x GB  
-Netlify: 100 GB para total de sitios  

### Almacenamiento:  
-Firebase: 10 GB por página Web | $0.026US x GB  
-Netlify: 100 GB para total sitios  

### Tiempo de construcción:  
-Firebase: Ilimitado  
-Netlify: 300 Minutos x més  

### Certificado SSL:  
-Firebase: Si  
-Netlify: Si  

### Dominio personalizado:  
-Firebase: Si  
-Netlify: SI  

### Soporte y documentación:  
-Firebase: Si  
-Netlify: Si  

### Alojamiento Base de datos:  
-Firebase: Si  
-Netlify: No  

### Miembros de equipo:  
-Firebase: Ilimitado  
-Netlify: 1  