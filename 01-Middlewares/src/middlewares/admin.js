let admins = ['Ada', 'Greta', 'Vim', 'Tim'];

const  admin = (req, res, next) =>{
    const {user} = req.query
    admins.includes(user) ? next() : res.send('No tienes permiso para ingresar')

    // if(admins.includes(user)){
    //     next()
    // }else{
    //     res.send('No tienes permiso para ingresar')
    // }

};


// function admin(req, res, next){
//     let user = req.query.user;
//     if(user){
//         admins.forEach(function(admin){
//             if(user == admin){
//                 next();
//             }
//         });
//     }else {
//         res.send('No tienes los privilegios para ingresar');
//     };
// };




module.exports = admin;
