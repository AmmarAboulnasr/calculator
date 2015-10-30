(function app() {
	'use strict';
	$(document).ready(function() {

		$("#screen").slideUp(1).slideDown(2000);

    // var firstNumber = 0;
    // var secondNumber = 0;
    // var operation = 'n';
    let theField = "";

		$("#c").on("click", (event) => {
      theField = "";
			$("#screen").text('0');
		});
    $("#plusNegative").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField = ((eval($("#screen").text()))*-1);
        $("#screen").text(theField);
    }
  })

    // $("#delete").on("click", (event) => {
    //   theField.slice(theField.length-1);
    //   $("#screen").text(theField);
    // })
    $("#zero").on("click", (event) => {
      if(!($("#screen").text().length === 11 || theField === '')) {
        theField += '0';
        $("#screen").text(theField);
      }
    })

    $("#nine").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '9';
        $("#screen").text(theField);
      }
    })
    $("#eight").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '8';
        $("#screen").text(theField);
      }
    })
    $("#seven").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '7';
        $("#screen").text(theField);
      }
    })
    $("#six").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '6';
        $("#screen").text(theField);
      }
    })
    $("#five").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '5';
        $("#screen").text(theField);
      }
    })
    $("#four").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '4';
        $("#screen").text(theField);
      }
    })
    $("#three").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '3';
        $("#screen").text(theField);
      }
    })
    $("#two").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '2';
        $("#screen").text(theField);
      }
    })
    $("#one").on("click", (event) => {
      if($("#screen").text().length < 11) {
        theField += '1';
        $("#screen").text(theField);
      }
    })

    $("#multiply").on("click", (event) => {
      if($("#screen").text().length < 11 && theField !== '') {
        theField = eval($("#screen").text());
        $("#screen").text(theField);
        theField += '*';
        $("#screen").text(theField);
      }
    })

    $("#divide").on("click", (event) => {
      if($("#screen").text().length < 11 && theField !== '') {
        theField = eval($("#screen").text());
        $("#screen").text(theField);
        theField += '/';
        $("#screen").text(theField);
      }
    })

    $("#add").on("click", (event) => {
      if($("#screen").text().length < 11 && theField !== '') {
        theField = eval($("#screen").text());
        $("#screen").text(theField);
        theField += '+';
        $("#screen").text(theField);
      }
    })

    $("#subtract").on("click", (event) => {
      if($("#screen").text().length < 11 && theField !== '') {
        theField = eval($("#screen").text());
        $("#screen").text(theField);
        theField += '-';
        $("#screen").text(theField);
      }
    })

    $("#equal").on("click", (event) => {
      if(theField !== '') {
        theField = eval($("#screen").text());
        $("#screen").text(theField);
      }
    })
    
    // $("#multiply").on("click", runOp());
    // function runOp() {
    //   switch(operation) {
    //     case 'n': break;
    //     case 'a': firstNumber += secondNumber; $("#screen").text(firstNumber); break;
    //     case 's': firstNumber -= secondNumber; $("#screen").text(firstNumber); break;
    //     case 'm': firstNumber *= secondNumber; $("#screen").text(firstNumber); break;
    //     case 'd': firstNumber /= secondNumber; $("#screen").text(firstNumber); break;

    //   }
    // }





	});



})();