// Represents amount of chosen product
class Quantity{
    constructor(){
        this.quantity = 1
    }
    
    get(){
        return this.quantity
    }

    set(changer){
        this.quantity += changer
    }
}

// Here all products that user chooses are stored
class Basket{
    constructor(){
        console.log('initialized basket')
        this.products = {}
    }

    addProduct(name, product){
        this.products[name] = product
        this.products[name].quantity = new Quantity()
    }

    getProduct(name){
        return this.products[name]
    }

    deleteProduct(name){
        console.log('deleted: ', this.products[name])
        delete this.products[name]
    }
}

const basket = new Basket()

export default basket