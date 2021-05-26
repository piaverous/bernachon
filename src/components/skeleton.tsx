import React from 'react';
import GuestLayout from './guest-layout';

export default () => (
  <GuestLayout>
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">
          📆 Dates
        </p>
        <p className="subtitle">
          Voyez les dates du séjour, et les présences de chacun
        </p>
      </div>
    </section>
  <div className="skeleton-blink">
    <div className="tile is-ancestor">
      <div className="tile is-parent is-vertical is-12">
        <article className="header tile is-child notification is-text" />
      </div>
    </div>
    <div className="container p-r-md p-l-md">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-text" />
              <article className="tile is-child notification is-text" />
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-text" />
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-text" />
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-text" />
        </div>
      </div>
    </div>
    <div className="tile is-ancestor">
      <div className="tile is-parent is-vertical is-12">
        <article className="footer tile is-child notification is-text" />
      </div>
    </div>
  </div>
  </GuestLayout>
);
