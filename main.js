// if(window.stop !== undefined) {
// 	window.stop();
// } else if(document.execCommand !== undefined) {
//     document.execCommand("Stop", false);
// }

//LOAD VIDEO
// var parameter = new Date().getMilliseconds(); 
// var video = document.createElement('video');
// video.src = "dance-sound.mp4?t=" + parameter;
// video.id = "dance";
// $('body').append(video);
// video.play();

//MUSIC STUFF
// var audio = document.createElement('audio');
// audio.src = 'music.mp3';
// $('body').append(audio);
// var audio = document.getElementById('audio');
// video.addEventListener('loadeddata', function() {
// 	console.log('trigger');
	
// }, false);
// audio.play();

//SERIOUSLY JS VIDEO STUFF
var seriously, dance, target, dance_chroma;

seriously = new Seriously();
target = seriously.target('#canvas');
dance = seriously.source('#dance');

dance_chroma = seriously.effect('chroma');
dance_chroma.source = dance;
target.source = dance_chroma;

seriously.go();

//GIF STUFF
var video = document.getElementById('dance');

abs_gifs = ['gif/abs1.gif', 'gif/abs2.gif', 'gif/abs3.gif', 'gif/abs4.gif', 'gif/abs5.gif', 'gif/abs6.gif'];
abs_gifs.name = 'abstract gifs';
nat_gifs = ['gif/nat1.gif', 'gif/nat2.gif', 'gif/nat3.gif', 'gif/nat4.gif', 'gif/nat5.gif', 'gif/nat6.gif'];
nat_gifs.name = 'nature gifs';
fast_gifs = ['gif/fast1.gif', 'gif/fast2.gif', 'gif/fast3.gif', 'gif/fast4.gif', 'gif/fast5.gif', 'gif/fast6.gif', 'gif/fast7.gif', 'gif/fast8.gif', 'gif/fast9.gif', 'gif/fast10.gif', 'gif/fast11.gif', 'gif/fast12.gif', 'gif/fast13.gif']
fast_gifs.name = 'fast gifs';
med_gifs = ['gif/med1.gif', 'gif/med2.gif', 'gif/med3.gif', 'gif/med4.gif', 'gif/med5.gif', 'gif/med6.gif'];
med_gifs.name = 'medium gifs';
mild_gifs = ['gif/mild1.gif', 'gif/mild2.gif', 'gif/mild3.gif', 'gif/mild4.gif', 'gif/mild5.gif', 'gif/mild6.gif'];
mild_gifs.name = 'mild gifs';

insertGif(nat_gifs);
var time;

Mousetrap.bind(['space'], function() {
	video.addEventListener("timeupdate", function(){
		time = this.currentTime;
	});	

	if (typeof time == 'undefined') {
		insertGif(nat_gifs);
	} else if (time < 11) {
		insertGif(nat_gifs);
	} else if (11 < time && time < 22) {
		insertGif(abs_gifs);
	} else if (22 < time && time < 32) {
		insertGif(fast_gifs);
	} else if (32 < time && time < 42) {
		insertGif(mild_gifs);
	} else if (42 < time && time < 49) {
		insertGif(med_gifs);
	} else if (49 < time && time < 65) {
		insertGif(abs_gifs);
	} else if (65 < time && time < 76) {
		insertGif(fast_gifs);
	} else if (76 < time && time < 88) {
		insertGif(mild_gifs);
	} else if (88 < time && time < 99) {
		insertGif(med_gifs);
	} else if (99 < time && time < 104) {
		insertGif(nature_gifs);
	} else if (104 < time && time < 121) {
		insertGif(abs_gifs);
	} else if (121 < time && time < 132) {
		insertGif(fast_gifs);
	} else if (132 < time && time < 143) {
		insertGif(mild_gifs);
	} else if (143 < time && time < 154) {
		insertGif(med_gifs);
	} else if (154 < time && time < 159) {
		insertGif(nature_gifs);
	} else if (159 < time && time < 176) {
		insertGif(abs_gifs);
	} else if (176 < time && time < 189) {
		insertGif(fast_gifs);
	} else if (189 < time && time < 198) {
		insertGif(mild_gifs);
	} else if (198 < time) {
		insertGif(med_gifs);
	}
});

var paused = false;
Mousetrap.bind(['p'], function() {
	if (paused) {
		video.play();
		paused = false;
	} else {
		video.pause();
		paused = true;	
	}
	
});

function insertGif(gifs) {
	$("#bg").html(formatGif(gifs[getRandomInt(0, gifs.length)]));
	console.log(gifs.name, time);
}

function formatGif(url) {
  return "<img src='" + url + "'>";
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//OLD STUFF FOR GETTING GIFS FROM GIPHY
// function getGif() {
// 	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=clouds&api_key=dc6zaTOxFJmzC");
// 	var gif;
// 	xhr.done(function(obj) { 
// 			console.log("success got obj", obj.data);
// 			start(obj.data);
// 	});
// }

// getGif();

// var hold;
// function start(data) {
// 	hold = data; 
// }