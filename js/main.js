//Codigo de JavaScript del Desafio 2
alert("Bienvenido al juego ¿Adivina Quien?\nPiensa en un actor muy famoso del universo Marvel, te vamos a ir haciendo preguntas y en funcion de tus respuestas trataremos de adivinar en quien pensabas.\n¡Vamos a darle!");

//Pregunta 1
var sexoPersonaje = prompt("¿Su personaje es: hombre, mujer u otro?");

//Pregunta 1- Respuesta Hombre
if(sexoPersonaje=="hombre"){
alert("Ok, entonces es masculino.");

    //Pregunta 2 - Edad
    var edadPersonaje=prompt("\n¿Cual es la edad aproximada de tu personaje?\nAsegurate de ingresar solo numeros.");

    if(edadPersonaje>=80){
        alert("Uhhh es mayor de edad, no existen personajes mayores a 80 anios en el universo Marvel:'(");
    }else if(edadPersonaje>=60&&edadPersonaje<80){
        alert("No es un abuelito pero si esta mayorcito, seguramente tu personaje sea Samuel L. Jackson con 72 anios.");
    }else if(edadPersonaje>=40&&edadPersonaje<60){
        alert("Esta en su mejor edad, seguramente con mucha clase, tu personaje puede Robert Downy Jr con 56 anios!!");
    }else if(edadPersonaje>=30&&edadPersonaje<40){
        alert("Obviamente no puede ser mas que Thor, el gran Chris Hemsworth con 38 anios");
    }else if(edadPersonaje>0&&edadPersonaje<30){
        alert("Esta posicion queda para Spidey, el friendly neighborhood, el actor mas joven de la saga Tom Holland con 25 anios.");
    }else{
        alert("Hey, te dije que solo numerosy deberian ser positivos (la edad no es negativa)!\nAhora sera Game Over para ti :(");
    }

//Pregunta 1 - Respuesta Mujer
}else if(sexoPersonaje=="mujer"){
alert("Ah bueno, es una dama.\n¿Cual es la edad aproximada");

    //Pregunta 2 - Edad
    var edadPersonaje=prompt("\n¿Cual es la edad aproximada de tu personaje?\nAsegurate de ingresar solo numeros.");

    if(edadPersonaje>=80){
        alert("Uhhh es mayor de edad, no existen personajes mayores a 80 anios en el universo Marvel:'(");
    }else if(edadPersonaje>=40&&edadPersonaje<80){
        alert("Probablemente sea la esplendida actriz Zoe Saldana con 43 anitos.");
    }else if(edadPersonaje>=30&&edadPersonaje<40){
        alert("Esta en su mejor edad, seguramente con mucha clase, tu personaje puede Scarlett Johansson con 36 anios!!");
    }else if(edadPersonaje>0&&edadPersonaje<30){
        alert("Beep bop, disculpa, mis sistemas no registran actrices del mundo marvel tan jovenes :(");
    }else{
        alert("Hey, te dije que solo numeros, y deberian ser positivos (la edad no es negativa)!\nAhora sera Game Over para ti :(");
    }

//Pregunta 1 - Respuesta Otro
}else if(sexoPersonaje=="otro"){
    alert("Hay varios personajes aqui, podria ser Mantis (Pom Klementieff con 34 anios), Drax (Dave Bautista con 52 anios) o hasta Groot (Vin Diesel con 53 anios).");
}else{
    alert("No inventes, ya te dije que solo las opciones propuestas.\nAhora sera Game Over para ti :(");
}