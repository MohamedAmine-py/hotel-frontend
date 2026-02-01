import { useNavigate } from 'react-router-dom';

export default function RoomCard({ room }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (room.available) {
      navigate(`/reserve?room=${room.id}`);
    }
  };

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group ${
        room.available ? 'cursor-pointer' : 'opacity-75 cursor-not-allowed'
      }`}
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={room.image}
          alt={room.name}
          className={`w-full h-full object-cover ${room.available ? 'group-hover:scale-110' : ''} transition-transform duration-700`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Availability Badge */}
        {!room.available && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold shadow-xl">
            Réservée
          </div>
        )}
        
        {/* Price Badge */}
        <div className={`absolute top-4 right-4 ${room.available ? 'bg-white text-gray-900' : 'bg-gray-500 text-white'} px-4 py-2 rounded-full font-bold shadow-xl`}>
          {room.price} <span className="text-xs">MAD</span>
          <span className="text-xs font-normal">/nuit</span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
          <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
          <span className="font-bold text-gray-900">{room.rating}</span>
          <span className="text-xs text-gray-600">({room.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            {room.type}
          </div>
          {room.available && (
            <span className="text-xs text-green-600 font-semibold flex items-center">
              <span className="w-2 h-2 bg-green-600 rounded-full mr-1"></span>
              Disponible
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {room.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {room.description}
        </p>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-700">
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{room.capacity} Pers.</span>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            <span>{room.size}m²</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className="text-xs text-gray-500">
              +{room.amenities.length - 3} plus
            </span>
          )}
        </div>

        <button 
          disabled={!room.available}
          className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
            room.available 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <span>{room.available ? 'Réserver Maintenant' : 'Non Disponible'}</span>
          {room.available && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}