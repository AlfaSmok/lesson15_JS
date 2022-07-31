'use strick';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = '.block';
  this.height = 100;
  this.width = 100;
  this.bg = 'green';
  this.fontSize = 14;

  this.getBlock = function () {
    if (this.selector[0] == '.') {
      document.body.innerHTML = '<div class="' + this.selector.slice(1) + '">New div</div>';
    } else if (this.selector[0] == '#') {
      document.body.innerHTML = '<p id="' + this.selector.slice(1) + '">New paragraph</p>'; 
    }
    document.querySelector('div, p').style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px';
  };
};

const element = new DomElement();

element.selector = '#best';

element.getBlock();
