'use strick';

const DomElement = function() {
  this.selector = '';
  this.height = 100;
  this.width = 100;
  this.bg = 'green';
  this.fontSize = 14;

  this.getBlock = function () {
    if (this.selector[0] == '.') {
      document.body.innerHTML = '<div class="' + this.selector.slice(1) + '">New div</div>';
      document.querySelector('div').style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px';
    } else if (this.selector[0] == '#') {
      document.body.innerHTML = '<p id="' + this.selector.slice(1) + '">New paragraph</p>';
      document.querySelector('p').style.cssText = 'height: ' + this.height + 'px; width: ' + this.width + 'px; background: ' + this.bg + '; font-size: ' + this.fontSize + 'px';
    }
  };
};

const element = new DomElement();

element.selector = '.block';

element.getBlock();
