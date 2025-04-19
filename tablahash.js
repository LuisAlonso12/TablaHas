function servir(compa){
    const Opcioncheve={
        fino:"Tecate",
        gerrero:"Corona",
        jalisco:"Modelo"
    }
    const chevedefault= 'Ultra'
    let cheve=Opcioncheve[compa]|| chevedefault
    console.log('Cheve',cheve)
}

const compa='gerrero'
servir(compa) 