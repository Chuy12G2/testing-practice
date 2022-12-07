export function reverseString(str){
    if(typeof(str) !== 'string'){
        throw new Error('The input is not a string')
    }
    
    let arr1 = Array.from(str);
    let arr2 = [];
    for (const i of arr1) {
        arr2.unshift(i)
    }
    return arr2.join(""); 
}
