
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SearchPage() {
  const [location, setLocation] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const popularSearches = [
    'Dentist in Bangalore',
    'Gynecologist in Koramangala',
    'Dermatologist in Indiranagar',
    'Pediatrician in JP Nagar',
    'Cardiologist in Electronic City',
    'ENT Specialist in Whitefield'
  ];

  const topSpecialities = [
    { name: 'Dentist', count: '692 doctors', icon: 'ri-teeth-line' },
    { name: 'Gynecologist/Obstetrician', count: '1395 doctors', icon: 'ri-women-line' },
    { name: 'Dermatologist', count: '884 doctors', icon: 'ri-contrast-2-line' },
    { name: 'General Physician', count: '2156 doctors', icon: 'ri-stethoscope-line' },
    { name: 'Pediatrician', count: '567 doctors', icon: 'ri-bear-smile-line' },
    { name: 'Orthopedist', count: '423 doctors', icon: 'ri-wheelchair-line' }
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please enter your search query');
      return;
    }
    
    // Extract specialization from search query
    let specialization = '';
    if (searchQuery.toLowerCase().includes('dentist')) specialization = 'Dentist';
    else if (searchQuery.toLowerCase().includes('dermatologist')) specialization = 'Dermatologist';
    else if (searchQuery.toLowerCase().includes('cardiologist')) specialization = 'Cardiologist';
    else if (searchQuery.toLowerCase().includes('pediatrician')) specialization = 'Pediatrician';
    else if (searchQuery.toLowerCase().includes('gynecologist')) specialization = 'Gynecologist';
    else specialization = 'General Physician';

    const searchParams = new URLSearchParams({
      location: location || 'Bangalore',
      specialization,
      query: searchQuery
    });
    
    window.location.href = `/doctors?${searchParams.toString()}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600" style={{fontFamily: 'var(--font-pacifico)'}}>
                Practo
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/search" className="text-blue-600 font-medium cursor-pointer">
                  Find Doctors
                </Link>
                <Link href="/doctors" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Video Consult
                </Link>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Medicines
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Lab Tests
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What are you looking for?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Find doctors, clinics & hospitals by health concerns, speciality, city or name
          </p>

          {/* Main Search */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-shrink-0 w-full md:w-40">
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 pr-8"
                >
                  <option value="">Select City</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Pune">Pune</option>
                </select>
              </div>
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Search doctors, clinics, hospitals, diseases etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                  <i className="ri-search-line text-gray-400"></i>
                </div>
              </div>
              <button
                onClick={handleSearch}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Popular searches</h4>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search) => (
                <button
                  key={search}
                  onClick={() => {
                    setSearchQuery(search);
                    handleSearch();
                  }}
                  className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Top Specialities */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-2">
            Book an appointment for an in-clinic consultation
          </h3>
          <p className="text-gray-600 mb-10">Find experienced doctors across all specialties</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topSpecialities.map((specialty) => (
              <Link
                key={specialty.name}
                href={`/doctors?specialization=${specialty.name}`}
                className="group cursor-pointer"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-200 group-hover:scale-[1.02]">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <i className={`${specialty.icon} text-2xl text-blue-600`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-1">
                        {specialty.name}
                      </h4>
                      <p className="text-gray-500">{specialty.count}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/doctors" className="text-blue-600 font-medium text-lg hover:text-blue-700 transition-colors cursor-pointer">
              View all specialities
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <i className="ri-shield-check-line text-3xl text-green-600"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Verified Doctors</h4>
              <p className="text-gray-600">All doctors are verified with proper credentials and experience</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <i className="ri-calendar-check-line text-3xl text-blue-600"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Easy Booking</h4>
              <p className="text-gray-600">Book appointments instantly with real-time availability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-video-line text-3xl text-purple-600"></i>
              </div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-3">Video Consults</h4>
              <p className="text-gray-600">Connect with doctors online from the comfort of your home</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4" style={{fontFamily: 'var(--font-pacifico)'}}>Practo</h4>
              <p className="text-gray-400">Your trusted healthcare platform for finding and booking doctors.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Patients</h5>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/search" className="hover:text-white transition-colors cursor-pointer">Find Doctors</Link></li>
                <li><Link href="/doctors" className="hover:text-white transition-colors cursor-pointer">Video Consult</Link></li>
                <li>Medicines</li>
                <li>Lab Tests</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">For Doctors</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Practo Prime</li>
                <li>Practice Management</li>
                <li>For Clinics</li>
                <li>For Hospitals</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">More</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Help</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Practo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
