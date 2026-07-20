import avisos from '../data/avisos.json';
import { Calendar } from 'lucide-react';

export default function Home() {
  const ultimosAvisos = avisos.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-papal-red text-white pt-20 pb-28 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1548625361-ecb786d7e0fb?w=1600&auto=format&fit=crop&q=60')] bg-cover bg-center z-0"></div>
        {/* Degradado inferior para desvanecer hacia el cuerpo */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-papal-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-white">Bienvenidos a su casa</h1>
          <p className="text-xl md:text-2xl font-light text-papal-gold italic">
            "¡No tengan miedo! ¡Abran las puertas a Cristo!"
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/80">- San Juan Pablo II</p>
        </div>
      </section>

      {/* Avisos Recientes Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-gray-900 mb-2">Avisos Parroquiales</h2>
          <div className="h-1 w-20 bg-papal-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ultimosAvisos.map((aviso) => (
            <div key={aviso.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100 flex flex-col">
              {aviso.imagen_url && (
                <img src={aviso.imagen_url} alt={aviso.titulo} className="w-full h-48 object-cover" />
              )}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-papal-red mb-3 text-sm font-semibold">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(aviso.fecha).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 font-serif">{aviso.titulo}</h3>
                <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">{aviso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
