import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../assets/o.png';
import x_icon from '../assets/x.png';

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") return;

    if (count % 2 === 0) {
      data[num] = "x";
      setCount(count + 1);
    } else {
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // satırlar
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // sütunlar
      [0, 4, 8], [2, 4, 6] // çaprazlar
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a]); // Kazananı gönderiyoruz
        return;
      }
    }
  };

  const won = (winner) => {
    setLock(true);
    alert(`Congrats ${winner.toUpperCase()}!`);
  };

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}>
            {data[0] === "x" ? <img src={x_icon} alt="X" /> : data[0] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}>
            {data[1] === "x" ? <img src={x_icon} alt="X" /> : data[1] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}>
            {data[2] === "x" ? <img src={x_icon} alt="X" /> : data[2] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}>
            {data[3] === "x" ? <img src={x_icon} alt="X" /> : data[3] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}>
            {data[4] === "x" ? <img src={x_icon} alt="X" /> : data[4] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}>
            {data[5] === "x" ? <img src={x_icon} alt="X" /> : data[5] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}>
            {data[6] === "x" ? <img src={x_icon} alt="X" /> : data[6] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}>
            {data[7] === "x" ? <img src={x_icon} alt="X" /> : data[7] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}>
            {data[8] === "x" ? <img src={x_icon} alt="X" /> : data[8] === "o" ? <img src={circle_icon} alt="O" /> : null}
          </div>
        </div>
      </div>
      <button className="reset" onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
}

export default TicTacToe;
