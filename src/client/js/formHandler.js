function handleSubmit(event) {
	event.preventDefault();

	let formInput = document.getElementById('url').value;

	if (formInput) {
		postData('http://localhost:8081/api', { url: formInput }).then(function (
			res
		) {
			document.getElementById(
				'agreement'
			).innerHTML = `Agreement: ${res.agreement}`;
			document.getElementById(
				'subjectivity'
			).innerHTML = `Subjectivity: ${res.subjectivity}`;
			document.getElementById(
				'confidence'
			).innerHTML = `Confidence: ${res.confidence}`;
			document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
		});

		console.log('formInput', formInput);
		document.getElementById('url').value = '';
	} else {
		alert('Please enter URL');
	}
}

const postData = async (url = '', data = {}) => {
	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		return newData;
	} catch (error) {
		console.log('Error', error);
	}
};

export { handleSubmit };
