export default function bubblesort(array: number[]) {
    const animation: any[] = [];
    if(array.length <= 1) return array;
    _bubblesort(array, animation);

    return animation;
}

function _bubblesort(array: number[], animation: any[]) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 1; i < array.length; i++) {
            if(array[i] < array[i - 1]) {
                swapped = true;

                animation.push([i , i - 1]);
                animation.push([i , i - 1]);
                animation.push([i - 1, array[i]]);
                animation.push([i, i - 1]);
                animation.push([i, i - 1 ]);
                animation.push([i, array[i - 1]]);

                //swap values
                let temp = array[i];
                array[i] = array[i-1];
                array[i-1] = temp;
            }
        }
    }
}