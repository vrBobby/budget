
var month = document.getElementById('month');
var oMonth = document.getElementsByTagName('option');
var pMonth = document.getElementById("pMonth");
var val = document.getElementsByClassName("amount");
var sum = 0;
var remaining  = 0;
var totalButton = document.getElementById("tt");
var totalDisplay = document.getElementById("pTotal");
var date = document.querySelector("#date");
var monthDisplay = document.querySelector("#pPayees");
var bills = [];
var pBills = document.getElementsByClassName("lable");
var enterPayee = 0;
var li = document.getElementsByClassName("li").innerHTML;

function total(){
		totalButton.addEventListener("click", function(){
		for(var i = 0; i < val.length; i++){
		var t = val[i].value;
		var s = Number(t);
		 sum =   sum + s;
		 
	    }
totalDisplay.textContent = "";
var income = document.getElementById("income").value;
$("#total").empty()
bill();
var remaining = income - sum;

$("#total").append("$" + remaining + " Cash remaining");
$("#pTotal").append("$" + sum + " Total");
sum = 0;
remaining = 0;
});
}

	for(var i = 0; i < oMonth.length; i++){
	oMonth[i].addEventListener("click", function(){
		month.style.display = "none";
		pMonth.style.display = "none";
		
		monthDisplay.style.display = "block";
		var budget = $(this).val();
		$("#pPayees").append(budget);
		});
	}

	monthDisplay.addEventListener("click", function(){
	month.style.display = "block";
	pMonth.style.display = "block";
	document.getElementById("pPayees").style.display = "none";
	$("#pPayees").empty();
	})
	
var removeButtonPush;

 	
	$("ol").on("click", ".del", function(event){
		$(this).parent().fadeOut(1000,function(){
		$(this).remove();
		});
			event.stopPropagation();
	});

$("input[type='text']").keypress(function(event){
	//which check for which key was pressed
	//if statement compares the keypress to enter key
	if(event.which === 13){;
		//The variable stores the input which is this
		//.val turns input into a readable value
		enterPayee = ($(this).val());
		//Empties the input field so you no delete
		$(this).val("");
		//apppends the variable to the ol as a li
	  $("ol").append("<li id = lists>" + "<input type = checkbox class = del>" + 
		"<input type = number class = amount id = n>"  + 
		 "<span class = lable>" + (enterPayee) + "</span>" + "</li>");
	li = document.getElementsByClassName("body").innerHTML	
	}	
});

function lists(){
	console.log(li);
}
lists();
function bill(){
	bills=[];
			for(var b = 0; b < val.length; b++){
			   bills.push(val[b].value, pBills[b].textContent);
		//$("#array").append(bill);	
	}
			
}

//localStorage.setItem(li, "bills");
//    // Retrieve
total();

