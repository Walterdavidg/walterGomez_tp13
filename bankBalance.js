let operaciones = [10000, -5000, 8000, -5000, 20000, -15000];

function calculateBalances(opBancarias) {
    let totalDepositos = 0;
    let totalRetiros = 0;
    let saldoActual = 20000;

    for(let i=0 ;i<operaciones.length; i++){
        if(opBancarias[i]<0){
            totalRetiros += opBancarias[i];
        }
        else{
            totalDepositos += opBancarias [i];
        }
    }

    saldoActual = totalDepositos + totalRetiros;
    totalRetiros *= (-1);

    return [saldoActual, totalDepositos, totalRetiros]

}

function bankBalance(nombre, apellido, arrayOp) {
    let array = calculateBalances(arrayOp); 

    return (`Estimado ${nombre} ${apellido}: El monto total de los depósitos es de: $${array[1]}. El monto total de los retiros es de: $${array[2]}. Por lo tanto, su saldo actual en la cuenta es de: $${array[0]}.`);
    

}

console.log(calculateBalances(operaciones));
console.log(bankBalance("Jose", "Gonzalez", operaciones));

module.exports = bankBalance