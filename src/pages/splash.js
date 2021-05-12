import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: '🐐 Bernachon',
      description: 'Partageons le fun de la vie de Bernachon, ensemble dans une vieille ferme !',
      image: SplashImage,
    },
  },
];
