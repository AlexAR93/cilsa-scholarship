Ejercicio Clase 2

## A) Detallar los pasos para cargar el formulario

1- Si tienes problemas con la iluminación y necesitas un modo de alto contraste, debajo del formulario, encontrarás un botón para cambiar el estilo.

2- Puedes comenzar llenando el formulario haciendo clic en el campo que desees empezar, sin importar el orden. También puedes empezar a llenarlo uno por uno con la tecla Tab. Presionando Shift + Tab retrocedes de a un campo, es decir, recorres hacia atrás en caso de corrección o revisión.
   
3- Deberás leer o escuchar con atención los distintos labels seleccionados para rellenar el campo con los datos correctos. De lo contrario, enviarás datos incorrectos o la misma validación de cada uno no te dejará enviar. 

4- Al llenar el último campo, debajo encontrarás un botón de enviar. Si estás seguro de que todos los campos están correctos, haz clic o presiona Enter para enviar. Si todo está bien, escucharás o verás una alerta del estado.

## B) Indicar para cada campo cuales son los valores válidos y cuales inválidos. ¿Se realiza esa validación de alguna forma?
|   Campo | Tipo | Valor valido  | Valor invalido | Validaciones |
|---------|------|---------------|----------------|--------------|          
| Nombre  | Text |Cualquier valor|Campo Vacío     |Valida que tenga una longitud mayor a 1|
| Apellido| Text |Cualquier valor|Campo Vacío     |Valida que tenga una longitud mayor a 1|
| Email   | Email|Formato Email con nombre+@+organización+.+tipo|Lo que no tenga formato email|Valida que incluya @+dominio valido|
| Fecha de Nacimiento|Date|valor númerico con formato fecha dd/mm/yyyy|Vacío|No permite letras ni otro formato que el impuesto| 
| Pais de Residencia|Text|Cualquier valor|Campo Vacío|Valida que tenga una longitud mayor a 1|

## C) Realizar una exploración del formulario y verificar si mediante el lector de pantalla NVDA pueden acceder a cada campo mediante la tecla TAB y completa el mismo. ¿Hay algún campo o acción que no resulte accesible?

El formulario cumple con el lector de pantalla. La tecla TAB recorre todo el formulario uno por uno, de arriba hacia abajo. Todos los campos son accesibles.