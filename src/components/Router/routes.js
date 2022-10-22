import About from '../../Pages/about';
import Home from '../../Pages/home';
import Lodging from '../../Pages/lodging';
import Error from '../../Pages/error';

const routes = [
  {
    path: '',
    element: <Home />,
    title: 'home',
  },
  {
    path: 'about',
    element: <About />,
    title: 'about',
  },
  {
    path: 'lodging/:id',
    element: <Lodging />,
    title: 'lodging/:id',
  },
  {
    path: '*',
    element: <Error />,
    title: 'error404',
  },
];

export default routes;
