# Calculadora de Cripto Inversiones v3.0

## Objetivo:
Entrega del proyecto final del curso de Javascript de Coderhouse.

## Tecnologías utilizadas:
Se utiliza HTML, CSS, Bootstrap, Javascript, jQuery y conceptos de AJAX.

## Librerias y herramientas adicionales:
* Bootstrap 5.0.0-beta1
* jQuery 3.5.1-min
* SweetAlert 2.11
* Adornos usando [app.haikei.app](app.haikei.app)
* API de [CryptoCompare](https://min-api.cryptocompare.com/documentation) para datos actualizados de precios

## Detalles del proyecto:
### Flujo general:
La calculadora tiene como objeto facilitar la estimación de rendimientos pasados para inversiones realizadas con las 3 criptomonedas principales del mercado. Utiliza el metodo [DCA]((https://es.cointelegraph.com/explained/what-is-dollar-cost-averaging-dca)) (Dollar Cost Average) que consiste en promediar el precio de entrada al activo para disminuir el impacto de su volatilidad. 

Recuerda que rendimientos históricos no garantizan rendimientos futuros, pero permite tener una ligera idea del rendimiento de los activos.

### Datos de entrada:
* **Fecha Inicio**: esta seria la fecha en la que iniciaste la inversión.
* **Fecha Fin**: esta seria la fecha en la que sacas la inversión. 
* **Monto**: este seria el monto en dólares que colocaras de forma periódica.
* **Periodo**: la inversión se repetiria cada periodo de tiempo.
* **Criptomoneda**: activo en el cual has invertido.

### Proceso:
Primeramente, el programa valida los datos ingresados a traves de la función
```pedirDatos()```

Luego, si la conexion a la API es correcta, se ejecutara la función
```calcularInversion()```

Esta función, se lleva como parametros los datos ingresados por el usuario y dependiendo del periodo de tiempo seleccionado, realizara la consulta a la API utilizando la función
```consultaPrecioActivo()```

Luego se calculan los valores:
1. **valorDCACripto**: que tendria el valor acumulado del activo.
2. **outputDCAHoy**: que tendria el valor acumulado del activo en Dólares al precio de hoy.

Luego se llama a la función 
```mostrarResultados()```

En la cual se termina de calcular el ROI (Return of Investment) y se imprimen los resultados en pantalla modificando el DOM.

### Salida:
Se muestra al usuario:
1. **ROI**: retorno de inversión que se calcula como 
```(Ganancia-Inversión)/Inversión * 100%```

2. **DCA**: cantidad final de dólares que tendrias a fecha actual
3. **Cripto**: cantidad de cripto acumulada durante el periodo de tiempo
4. **USD**:  cantidad de dólares invertidos en total
5. **Ultimos calculos de inversión**: que muestra las ultimas inversiones históricas almacenadas en el localstorage.

## Desarrollado por:
[Alejandro Uribe](mailto:uribe.alejandro30@gmail.com)
