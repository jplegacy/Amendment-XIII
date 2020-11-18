document.getElementById("overview").style="display:none;";
document.getElementById("timeline").style="display:none;";
document.getElementById("impact").style="display:none;";
document.getElementById("facts").style="display:none;";
document.getElementById("sources").style="display:none;";
document.getElementById("test").style="display:none;";

function begin() {
    document.getElementById('title').style="opacity:0;";
    setTimeout(function() {
        document.getElementById('nav').style="top:0%; border-top:transparent solid 2px; padding:5% 2px 10px 2px;"; 
        document.getElementById('title').style="display:none;";
    }, 1100);
    setTimeout(function() {
        document.getElementsByTagName('div').style="display:none;";
    }, 1200);
}
function openP(name){
    document.getElementById("overview").style="opacity:0;";
    document.getElementById("timeline").style="opacity:0;";
    document.getElementById("impact").style="opacity:0;";
    document.getElementById("facts").style="opacity:0;";
    document.getElementById("test").style="opacity:0;";
    document.getElementById("sources").style="opacity:0;";
    
    setTimeout(function() {
        document.getElementById("overview").style="display:none;";
        document.getElementById("timeline").style="display:none;";
        document.getElementById("impact").style="display:none;";
        document.getElementById("facts").style="display:none;";
        document.getElementById("sources").style="display:none;";
        document.getElementById("test").style="display:none;";
        document.getElementById(name).style="display:block;";
        
    }, 1500);
    
    setTimeout(function() {
        document.getElementById(name).style="opacity:1;";
    }, 2000);
    }
function popo(){
    document.getElementById("popo").src="https://static.tvtropes.org/pmwiki/pub/images/tfs_mr_popo.PNG";
    }
function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var score = 0; 
    

    if (question1 === "correct"){
        score++;
    }
  
 
    if (question2 === "correct"){
        score++;
        }
   
    if (question3 === "correct"){
        score++;
    }

    document.getElementById("numcorrect").innerHTML =  Math.round((score /3)*100) +  " is your final score";
    }
    
    