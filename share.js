const shareButton = document.querySelector('.share-btn');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share')

const title = window.document.title;
const url = window.location.href;

shareButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: '${title}',
            url: '${url}'
        }) .then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
        overlay.classList.add('show-share');
        shareModal.classList.add('show-share');  
    }
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('show-share');
    shareModal.classList.remove('show-share');
})