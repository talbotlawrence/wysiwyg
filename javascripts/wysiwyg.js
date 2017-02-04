"use strict";

// Create an array of objects that represents famous people
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

//Create a text input in your DOM
var textInput = document.createElement("input");
input.id = "input";
document.body.appendChild(textInput);

//Beneath that, create a container, block element in your DOM
var divContainer = document.createElement("div");
divContainer.id = "container";
document.body.appendChild(divContainer);

//Create a DOM element for each of the objects inside the container. 
//Style your person elements however you like.
var ourPresidents = document.createElement("article");
ourPresidents.className = "presidents";
document.body.appendChild(ourPresidents);

//For every even numbered element, have a light yellow background


//For every odd numbered element, have a light blue background