//get form values
//clear form inputs
//create meme
//add meme to container
//remove meme from container if clicked on

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

        let memeContent = document.createElement('div');
        memeContent.classList.add('meme-content');

        let img = document.createElement('img');
        img.src = url;

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add('text-overlay');
        topTextDiv.innerText = topText;

        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('text-overlay');
        bottomTextDiv.innerText = bottomText;

        meme.appendChild(img);
        meme.appendChild(topTextDiv);
        meme.appendChild(bottomTextDiv);
        meme.appendChild(memeContent);

        container.appendChild(meme);
    });
    container.addEventListener('click', function(evt){
        if(evt.target.classList.contains('meme')){
            evt.target.remove();
        }
    });
});