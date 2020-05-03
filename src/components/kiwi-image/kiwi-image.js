import Kiwi from '../../../kiwi.jpg';
import './kiwi-image.css';
class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.alt = 'kiwi';
        img.height = 300;
        img.src = Kiwi;
        img.classList.add('kiwi-image');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}
export default KiwiImage;