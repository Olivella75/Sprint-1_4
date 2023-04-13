//Força i captura tants errors com puguis dels nivells 1 i 2.

function double (param) {
    return new Promise(function(resolve, reject) {
        if (typeof param !== "number")  reject(`La dada introduida ${param} no és un número.`);
        setTimeout(() => {
            resolve (param * 2);
        }, 2000);
    });
}
double(22)
    .then((data) => console.log(`El doble del número introduit és ${data}`))
    .catch((error) => console.log(error));
double("22")
.then((data) => console.log(data))
.catch((error) => console.log(error));

async function sum(number1, number2, number3) {
    try {
        if (isNaN(number1)) {
            throw new Error ("La dada 1 introduida, no és un número.");
        }
        if (isNaN(number2)) {
            throw new Error ("La dada 2 introduida, no és un número.");
        }
        if (isNaN(number3)) {
            throw new Error ("La dada introduida " + number3 + " no és un número.");
        }
        const x = await double(number1);
        const y = await double(number2);
        const z = await double(number3);
        const sumTotal = (x + y + z);
        console.log(`La suma del doble dels 3 números introduits és ${sumTotal}.`);
    } catch (err) {
        console.log(`${err}`);
    }
}
sum(1, 2, "A");
sum(1, 2, 3);
sum("1", 2, 3);

//ES TRACTA DIFERENT L'ERROR DEL NÚMERO "1" I EL NÚMERO "A" NO SE PQ. AL "1" NO S'APLICA LA LINIA 24???
//EN ELS PRIMERS EXERCICIS JA VAIG POSAR EL TRY/CATCH, PER TANT NO HE AFEGIT RES, EXCEPTE EL S1_4_2_1.js