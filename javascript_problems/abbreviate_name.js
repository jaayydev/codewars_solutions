// 8 KYU
function abbrevName(name){

    name = name.toUpperCase()

    let nameArr = []

    nameArr = name.split(" ")

    return nameArr[0].charAt(0) + "." + nameArr[nameArr.length -1].charAt(0)
    
}

// One line solution
function abbrevName(name){

    return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
  }
