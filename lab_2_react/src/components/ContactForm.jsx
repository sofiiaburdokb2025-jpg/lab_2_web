import { useEffect, useState } from "react";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-4 text-2xl text-gray-500 hover:text-gray-800"
          aria-label="Закрити"
        >
          ×
        </button>

        <h2 className="mb-6 text-2xl font-bold text-[#82718e]">
          Зв'язатися зі мною
        </h2>

        <form
          action="https://formspree.io/f/xjyypaja"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            required
            className="rounded-xl border border-[#e8dfea] p-3 outline-none focus:border-[#a48aac]"
          />

          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            required
            className="rounded-xl border border-[#e8dfea] p-3 outline-none focus:border-[#a48aac]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Ваш телефон"
            required
            className="rounded-xl border border-[#e8dfea] p-3 outline-none focus:border-[#a48aac]"
          />

          <textarea
            name="message"
            placeholder="Ваше повідомлення"
            required
            rows="4"
            className="rounded-xl border border-[#e8dfea] p-3 outline-none focus:border-[#a48aac]"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#a48aac] px-5 py-3 font-semibold text-white transition hover:bg-[#8f7498]"
          >
            Надіслати
          </button>
        </form>

      </div>
    </div>
  );
}

export default ContactForm;