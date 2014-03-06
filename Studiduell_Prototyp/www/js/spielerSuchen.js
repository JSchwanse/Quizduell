function init() {
	
}


function spielerSuchen() {
$.ajax( {
		url:"http://192.168.0.105:8090/Studiduell/user/search/" + $("#search_username_input").val(),
		type:"GET",
		success:function(obj){addResultToList(obj);},
		error:function(obj){alert(JSON.stringify(obj));}
		});
  }

function addResultToList(obj){
	// Ergebnisliste befüllen
	for(var i=0;i<obj.length;i++){
	//Button zum befreunden ergänzen
	$("#ergebnislisteErweitern").append("<li class='topcoat-list__item custom_List_item' ontouchend='createNewGame(gegnerName)'>"+obj.value[i]+"</li>");
	}
	
	/* Zeige Ergebnisliste an*/
	$("#ergebnislisteDiv").css("visibility","visible");
}

function createNewGame(gegnerName){
$.ajax( {
		url:"http://192.168.0.105:8090/Studiduell/game/create/with/" + gegnerName,
		type:"POST",
		success:function(){openHomeView();},
		error:function(obj){alert(JSON.stringify(obj));}
		});
}


function openHomeView(){
var homeScreenView = new steroids.views.WebView("html/home.html");
	steroids.layers.push(homeScreenView);
}
 

document.addEventListener("deviceready", init, false);