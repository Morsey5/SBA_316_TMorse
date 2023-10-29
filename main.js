//Displays photos and allows them to be rated

const photo = document.getElementById('photo');
const thumbsUpButton = document.getElementById('thumbsUpButton');
const thumbsDownButton = document.getElementById('thumbsDownButton');

let thumbsUpCount = 0;
let thumbsDownCount = 0;

//The photos

const photoUrls = [
    'W_outdoors.jpeg'
    'IMG_1229.jpeg'
    'IMG_1332.JPG'
    'IMG_1351.jpeg'
    'IMG_1499.jpeg'
    'IMG_1648.jpeg'
    'IMG_1666.jpeg'
    'MB_happy_pup.jpeg'
    'IMG_1672.jpeg'
    'IMG_1678.jpeg'
    'IMG_1836.jpeg'
    'IMG_2008.jpeg'
    'IMG_2184.jpeg'
    'IMG_2199.jpeg'
    'IMG_2200.jpeg'
    'IMG_2379.jpeg'
    'IMG_2560.jpeg'
    'IMG_2700.jpeg'
    'IMG_2706.jpeg'
    'IMG_2725.jpeg'
    'IMG_2731.jpeg'
    'BW_waiting.jpeg'
    'Images/B_puppy_dog_eyes.jpeg'
];

let currentPhotoIndex = 0;

//Switches the photos

function showNextPhoto() {
    photo.style.display = 'block';
    photo.src = photoUrls[currentPhotoIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % photoUrls.length;
}

showPhotoButton.addEventListener('click', showNextPhoto);

//For the rating

thumbsUpButton.addEventListener('click', () => {
    alert('Thumbs Up!');
});

thumbsDownButton.addEventListener('click', () => {
    alert('Thumbs Down!');
});

