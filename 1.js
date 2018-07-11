//Letter Count I                                                                      *
//*  Have the function LetterCountI(str) take the str parameter being passed and return  *
//*  the first word with the greatest number of repeated letters. For example:           *
//*  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
//*  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
//*  with repeating letters return <b>-1</b>. Words will be separated by spaces.        

const letterCountI = (aStr) => {
	let wordsArr = aStr.split(' ');
	let greatestNum = 0;
	let mostReaptedWord = '';
	for(let i = 0; i< wordsArr.length; i++) {
		let currentWord = wordsArr[i];
		let wordObj = {};
		let repeatedNum = 0;
		for(let j=0; j< currentWord.length; j++) {
			let currentLetter = currentWord[j];
			if(wordObj[currentLetter] === undefined) wordObj[currentLetter] = 1;
			else {
				wordObj[currentLetter]++;
				if(wordObj[currentLetter] > repeatedNum) repeatedNum= wordObj[currentLetter];
			}
		}
		if(repeatedNum > greatestNum) {
			greatestNum = repeatedNum; 
			mostReaptedWord = currentWord;
			}
	}
	if(greatestNum <= 1) return -1;
		else return mostReaptedWord;
}