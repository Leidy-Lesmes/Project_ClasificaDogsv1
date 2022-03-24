class Dogsservice{

    constructor(){
        this.dogs = []
        this.data()
    }

    data(){
        this.dogs.push({
            id: 1,
            name : 'julian',
            lastName : 'Ardila',
            document : '201920338',
            numberCell : '30039281',
            address : 'Tunja, Santa ines'
        })
        this.dogs.push({
            id : 2,
            name : 'Harrison',
            lastName : 'Diaz',
            document : '201920260',
            numberCell : '31280392',
            address : 'Tunja'
        })
        this.dogs.push({
            id : 2,
            name : 'Mafe',
            lastName : 'Sanchez',
            document : '84083772',
            numberCell : '28132123',
            address : 'Tunja'
        })
    }

    create(id, name, lastName, document, numberCell, address){
        this.dogs.push({
            id,
            name,
            lastName,
            document,
            numberCell,
            address
        })

    }

    findOne(){

    }

    getList(){
        return this.dogs
    }

    updated(){
        
    }

    delete(){

    }
}

module.exports = dogsservice