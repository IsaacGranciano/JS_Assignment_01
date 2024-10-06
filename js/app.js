
const imageGrid = document.querySelector('.image-grid');
const storyInput = document.querySelector('#story-input');
const createStoryButton = document.querySelector('#create-story');
const storyOutput = document.querySelector('.story-output');

const images = [

    { src: 'img/Mom.jpg'},
    { src: 'img/eat.jpg'},
    { src: 'img/apple.jpg'},
	{ src: 'img/at home.jpg'},
	{ src: 'img/Dad.jpg'},
	{ src: 'img/cut.jpg'},
	{ src: 'img/orange.jpg'},
	{ src: 'img/at restaurant.jpg'},
	{ src: 'img/Me.jpg'},
	{ src: 'img/wash.jpg'},
	{ src: 'img/banana.jpg'},
	{ src: 'img/at park.jpg'}

];


images.forEach((image) => {
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.src;
    img.addEventListener('click', () => {

        storyInput.value += ` ${image.src} `;
    });
    imageGrid.appendChild(img);
});


createStoryButton.addEventListener('click', () => {
    const storyText = storyInput.value;
    const storyImages = storyText.match(/\b(image\d+)\b/g);
    const storyAudio = [];

    storyOutput.innerHTML = '';
    storyImages.forEach((image) => {
        const img = document.createElement('img');
        img.src = image + '.jpg';
        img.alt = image;
        storyOutput.appendChild(img);
    });

    storyImages.forEach((image) => {
        const audio = new Audio(`sounds/${image}.mp3`);
        audio.play();
        storyAudio.push(audio);
    });

    console.log('Story saved!');
});

