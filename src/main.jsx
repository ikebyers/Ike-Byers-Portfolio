import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';

import App from './App.jsx';
import AboutMe from './pages/aboutMe.jsx';
import Contact from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';
import Resume from './pages/resume.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <AboutMe />},
      { path: '/contact', element: <Contact />},
      { path: '/portfolio', element: <Portfolio />},
      { path: '/resume', element: <Resume />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
