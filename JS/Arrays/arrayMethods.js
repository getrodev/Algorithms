const strings = ['x', 'a', 'alien', 'b', 'c', 'd']; 
// 4*4 = 16 bytes of storage 


strings[2] // O(1) -- no looping, no nothing....

// push 
strings.push('e'); // O(1)  -- you are adding it to the end 

// pop 
strings.pop(); 
strings.pop(); // O(1) -- you are removing it from the end 

//unshift 
strings.unshift('x'); // O(n) --you are adding it to the beginning, reassigning the index 

// splice 
strings.splice(2, 0, 'alien'); // O(n) -- essentially adding it at a specific index 

