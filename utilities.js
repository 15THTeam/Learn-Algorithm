var gen = length => {
    var array = [];
    for (i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 1000));
    }
    return array;
}

var log = array => {
    var result = '';
    array.forEach(item => result += item + ' ');
    console.log(result);
}

module.exports = {
    gen,
    log
}