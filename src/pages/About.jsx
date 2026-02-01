export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section with Background Image */}
<section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
      alt="Hotel Grandeur"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
  </div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-6xl font-bold mb-6">À Propos de Grandeur</h1>
    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
      Votre destination de luxe depuis 1995
    </p>
  </div>
</section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Depuis plus de 25 ans, l'Hôtel Grandeur incarne l'excellence dans l'hospitalité de luxe. 
                Fondé en 1995, notre établissement s'est forgé une réputation d'élégance intemporelle et 
                de service exceptionnel.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Situé au cœur de la ville, notre hôtel combine l'architecture classique avec des 
                équipements modernes pour offrir une expérience inoubliable à chaque client.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nous nous engageons à créer des souvenirs durables en offrant un service personnalisé, 
                des hébergements luxueux et une attention méticuleuse aux détails.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80" 
                alt="Hotel Lobby" 
                className="h-64 w-full object-cover rounded-2xl"
              />
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80" 
                alt="Hotel Exterior" 
                className="h-64 w-full object-cover rounded-2xl mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident notre engagement envers l'excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans chaque aspect de notre service, de l'accueil à l'expérience globale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hospitalité</h3>
              <p className="text-gray-600">
                Chaque client est traité comme un membre de notre famille avec chaleur et attention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Intégrité</h3>
              <p className="text-gray-600">
                Nous opérons avec honnêteté, transparence et respect dans toutes nos interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-blue-200">Années d'Excellence</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Chambres Luxueuses</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Clients Satisfaits</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-blue-200">Note Moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels dévoués à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" 
                alt="Sophie Martin" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Sophie Martin</h3>
              <p className="text-blue-600 font-semibold mb-2">Directrice Générale</p>
              <p className="text-gray-600 text-sm">
                25 ans d'expérience dans l'hôtellerie de luxe
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" 
                alt="Pierre Dubois" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Pierre Dubois</h3>
              <p className="text-blue-600 font-semibold mb-2">Chef Concierge</p>
              <p className="text-gray-600 text-sm">
                Expert en service client personnalisé
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80" 
                alt="Marie Laurent" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">Marie Laurent</h3>
              <p className="text-blue-600 font-semibold mb-2">Responsable Spa</p>
              <p className="text-gray-600 text-sm">
                Spécialiste en bien-être et relaxation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}