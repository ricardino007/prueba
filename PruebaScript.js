function TipoMotor(tipoMotor) {

    var tipoMotor = prompt("ingrese de 1 a 4");
if (tipoMotor >=0 && tipoMotor <=4);
{
    switch (tipoMotor) 
    {
        case 0:
            console.log("no hay establecido un valor definido para el tipo de bomba");
            break;
        case 1:
            console.log("la bomba es una bomba de Agua");
            break; 
        case 2:
            console.log("La bomba es una bomba de gasolina");
            break;
        case 3:
            console.log("la boma es una bomba de hormigon");
            break;
        case 4:
            console.log("la bomba es una bomba de pasta alimenticia");
            break;
        }
    }
        else {
    alert("NO existe el valor valido para tipo de bomba");
    } 
    }
}