import { Outlet } from 'react-router-dom';
// import React, { useEffect } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Nav from './components/nav.jsx';
import './App.css';
// import './custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
    <div className="app-container">
      <Header />

      <Nav />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;