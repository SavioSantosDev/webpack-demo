/**
 * Este será um scritp que irá criar elementos no DOM
 * O index.html servirá como um template
 */

import './base.scss';
import MyImg from './assets/images/myimg.jpg';

class Generator {
    createParagraph(__string) {
      const textNode = document.createTextNode(__string);
      const paragraphElement = document.createElement('P');
      paragraphElement.appendChild(textNode);
      return paragraphElement;
    }

    // Criar a imagem
    createImg(__source, __width, __height) {
        const imgElement = new Image(__width, __height);
        imgElement.src = __source;
        return imgElement;
    }
  
    createDiv(__innerNode) {
      const divElement = document.createElement('DIV');
      if (__innerNode) {
        divElement.appendChild(__innerNode);
      }
      return divElement;
    }
}

const generator = new Generator;
const par = generator.createParagraph('Boo! ƪ(ړײ)ƪ');
const myImg = generator.createImg(MyImg, 250, 400);
const div = generator.createDiv(par);

div.appendChild(myImg);
console.log('This is my image address', MyImg);

document.body.appendChild(div);
