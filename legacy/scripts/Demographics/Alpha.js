var countries;
fetch("data.json")
	.then(r=>r.json())
	.then(j=>{
		countries = j;
		main();
		})

function main(){
	console.log(7,countries)
}
