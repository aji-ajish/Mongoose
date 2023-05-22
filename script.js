const mongoose = require('mongoose')
const User = require('./models/userModel')

mongoose.connect('mongodb://127.0.0.1:27017/ajish').then(() => {
    console.log('Connected');
}).catch(() => {
    console.log('Connection error');
})

// const user=new User({
//     name:'Ajish',
//     age:28
// })

// user.save().then(()=>{
//     console.log('User Saved');
// })

async function run() {
    try {
        // const newuser = await User.create(
        //     {
        //         name: 'Ajish',
        //         email:'ajish@gmail.com',
        //         age:25,
        //         hobbies: ['game', 'learn'],
        //         address: {
        //             street: 'pottavilai',
        //             city: 'Kalluvilai'
        //         },
        //     })
        //     console.log(newuser);

        // const user= await User.findById('646b31f79b779ceb35635aec')
        const user= await User.where('name').equals('Ajish')
        console.log(user);
    }catch(e){
        console.log(e.message);
    }
    //    newuser.name='Aji'
    // await newuser.save()
    //    console.log(newuser);
}

run()