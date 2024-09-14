document.getElementById('flip-to-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('flip-container').classList.add('flipped');
});

document.getElementById('flip-to-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('flip-container').classList.remove('flipped');
});
