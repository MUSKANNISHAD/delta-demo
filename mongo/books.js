const mongoose = require('mongoose');


main().then((res)=>{
    console.log("connection succesful");
}).catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{ 
        type:String,
    },
    price:{
        type:Number,
        min:[100,'cause gst included'],
    }
})
const book=mongoose.model("book",bookSchema);

book.findByIdAndUpdate("676a6b216f7fa9569f57e73e",{price:30},{runValidators:true}).
then((res)=>{console.log(res);}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});



/*const book1=new book({
    title:"story 360",
    author:"Steve harve",
    price:1000,
});

book1.save().then((res)=>{console.log(res);}).catch((err)=>{console.log(err)});*/

/*book.insertMany([
    {title:'Quantum physics', author:'newton',price:1200},
    {title:'The lost morning',author:'Rober frost',price:500},
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
*/