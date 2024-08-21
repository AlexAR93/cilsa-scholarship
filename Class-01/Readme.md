Ejercicio Clase 2

## A) Detallar los pasos para cargar el formulario

1_ Si tienes problemas con la iluminación y necesitas un modo de alto contraste, debajo del formulario, encontraras un boton para cambiar el estilo.

2_ Puedes comenzar llenando el formulario haciendo Click en el campo que desees empezar, sin importar el orden. También puedes empezar a llenarlo 1 por 1 con la tecla Tab. Presionando Shift + Tab retrocedes de a 1 los campos, es decir, recorres hacia atras en caso de corrección o revisión.
   
3_ Deberas leer o escuchar con atención los distintos label seleccionados para rellenar el campo con los datos correctos. De lo contrario enviaras datos incorrectos o la misma validación de cada uno, no te dejara enviar. 

4_ Al llenar el ultimo campo, debajo te encontraras con un botón de enviar. Si estas seguro que todos los campos estan correctos, haz click o enter para enviar. Si todo esa bien, escucharas o veras una alerta del estado.

## Indicar para cada campo cuales son los valores válidos y cuales inválidos. ¿Se realiza esa validación de alguna forma?
|   Campo | Tipo | Valor valido  | Valor invalido | Validaciones |
|---------|------|---------------|----------------|--------------|          
| Nombre  | Text |Cualquier valor|Campo Vacio     |Valida que tenga una longitud mayor a 1|
| Apellido| Text |Cualquier valor|Campo Vacio     |Valida que tenga una longitud mayor a 1|
| Email   | Email|Formato Email con nombre+@+organización+.+tipo|Lo que no tenga formato email|Valida que incluya @+dominio valido|
| Fecha de Nacimiento|Date|valor númerico con formato fecha dd/mm/yyyy|Vacio|No permite letras ni otro formato que el impuesto| 
| Pais de Residencia|Text|Cualquier valor|Campo Vacio|Valida que tenga una longitud mayor a 1|

## Realizar una exploración del formulario y verificar si mediante el lector de pantalla NVDA pueden acceder a cada campo mediante la tecla TAB y completa el mismo. ¿Hay algún campo o acción que no resulte accesible?

El Form cumple con el lector de pantalla. El TAB recorre todo el formulario 1 por 1, de arriba hacia abajo. Todos los campos son accesibles.