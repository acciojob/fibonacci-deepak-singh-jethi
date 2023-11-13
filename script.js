function fibonacci(num) {
let a = 0;
let b = 1;
let temp = 0;
for(let i = 1; i<num; i++){
	temp = a; 
	a = a+b;
	b = temp;
	
}
	return a; 
	
	
}

module.exports = fibonacci;
