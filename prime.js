let num = 5 ;
let count = 0 ; 
for(let i = 2 ; i <= num**(0.5) ; i++){
	if(num % i == 0){
		count ++ ;
		}
	}
}
if(count == 0){
	console.log("prime number");
}else{
	console.log("composite number");
}