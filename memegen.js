//get form values
//clear form inputs
//create meme
//add meme to container

document.addEventListener('DOMContentLoaded', function(){
    let newMeme = document.getElementById('meme-form');
    let container = document.getElementById('meme-space');
    newMeme.addEventListener('submit', function(evt){
        evt.preventDefault();

        let url = document.getElementById('url').value;
        let topText = document.getElementById('top-text').value;
        let bottomText = document.getElementById('bottom-text').value;

        document.getElementById('url').value = '';
        document.getElementById('top-text').value = '';
        document.getElementById('bottom-text').value = '';

        let meme = document.createElement('div');
        meme.classList.add('meme');
        let img = document.createElement('img');
        img.src = url;
        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add('top-text');
        topTextDiv.innerText = topText;
        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('bottom-text');
        bottomTextDiv.innerText = bottomText;

        meme.appendChild(img);
        meme.appendChild(topTextDiv);
        meme.appendChild(bottomTextDiv);


    })
});