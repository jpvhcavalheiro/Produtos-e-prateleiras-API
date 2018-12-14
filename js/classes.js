class Shelf {
    constructor(capacity, rentPrice, productInShelf=null) {
        this.capacity = capacity
        this.rentPrice = rentPrice
        this.productInShelf = productInShelf
    }
};


class ProductInShelf {
    constructor(id,discount=0, iva=0, pvp=0) {
        this.id=id;
        this.discount = discount
        this.iva = iva
        this.pvp = pvp
    }
}
class Product {
    constructor(discount, iva, pvp) {
        this.discount = discount
        this.iva = iva
        this.pvp = pvp
    }
    
}
class ShelfWithId {
    constructor(capacity, rentPrice, productInShelf, id) {
        this.capacity = capacity
        this.rentPrice = rentPrice
        this.productInShelf = productInShelf
        this.id=id
    }
};
class ProductWithId {
    constructor(discount, iva, pvp,id,shelvesList=[]) {
        this.discount = discount
        this.iva = iva
        this.pvp = pvp
        this.id=id
        this.shelvesList=shelvesList
    }
    
}