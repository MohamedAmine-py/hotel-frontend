import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Reserve from './pages/Reserve';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold">Grandeur</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Votre destination de luxe pour des séjours inoubliables.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Liens Rapides</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="/" className="hover:text-blue-400 transition-colors">Accueil</a></li>
                  <li><a href="/rooms" className="hover:text-blue-400 transition-colors">Chambres</a></li>
                  <li><a href="/about" className="hover:text-blue-400 transition-colors">À Propos</a></li>
                  <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>123 Avenue du Luxe</li>
                  <li>Casablanca, 20000</li>
                  <li>contact@grandeur.ma</li>
                  <li>+212 522 123 456</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Suivez-Nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
              <p>&copy; 2026 Hôtel Grandeur. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}