let gen = (length, rand) => {
    let array = [];
    for (i = 0; i < length; ++i) {
        array.push(Math.floor(Math.random() * rand));
    }
    return array;
}

let log = array => {
    let result = '';
    array.forEach(item => result += item + ' ');
    console.log(result);
}