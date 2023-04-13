//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

function double (param) {
    if (typeof param !== "number") throw new Error ("Has d'introduir un número");
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve(param * 2);
        }, 2000);
    }); 
}

double(22)
    .then((data) => console.log(`El doble del número ${data/2} és ${data}.`))
    .catch((error) => console.log(error));

async function sum(number1, number2, number3) {
    const doubleNum1 = await double(number1);
    const doubleNum2 = await double(number2);
    const doubleNum3 = await double(number3);
    const sumTotal = (doubleNum1 + doubleNum2 + doubleNum3);
    console.log(`La suma del doble dels números ${number1}, ${number2} i ${number3} és ${sumTotal}.`);
}
sum(1, 2, 3);