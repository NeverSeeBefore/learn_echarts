function random(max, min = 0) {
    return Math.round(Math.random() * max + min);
}

function loop(round, cb) {
    let i = 0;
    let res;
    while (i < round) {
        res = cb && cb(i, res);
        i++;
    }
    return res;
}