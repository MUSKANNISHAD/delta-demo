const mongoose = require('mongoose');


main().then((res)=>{
    console.log("connection succesful");
}).catch((err)=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User=mongoose.model("User",userSchema);

/*const user2=new User({
    name:'mehak',
    email:'mehak40432@gmail.com',
    age:15,
})

user2.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});*/


/*User.insertMany([
    {name:'muskan', email:'mku@gmail.com',age:20},
    {name:'shreya',email:'kumari43@gmail.com',age:19},
    {name:'sahil',email:'xncxbnm@gmail.com',age:16},
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})*/

/*User.findById("67691ad4a152abbf69562a02").then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})*/

/*User.findByIdAndUpdate('676920a9c24d80411bee2840',{email:'sahilkumar402@gmail.com'},{new:true}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});*/
User.findByIdAndDelete('67691d9c3de60071bdab0af7').then((data)=>{
    console.log(data);
});