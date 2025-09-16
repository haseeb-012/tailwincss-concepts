function Hero() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1 className="max-w-xl bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-center text-6xl leading-tight font-bold tracking-tight text-transparent">
        Unleash the Power of <span className="text-primary">intuitive</span>{" "}
        finance
      </h1>

      <p className="mx-auto mt-10 max-w-3xl text-center text-xl text-neutral-500 selection:bg-white">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        molestias beatae <span className="text-primary">explicabo</span> neque,
        at id impedit iusto illo nemo nostrum soluta asperiores harum fugiat ea
        modi, debitis voluptatibus, quos consectetur alias.
      </p>

      <div className="mt-8 flex w-full max-w-lg justify-center">
        <input
          type="text"
          placeholder="Enter Your Email"
          className="focus:ring-primary mr-5 flex-1 rounded-2xl border border-neutral-500 px-4 text-white transition duration-200 placeholder:text-neutral-600 focus:ring-1 focus:outline-none"
        />
        <button className="relative cursor-pointer rounded-2xl border border-neutral-300 px-4 py-2 text-white hover:border-sky-400">
          <div className="via-primary absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent to-transparent"></div>
          join Waitlist
        </button>
      </div>
    </div>
  );
}

export default Hero;
