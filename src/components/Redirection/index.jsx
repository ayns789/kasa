import { Navigate } from 'react-router-dom';
// import Error from '../../Pages/error';

const Redirection = () => {
  return <Navigate replace to='*' />;
  // return <Navigate replace to={<Error />} />;
};

export default Redirection;
