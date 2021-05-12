import React from 'react';

import GuestLayout from './guest-layout';
import Picture from '@pawjs/srcset/picture';
import { Link } from 'react-router-dom';
import localStyles from './local-styles.scss';

// eslint-disable-next-line
import CuteGoatSrcset from '../resources/img/cute-goat.jpeg?sizes=1200w+1000w+800w+600w+400w&placeholder';

type ColumnProps = {
  title: string
  link: string
  description?: string
}

const Column = (props: ColumnProps) => {
  const { title, description, link } = props;
  return (
    <div className="column">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <Link to={link}>{title}</Link>
          </p>
        </header>
        {description && description.length > 0 ?
          <div className="card-content">
            <div className="content">
              {description}
            </div>
          </div>
        : null}
      </div>
    </div>
  );
};

export default () => (
  <GuestLayout>
    <section className={`${localStyles.banner} hero is-medium is-info is-bold`}>
      <Picture alt="Cute Goat" image={CuteGoatSrcset}/>
    </section>

    <section className="m-t-lg">
      <div className="container p-l-md p-r-md">
        <h4 className="title is-4">
        Venez vous ressourcer au gîte <i>le Fournil du Bernachon</i>, véritable havre de paix en pleine campagne bourguignonne 🐐
        </h4>
        <p>
        Vous bénéficierez de belles vues dégagées sur les monts alentours ⛰ et profiterez de nos sentiers pour découvrir notre belle région, à 🦶🏼, à 🐴, à 🚲...
        Ni chambre d'hôte, ni gîte d'étape, mais un gîte indépendant en gestion libre.
        À la fois isolé et à proximité de tout, vous pourrez visiter le château de Lamartine et son tombeau, la ville de Cluny et son abbaye, et aussi nager, faire du pédalo ou pêcher la carpe dans le lac de St Point. 
        </p>
        <hr/>
        <div className="columns">
          <Column
            title="📆 Dates"
            link="/dates"
            description="Checke les dates du séjour et choisis les tiennes !"
          />
          <Column
            title="🏡 Le Lieu"
            link="/location"
            description="Pour en apprendre plus sur le lieu, comment s'y rendre, ce qu'il y a autour..."
          />
          <Column
            title="🕹 Minijeux"
            link="/minijeux"
            description="Quelques minijeux dans le thème du séjour, ça fait toujours plaisir"
          />
        </div>
      </div>
    </section>
  </GuestLayout>
);
