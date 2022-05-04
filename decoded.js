var ce = function(e) {return document.createElement(e);};
async function mkmdl() {
	var modalbox = ce('div');
	modalbox.id = 'fwgfsmdl';
	await fetch('https://raw.githubusercontent.com/pickle69420/fwgfs-box/main/structure.html')
	.then((response) => response.text())
	.then((data) => {
		modalbox.innerHTML = data;
	});
	document.body.appendChild(modalbox);
	var headerstyles = ce('style');
	await fetch('https://raw.githubusercontent.com/pickle69420/fwgfs-box/main/fwmain.css')
	.then((response) => response.text())
	.then((data) => {
		headerstyles.innerHTML = data;
	});
	document.head.appendChild(headerstyles);
		document.getElementsByClassName("fwclosebtn")[0].onclick = function() {
	document.getElementById('fwgfsmdl').remove();
	};
	document.getElementsByClassName("fwclosebtn")[1].onclick = function() {
		document.getElementById('fwgfsmdl').style.display = 'none';
		fwmmdl();
	};
	var modal = document.getElementById('fwgfsmdl');
	modal.style.display = 'block';
	chmdl('https://raw.githubusercontent.com/pickle69420/fwgfs-box/main/allgames.html','FREE WEB GAMES FOR SCHOOL');
}
function mdlcxs() {
	if (document.getElementById('fwgfsmdl') !== undefined) {
		return true;
	} else {return false;}
}
function chmdl(url, title) {
	var modaltitle = document.getElementsByClassName('fwmodal-title')[0];
	var modalcontent = document.getElementsByClassName('fwimportcontent')[0];
}
function fwmmdl() {
	var box = ce('button');
	box.innerHTML = `+`;
	box.style = 'border: none!important;padding: 12px 16px;position: fixed;right:0;bottom:0;background-color: rgba(0, 0, 0, 0);z-index: 9999;';
	var modal = document.getElementById('fwgfsmdl');
	box.onclick = function() {
		modal.style.display = 'block';
		this.remove();
	};
	document.body.appendChild(box);
}
if (mdlcxs()) {
	mkmdl();
}
function getgame(gname, glink) {
	var modalcontent = document.getElementsByClassName('fwimportcontent')[0];
	var modaldivcontent = document.getElementsByClassName('fwmodal-content')[0];
	var modaltitle = document.getElementsByClassName('fwmodal-title')[0];
	while(modalcontent.firstChild) {
        modalcontent.removeChild(modalcontent.firstChild);
    }
	let framewidth = (window.innerWidth/100)*93;
	let frameheight = window.innerHeight-80;
	var fwiframe = document.createElement('iframe');
	modaltitle.remove();
	modalcontent.style.height = '100%';
	modalcontent.style.width = '100%';
	fwiframe.width = framewidth;
	fwiframe.height = frameheight;
	fwiframe.id = 'gameframe';
	fwiframe.frameBorder = 0;
	fwiframe.src = glink;
	fwiframe.title = gname;
	modaldivcontent.style.height = '99.95%';
	modaldivcontent.style.width = '100%';
	modalcontent.appendChild(fwiframe);
}
