function dropDown() {
      	var y= document.getElementById('v');
      	var x= document.getElementById('version');
      	// body...
      	if (x.style.display==="none") {
      		x.style.display="block";
      	}
      	else{
      		x.style.display="none";
      	}
      	if (x.style.display==="block") {
      		y.style.color="#8893c9";
      	}
      	else if (x.style.display==="none"){
      		y.style.color="#767680";
      	}
      	
      }
	function hide(){
      var x= document.getElementById('version');
      var y= document.getElementById('v');
      x.style.display="none";
     y.style.color="#767680";
	}