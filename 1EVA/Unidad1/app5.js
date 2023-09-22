/* Estructura del condicional */

const flight = 100;
const hotel = 50;
const tour = 30;
const total = flight+hotel+tour;
const budget = 300;

if(budget > total){
    console.log('Si me voy de viaje.');
}else if(budget===total){
    console.log('Si me puedo ir, pero tengo un presupuesto muy ajustado.');
}else{
    console.log('No puedo ir');
}

/* Operadores Ternarios */
const result = budget > total ? console.log("Si me voy"):console.log("No me voy");
const newresult = budget > total ?100:200;

const NUM = "30" + 3;