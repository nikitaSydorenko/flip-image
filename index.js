

let imageTarget = null;
const imageClick = (event) => {
    imageTarget = event.target;
}

const images = [].slice.call(document.getElementsByClassName('flipImage'));
images.forEach( image => image.onclick = imageClick);

document.addEventListener('click', () => {

    function flipImage (event) {
        if (!imageTarget) return;

        if (event.keyCode === 40) {
            imageTarget.style.transform =  "rotateX(180deg)"
            imageTarget.style.transition = "all 2s"

        }else if (event.keyCode === 38) {
            imageTarget.style.transform = "rotateX( 0deg)"
            imageTarget.style.transition = "all 2s"

        }else if (event.keyCode === 37) {
            imageTarget.style.transform = "rotateY( 0deg)"
            imageTarget.style.transition = "all 2s"
        }else if (event.keyCode === 39) {

            imageTarget.style.transform = "rotateY( 180deg)"
            imageTarget.style.transition = "all 2s"
        }
    }

    document.addEventListener('keydown', flipImage)

})
document.removeEventListener('keydown', imageClick)