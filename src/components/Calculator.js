import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <div className="screen"> 0</div>
            <div className="btn light-gray">AC</div>
            <div className="btn light-gray">%</div>
            <div className="btn light-gray">+/-</div>
            <div className="btn orange">/</div>
            <div className="btn">7</div>
            <div className="btn">8</div>
            <div className="btn">9</div>
            <div className="btn orange">x</div>
            <div className="btn">4</div>
            <div className="btn">5</div>
            <div className="btn">6</div>
            <div className="btn orange">-</div>
            <div className="btn">1</div>
            <div className="btn">2</div>
            <div className="btn">3</div>
            <div className="btn orange">+</div>
            <div className="btn zero">0</div>
            <div className="btn">.</div>
            <div className="btn orange">=</div>
          </div>
        </div>
      </>
    );
  }
}
export default Calculator;
