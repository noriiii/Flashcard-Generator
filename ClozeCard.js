var ClozeCard = function(cloze, text){

	this.text = text;
	this.cloze = cloze;

	var billOfRightsCloze = new ClozeCard("Bill of Rights", "Bill of Rights is the first ten amendments to the Constitution");

	if (clozeCard === false) {
		throw "text shall include " + text;
	}

}

ClozeCard.prototype.clozeCard = function () {
	if (this.text.includes === cloze) {
		return true;
	} else {
		return false;
	}
}

ClozeCard.prototype.partialText = function () {
	if (this.text.includes !=== text) {
		return false;
	} else {
		this.text.replace(cloze, "...");
	}
}

module.exports = ClozeCard;

