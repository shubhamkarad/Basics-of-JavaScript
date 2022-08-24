function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`);
        if(location === 'Google'){
            resolve('Google says hi');
        }else{
            reject('We can only talk to Google');
        }
    })
}
function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra Information + ${response}`);
    })
}

async function doWork(){
    try{
    const response = await makeRequest('Google')
    console.log('Response Recieved')
    const processedResponse = await processRequest(response)
    console.log(processedResponse) 
    }
    catch(err){
        console.log(err);
    }
}
doWork()