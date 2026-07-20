export default function Galeria() {
  return (
    <div>
      {/* Hero Header */}
      <section className="bg-papal-red text-white pt-12 pb-24 text-center px-4 relative">
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-papal-white to-transparent pointer-events-none z-10"></div>
        <div className="relative z-20 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-white">Galería</h1>
          <p className="text-lg text-papal-gold italic">Momentos memorables de nuestra comunidad.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-30">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-16 text-center">
          <p className="text-gray-500 italic text-lg">Próximamente estaremos agregando fotografías de nuestros eventos parroquiales.</p>
        </div>
      </div>
    </div>
  );
}
