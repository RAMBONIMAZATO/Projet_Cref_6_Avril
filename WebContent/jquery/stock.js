//calcul moyenne des matières
	/*
	$('#moyenne_'+num).change(function(){
		var mat = parseFloat($('#id_noteMath_'+num).val());
		var pc = parseFloat($('#id_notePc_'+num).val());
		var sn = parseFloat($('#id_noteSvt_'+num).val());
		var moymapc = (mat + pc)/2;
		var moypcsn = (pc + sn )/2;
		var moymasn = (mat+sn)/2;
		var ensemble = (mat+pc+sn)/3;
		if ($(this).val()==$('#mp_'+num).val()){
			//$(".momapc").val()=moymapc;
			$("#response_"+num).append("<p style='font-size:15px;color:#8880EE;' class='para'>Voici la moyenne de maths et pc : "  + moymapc+ "</p>") ;
		
		}else if ($(this).val()==$('#ms_'+num).val()) {
			//$(".momasn").val()=moymasn;
			$("#response_"+num).append("<p style='font-size:15px;color:#D77D51;' class='para'> Voici la moyenne de maths et SVT : " + moymasn+ "</p>") ;
			
		}else if ($(this).val()==$('#ps_'+num).val()) {
			//$(".mopcsn").val()=moypcsn;
			$("#response_"+num).append("<p style='font-size:15px;color:#7DE188;' class='para'>Voici la moyenne de PC et SVT : " + moypcsn + "</p>") ;
			
		}else if ($(this).val()==$('#all_'+num).val()) {
			//$('.moyall').val()=ensemble;
			$("#response_"+num).append("<p style= "+"font-size:15px;color:#7DE188"+" class='para'>"+ "Voici la moyenne des trois : " +ensemble + "</p>") ;		
		}
	
	});*/
	//$('.para').remove();


	//traitement  ajax des requêtes sur le modal modificaion

	/*$('.effectif').click(function(){

		var portail = $('.portail').val();
		var vague = $('.vague').val();
		var opera1 = $('.class_opera1').val();
		var opera2 = $('.class_opera2').val();
		var opera3 = $('.class_opera3').val();
		var opera4 = $('.class_opera4').val();
		var opera5 = $('.class_opera5').val();
		var anneBac = $('.anneBac').val();
		var mentBac = $('.class_mention').val();
		var note_math = $('.noteMath').val();
		var note_pc = $('.notePc').val();
		var note_svt = $('.noteSvt').val();
		var status = $('.selection').val();
		if(portail && vague && opera1 && opera2 && opera3 && opera4 && opera5 && anneBac && mentBac && note_math && note_pc && note_svt && status){
		
			$.ajax({
				type : "POST",
				url : "verification_critere",
				data : { portail : portail,
						vague : vague,
						opera1 : opera1,
						opera2 : opera2,
						opera3 : opera3,
						opera4 : opera4,
						opera5 : opera5,
						anneBac : anneBac,
						mentBac : mentBac,
						note_math : note_math,
						note_pc : note_pc,
						note_svt : note_svt,
						status : status
				},
				success : function(result){
					$('.reponse').html(result);
				},
				error : function(result,erreur){

				}


			});
		}
	});*/
	/*
var modaly = document.getElementsByClassName('modaly');

for (var j =0 ;j < modaly.length ;j++) {

	modaly[j].addEventListener('click',function(){

		var moyenne = document.getElementsByClassName('moyen'),
		ma = document.getElementsByClassName('noteMath'),
		pc = document.getElementsByClassName('notePc'),
		sn = document.getElementsByClassName('noteSvt');
		for (var i =0;i< moyenne.length ;i++) {
			//alert(ma[i]);

			moyenne[i].addEventListener('change',function(){
				var idma=document.getElementById('id_noteMath'),
				idpc=document.getElementById('id_notePc'),
				idsn = document.getElementById('id_noteSvt');
				var response = document.getElementById('response');
				//"<p>voici la moyenne :" + 
				//alert(idma + idpc+ idsn);
	//			alert((parseFloat(idma) + parseFloat(idpc))/2 +"</p>");
				//alert(ma[i].value);
				/*var moymapc=0;
				var moypcsn=0;
				var moymasn=0;
			
			});
		}
	});
}*/// for (var i = 0;i<numcri.length; i++) {

// }
// for (var i = 0;i<numcri.length; i++) {

	
// 		modaly[i].addEventListener('click',function(){
			

// 			var indice =numcri[i].value;
// 			// alert(modaly[i]);
// //recuperation des elements
// 			//var modal = "modaly_"+indice;
// 			var notema = "id_noteMath_"+indice;
// 			var notepc = "id_notePc_"+indice;
// 			var notesn = "id_noteSvt_"+indice;
// 			var notemoyen = "moyenne_"+indice;
// 			var valiny = "response_"+indice;
// 			var mapc = "mp_"+indice;
// 			var masn = "ms_"+indice;
// 			var ps = "ps_"+indice;
// 			alert(modaly + notema+notepc+notesn + notemoyen);
// 	//prise en main des variables

// 			var mat = document.getElementById(notema);
// 			var phy = document.getElementById(notepc);
// 			var sn = document.getElementById(notesn);
// 			var moyen = document.getElementById(notemoyen);
// 			var answer = document.getElementById(valiny);
// 			var choixmapc = document.getElementById(mapc);
// 			var choixmasn = document.getElementById(masn);
// 			var choixps = document.getElementById(ps);

// 			//alert(mat + phy + sn +answer+indice);
// 			moyen.addEventListener('change',function(){

// 				alert(mat + " " + phy + " " + sn + indice);
// 			});
// 	});
// }
// /*
// /*