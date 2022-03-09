const db = [
    { id: 1, nombre: "Romina" },
    { id: 2, nombre: "Pablo" },
    { id: 3, nombre: "Lucia" },
    { id: 4, nombre: "Damian" },
];

const buscarId = (id: number): Promise<any> => {
    const res = db.find(el => el.id === id);

    const promesa = new Promise(function(resuelve, rechaza) {
        setTimeout(()=> {
            if(res) {
                resuelve(res);
            }else {
                rechaza(`No se pudo encontrar el id ${id} en la db.`);
            }
        }, 2000);
    });
    
    return promesa;
}

const app = async () => {
    console.info("--- Inicio de aplicación");

    try {
        
        const p1 = await buscarId(2);
        console.info(p1);

        const p2 = await buscarId(3);
        console.info(p2);
        
        const finished = await Promise.all([buscarId(2),buscarId(3)]);
        console.info(finished);

    } catch (err) {
        console.error("-------------", err);
    }

    console.info("--- fin");
};



app();
console.info("--- otro fin");

const sumar = (a: number, b: number): number => a + b;
console.info(sumar(3, 4));



// const app =  () => {
//     console.info("--- Inicio de aplicación");

//     buscarId(2)
//         .then((persona)=>{
//             console.log(persona);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })

//     buscarId(3)
//         .then((persona)=>{
//             console.log(persona);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })

//     Promise.all([buscarId(2),buscarId(3)])
//         .then(([resultadoIdDos, resultadoIdTres])=>{
//             console.log(resultadoIdDos,resultadoIdTres);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })

//     console.info("--- fin");
// };