import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { rooms } from '../data/rooms';

export default function Reserve() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const roomId = searchParams.get('room');
  
  // If no room selected, redirect to rooms page
  useEffect(() => {
    if (!roomId) {
      navigate('/rooms');
    }
  }, [roomId, navigate]);

  const selectedRoom = rooms.find(r => r.id === Number(roomId));

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [nights, setNights] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (formData.checkIn && formData.checkOut && selectedRoom) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      setNights(diffDays);
      setTotalPrice(diffDays * selectedRoom.price);
    }
  }, [formData.checkIn, formData.checkOut, selectedRoom]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  if (!selectedRoom) {
    return null;
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-12 rounded-2xl shadow-xl text-center max-w-2xl">
          <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Réservation Confirmée!</h2>
          <p className="text-lg text-gray-600 mb-2">Votre réservation a été créée avec succès.</p>
          <p className="text-gray-500">Un email de confirmation a été envoyé à {formData.email}</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Retour à l'Accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Complétez Votre Réservation
          </h1>
          <p className="text-lg text-gray-600">
            Vous êtes à un pas de votre séjour parfait
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Date d'Arrivée
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Date de Départ
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      min={formData.checkIn || today}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Nombre de Personnes
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                  >
                    {[...Array(selectedRoom.capacity)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1} {i === 0 ? 'Personne' : 'Personnes'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Info */}
                <div className="border-t-2 border-gray-100 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Informations Personnelles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Prénom
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Numéro de Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="+212 6XX XXX XXX"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
                >
                  Confirmer la Réservation
                </button>
              </form>
            </div>
          </div>

        {/* Summary */}
<div className="lg:col-span-1">
  <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-32">
    <h3 className="text-2xl font-bold text-gray-900 mb-6">
      Récapitulatif
    </h3>

    <img
      src={selectedRoom.image}
      alt={selectedRoom.name}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    
    <h4 className="font-bold text-lg text-gray-900 mb-2">
      {selectedRoom.name}
    </h4>
    <p className="text-sm text-gray-600 mb-4">
      {selectedRoom.description}
    </p>

    <div className="space-y-2 mb-4 text-sm border-b border-gray-200 pb-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Type:</span>
        <span className="font-semibold">{selectedRoom.type}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Prix par nuit:</span>
        <span className="font-semibold text-blue-600">{selectedRoom.price} MAD</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Capacité:</span>
        <span className="font-semibold">{selectedRoom.capacity} Personnes</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Superficie:</span>
        <span className="font-semibold">{selectedRoom.size}m²</span>
      </div>
    </div>

    {nights > 0 && (
      <div className="border-t-2 border-gray-100 pt-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">
            {selectedRoom.price} MAD × {nights} {nights === 1 ? 'nuit' : 'nuits'}
          </span>
          <span className="font-semibold">{totalPrice} MAD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Frais de Service</span>
          <span className="font-semibold">50 MAD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Taxes</span>
          <span className="font-semibold">{Math.round(totalPrice * 0.1)} MAD</span>
        </div>
        <div className="border-t-2 border-gray-100 pt-3 flex justify-between">
          <span className="text-lg font-bold">Total</span>
          <span className="text-2xl font-bold text-blue-600">
            {totalPrice + 50 + Math.round(totalPrice * 0.1)} MAD
          </span>
        </div>
      </div>
    )}

    <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
      <p className="text-sm text-blue-900">
        <span className="font-semibold">Annulation Gratuite</span><br />
        Jusqu'à 24h avant l'arrivée
      </p>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}