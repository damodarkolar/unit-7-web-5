const express=require("express");
const fs=require("fs");
const dns=require("dns")
const PORT=8080;
const ProductsOperations=require("./productsOperations.js")
let productsFunctions=new ProductsOperations()

const app=express();
app.use(express.json());


/*To get website IP*/
app.get("/getmeip",(req, res)=>{
    let {website_name}=req.body;
    let ip=null
    dns.resolve4(website_name, (err, address)=>{
        if(err){
            throw err
        }else{
            ip=address[0]
            res.send(JSON.stringify(`Ip address for given website is ${ip}`))
        }
    })

});


/*To get the Products*/
app.get("/products",(req, res)=>{
    let data=productsFunctions.getProducts();
    res.send(JSON.stringify(data))
});


/*To Add the product*/
app.post("/products",(req, res)=>{
    let product=req.body
    let message =productsFunctions.addProduct(product)
    res.send(JSON.stringify(message))
});


/*To delete the product*/
app.delete("/products/:productid",(req, res)=>{
    let id=req.params.productid;
    let message=productsFunctions.deleteProduct(id);
    res.send(JSON.stringify(message))
});


/*To Update the Product*/
app.patch("/products/:productid",(req, res)=>{
    let id=req.params.productid;
    let updatedProduct=req.body
    let message=productsFunctions.updateProduct(id, updatedProduct);
    res.send(JSON.stringify(message));
});



/*Server starting*/

app.listen(PORT, ()=>{
    console.log(`server is started in port ${PORT}`)
})