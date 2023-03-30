for(let i = 1, j = 0; j < 13; i*=2, j++){
	document.write(i + j);
	if(j < 12){
		document.write(", ");
	}
}