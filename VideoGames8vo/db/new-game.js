const {db, storage} = require('../tools/init');

exports.newGame = async (name, description, photo) => {
    //storage().then(result=>{
        // db.collection('games').add({
    //     name,
    //     description
    // })
    // .then(result => true)
    // .catch(error => error)
    //})
    

    try{
        storage
        const result = await db.collection('games').add({
            name,
            description
        })
        return true;
    }catch(error){
        return error;
    }
}