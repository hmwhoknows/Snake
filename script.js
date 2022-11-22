'use strict';

const container = document.querySelector('.container');

const setAttribute = function (el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

class Obj {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  _createObj() {
    const obj = document.createElement('div');
    /* setAttribute(obj, {
      width: '100px',
      height: '100px',
      backgroundColor: this.color,
      border: '5px solid black',
    }); */
    obj.setAttribute(
      'style',
      'width: 100px; height: 100px, background-color: red;'
    );
    return obj;
  }
  _placeObj() {
    container.appendChild(this._createObj());
  }
}

const obj = new Obj(1, 2, '#FF0000');
obj._placeObj();
