document.getElementById("button").addEventListener('click', dogImg);
function dogImg() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('image').src = data.message;
                })
        })
}