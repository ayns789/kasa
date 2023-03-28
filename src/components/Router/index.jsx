import '../../App.css';
import { BrowserRouter } from 'react-router-dom';
// import Router from './Router.jsx';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import Footer from '../Footer/index.jsx';
import Navbar from '../Navbar/index.jsx';
import { Route, Routes } from 'react-router-dom';
// import routes from './routes.js';
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

// export default routes;

const Router = () => {
  const pageRoutes = routes.map(({ path, title, element }) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

const dataLodgings = [];
export const LodgingContext = createContext(dataLodgings);

const App = () => {
  const [lodgings, setLodgings] = useState([]);
  useEffect(() => {
    fetch('/lodgingData.json')
      .then((res) => res.json())
      .then((data) => setLodgings(data));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <LodgingContext.Provider value={lodgings}>
        <Router />
      </LodgingContext.Provider>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

// export default Router;
