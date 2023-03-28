import About from '../../Pages/about.jsx';
import Home from '../../Pages/home.jsx';
import Lodging from '../../Pages/lodging.jsx';
import Error from '../../Pages/error.jsx';

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
