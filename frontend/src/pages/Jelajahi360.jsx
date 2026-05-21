import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function Jelajahi360() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Globe size={28} className="text-green-400" />
          <h1 className="text-3xl font-black text-white">{t('nav.jelajahi')}</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { label: 'Pintu Masuk', embed: 'https://www.google.com/maps/embed?pb=!4v1234567890' },
            { label: 'Kampung Darul Amin', embed: 'https://www.google.com/maps/embed?pb=!4v1234567890' },
          ].map((loc) => (
            <button key={loc.label}
              className="bg-gray-800 text-white px-4 py-3 rounded-lg text-left hover:bg-gray-700 transition border border-gray-600">
              {loc.label}
            </button>
          ))}
        </div>
        <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="w-full h-[70vh] flex items-center justify-center text-gray-400">
            <div className="text-center">
              <Globe size={64} className="mx-auto mb-4 text-green-500" />
              <p className="text-xl font-semibold text-white mb-2">Virtual Tour 360°</p>
              <p className="text-gray-400">Embed Google Street View atau Matterport di sini</p>
              <p className="text-sm text-gray-500 mt-2">Tambahkan URL embed di src/pages/Jelajahi360.jsx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}