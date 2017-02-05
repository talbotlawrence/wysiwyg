"use strict";
//this is a total mess as of 2/4/2017 at 9:58pm.

var famousPeople = [
	{
	  title: "President",
	  name: "George Washington",
	  bio: "George Washington was an American politician and soldier who served as the first President of the United States from 1789 to 1797 and was one of the Founding Fathers of the United States. He served as Commander-in-Chief of the Continental Army during the American Revolutionary War, and later presided over the 1787 convention that drafted the United States Constitution. He is popularly considered the driving force behind the nation's establishment and came to be known as the father of the country, both during his lifetime and to this day.",
	  image: "https://en.wikipedia.org/wiki/George_Washington#/media/File:Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
	  lifespan: {
	    birth: 1731,
	    death: 1799
	  }
	},

	{
	  title: "President",
	  name: "John Adams",
	  bio: "John_Adams was an American patriot who served as the second President of the United States (1797–1801) and the first Vice President (1789–97).[1] He was a lawyer, diplomat, statesman, political theorist, and, as a Founding Father, a leader of the movement for American independence from Great Britain.[2] He was also a dedicated diarist and correspondent, particularly with his wife and closest advisor Abigail.",
	  image: "https://en.wikipedia.org/wiki/John_Adams#/media/File:Official_Presidential_portrait_of_John_Adams_(by_John_Trumbull,_circa_1792).jpg"
	  lifespan: {
	    birth: 1735,
	    death: 1826
	  }
	},

	{
	  title: "President",
	  name: "Thomas Jefferson",
	  bio: "Thomas_Jefferson was an American Founding Father who was the principal author of the Declaration of Independence and later served as the third President of the United States from 1801 to 1809. Prior thereto, he was elected the second Vice President of the United States, serving under John Adams from 1797 to 1801. A proponent of democracy, republicanism, and individual rights motivating American colonists to break from Great Britain and form a new nation, he produced formative documents and decisions at both the state and national level.",
	  image: "https://en.wikipedia.org/wiki/Thomas_Jefferson#/media/File:Official_Presidential_portrait_of_Thomas_Jefferson_(by_Rembrandt_Peale,_1800).jpg"
	  lifespan: {
	    birth: 1743,
	    death: 1826
	  }
	}	
];

//var textInput = document.getElementById("input");
var peopleContainer = document.getElementById("container");
var eachPresidentContainer = getElementsByClassName("president");

//Wouldn't be great to get all of these functions working!!!
function createPresidentContainer(president) {
	var peopleContainer = document.getElementById("container");
	var eachPresidentContainer = getElementsByClassName("president");
	eachPresidentContainer.innerHTML += `
	<person>
	  <header>${president.name}, ${president.title}</header>
	  <section>${president.bio}</section>
	  <section>${president.image}</section>
	  <footer>${president.name} was born in ${president.lifespan.birth} 
	  			and died in ${president.lifespan.death}
	  </footer>
	</person>
	`
	peopleContainer.appendChild(eachPresidentContainer.innerHTML);
};

function loopToAddPresident() {
	for (var i = 0; i < famousPeople.length; i++) {
		createPresidentContainer(famousPeople[i]);
	}
};

function addEventListener() {
		for (var i = 0; i < famousPeople.length; i++) {
	  famousPeople.item(i).addEventListener("click", createDottedBorder);
	};
};

function createDottedBorder() {
	//toggle--work on this!!!
	var eachPresidentContainer = getElementsByClassName("president");
	.addEventListener("click", function(event){
  eachPresidentContainer.classList.toggle("dottedBorder");
  });
  textElementGainFocus();
};

function textElementGainFocus() {
	var textInput = document.getElementById("input");
	textInput.focus();			//Is everyone else googling as much as I am?
};

// var fieldEl = document.getElementById("keypress-input");
// fieldEl.addEventListener("keyup", function(event){
//   console.log("event", event);
//   outputEl.innerHTML = event.target.value;
// });   

function biographyBound(president) {		//this needs work!!
	var textInput = document.getElementById("input");
		president.addEventListener("keyup", function(event){
	  console.log("event", event);
	  textInput.innerHTML = event.target.value;
	});   
};

function deleteContentInputField(event) {
	//13
	if (event.keyCode === 13) {
		textInput.value = "";
	}
};








// function colorMeBad(firstColor, secondColor) {
// 	console.log("Our famous people are: ", famousPeople);
// 	for (var i = 0; i < famousPeople.length; i++) {   
// 		if (i%2===0) {
// 			famousPeople[i].style.backgroundColor = firstColor; //"lightyellow";
// 		} else {
// 			famousPeople[i].style.backgroundColor = secondColor; //"lightblue" ;
// 		}
// 	}
// };

//Style your person/container elements however you like.

// When you click on one of the person elements, a dotted border should appear around it.

// When you click on one of the person elements, the text input should immediately 
//gain focus so that you can start typing.

// When there is a highlighted person element, and you begin typing in the input box, 
//the person's biography should be immediately bound to what you are typing, letter by letter.
//?????

// When you press the enter/return key when typing in the input field, 
//then the content of the input field should immediately be blank.