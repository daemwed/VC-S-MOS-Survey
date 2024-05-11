let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const deviceSelectionNxtBtn = document.getElementById('deviceSelectionNxtBtn')
const deviceSelectionDropDown = document.getElementById('deviceSelectionDropDown')
const audioSelectionDropDown = document.getElementById('audioSelectionDropDown')
const ageTextField = document.getElementById('age')
const deviceNameTextField = document.getElementById('deviceName')
const audioDeviceNameTextField = document.getElementById('audioDeviceName')

deviceSelectionNxtBtn.addEventListener('click', function() {
    var age = parseInt(ageTextField.value, 10)

    if (deviceSelectionDropDown.value == '') {
        alert("Please select your device");
    }
    else if (audioSelectionDropDown.value == '') {
        alert("Please select your audio device");
    }
    else if (deviceNameTextField.value == '') {
        alert("Please enter the name of your used device.")
    }
    else if(audioDeviceNameTextField.value == '') {
        alert("Please enter the name of your audio device.")
    }
    else if (isNaN(age)) {
        alert("Pleas enter a valid number for your age. Only digits are allowed.");
        ageTextField.value = '';
    }
    else if(age < 0 || age > 99) {
        alert("Please enter a sane age.");
        ageTextField.value = '';
    }
    else {
        nextSlide();
    }
})

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    function generateUniqueID() {
        const date = new Date();
        return date.getTime(); // Generates an ID based on the timestamp
    }

    const surveyIDField = document.getElementById('surveyID');
    surveyIDField.value = generateUniqueID(); // Sets the unique ID in the hidden input
});
