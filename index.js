function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function namedFunction(){
        return "It is returning this";
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "An anonymous function was created" 
    }
}
