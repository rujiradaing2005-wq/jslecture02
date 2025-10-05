function showHello() {
    return 'Hello....'
}

function showSmile() {
    console.log("SMILE");
    return '😺'
}

function showSad() {
    console.log("SAD");
    return '😿'
}

console.log( showHello() )
console.log( showSmile() )
let data = showSad
console.log(data)