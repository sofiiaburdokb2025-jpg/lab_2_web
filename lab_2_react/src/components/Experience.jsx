
function Experience() {
  const projects = [
    "Робота з Python та аналізом даних",
    "Налаштування комп'ютерних мереж",
    "Створення та робота з базами даних",
    "Вивчення основ веброзробки"
  ];

  return (
    <section>
      <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[#ad83a7]">
        02 / PROJECTS
      </span>

      <h2 className="mb-6 text-2xl font-bold text-[#39333f]">
        Навчальні проєкти
      </h2>

      <div className="space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 p-4 transition-all duration-300 hover:bg-white hover:shadow-md"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eadfea] text-sm font-bold text-[#a17eaa]">
              {String(index + 1).padStart(2, '0')}
            </span>

            <p className="text-sm font-medium leading-6 text-[#62596a]">
              {project}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
