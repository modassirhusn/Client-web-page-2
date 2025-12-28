
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const heroFeatures = [
    "Connect instantly with 24x7 specialists",
    "Video consultations from home",
    "Verified doctors with credentials"
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className={`text-2xl font-bold text-blue-600 transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{fontFamily: 'var(--font-pacifico)'}}>
                Practo
              </h1>
              <nav className={`hidden md:flex space-x-6 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-5 opacity-0'}`}>
                <Link href="/search" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                  Find Doctors
                </Link>
                <Link href="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                  Video Consult
                </Link>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                  Medicines
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                  Lab Tests
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                  Surgeries
                </div>
              </nav>
            </div>
            <div className={`flex items-center space-x-4 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                For Providers
              </div>
              <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium hover:scale-105 transform duration-200">
                Security & Help
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-105 hover:shadow-lg">
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 px-4 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-200 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-purple-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 left-32 w-3 h-3 bg-indigo-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight animate-fade-in-up">
                Skip the travel!
              </h2>
              <h3 className="text-3xl lg:text-4xl font-semibold text-gray-700 mb-8">
                Find Online
                <br />
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">Medical Consultation</span>
              </h3>
              
              {/* Rotating Features */}
              <div className="h-16 mb-10">
                <p className={`text-xl text-gray-600 max-w-lg transition-all duration-500 ${currentSlide === 0 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute'}`}>
                  {heroFeatures[0]}
                </p>
                <p className={`text-xl text-gray-600 max-w-lg transition-all duration-500 ${currentSlide === 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute'}`}>
                  {heroFeatures[1]}
                </p>
                <p className={`text-xl text-gray-600 max-w-lg transition-all duration-500 ${currentSlide === 2 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 absolute'}`}>
                  {heroFeatures[2]}
                </p>
              </div>

              <Link href="/search" className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg cursor-pointer whitespace-nowrap inline-block hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center">
                  Consult Now
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                </span>
              </Link>
            </div>

            {/* Right Image */}
            <div className={`relative transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative animate-float">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20doctor%20consultation%20illustration%2C%20healthcare%20professional%20with%20stethoscope%2C%20clean%20medical%20background%2C%20telemedicine%20concept%2C%20professional%20medical%20consultation%2C%20blue%20and%20white%20color%20scheme%2C%20friendly%20doctor%20character&width=600&height=500&seq=hero-practo&orientation=landscape"
                  alt="Online Medical Consultation"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 px-4 bg-white relative">
        <div className={`container mx-auto max-w-4xl transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-lg border p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center animate-fade-in-up">
              What are you looking for?
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative group">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 pr-8 transition-all duration-200 group-hover:border-blue-300">
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Chennai</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-gray-400 group-hover:text-blue-500 transition-colors duration-200"></i>
                </div>
              </div>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search doctors, clinics, hospitals, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 group-hover:border-blue-300"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-gray-400 group-hover:text-blue-500 transition-colors duration-200"></i>
                </div>
              </div>
              <Link href="/search" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer whitespace-nowrap text-center hover:shadow-lg transform hover:-translate-y-0.5">
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h3 className={`text-3xl font-bold text-gray-800 text-center mb-12 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Book an appointment for an in-clinic consultation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Dentist', icon: 'ri-teeth-line', color: 'blue', count: '692' },
              { name: 'Gynecologist/Obstetrician', icon: 'ri-women-line', color: 'pink', count: '1395' },
              { name: 'Dermatologist', icon: 'ri-contrast-2-line', color: 'orange', count: '884' },
              { name: 'Ear-Nose-Throat (ENT)', icon: 'ri-nose-line', color: 'green', count: '456' },
              { name: 'Homeopath', icon: 'ri-leaf-line', color: 'teal', count: '278' },
              { name: 'Ayurveda', icon: 'ri-plant-line', color: 'emerald', count: '312' }
            ].map((service, index) => (
              <Link key={service.name} href={`/doctors?specialization=${service.name}`} className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: `${index * 100}ms`}}>
                <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center group-hover:-translate-y-2">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-${service.color}-100 rounded-full flex items-center justify-center group-hover:bg-${service.color}-200 transition-all duration-300 group-hover:scale-110`}>
                    <i className={`${service.icon} text-2xl text-${service.color}-600 group-hover:scale-110 transition-transform duration-300`}></i>
                  </div>
                  <h4 className="font-medium text-gray-800 text-sm mb-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">{service.name}</h4>
                  <p className="text-xs text-gray-500">{service.count} doctors</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/doctors" className="text-blue-600 font-medium hover:text-blue-700 transition-all duration-200 cursor-pointer hover:scale-105 transform inline-flex items-center">
              View all specialities 
              <i className="ri-arrow-right-line ml-1 group-hover:translate-x-1 transition-transform duration-200"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className={`p-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold text-blue-600 mb-2 animate-count-up">2m+</div>
              <div className="text-gray-600 text-lg">Happy Patients</div>
            </div>
            <div className={`p-8 transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold text-green-600 mb-2 animate-count-up">27k+</div>
              <div className="text-gray-600 text-lg">Doctors</div>
            </div>
            <div className={`p-8 transform transition-all duration-1000 delay-600 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-5xl font-bold text-purple-600 mb-2 animate-count-up">2k+</div>
              <div className="text-gray-600 text-lg">Hospitals</div>
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`text-white transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-4xl font-bold mb-6 animate-fade-in-up">
                Download the Practo App
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                Access video consultation with India's top doctors on the Practo app. Connect with doctors online, available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all duration-300 flex items-center hover:scale-105 transform">
                  <i className="ri-apple-line text-2xl mr-3"></i>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </div>
                <div className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-all duration-300 flex items-center hover:scale-105 transform">
                  <i className="ri-google-play-line text-2xl mr-3"></i>
                  <div>
                    <div className="text-xs">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-400 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <img
                src="https://readdy.ai/api/search-image?query=mobile%20app%20interface%20mockup%20showing%20medical%20consultation%20app%2C%20clean%20modern%20design%2C%20doctor%20consultation%20screens%2C%20healthcare%20mobile%20application%2C%20professional%20medical%20app%20ui%20design&width=500&height=600&seq=app-mockup&orientation=portrait"
                alt="Practo App"
                className="w-full max-w-md mx-auto h-auto hover:scale-105 transition-transform duration-700 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className={`grid md:grid-cols-5 gap-8 transform transition-all duration-1000 delay-200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div>
              <h4 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-pacifico)'}}>Practo</h4>
              <p className="text-gray-400 text-sm">
                Your trusted healthcare platform for finding doctors, booking appointments, and accessing medical services.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Patients</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/search" className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Search for doctors</Link></li>
                <li><Link href="/doctors" className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Search for clinics</Link></li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Search for hospitals</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Book Diagnostic Tests</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Book Full Body Checkups</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Doctors</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Practo Prime</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Practice Management Software</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">For Clinics</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">For Hospitals</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Grow your practice</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">More</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Help</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Developers</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Privacy Policy</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Terms & Conditions</li>
                <li className="hover:text-white transition-colors cursor-pointer hover:translate-x-1 transform duration-200 inline-block">Healthcare Directory</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Social</h5>
              <div className="flex space-x-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                  <i className="ri-facebook-line text-sm"></i>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                  <i className="ri-twitter-line text-sm"></i>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                  <i className="ri-linkedin-line text-sm"></i>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-110 transform">
                  <i className="ri-youtube-line text-sm"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>Copyright © 2024, Practo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes count-up {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-count-up {
          animation: count-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}