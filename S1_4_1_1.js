// Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da
// i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.

let employees = [
    {id: 1, name: "Linux Torvalds"}, 
    {id: 2, name: "Bill Gates"}, 
    {id: 3, name: "Jeff Bezos"}
];

let salaries = [
    {id: 1, salary: 4000}, 
    {id: 2, salary: 1000}, 
    {id: 3, salary: 2000}
];

const getEmployee = (param) => {
    return new Promise (function(resolve, reject) {
        for (i = 0; i < employees.length; i++) {
            if (employees[i].id === param) {
                const employee = employees[i]; 
                resolve (employee);
                i = employees.length;
            } else {
                if (i === employees.length - 1) {
                    reject (`No existeix el id ${param}.`);
                }
            }
        }
    });
}
const getSalary = (employee) => {
    return new Promise ((resolve, reject) => {
        const salary = `Nom: ${employees[employee.id - 1].name}, salari: ${salaries[employee.id - 1].salary}.`;
        resolve (salary);
    });
}

async function fAsincrona (param) {
    try {
        let dataEmployee1 = await getEmployee(param);
        let dataEmployee2 = await getSalary(dataEmployee1);
        console.log(dataEmployee2);
    } catch (err) {
        console.log(err);
    }
}

let x = parseInt(Math.random() * 4);
fAsincrona(x);