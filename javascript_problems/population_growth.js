// 7 KYU
function nbYear(p0, percent, aug, p) {
    let years = 0

    while(p0 < p) {
        p0 = Math.floor((p0 * (percent / 100))) + aug + p0

        years++
    }

    return years
}
