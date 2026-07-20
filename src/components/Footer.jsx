import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 relative">
      {/* Degradado de transición desde el fondo blanco hacia el gris oscuro del footer */}
      <div className="absolute -top-24 left-0 w-full h-24 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none"></div>
      
      <div className="bg-gray-900 text-gray-300 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-papal-gold text-xl mb-4">Cuasiparroquia San Juan Pablo II</h3>
            <p className="text-sm leading-relaxed">
              Una comunidad unida en la fe, inspirada por el amor de Dios y guiada por las enseñanzas de San Juan Pablo II.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-white text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-papal-gold" />
                <span>Av. Principal #123, Colonia Centro</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-papal-gold" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-papal-gold" />
                <span>contacto@sanjuanpablo2.org</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-white text-lg mb-4">Horarios de Notaría</h3>
            <p className="text-sm">Martes a Sábado</p>
            <p className="text-sm">10:00 AM - 2:00 PM</p>
            <p className="text-sm">4:00 PM - 7:00 PM</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Cuasiparroquia San Juan Pablo II. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
