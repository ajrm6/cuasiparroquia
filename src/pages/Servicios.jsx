import horarios from '../data/horarios.json';
import { Clock } from 'lucide-react';

export default function Servicios() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-papal-red text-white pt-12 pb-24 text-center px-4 relative">
        {/* Degradado inferior */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-papal-white to-transparent pointer-events-none z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">Horarios y Servicios</h1>
          <p className="text-lg text-papal-gold italic">Encuentra los horarios de nuestras celebraciones y atención en notaría.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Misas Dominicales */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-papal-red">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-papal-red" />
              <h2 className="text-2xl font-serif text-gray-900">Misas Dominicales</h2>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="pb-3 text-papal-red font-semibold">Hora</th>
                  <th className="pb-3 text-papal-red font-semibold">Celebración</th>
                </tr>
              </thead>
              <tbody>
                {horarios.misas_dominicales.map((misa, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 text-gray-900 font-medium">{misa.hora}</td>
                    <td className="py-4 text-gray-600">{misa.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Misas Ordinarias */}
          <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-papal-gold">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-papal-gold" />
              <h2 className="text-2xl font-serif text-gray-900">Misas Ordinarias</h2>
            </div>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="pb-3 text-papal-gold font-semibold">Día / Hora</th>
                  <th className="pb-3 text-papal-gold font-semibold">Celebración</th>
                </tr>
              </thead>
              <tbody>
                {horarios.misas_ordinarias.map((misa, idx) => (
                  <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="py-4 text-gray-900 font-medium">{misa.dia} - {misa.hora}</td>
                    <td className="py-4 text-gray-600">{misa.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notaría */}
        <div className="mt-12 bg-papal-red text-white rounded-lg shadow-md p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif mb-4 text-papal-gold">Atención en Notaría Parroquial</h2>
          <p className="text-lg mb-2"><strong>Días:</strong> {horarios.notaria.dias}</p>
          <p className="text-lg mb-2"><strong>Horario:</strong> {horarios.notaria.horario}</p>
          <p className="text-lg mt-4 font-bold">Teléfono: {horarios.notaria.telefono}</p>
        </div>
      </div>
    </div>
  );
}
