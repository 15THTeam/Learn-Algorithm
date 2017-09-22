const utilities = require('./utilities');

var array = utilities.gen(10, 50);
console.log('Before sort');
utilities.log(array);

var shellSort = array => {
    for (gap = array.length / 2; gap > 0; gap /= 2) {
        for (i = gap; i < array.length; i++) {
            let temp = array[i];
            let j = i;
            while (j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
    }
}

shellSort(array);
console.log('After sort');
utilities.log(array);