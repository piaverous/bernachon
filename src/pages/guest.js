import fetch from 'universal-fetch';
import skeleton from '../components/skeleton';
import FeaturesImage from '../resources/img/seo/features.png';
import CSSGlobalLocalImage from '../resources/img/seo/css-global-local.png';
import SkeletonImage from '../resources/img/seo/skeleton-loading.png';
import ImageOptimizationImage from '../resources/img/seo/image-optimization.png';

export default [
  {
    path: '/home',
    exact: true,
    component: () => import('../components/home'),
    seo: {
      title: '🐐 Bernachon',
      description: 'Partageons le fun de la vie de Bernachon, ensemble dans une vieille ferme !',
      // image: FeaturesImage,
    },
  },
  {
    path: '/dates',
    exact: true,
    component: () => import('../components/dates'),
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
    // exact: true,
    // loadData: async () => new Promise((r) => {
    //   setTimeout(() => {
    //     fetch('https://www.atyantik.com/wp-json/wp/v2/posts/?per_page=4&_fields[]=title&_fields[]=excerpt&_fields[]=jetpack_featured_media_url')
    //       .then(res => res.json())
    //       .then(res => r(res));
    //   }, 1000);
    // }),
    component: () => import('../components/location'),
    skeleton,
    seo: {
      title: '📍 Le Lieu',
      description: 'Comment s\'y rendre ? Qu\'y a-t-il aux alentours ?',
      image: SkeletonImage,
    },
  },
  {
    path: '/image-optimization',
    exact: true,
    component: () => import('../components/location'),
    seo: {
      title: 'Image Optimization | ReactPWA Demo',
      description: 'Serve optimize images automatically with Lazy loading and WebP support with fallback to JPG/PNG of original image.',
      image: ImageOptimizationImage,
    },
  },
  {
    path: '/contribute',
    exact: true,
    component: () => import('../components/contribute'),
    seo: {
      title: 'Contribute | ReactPWA Demo',
      description: 'Be a part of larger family. Get involved with us and support our project ReactPWA',
    },
  },
];
