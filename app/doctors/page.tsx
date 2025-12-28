
'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function DoctorListingContent() {
  const searchParams = useSearchParams();
  const [location, setLocation] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [selectedFilters, setSelectedFilters] = useState({
    gender: '',
    experience: '',
    patientStories: '',
    fees: ''
  });

  useEffect(() => {
    setLocation(searchParams.get('location') || 'Jp Nagar');
    setSpecialization(searchParams.get('specialization') || 'Dermatologist');
  }, [searchParams]);

  const doctors = [
    {
      id: 1,
      name: "Dr. Sheelavathi Natraj",
      clinic: "Sapphire Skin And Aesthetics Clinic",
      specialization: "Dermatologist",
      experience: "21 years",
      fee: "₹800",
      rating: 4.8,
      patientStories: 1506,
      satisfaction: "94%",
      image: "https://readdy.ai/api/search-image?query=professional%20indian%20female%20dermatologist%20doctor%20smiling%2C%20white%20medical%20coat%2C%20stethoscope%2C%20modern%20clinic%20background%2C%20confident%20and%20friendly%20appearance%2C%20medical%20professional%20portrait&width=150&height=150&seq=doc-female-1&orientation=squarish",
      availability: "Available Today",
      location: "JP Nagar, Bangalore",
      isVerified: true,
      practoPartner: "Skin & Hair",
      nextSlot: "Available Today",
      consultationFee: "₹800 Consultation fee at clinic",
      badge: "Practo"
    },
    {
      id: 2,
      name: "Aesthetic Heart Dermatology & Cardiology Clinic",
      clinic: "Jayanagar",
      specialization: "Dermatologist", 
      experience: "11-13 years",
      fee: "₹800",
      rating: 4.9,
      patientStories: 159,
      satisfaction: "97%",
      image: "https://readdy.ai/api/search-image?query=modern%20dermatology%20clinic%20logo%20design%2C%20aesthetic%20heart%20symbol%2C%20professional%20medical%20branding%2C%20clean%20minimalist%20design%2C%20blue%20and%20gold%20colors&width=150&height=150&seq=clinic-logo-1&orientation=squarish",
      availability: "Available Today",
      location: "Jayanagar",
      isVerified: true,
      practoPartner: null,
      nextSlot: "Available Today",
      consultationFee: "₹800 Consultation Fees",
      badge: "AD",
      isClinic: true
    },
    {
      id: 3,
      name: "Dr. Priya Sharma",
      clinic: "Apollo Dermatology Center",
      specialization: "Dermatologist",
      experience: "15 years",
      fee: "₹900",
      rating: 4.7,
      patientStories: 245,
      satisfaction: "92%",
      image: "https://readdy.ai/api/search-image?query=professional%20indian%20female%20dermatologist%20doctor%20in%20white%20coat%20smiling%2C%20stethoscope%20around%20neck%2C%20modern%20clinic%20background%2C%20confident%20and%20friendly%20appearance%2C%20medical%20professional%20portrait&width=150&height=150&seq=doc-female-2&orientation=squarish",
      availability: "Available Tomorrow",
      location: "JP Nagar, Bangalore",
      isVerified: true,
      practoPartner: null,
      nextSlot: "Available Tomorrow",
      consultationFee: "₹900 Consultation fee at clinic"
    },
    {
      id: 4,
      name: "Dr. Rajesh Kumar",
      clinic: "Skin Care Specialists",
      specialization: "Dermatologist",
      experience: "18 years",
      fee: "₹1000",
      rating: 4.6,
      patientStories: 412,
      satisfaction: "91%",
      image: "https://readdy.ai/api/search-image?query=professional%20indian%20male%20dermatologist%20doctor%20with%20stethoscope%2C%20white%20medical%20coat%2C%20glasses%2C%20modern%20hospital%20background%2C%20experienced%20and%20trustworthy%20appearance%2C%20medical%20professional%20portrait&width=150&height=150&seq=doc-male-1&orientation=squarish",
      availability: "Available Today",
      location: "JP Nagar, Bangalore",
      isVerified: true,
      practoPartner: null,
      nextSlot: "Available Today",
      consultationFee: "₹1000 Consultation fee at clinic"
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const locationMatch = !location || doctor.location.includes(location) || location === 'Bangalore';
    const specializationMatch = !specialization || doctor.specialization === specialization;
    return locationMatch && specializationMatch;
  });

  const sortedDoctors = [...filteredDoctors].sort((a, b) => {
    switch(sortBy) {
      case 'patient_stories':
        return b.patientStories - a.patientStories;
      case 'experience':
        return parseInt(b.experience) - parseInt(a.experience);
      case 'fees':
        return parseInt(a.fee.replace('₹', '')) - parseInt(b.fee.replace('₹', ''));
      default:
        return 0;
    }
  });

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
                <Link href="/search" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Find Doctors
                </Link>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Video Consult
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  Surgeries
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium flex items-center">
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded mr-1">NEW</span>
                  For Corporates
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </div>
                <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                  For Providers
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Security & Help
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap">
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center space-x-2 flex-1">
              <i className="ri-map-pin-line text-gray-400"></i>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Jp Nagar"
                className="flex-1 outline-none text-gray-700 font-medium"
              />
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2 flex-1">
              <i className="ri-search-line text-gray-400"></i>
              <input 
                type="text" 
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="Dermatologist"
                className="flex-1 outline-none text-gray-700 font-medium"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Filters Bar */}
        <div className="bg-blue-700 text-white py-3 px-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm">Gender</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Patient Stories</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">Experience</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm">All Filters</span>
                <i className="ri-arrow-down-s-line"></i>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-none outline-none text-white text-sm cursor-pointer"
              >
                <option value="relevance" className="text-gray-800">Relevance</option>
                <option value="patient_stories" className="text-gray-800">Patient Stories</option>
                <option value="experience" className="text-gray-800">Experience</option>
                <option value="fees" className="text-gray-800">Fees</option>
              </select>
              <i className="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="bg-white border-x border-b py-4 px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {sortedDoctors.length} {specialization}s available in {location}, Bangalore
          </h2>
          <div className="flex items-center text-sm text-gray-600">
            <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
            Book appointments with minimum wait-time & verified doctor details
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-0">
          {sortedDoctors.map((doctor, index) => (
            <div key={doctor.id} className={`bg-white border-x ${index === sortedDoctors.length - 1 ? 'border-b rounded-b-lg' : 'border-b'} hover:bg-gray-50 transition-colors duration-200`}>
              <div className="p-6">
                <div className="flex gap-6">
                  {/* Doctor Image */}
                  <div className="flex-shrink-0 relative">
                    {doctor.isClinic ? (
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{doctor.badge}</span>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-20 h-20 rounded-lg object-cover object-top"
                        />
                        {doctor.practoPartner && (
                          <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                            <div className="text-center">
                              <div style={{fontFamily: 'var(--font-pacifico)', fontSize: '10px'}}>practo</div>
                              <div className="text-xs">{doctor.practoPartner}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div className="flex-grow">
                        <div className="mb-2">
                          <h3 className="text-lg font-semibold text-blue-600 hover:text-blue-700 cursor-pointer mb-1">
                            {doctor.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-1">
                            {doctor.specialization}
                          </p>
                          <p className="text-gray-600 text-sm">
                            {doctor.experience} experience overall
                          </p>
                        </div>

                        <div className="flex items-center mb-3 text-sm text-gray-600">
                          <i className="ri-map-pin-line mr-1"></i>
                          <span className="mr-4">{doctor.location}</span>
                          {!doctor.isClinic && (
                            <span>{doctor.clinic} + 1 more</span>
                          )}
                        </div>

                        <div className="text-sm text-gray-800 mb-3">
                          {doctor.consultationFee}
                        </div>

                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded">
                            <i className="ri-thumb-up-line mr-1"></i>
                            <span className="font-medium">{doctor.satisfaction}</span>
                          </div>
                          <div className="text-gray-600">
                            <span className="font-medium text-gray-800">{doctor.patientStories}</span> Patient Stories
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col items-end space-y-3 ml-8">
                        <div className="text-right">
                          <div className="text-green-600 font-medium text-sm mb-1">
                            <i className="ri-calendar-check-line mr-1"></i>
                            {doctor.availability}
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2 w-48">
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-sm w-full">
                            Book Clinic Visit
                            {doctor.id === 1 && <div className="text-xs">No Booking Fee</div>}
                          </button>
                          
                          {doctor.id === 1 && (
                            <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors whitespace-nowrap cursor-pointer text-sm w-full flex items-center justify-center">
                              <i className="ri-phone-line mr-1"></i>
                              Contact Clinic
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <button className="bg-white border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap">
            Show More Doctors
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
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

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Loading doctors...</p>
      </div>
    </div>
  );
}

export default function DoctorsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <DoctorListingContent />
    </Suspense>
  );
}