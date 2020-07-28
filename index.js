// Listado de los que viven con ustedes

// Cada persona/mascota representa un objeto:
// Nombre
// Apellido
// Edad
// Sexo
// Cada objeto va a estar almacenado en un array principal.
// Deben recorrer el array e imprimir los valores de cada objeto.

const Mama = {
    nombre: 'Sandra',
    apellido: 'Balaguera',
    edad: '47 años',
    sexo: 'Mujer',  
}
const Papa = {
    nombre: 'Wilman',
    apellido: 'Bornachera',
    edad: '52 años',
    sexo: 'Hombre'
}
const Hijo1 = {
    nombre: 'Anderson',
    apellido: 'Bornachera',
    edad: '18 años',
    sexo: 'Hombre',
}
const Hijo2 = {
    nombre: 'Danilson',
    apellido: 'Bornachera',
    edad: '16 años',
    sexo: 'Hombre',
}
const Hijo3 = {
    nombre: 'Beiman',
    apellido: 'Bornachera',
    edad: '14 años',
    sexo: 'Hombre',
}
const Hija = {
    nombre: 'Zulay',
    apellido: 'Bornachera',
    edad: '7 años',
    sexo: 'Niña',
}
const Mascota1 = {
    nombre: 'Michi',
    apellido: 'Miau',
    edad: '1 año',
    sexo: 'Hembra',
}
const Mascota2 = {
    nombre: 'Raul',
    apellido: 'Miau',
    edad: '7 meses',
    sexo: 'Macho',
}
const miFamilia = [Mama, Papa, Hijo1, Hijo2, Hijo3, Hija, Mascota1, Mascota2];
console.log(miFamilia)