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

console.log(navigator.userAgent.toLowerCase());

if (navigator.userAgent.toLowerCase().includes("chrome")) {
	console.log('this is chrome');
} else {
	console.log('not chrome');
	$('#intro').hide();
	$('#browser-remind').show();
}

//SERIOUSLY JS VIDEO STUFF
var seriously, dance, target, dance_chroma;

seriously = new Seriously();
target = seriously.target('#canvas');
dance = seriously.source('#dance');

dance_chroma = seriously.effect('chroma');
dance_chroma.source = dance;
target.source = dance_chroma;

seriously.go();

//GIF LOADING & TIMING
var video, paused, time;
video = document.getElementById('dance');
paused = true;

function start() {
	video.play()
	paused = false;
	$('#intro').hide(); 
	$('#bg').css({
        '-webkit-filter':'none',
        '-moz-filter':'none',
        '-o-filter':'none',
        '-ms-filter':'none',
        'filter':'none',
    })
    $("#space-remind").show();
    setTimeout(function(){
    	$("#space-remind").fadeOut();
    }, 3000);
}

abs_gifs = ['gif/abs1-optim.gif', 'gif/abs2-optim.gif', 'gif/abs3-optim.gif', 'gif/abs4-optim.gif', 'gif/abs5-optim.gif', 'gif/abs6-optim.gif'];
abs_gifs.name = 'abstract gifs';
nat_gifs = ['gif/nat1-optim.gif', 'gif/nat2-optim.gif', 'gif/nat3-optim.gif', 'gif/nat4-optim.gif', 'gif/nat5-optim.gif', 'gif/nat6-optim.gif'];
nat_gifs.name = 'nature gifs';
fast_gifs = ['gif/fast1-optim.gif', 'gif/fast2-optim.gif', 'gif/fast3-optim.gif', 'gif/fast4-optim.gif', 'gif/fast5-optim.gif', 'gif/fast6-optim.gif', 'gif/fast7-optim.gif', 'gif/fast8-optim.gif', 'gif/fast9-optim.gif', 'gif/fast10-optim.gif', 'gif/fast11-optim.gif', 'gif/fast12-optim.gif', 'gif/fast13-optim.gif']
fast_gifs.name = 'fast gifs';
med_gifs = ['gif/med1-optim.gif', 'gif/med2-optim.gif', 'gif/med3-optim.gif', 'gif/med4-optim.gif', 'gif/med5-optim.gif', 'gif/med6-optim.gif'];
med_gifs.name = 'medium gifs';
mild_gifs = ['gif/mild1-optim.gif', 'gif/mild2-optim.gif', 'gif/mild3-optim.gif', 'gif/mild4-optim.gif', 'gif/mild5-optim.gif', 'gif/mild6-optim.gif'];
mild_gifs.name = 'mild gifs';

insertGif(nat_gifs);

Mousetrap.bind(['space'], function(e) {
	e.preventDefault()
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

var store = 0;
function getRandomInt(min, max) {
	var final;
  	min = Math.ceil(min);
  	max = Math.floor(max);
	final = Math.floor(Math.random() * (max - min)) + min;

	if (final == store) {
		getRandomInt(min, max);
	} else {
		store = final;
		return final;
	}
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