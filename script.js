const element1 = document.getElementById('element');
const element2 = document.querySelector('#next_element');

function randomColor(){
	return '#' + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16) + Math.floor(Math.random() * (256)).toString(16);
};

function changeColorElement1(){
	element1.style.background = randomColor();
	element1.style.color = randomColor();
};

function changeColorElement2(){
	element2.style.background = randomColor();
	element2.style.color = randomColor();
};

function addImage(){
	let elem = document.getElementById('Lviv');
	if(!document.getElementById('img')){
		elem.insertAdjacentHTML('afterend','<img id="img" src="Lviv.png" alt="Львів" />');
	}
};

function increaseImage(){
	if(document.getElementById('img')){
		let img = document.getElementById('img');
		let imgHeight = +img.offsetHeight;
		let imgWidth = +img.offsetWidth;
		
		if(imgHeight < 750 && imgWidth < 1300){
			imgHeight += 50;
			imgWidth += 100;
			img.style.width = imgWidth + 'px';
			img.style.height = imgHeight + 'px';
		}		
	}
};

function reduceImage(){
	if(document.getElementById('img')){
		let img = document.getElementById('img');
		let imgHeight = +img.offsetHeight;
		let imgWidth = +img.offsetWidth;
		
		if(imgHeight > 100 && imgWidth > 200){
			imgHeight -= 50;
			imgWidth -= 100;
			img.style.width = imgWidth + 'px';
			img.style.height = imgHeight + 'px';
		}
	}
};

function deleteImage(){
	let elem = document.getElementById('img');
	elem.remove();
};