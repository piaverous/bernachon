import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
            Bernachon !
        </h1>
        <h2 className="subtitle">
            Du 🎉, des 🍻 et des 🐐
        </h2>
        <Link to="/home" className="button">Allez, clique pour voir 😏</Link>
      </div>
    </div>
  </section>
);
