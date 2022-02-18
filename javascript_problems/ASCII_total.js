// 8 KYU
function uniTotal (string) {
    let total = 0
    let count = 0

    while (count < string.length) {
        total += string.charCodeAt(count)
        count++
    }
    return total
    
}