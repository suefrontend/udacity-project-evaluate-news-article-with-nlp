function handleSubmit(event) {
	console.log('CLICKED');
	event.preventDefault();

	// check what text was put into the form field
	// let formInput = document.getElementById('url').value;
	// Client.checkForName(formInput);

	// let formInput = document.getElementById('url').value;
	// console.log('formInput', formInput);

	// console.log('checkForName', checkForName(formInput));
	// document
	// 	.getElementById('form')
	// 	.addEventListener('click', checkForName(formInput));
	// // Client.checkForName(formInput);

	// if (Client.checkForURL(formInput)) {
	// 	console.log('::: Form Submitted :::');

	// 	postData('http://localhost:8081/api', { url: formInput }).then(function (
	// 		res
	// 	) {
	// 		document.getElementById('polarity').innerHTML =
	// 			'Polarity: ' + polarityChecker(res.score_tag);
	// 		document.getElementById(
	// 			'agreement'
	// 		).innerHTML = `Agreement: ${res.agreement}`;
	// 		document.getElementById(
	// 			'subjectivity'
	// 		).innerHTML = `Subjectivity: ${res.subjectivity}`;
	// 		document.getElementById(
	// 			'confidence'
	// 		).innerHTML = `Confidence: ${res.confidence}`;
	// 		document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
	// 	});
	// } else {
	// 	alert('Seems like an invalid URL, please try with a valid URL.');
	// }
}

export { handleSubmit };
