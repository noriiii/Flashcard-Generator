var ClozeCard = function(cloze, partial, fullText){


var billOfRightsCloze = new ClozeCard(
    "What is the first ten amendments to the Constitution", "Bill of Rights");

// "George Washington"
console.log(billOfRightsCloze.cloze); 

// " ... was the first president of the United States.""
console.log(billOfRightsCloze.partial);

// "George Washington was the first president of the United States.""
console.log(billOfRightsCloze.fullText);

}

module.exports = ClozeCard;