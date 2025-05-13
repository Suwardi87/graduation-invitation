import React from 'react';
import { FaUserGraduate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const GraduationDetails = () => {
  return (
    <section  className="py-20 bg-gradient-to-br from-white to-gray-100" data-aos="fade-up">
      <audio autoPlay loop>
        <source src="/graduation-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12 drop-shadow-md">
          🧑‍🎓 Detail Acara Wisuda
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white bg-opacity-100 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-gray-200">
          {/* Foto Wisuda */}
          <div className="w-full">
            <img
              src="/wisuda-suwardi.jpg" // Ganti path sesuai project kamu
              alt="Graduation"
              className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-gray-200"
            />
          </div>

          {/* Detail */}
          <div className="space-y-6 text-gray-800">
            {/* Nama */}
            <div className="flex items-start space-x-4">
              <FaUserGraduate className="text-3xl mt-1 text-yellow-300 animate-bounce" />
              <div>
                <h4 className="text-lg font-semibold">Nama</h4>
                <p className="opacity-90">Suwardi</p>
              </div>
            </div>

            {/* Tanggal */}
            <div className="flex items-start space-x-4">
              <FaCalendarAlt className="text-3xl mt-1 text-green-300 animate-pulse" />
              <div>
                <h4 className="text-lg font-semibold">Tanggal</h4>
                <p className="opacity-90">20 Mei 2025</p>
              </div>
            </div>

            {/* Lokasi */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl mt-1 text-red-300 animate-ping" />
              <div>
                <h4 className="text-lg font-semibold">Lokasi</h4>
                <p className="opacity-90">Gedung UPI Convention Center</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.811441225225!2d100.3964503!3d-0.9586375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b982fd776c89%3A0xe9646012ac88a82b!2sUPI%20Convention%20Center!5e0!3m2!1sen!2sid!4v1646474510114!5m2!1sen!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen=""
                title="Lokasi Wisuda"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduationDetails;

