// 8 KYU
function points(games) {

    let points = 0

    const results =  games.map((ele) => {
        if(Number(ele.charAt(0)) > Number(ele.charAt(2))) {
            points += 3
        }
        else if(Number(ele.charAt(0)) == Number(ele.charAt(2))) {
            points += 1
        }
    })

    return points

    }
