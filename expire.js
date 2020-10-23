
let slikaa='<img class="sale"src="sale1.png">';
let datum=new Date();
function proveradatuma(datumisteka){

	let datumist=new Date(datumisteka);
	if (datum.getTime()<=datumist.getTime()){
		document.write(slikaa);	
	}
}
