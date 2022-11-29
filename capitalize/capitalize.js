export function capitalize(str){
    if(typeof(str) !== 'string'){
        throw new Error('The input is not a string')
    }
    return str.toUpperCase();
}



