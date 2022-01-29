function noSpace(x){
    return x.replace(/\s/g, '');
}

// Alternative version
function noSpace(x){
    return x.split(' ').join('')
}
