//This creates a Promise object and calls the resolve method...
var promise = new Promise(function(resolve, reject){
    // resolve();
    reject();
});

//This returns an anonymous function that renders 'then' to the console on successful promise.
promise.then(function(){
    console.log('then')
})
//Returns value for error;  No semi-colon above b/c the then and catch are chained...
.catch(function(){
    console.error('some error happened')
});
