/*
Objeto Date

new Date();
new Date(milisegundos)
new Date(cadenaFecha)
new Date(año_num,mes_num,dia_num)
[,hor_num,min_num,seg_num])

getDate();
getTime();
getDay();
setTime();
parse();
setDate();
toTimeString();

Objeto Math

abs()
acos()
asin()
atan()
cell()
cos()
random()
exp()
log()
max()
min()
pow()

Objeto Number

toExponential()
toFixed()
toPrecision()

//PROPIEDADES:
MAX_VALUE
MIN_VALUE
NaN
NEGATIVE_INFINITY
POSITIVE_INFINITY

Objeto String

anchor()
big()
blink()
bold()
chatAt()
fixed()
link()
strike()
sub()
match()
search()
split()
indexOf()
toLowerCase()
toUpperCase()
substr()


Objeto windows

alert()
back()
blur()
close()
open()
condfirm()
focus()
scrollTo()
stop()
setinterval()
print()
open()
prompt()
home()
forward()
scrollBy()
moveTo()
find()
resizeTo()

Objeto Location

reload()

Objeto navigator




funciones 
encodeURI
encodeURIComponent
decodeURI
decodeURIComponent




eval(); converte y evalua una cadena pasada como si fuese codigo js
inFinite(); verifica si el numero que pasamos es un numero finito

Number.isNaN : Comprueba si el valor pasado es un NaN, Es mas robusto que isNaN();
parseInt() cadena -> numero entero
parseFloat() cadena -> numero en punto flotante

Hay dos tipos de declaraciones de funciones:

La clasica mediante la palabra reservada function
y
Mediante las arrow functions


function saludar : return hola"
saludar(); //hola
type saludar; //function


declaraciones anonimas

const saludar = new Function("return 'hola';");
saludar(); //hola








Arrow Functions

ECMAScript 6

no tiene sus propios enlaces a this o super y no se debe usar como metodos
no tiene argumentos o palabras claves new.targer


const func = function (){
    return "Funcion tradicional.";
}

const func = () => {
    return "Funcion flecha:";
}

const f1 = (a) => a + 100;
cosnt f2 = a => a + 100;








ARRAYS:

cosnt a1 = new Array(); //array vacio
const a2 = new Array(4); //array con 4 elementos

cosnt apellidos = new Array('perez','martinez','Gonzalez');

for (let i = 0 ; i < 10; i++){
    a1[i] = Math.random();
}

for (let i = 0 ; a1.length; i++){
    console.log(a1[i]);
}

for (num of a1) {
    console.log(num);
}

a1.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
})


propiedades de array

.length

.prototype


Metodos de array

push()
shift()
concat()
pop()
join()  
slice()
reverse()
unshift()
sort()
slice()


const persona = {
    nombre: 'juan',
    apellido 'sin miedo',
    edad: 30,
    saludar: funcion(){
        console.log(this.saludar());
    }
}

function Persona (nombre,apellido, fechaNac){

}

class Persona{
    constructor(nombre,apellido,anioNac){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._anioNac = anioNac;
    }
}

get anioNac(){
    return this._anioNac;
}

let unicoArray = new Set(); //al convertir un set en un array, se eliminan los duplicados.

let carParts = new Map();


Estudiar MAP xd

no se pueden hacer apuntes porque el profe explica poco, mal y no deja ver las dispositivas.. una pena porque me gusta la materia

weakmap
weakset






Una pila 

Es una estructura de datos

si le digo apilar 1, se apila en la primera posicion
si le digo apilar 7, se apilara en la siguiente posicion luego del 1,
si le digo apilar 14, se apilara en la siguiente posicion luego del 7,
y asi consecutivamente con las siguientes intrucciones.

no tiene un tamaño definido

si tengo un dato encima de la pila (el ultimo elemento de la pila)

si indico desapilar, no puedo desapilar el valor 7
tengo que siempre desapilar el ultimo valor (el 14 en este caso)

Si apilo simpre pondra un dato por encima de todo, y si desapilo siempre sacara el ultimo apilado






























*/

