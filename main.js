//Displays photos and allows them to be rated

const photoContainer = document.getElementById('photoContainer');
const photo = document.getElementById('photo');
const thumbsUpButton = document.getElementById('thumbsUpButton');
const thumbsDownButton = document.getElementById('thumbsDownButton');

let thumbsUpCount = 0;
let thumbsDownCount = 0;

//The photos
//it was not working because I needed to seperate them with a coma


//This needs to completely match the img link in HTML to work
const photoUrls = [
    'Images/B_puppy_dog_eyes.jpeg',
    'Images/BW_waiting.jpeg',
    'Images/IMG_1229.jpeg',
    'Images/IMG_1332.JPG',
    'Images/IMG_1351.jpeg',
    'Images/IMG_1499.jpeg',
    'Images/IMG_1648.jpeg',
    'Images/IMG_1666.jpeg',
    'Images/IMG_1672.jpeg',
    'Images/IMG_1678.jpeg',
    'Images/IMG_1836.jpeg',
    'Images/IMG_2008.jpeg',
    'Images/IMG_2184.jpeg',
    'Images/IMG_2200.jpeg',
    'Images/IMG_2379.jpeg',
    'Images/IMG_2560.jpeg',
    'Images/IMG_2700.jpeg',
    'Images/IMG_2706.jpeg'
];

let currentPhotoIndex = 0;

//Switches the photos

function showNextPhoto() {
   // photo.style.display = 'block';
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

//for the comment form

const commentForm = document.getElementById("commentForm");
const commentsContainer = document.getElementById("comments");

commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const commentText = document.getElementById("comment").value;

    const commentElement = document.createElement("div");
    commentElement.className = "comment";
    commentElement.innerHTML = `${commentText}`;

    commentsContainer.appendChild(commentElement);

    document.getElementById("comment").value = "";
});
