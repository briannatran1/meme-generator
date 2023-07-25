//create function that removes meme
//create remove button when hovering over meme
//get form values
//clear form inputs
//create meme
//add meme to container
//remove meme from container if clicked on

document.addEventListener('DOMContentLoaded', function(){
    let newMeme = document.getElementById('meme-form');
    let container = document.getElementById('meme-space');

    function removeMeme(evt){
        evt.target.closest('.meme').remove();
    }

    function removeButton(){
        let closeButton = document.createElement('div');
        closeButton.innerText = 'x';
        closeButton.classList.add('close-button');
        closeButton.addEventListener('click', removeMeme);
        return closeButton;
    }

    newMeme.addEventListener('submit', function(evt){
        evt.preventDefault();

        let url = document.getElementById('url').value;
        let topText = document.getElementById('top-text').value;
        let bottomText = document.getElementById('bottom-text').value;

        document.getElementById('url').value = '';
        document.getElementById('top-text').value = '';
        document.getElementById('bottom-text').value = '';

        let memeDiv = document.createElement('div');
        memeDiv.classList.add('meme');

        let imgDiv = document.createElement('div');
        imgDiv.classList.add('meme-content');

        let closeButton = removeButton();
        memeDiv.appendChild(closeButton);

        let img = document.createElement('img');
        // memeDiv.style.background = 'url(' + url + ')';
        img.src = url;
        imgDiv.appendChild(img);
        memeDiv.appendChild(imgDiv);

        let topTextDiv = document.createElement('div');
        topTextDiv.classList.add('top-text');
        topTextDiv.innerText = topText;
        memeDiv.appendChild(topTextDiv);

        let bottomTextDiv = document.createElement('div');
        bottomTextDiv.classList.add('bottom-text');
        bottomTextDiv.innerText = bottomText;
        memeDiv.appendChild(bottomTextDiv);

        memeDiv.appendChild(imgDiv);
        container.appendChild(memeDiv);
        memeDiv.addEventListener('click', removeMeme);
    });
});