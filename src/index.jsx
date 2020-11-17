import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import './index.html';
import './style.css';
import fox_image from './img/fox.svg';

const DragDrop = () => {
  const [color, setColor] = useState('white');
  const handleColorClick = (event) => {
    setColor(event.target.id);
  };
  return (
    <div className="fox" id="fox">
      <p id="hura">
        Úkol: Obarvi pozadí za liškou ZELENĚ - přetáhni jeden z obdélníčků na
        obrázek.
      </p>
      <div className="container">
        <div className="options">
          <button
            className="drag-blue"
            id="blue"
            onClick={handleColorClick}
            draggable="true"
            /*         onDragStart="drag(event)" */
          >
            background-color: blue
          </button>
          <button
            className="drag-red"
            id="red"
            onClick={handleColorClick}
            draggable="true"
            /*   onDragStart="drag(event)" */
          >
            background-color: red
          </button>
          <button
            className="drag-green"
            id="green"
            onClick={handleColorClick}
            draggable="true"
            /*  onDragStart="drag(event)" */
          >
            background-color: green
          </button>
        </div>

        <img
          src={fox_image}
          alt="liška"
          className="fox__image"
          id="div2"
          style={{ backgroundColor: `${color}` }}
        />
      </div>
    </div>
  );
};

render(<DragDrop />, document.querySelector('#app'));
