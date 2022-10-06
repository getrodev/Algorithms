Const nemo = [‘nemo’]; 
Const everyone = [‘dory’, ‘bruce’, ‘marlin’, ‘nemo’, ‘gill’, ‘bloat’, ‘Nigel’, ’squirt’, ‘Darla’, ‘hank’];
Const large = new Array(100000).fill(‘nemo’); 

Function findNemo(array) {
	let t0 = performance.now(); 
	for (let i =0; i < array.length; I++) {
		if (array[I] === ‘nemo’) {
			console.log(‘Found NEMO!’)!
		}
	}
	let t1 = performance.now(); 
	console.log(‘Call to find Nemo took ’ + (t1-t0) + ‘millisecond’); 
}

//findNemo(nemo); 
findNemo(everyone);


// Different ways to write the above 

const findNemo2 = array => {
	array.forEach(fish => {
		if(fish === 'nemo') {
			console.log('found NEMO');
		}
	})
}


const findNemo3 = array => {
	for (let fish of array) {
		if(fish == 'nemo') {
			console.log('Found NEMO')
		}
	}
}