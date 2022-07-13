


function simular() {

    var monto = parseInt(document.getElementById('monto').value);
    var cuotas = parseInt(document.getElementById('cuotas').value);

    if (monto >= 1000000 && monto <=50000000) {
        
        if (cuotas >= 1 && cuotas <= 12) {
            /*1.si se mantiene dentro del primer año( es decir de 1 a 12 cuotas) el interés mensual es de 1.1%*/
             var intereses = monto * (1.1/100);
             var proceso = monto + intereses;
            document.getElementById('msg').innerHTML = "Intereses: " + intereses;
            document.getElementById('msg2').innerHTML = "Total a pagar: " + proceso;

        } else if (cuotas >= 13 && cuotas <= 36) {
            /*2.si es de 2 a 3 años el interés mensual será de 0.9% mensual*/
            var intereses = monto * (0.09/100);
             var proceso = monto + intereses;
            document.getElementById('msg').innerHTML = "Intereses: " + intereses;
            document.getElementById('msg2').innerHTML = "Total a pagar: " + proceso;
        } else if (cuotas > 36 && cuotas <= 60) {
            /*3.si es mas de 3 años el interés mensual será de 0.5% mensual*/
            var intereses = monto * (0.05/100);
             var proceso = monto + intereses;
            document.getElementById('msg').innerHTML = "Intereses: " + intereses;
            document.getElementById('msg2').innerHTML = "Total a pagar: " + proceso;
        } else {
            document.getElementById('msg2').innerHTML = "El número de cuotas no es valido.";
        }
    } else {
        document.getElementById('msg').innerHTML = "El monto digitado no es valido.";
    }
}


