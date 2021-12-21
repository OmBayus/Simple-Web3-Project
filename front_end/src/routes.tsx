import { Navigate, useRoutes } from 'react-router-dom';

//routes
import Main from './components/Main';
import SetNumber from './components/SetNumber';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Main />,
      children: [
        { path: '', element: <Main/> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    {
      path: '/',
      children: [
        // { path: 'login', element: <Login /> },
        // { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/" /> },
        { path: '/setnumber', element: <SetNumber /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}