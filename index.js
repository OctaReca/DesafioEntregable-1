class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1;
    }
    addProduct(product) {
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            console.log("Todos los campos son obligatorios");
            return;
        }
        if (this.products.some((p) => p.code === product.code)) {
            console.log("Ya existe un producto con ese código");
            return;
        }
        product.id = this.id++;
        this.products.push(product);
        console.log(`Producto agregado correctamente ${product.title} su id es:  ${product.id}`);
    }
    getProducts() {
        return this.products;
    }
    getProductByid(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
            console.log("Producto no encontrado");
        }
        return console.log(product);
    }
}

const productManager = new ProductManager();
const product = [];
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});
productManager.addProduct({
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
});
productManager.addProduct({
    title: "producto prueba 2",
    description: "Este es un producto prueba 2",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc1234",
    stock: 25,
});
productManager.getProductByid(2);


