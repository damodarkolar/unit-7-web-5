const fs=require("fs");


class ProductsOperations{
    constructor(){
        this.path="./products.json";
        this.data=fs.readFileSync(this.path,{encoding:"UTF-8"});
    }

    /*Save the data*/
    saveProducts(products){
        products=JSON.stringify(products, null, 2);
        fs.writeFileSync(this.path, products, {encoding:"UTF-8"})
    }


    /*Get the all products*/
    getProducts(){
        let products=JSON.parse(this.data)
        return products;
    }

    /*Add the product*/
    addProduct(product){
        let items=JSON.parse(this.data)
        let id=0;
        items.products?.forEach(element => {
            id=element.id        
        });
        product.id=((+id)+1);
        items.products.push(product)
        this.saveProducts(items);
        return "Product Added"
    }

    /*Delete the product*/
    deleteProduct(productId){
        let items=JSON.parse(this.data);
        let filteredItem=items.products?.filter(ele=>{return ele.id!=productId});
        this.saveProducts({products:filteredItem})
        return "Product Deleted";
    }

    /*Update the product*/
    updateProduct(productId, updatedProduct){
        let items=JSON.parse(this.data);
        updatedProduct.id=+productId;
        let filteredItems=items.products?.filter(ele=>{return ele.id!=productId});
        filteredItems.push(updatedProduct);
        this.saveProducts({products:filteredItems})
        return "Product Updated";
    }
}




module.exports=ProductsOperations;