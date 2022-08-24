// var updateData = true;

// var promise1 = new Promise((resolve, reject)=>{
//     if(updateData){
//        resolve();
//     }
//     else{
//         reject();
//     }
//     });

// promise1.
//     then(()=>{
//         console.log('You have successfully updated your Data');
//     }).catch(()=>{

//         console.log( "some error occured ");
//     })


var x="Shubham"
var y = "Shubham"
var promise2 = new Promise((resolve, reject)=>{
    if(x===y){
        resolve();
    }
    else{
        reject('rejected it !!');
    }
}, ()=>setTimeout(5000))
promise2.
    then(()=> console.log('It is equal'))
    .catch((error)=> console.log(error));