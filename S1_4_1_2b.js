//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

function promise2 (param) {
    if (typeof param !== "number") throw new Error (`Error, la dada ${param} no és un número`);
    return new Promise (function(resolve) {
        setTimeout(() => {
            resolve(`El ${param} és un número!`);
        }, 2000);
    });
}

async function fAsincrona (param) {
    try {
        let data = await promise2(param);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
fAsincrona(5);
fAsincrona("5");