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
        <br/>
        <p className="quote">
          ⚠️ Ci-dessous, l'itinéraire le plus pratiquable pour y accéder en voiture.
          Maps propose d'autres itinéraires qui prennent par des chemins de terre pas
          pratiquables du tout !
        </p>
      </section>
      <div className="columns">
        <div className="column is-2 is-hidden-mobile"></div>
        <div className="column is-8">
          <div className={`${localStyles.mapwrapper}`}>
            <iframe 
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m36!1m12!1m3!1d22036.197566568233!2d4.591221420845665!3d46.33912991373021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m21!3e0!4m3!3m2!1d46.343891!2d4.620384!4m3!3m2!1d46.344432!2d4.61254!4m3!3m2!1d46.345935!2d4.6053429999999995!4m3!3m2!1d46.334517!2d4.599646!4m3!3m2!1d46.331209!2d4.600778!5e0!3m2!1sen!2sfr!4v1622468747687!5m2!1sen!2sfr" 
              loading="lazy">
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
          <br /><br />
          Petit disclaimer : les chiffres ci-dessous datent de 2015 ! Il se peut
          que la couverture réseau se ssoit améliorée depuis !
        </p>
      </section>
      <div className="columns">
        <div className="column is-4 is-hidden-mobile"></div>
        <div className="column is-flex is-justify-content-center	">
          <Picture alt="Coverage" image={coverage} />
        </div>
        <div className="column is-4 is-hidden-mobile"></div>
      </div>
    </div>
  </GuestLayout>
);
