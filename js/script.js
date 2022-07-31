'use strick';

const DomElement = function(selector, height = 100, width = 100, bg = 'red', fontSize = 20) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.getBlock = function () {
    if (this.selector[0] == '.') {
      document.body.insertAdjacentHTML('afterbegin', `<div class="${this.selector.slice(1)}">New div</div>`);
    } else if (this.selector[0] == '#') {
      document.body.insertAdjacentHTML('afterbegin', `<p id="${this.selector.slice(1)}">New paragraph</p>`);
    }
    document.querySelector('div, p').style.cssText = `height: ${this.height}px; width: ${this.width}px; background: ${this.bg}; fontSize: ${this.fontSize}px;`;
  };
};

const element = new DomElement('.block');
const element1 = new DomElement('#block');

element.getBlock();
element1.getBlock();

