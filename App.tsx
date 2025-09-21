
import React from 'react';
import { WrenchScrewdriverIcon, SparklesIcon, TruckIcon, StarIcon, CheckCircleIcon, WhatsAppIcon, InstagramIcon, PhoneIcon } from './components/icons';

const WHATSAPP_LINK_1 = "https://wa.me/573024688532";
const WHATSAPP_LINK_2 = "https://wa.me/573028611668";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out border border-gray-100">
    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const Header: React.FC = () => (
  <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center space-x-2">
            <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Silla<span className="text-blue-600">Fix</span> Cali</span>
          </a>
        </div>
        <nav className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <a href="#services" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition-colors">Servicios</a>
            <a href="#gallery" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition-colors">Trabajos</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-md font-medium transition-colors">Contacto</a>
          </div>
        </nav>
        <div className="flex items-center">
            <a href={WHATSAPP_LINK_2} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2.5 rounded-full text-md font-semibold hover:bg-green-600 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
                <WhatsAppIcon className="w-5 h-5 mr-2" />
                Agendar Cita
            </a>
        </div>
      </div>
    </div>
  </header>
);

const Hero: React.FC = () => (
  <section className="relative bg-gray-900 text-white">
    <div className="absolute inset-0">
      <img src="https://picsum.photos/1600/1000?random=1" alt="Modern office chairs" className="w-full h-full object-cover opacity-30"/>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
      <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-4 text-shadow">
        ¿Tu Silla de Oficina Necesita una Segunda Vida?
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 text-shadow-sm">
        ¡Nosotros la dejamos como nueva! Servicio <span className="text-blue-400 font-bold">Express</span> de reparación, mantenimiento y tapizado en Cali.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={WHATSAPP_LINK_2} target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105">
          <WhatsAppIcon className="w-6 h-6 mr-3" />
          ¡REPARA HOY MISMO!
        </a>
         <a href="#services" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-105">
          Ver Servicios
        </a>
      </div>
    </div>
  </section>
);


const Services: React.FC = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Nuestros Servicios</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Soluciones Completas Para Tus Sillas
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Desde un simple cambio de rodachines hasta una renovación completa.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          icon={<WrenchScrewdriverIcon className="h-8 w-8" />}
          title="Repuestos Originales"
          description="Brazos, rodachines, pistones de gas, y mecanismos reclinables de alta calidad."
        />
        <ServiceCard
          icon={<SparklesIcon className="h-8 w-8" />}
          title="Mantenimiento y Tapizado"
          description="Renovamos la estética y funcionalidad de tus sillas con tapizados y mantenimiento preventivo."
        />
        <ServiceCard
          icon={<StarIcon className="h-8 w-8" />}
          title="Sillas Ergonómicas"
          description="Asesoría y reparación especializada en sillas ergonómicas para tu máximo confort."
        />
        <ServiceCard
          icon={<TruckIcon className="h-8 w-8" />}
          title="Servicio a Domicilio"
          description="Atención en Cali y envíos de repuestos a nivel nacional. ¡Servicio Express garantizado!"
        />
      </div>
    </div>
  </section>
);

const WhyUs: React.FC = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
                   <img className="absolute inset-0 w-full h-full object-cover" src="https://picsum.photos/800/600?random=2" alt="Técnico reparando una silla de oficina" />
                </div>
                <div className="mt-12 lg:mt-0">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">¿Por Qué Elegirnos?</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Somos expertos apasionados por devolverle la vida y el confort a tu espacio de trabajo.
                    </p>
                    <ul className="mt-8 space-y-6">
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-7 w-7 text-green-500" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 font-bold text-gray-900">Servicio Express</h4>
                                <p className="mt-1 text-base text-gray-500">Atención rápida y eficiente para que no detengas tu productividad. ¡Agenda tu cita previa hoy mismo!</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-7 w-7 text-green-500" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 font-bold text-gray-900">Calidad Garantizada</h4>
                                <p className="mt-1 text-base text-gray-500">Usamos repuestos originales y técnicas profesionales para asegurar una reparación duradera.</p>
                            </div>
                        </li>
                         <li className="flex items-start">
                            <div className="flex-shrink-0">
                                <CheckCircleIcon className="h-7 w-7 text-green-500" />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-lg leading-6 font-bold text-gray-900">Atención Personalizada</h4>
                                <p className="mt-1 text-base text-gray-500">Te asesoramos para encontrar la mejor solución según tus necesidades y presupuesto.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);


const Gallery: React.FC = () => (
  <section id="gallery" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Galería</h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Mira Nuestros Trabajos
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Sillas que hemos transformado. ¡La tuya podría ser la siguiente!
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="group relative overflow-hidden rounded-xl shadow-lg">
            <img src={`https://picsum.photos/500/500?random=${i + 10}`} alt={`Trabajo realizado ${i + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">Antes y Después</p>
            </div>
          </div>
        ))}
      </div>
       <div className="mt-10 text-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-md font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg">
                <InstagramIcon className="w-6 h-6 mr-2" />
                Ver más en Instagram
            </a>
        </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
    <section id="contact" className="bg-blue-700">
        <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">¿Listo para renovar tu silla?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-blue-100">
                Contacta con nosotros. El diagnóstico es rápido y la solución garantizada.
            </p>
            <a href={WHATSAPP_LINK_2} target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-full shadow-sm text-lg font-bold text-blue-600 bg-white hover:bg-blue-50 sm:w-auto transition-transform duration-300 transform hover:scale-105">
                <WhatsAppIcon className="w-6 h-6 mr-3 text-green-500"/>
                Agendar Servicio Express
            </a>
        </div>
    </section>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">Instagram</span><InstagramIcon className="h-7 w-7"/></a>
            <a href={WHATSAPP_LINK_2} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><span className="sr-only">WhatsApp</span><WhatsAppIcon className="h-7 w-7"/></a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">&copy; {new Date().getFullYear()} SillaFix Cali. Todos los derechos reservados.</p>
             <div className="mt-4 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
                <a href={`tel:3024688532`} className="flex items-center hover:text-gray-300"><PhoneIcon className="w-4 h-4 mr-2" /> 302 468 8532</a>
                <span className="hidden sm:inline">|</span>
                <a href={`tel:3028611668`} className="flex items-center hover:text-gray-300"><PhoneIcon className="w-4 h-4 mr-2" /> 302 861 1668</a>
            </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
