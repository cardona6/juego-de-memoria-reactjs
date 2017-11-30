import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="titulo">!! React-Game of momoria !!</div>
          <div>
            <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
              START
            </button>
        </div>
        <div className="titulo">
          Attempts: {this.props.numeroDeIntentos}
        </div>
      </header>
    );
  }
};
