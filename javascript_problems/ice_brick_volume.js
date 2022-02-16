// 8 KYU
function iceBrickVolume(radius, bottleLength, rimLength) {

    let brickHeight = bottleLength - rimLength
    let brickWidth = (radius * 2)
    let brickLength = brickWidth

    return (brickLength * brickWidth * brickHeight) / 2

  }


// Improved version

const iceBrickVolume = (radius, bottleLength, rimLength) => radius * radius * (bottleLength - rimLength) * 2;