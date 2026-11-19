
function Header() {
  return (
    <header className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
      <div>
        <span className="mb-6 inline-block rounded-full bg-white/60 px-4 py-2 text-xs font-semibold tracking-widest text-[#967aab]">
          PERSONAL PORTFOLIO
        </span>

        <p className="mb-3 text-sm font-medium text-[#927f9f]">
          Hello, I'm
        </p>

        <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-[#39333f] sm:text-6xl">
          Софія
          <span className="block text-[#a789bc]">
            Бурдьо
          </span>
        </h1>

        <p className="max-w-md text-base leading-8 text-[#716879]">
          Студентка спеціальності «Кібербезпека»
          Національного університету
          «Львівська політехніка».
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-white/70 px-4 py-2 text-sm text-[#765e85]">
            Cybersecurity
          </span>
          <span className="rounded-full bg-[#e5d7eb] px-4 py-2 text-sm text-[#765e85]">
            Web Development
          </span>
        </div>
      </div>

      <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-[32px] bg-white/50 shadow-sm">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#e6bfd5] to-[#ad9bd0] text-4xl font-bold text-white">
          SB
        </div>
      </div>
    </header>
  );
}

export default Header;
