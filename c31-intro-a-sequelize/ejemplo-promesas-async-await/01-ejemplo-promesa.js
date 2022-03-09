
// //EJERCICIO DE CALLBACK PROBLEMA DE SINCRONISMO
// function hacerTarea(num, cb) {
//     console.log('haciendo tarea ' + num)
//     setTimeout(cb,100)
// }

// console.log('inicio de tareas');
// hacerTarea(1, () => {
//     hacerTarea(2, () => {
//         hacerTarea(3, () => {
//             hacerTarea(4, () => {
//                 console.log('fin de tareas')
//             })
//         })
//     })
// })
// console.log('otras tareas ...')




//EJERCICIO PROMESAS
const dividir = (dividendo,divisor) => {

    return new Promise((resolve,reject)  => {
        if (divisor == 0 ) {
            reject('no se puede dividir por cero')

        } else {
            resolve(dividendo / divisor)
        }
    })
}

//CASO FELIZ, DEVUELVE 5
dividir(10,2)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
        //console.log('resultado: ' +  resultado);
        
    })
    .catch(error => {
        console.log(`error: ${error}`)
    })

//CASO TRISTE =( , NOS LARGA ERROR    
dividir(10,0)
    .then(resultado => {
        console.log(`resultado: ${resultado}`)
    })
    .catch(error => {
        console.log(`error: ${error}`)
    })






