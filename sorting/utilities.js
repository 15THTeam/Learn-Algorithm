var gen = (length, rand) => {
    var array = [];
    for (i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * rand));
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