import historia from '../data/historia.json';

export default function Historia() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-papal-red text-white pt-12 pb-24 text-center px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-papal-white to-transparent pointer-events-none z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">Nuestra Historia</h1>
          <p className="text-lg text-papal-gold italic">Conoce los orígenes y evolución de nuestra comunidad.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        <div className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-justify bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            {historia.descripcion_corta}
          </p>
        </div>

        <h2 className="text-3xl font-serif text-papal-red mb-8 text-center">Nuestros Párrocos</h2>
        <div className="space-y-6">
          {historia.parrocos.map((parroco, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-papal-gold flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{parroco.nombre}</h3>
                <p className="text-gray-600">{parroco.obra}</p>
              </div>
              <div className="whitespace-nowrap bg-papal-white px-4 py-2 rounded text-papal-red font-semibold text-sm">
                {parroco.periodo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
