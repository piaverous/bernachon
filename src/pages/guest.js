import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';
import CSSGlobalLocalImage from '../resources/img/seo/css-global-local.png';
import SkeletonImage from '../resources/img/seo/skeleton-loading.png';

export default [
  {
    path: '/home',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: '🐐 Bernachon',
      description: 'Partageons le fun de la vie de Bernachon, ensemble dans une vieille ferme !',
    },
  },
  {
    path: '/dates',
    exact: true,
    loadData: async () => new Promise((r) => {
      setTimeout(() => {
        fetch(`${process.env.API_URL}/read`)
          .then(res => res.json())
          .then(res => r(res));
      }, 1000);
    }),
    component: () => import('../components/dates'),
    skeleton,
    seo: {
      title: '📆 Dates',
      description: 'Dates du séjour, et liste des persssonnes présentes par date',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/minijeux',
    exact: true,
    component: () => import('../components/typescript-counter'),
    seo: {
      title: 'TypeScript Counter | ReactPWA Demo',
      description: 'TypeScript is awesome and implementing it with React makes it more awesome. Checkout this simple counter example with react and typescript',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/weather',
    exact: true,
    component: () => import('../components/weather'),
    seo: {
      title: '🌤 Météo',
      description: 'La Météo quoi',
      image: CSSGlobalLocalImage,
    },
  },
  {
    path: '/location',
    component: () => import('../components/location'),
    skeleton,
    seo: {
      title: '📍 Le Lieu',
      description: 'Comment s\'y rendre ? Qu\'y a-t-il aux alentours ?',
      image: SkeletonImage,
    },
  },
];
