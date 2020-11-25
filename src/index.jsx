import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './index.html';
import fox_flowers from './img/fox.svg';

const App = () => {
  const [color, setColor] = useState(null);
  const [usedColors, setUsedColors] = useState({});

  const drag = (event) => {
    event.dataTransfer.setData('color', event.target.classList[1]);
  };

  const drop = (event) => {
    const newColor = event.dataTransfer.getData('color');
    setUsedColors({ ...usedColors, [newColor]: true });
    setColor(newColor);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const reload = (event) => {
    event.preventDefault();
    location.reload();
  };

  return (
    <>
      <p>
        {!color ? (
          'Úkol: Obarvi pozadí za liškou ZELENĚ (přetáhni jeden z obdélníčků na obrázek).'
        ) : color === 'green' ? (
          'Hurá! Povedlo se ti to 😊'
        ) : (
          <a className="reload" href="#" onClick={reload}>
            Zelenou jsi netrefil/a, klikni tady pro další pokus!
          </a>
        )}
      </p>
      <div className="container">
        <div className="options">
          {!usedColors?.blue && (
            <div className="drag blue" draggable onDragStart={drag}>
              {'{background-color: blue}'}
            </div>
          )}
          {!usedColors?.red && (
            <div className="drag red" draggable onDragStart={drag}>
              {'{background-color: red}'}
            </div>
          )}
          {!usedColors?.green && (
            <div className="drag green" draggable onDragStart={drag}>
              {'{background-color: green}'}
            </div>
          )}
        </div>

        <img
          src={fox_flowers}
          alt="Fox Flowers"
          className={`image ${!!color ? color : ''}`}
          onDrop={drop}
          onDragOver={allowDrop}
        />
      </div>
    </>
  );
};
render(<App />, document.querySelector('#app'));
