var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

// "basic" or cloze
var cardType = process.argv[2];

// type of card type
var cardTypeType = process.argv[3];

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");

if (cardType === "basic") {

	if (cardTypeType === "front") {
			// "What is the first ten amendments to the Constitution"
			console.log(billOfRights.front); 
			
	} else if (cardTypeType === "back") {
			// "Bill of Rights"
			console.log(billOfRights.back); 
	}
  
}

else if (cardType ==="cloze") {

	if (cardTypeType === "cloze") {
			// "Bill of Rights"
			console.log(billOfRightsCloze.cloze); 
	} else if (cardTypeType === "partial") {
			// " ... was the first president of the United States.""
			console.log(billOfRightsCloze.partial);		
	} else if (cardTypeType === "fullText") {
			// "George Washington was the first president of the United States.""
			console.log(billOfRightsCloze.fullText);
	}
}

else {
	// throw error
}