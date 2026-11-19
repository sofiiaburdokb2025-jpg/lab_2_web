import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentHour = new Date().getHours();

    console.log('Поточна година:', currentHour);

    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  };

  const isDark = theme === 'dark';

  return (
    <div
      className={`min-h-screen font-['Manrope',sans-serif] antialiased transition-colors duration-300 ${
        isDark ? 'bg-[#24212a] text-[#f5eff8]' : 'bg-[#f5f4f6] text-[#35313b]'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">

        <div className="mb-5 flex justify-end">
          <button
            onClick={toggleTheme}
            className={`rounded-xl px-5 py-3 font-semibold shadow-sm transition ${
              isDark
                ? 'bg-[#51445b] text-white hover:bg-[#665572]'
                : 'bg-[#ebe3ef] text-[#82718e] hover:bg-[#dfd3e5]'
            }`}
          >
            {isDark ? '☀️ Денна тема' : '🌙 Нічна тема'}
          </button>
        </div>

        <div
          className={`mb-6 rounded-[32px] p-10 shadow-sm transition-colors duration-300 sm:p-16 ${
            isDark
              ? 'bg-gradient-to-br from-[#403748] via-[#493b4b] to-[#34303f]'
              : 'bg-gradient-to-br from-[#e8e3ef] via-[#f7e9f0] to-[#e5e0ef]'
          }`}
        >
          <Header />
        </div>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <div
            className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isDark
                ? 'border-[#51445b] bg-[#35303d]'
                : 'border-[#ebe7ef] bg-white'
            }`}
          >
            <Education />
          </div>

          <div
            className={`rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              isDark
                ? 'border-[#51445b] bg-[#403748]'
                : 'border-[#e8dfea] bg-[#f1eaf2]'
            }`}
          >
            <Experience />
          </div>

        </main>

        <div
          className={`mt-6 rounded-3xl border p-8 shadow-sm ${
            isDark
              ? 'border-[#51445b] bg-[#35303d]'
              : 'border-[#ebe7ef] bg-white'
          }`}
        >
          <Reviews />
        </div>

        <ContactForm />

        <div
          className={`mt-6 rounded-3xl p-6 ${
            isDark ? 'bg-[#35303d]' : 'bg-[#ebe8ee]'
          }`}
        >
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;