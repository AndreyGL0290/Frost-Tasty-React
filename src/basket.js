// Here all products that user chooses are stored
class Basket{
    constructor(){
        this.products = {}
    }

    setQuantity(name, quantity){
        this.products[name].quantity += quantity
        if (this.products[name].quantity == 0) this.deleteProduct(name)
    }

    addProduct(name, product){
        this.products[name] = product
        this.products[name].quantity = 1
    }

    getProduct(name){
        return this.products[name]
    }

    deleteProduct(name){
        delete this.products[name]
    }
}

const basket = new Basket()

if (sessionStorage.getItem('products') !== null) basket.products = JSON.parse(sessionStorage.getItem('products'))

export default basket