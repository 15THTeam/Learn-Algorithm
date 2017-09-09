const utilities = require('./utilities');

var array = utilities.gen(20);
console.log('Before sort');
utilities.log(array);

var selectionSort = array => {

    for (i = 0; i < array.length; i++) {
        var min = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[min])
                min = j;
        }
        if (min !== i) {
            var temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
}

selectionSort(array);
console.log('After sort: ');
utilities.log(array);