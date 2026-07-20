import avisos from '../data/avisos.json';
import { Calendar } from 'lucide-react';

export default function Avisos() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-papal-red text-white pt-12 pb-24 text-center px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-papal-white to-transparent pointer-events-none z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">Todos los Avisos</h1>
          <p className="text-lg text-papal-gold italic">Mantente al tanto de las actividades de nuestra cuasiparroquia.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {avisos.map((aviso) => (
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
                <p className="text-gray-600 flex-grow">{aviso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
