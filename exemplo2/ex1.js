const minhaPromise = new Promise((resolve,reject) =>{

    const sucesso = false

    if(sucesso){
        resolve("Deu bom!")
    }else{
        reject("Ocorreu um erro!")
    }


})

minhaPromise
.then((resultado) =>{
    console.log("Foi sucesso: " + resultado)
})
.catch((erro) =>{
    console.log("Deu ruim: " + erro)
})