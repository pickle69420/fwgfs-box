(async function() {
var ce = function(e) {return document.createElement(e);};
async function mkmdl() {
	var modalbox = ce('div');
	modalbox.id = 'fwgfsmdl'
	modalbox.innerHTML = `
	<div class='fwmodal-content'>
	<div class='fwmodal-header'>
		<span class='fwclosebtn'>&times;</span>
		<span class='fwclosebtn'>&minus;</span>
	</div>
		<div class='fwmodal-body'>
			<h2 class='fwmodal-title'>FREE WEB GAMES FOR SCHOOL</h2>
			<div class='fwimportcontent'></div>
		</div>
	</div>`;
	document.body.appendChild(modalbox);
	var headerstyles = ce('style');
	headerstyles.innerHTML = `
	@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');

	#fwgfsmdl {
	  display: none;
	  position: fixed;
	  z-index: 9999;
	  padding-top: 15px;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
	  overflow: auto;
	  background-color: rgba(0,0,0,0.4);
	}
	
	.fwmodal-content {
	  position: relative;
	  margin: auto;
	  padding: 0;
	  border: 1px solid #888;
	  width: 45%;
	  height: 95%;
	  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
	  -webkit-animation-name: animatetop;
	  -webkit-animation-duration: 0.4s;
	  animation-name: animatetop;
	  animation-duration: 0.4s;
	  border-radius: 15px;
	  background-color: #5CDB95;
	  color: #05386B;
	  font-family: 'Orbitron', sans-serif;
	}

	@-webkit-keyframes animatetop {
	  from {top:-300px; opacity:0} 
	  to {top:0; opacity:1}
	}

	@keyframes animatetop {
	  from {top:-300px; opacity:0}
	  to {top:0; opacity:1}
	}

	.fwclosebtn {
	  color: white;
	  float: right;
	  font-size: 35px;
	  font-weight: bold;
	  margin-left: 10px;
	}

	.fwclosebtn:hover,
	.fwclosebtn:focus {
	  color: #000;
	  text-decoration: none;
	  cursor: pointer;
	}

	.fwmodal-header {
	  padding-right: 12px;
	  padding-bottom: 40px;
	  background-color: #5CDB95;
	  border-top-left-radius: 15px;
	  border-top-right-radius: 15px;
	}

	.fwmodal-title {
		color: #EDF5E1;
		text-align: center;
	}

	.fwimportcontent {
		overflow: auto;
		height:83%;
		scrollbar-width: auto;
		scrollbar-color: #ffffff #5cdb95;
	}

	.fwimportcontent p {
		margin-left: 20px
	}

	.fwimportcontent button {
		background-color: #5CDB95;
		border: none;
		padding: 14px 25px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 17px;
		font-family: 'Orbitron', sans-serif;
		color: #05386B;
		margin-left: 30px;
	}

	.fwimportcontent button:hover{
		background-color: #8EE4AF;
	}

	.fwimportcontent::-webkit-scrollbar {
		width: 12px;
	}

	.fwimportcontent::-webkit-scrollbar-track {
		background: #5cdb95;
	}

	.fwimportcontent::-webkit-scrollbar-thumb {
		background-color: #ffffff;
		border-radius: 5px;
		border: 3px none #ffffff;
	}

	.fwmodal-body {padding: 0px 0px;border-radius: 15px;height:90%;}
	`;
	document.head.appendChild(headerstyles);
}
async function mdlcxs() {
	if (document.getElementById('fwgfsmdl') !== undefined) {
		return true;
	} else {return false;}
}
if (mdlcxs()) {
	mkmdl();
}
var modal = document.getElementById('fwgfsmdl');
var close = document.getElementsByClassName('fwclosebtn')[0];
var minimize = document.getElementsByClassName('fwclosebtn')[1];

async function openfwgfsmodal() {
	modal.style.display = 'block';
	chmdl('https://raw.githubusercontent.com/pickle69420/fwgfs-box/main/allgames.html','FREE WEB GAMES FOR SCHOOL');
}

close.onclick = function() {
	modal.style.display = 'none';
	var modalcontent = document.getElementsByClassName('fwimportcontent')[0];
	while(modalcontent.firstChild) {
        modalcontent.removeChild(modalcontent.firstChild);
    };
}
minimize.onclick = function() {
	modal.style.display = 'none';
	fwmmdl();
}
async function chmdl(url, title) {
	var modaltitle = document.getElementsByClassName('fwmodal-title')[0];
	var modalcontent = document.getElementsByClassName('fwimportcontent')[0];
	fetch(url)
	.then(response => response.text())
	.then(data => {
		modalcontent.innerHTML = data;
		modaltitle.innerHTML = title;
	});
}
async function getgame(gname, glink) {
	var modalcontent = document.getElementsByClassName('fwimportcontent')[0];
	var modaldivcontent = document.getElementsByClassName('fwmodal-content')[0];
	var modaltitle = document.getElementsByClassName('fwmodal-title')[0];
	while(modalcontent.firstChild) {
        modalcontent.removeChild(modalcontent.firstChild);
    };
	let framewidth = (window.innerWidth/100)*93;
	let frameheight = window.innerHeight-80;
	var fwiframe = document.createElement('iframe');
	modaltitle.remove();
	modalcontent.style.height = '100%';
	fwiframe.width = framewidth;
	fwiframe.height = frameheight;
	fwiframe.id = 'gameframe';
	fwiframe.frameBorder = 0;
	fwiframe.src = glink;
	fwiframe.title = gname;
	modaldivcontent.style.height = '99%';
	modaldivcontent.style.width = '99%';
	modalcontent.appendChild(fwiframe);
}
async function fwmmdl() {
	var box = ce('button');
	box.innerHTML = `+`;
	box.style = 'border: none!important;padding: 12px 16px;position: absolute;right:0;bottom:0;background-color: rgba(0, 0, 0, 0);'
	var modal = document.getElementById('fwgfsmdl');
	box.onclick = function() {
		modal.style.display = 'block';
		this.remove();
	}
	document.body.appendChild(box);
}
openfwgfsmodal();
})();