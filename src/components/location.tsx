import React from 'react';
import Picture from '@pawjs/srcset/picture';
import GuestLayout from './guest-layout';
import localStyles from './local-styles.scss';

import coverage from '../resources/img/coverage.png?sizes=1200w+1000w+800w+600w+400w&placeholder';

export default () => (
  <GuestLayout>
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">
          📍 Le Lieu
        </p>
        <p className="subtitle">
          Comment s'y rendre ? Qu'y a-t-il aux alentours ?
        </p>
      </div>
    </section>
    <div className="container">
      <section className="section">
        <h1 className="title is-3">
          C'est quoi ? C'est où ?
        </h1>
        <p>
          Le gîte est situé au beau milieu de nulle part, à 20min à pied du 
          lac de Saint Point, à 10min en voiture d'un Carrefour Express 
          et à une petite demi-heure du grand super U de Prissé, en banlieue de Macon !
          Avec ça, déconnexion garantie ! Les voisins les plus proches sont à 400m, plus
          loin sur les collines, séparés par des rangées d'arbres du Bernachon.
        </p>
      </section>
      <div className="columns">
        <div className="column is-2 is-hidden-mobile"></div>
        <div className="column is-8">
          <div className={`${localStyles.mapwrapper}`}>
            <iframe
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.GMAPS_API_KEY}&q=46%C2%B019'52.0%22N%204%C2%B036'04.0%22E&maptype=satellite`}>
            </iframe>
          </div>
        </div>
        <div className="column is-2 is-hidden-mobile"></div>
      </div>
      <section className="section">
        <h1 className="title is-3">
          Rapport de connectivité
        </h1>
        <p>
          Comme on peut le voir sur les super figures ci-après, la couverture réseau
          est pas folle aux alentours de Saint Point... On n'a pas du tout de 4G a 
          priori ! Par contre, on devrait, si l'on en croit les chiffres, pouvoir
          capter la 3G sans problème !
          <br/><br/>
          Petit disclaimer : les chiffres ci-dessous datent de 2015 ! Il se peut 
          que la couverture réseau se ssoit améliorée depuis !
        </p>
      </section>
      <div className="columns">
        <div className="column is-4 is-hidden-mobile"></div>
        <div className="column is-flex is-justify-content-center	">
          <Picture alt="Coverage" image={coverage}/>
        </div>
        <div className="column is-4 is-hidden-mobile"></div>
      </div>
    </div>
  </GuestLayout>
);
