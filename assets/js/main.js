// Initialize Firebase
var config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();
var ref = rootRef.child('vote');

function changeImage() {
	var random1 = Math.floor(Math.random()*(1-2000+1)+2000),
		random2 = Math.floor(Math.random()*(1-2000+1)+2000);

	var photo1 = '../img/' + random1 + '.jpg',
		photo2 = '../img/' + random2 + '.jpg';
	var photoId1 = $('#image1'),
		photoId2 = $('#image2');

	photoId1.attr("src", photo1);
	photoId2.attr("src", photo2);
}

function select1() {
	var random = Math.floor(Math.random()*(1677-1319+1)+1319);

	var photo1 = '../img/' + random + '.jpg';
	var photoId = $('#image1');

	var child = ref.child(random + '/total')

	child.transaction(function(currentRank) {
		return currentRank + 1;
	})

	photoId.attr("src", photo1);
}

function select2() {
	var random = Math.floor(Math.random()*(1677-1319+1)+1319);

	var photo2 = '../img/' + random + '.jpg';
	var photoId = $('#image2');

	var child = ref.child(random + '/total')
	
	child.transaction(function(currentRank) {
		return currentRank + 1;
	})

	photoId.attr("src", photo2);
}

window.onload = changeImage();