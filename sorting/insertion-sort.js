const utilities = require('./utilities');

var array = utilities.gen(10, 50);
console.log('Before sort');
utilities.log(array);

var insertionSort = array => {
    console.log('Insertion Sort is sorting...');
    for (i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && key < array[j]) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = key;
        utilities.log(array);
    }
}

insertionSort(array);
console.log('After sort');
utilities.log(array);