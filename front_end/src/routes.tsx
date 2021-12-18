import { Navigate, useRoutes } from 'react-router-dom';

//routes
import Main from './components/Main';

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
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}