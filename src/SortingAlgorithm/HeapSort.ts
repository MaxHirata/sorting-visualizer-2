export default function heapSort(array: number[]): any[] {
	const animations: any[] = [];
	if (array.length === (0 | 1)) {
		return array;
	}
	//heap size
	let k = array.length - 1;
	//let i = 0;
	let n = array.length;

	// while (k >= 0) {
	// 	//step 1: create a maxHeap
	// 	//maxHeapify(array, k, animations);

	// 	heapify(array, n, i, animations);

	// 	//Add animations steps
	// 	animations.push([ 0, k ]);
	// 	animations.push([ 0, k ]);
	// 	animations.push([ 0, array[k] ]);
	// 	animations.push([ 0, k ]);
	// 	animations.push([ 0, k ]);
	// 	animations.push([ k, array[0] ]);

	// 	//step 2: switch first node and last node, the remove the last node in the heap
	// 	let temp = array[0];
	// 	array[0] = array[k];
	// 	array[k] = temp;
	// 	console.log(array);
	// 	//console.log('switch array: ' + array[k]);
	// 	k -= 1;
	// }

	for (let i = n / 2 - 1; i >= 0; i--) {
		heapify(array, n, i, animations);
	}

	for (let i = n - 1; i >= 0; i--) {
		animations.push([
			0,
			i
		]);
		animations.push([
			0,
			i
		]);
		animations.push([
			0,
			array[i]
		]);
		animations.push([
			0,
			i
		]);
		animations.push([
			0,
			i
		]);
		animations.push([
			i,
			array[0]
		]);

		let temp = array[0];
		array[0] = array[i];
		array[i] = temp;

		heapify(array, i, 0, animations);
	}

	return animations;
}

function heapify(arr: number[], n: number, i: number, animations: any[]) {
	var largest = i;
	var l = 2 * i + 1;
	var r = 2 * i + 2;

	if (l < n && arr[largest] < arr[l]) largest = l;
	if (r < n && arr[largest] < arr[r]) largest = r;

	if (largest !== i) {
		//swap(arr[i], arr[largest])

		animations.push([
			i,
			largest
		]);
		animations.push([
			i,
			largest
		]);
		animations.push([
			i,
			arr[largest]
		]);
		animations.push([
			i,
			largest
		]);
		animations.push([
			i,
			largest
		]);
		animations.push([
			largest,
			arr[i]
		]);

		let temp = arr[i];
		arr[i] = arr[largest];
		arr[largest] = temp;

		//Recursively heapify the affected sub-tree
		heapify(arr, n, largest, animations);
	}
}

function maxHeapify(array: number[], heapSize: number, animations: any[]) {
	for (let i = 0; i <= heapSize; i++) {
		var child1 = i * 2 + 1;
		var child2 = i * 2 + 2;
		if (child1 <= heapSize && array[i] < array[child1]) {
			//add animation steps
			animations.push([
				i,
				child1
			]);
			animations.push([
				i,
				child1
			]);
			animations.push([
				i,
				array[child1]
			]);
			animations.push([
				i,
				child1
			]);
			animations.push([
				i,
				child1
			]);
			animations.push([
				child1,
				array[i]
			]);

			//swap parent and child values
			var temp = array[i];
			array[i] = array[child1];
			array[child1] = temp;
			//console.log('child1: ' + array[i]);
		}
		if (child2 <= heapSize && array[i] < array[child2]) {
			//add animation steps
			animations.push([
				i,
				child2
			]);
			animations.push([
				i,
				child2
			]);
			animations.push([
				i,
				array[child2]
			]);
			animations.push([
				i,
				child2
			]);
			animations.push([
				i,
				child2
			]);
			animations.push([
				child2,
				array[i]
			]);

			var temp = array[i];
			array[i] = array[child2];
			array[child2] = temp;
			//console.log('child2: ' + array[i]);
		}
	}
}