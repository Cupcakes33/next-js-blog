export default function Intro() {
  return (
    <section>
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-neutral-700">
        Universe ⭐️
      </h1>
      <h3 className="mb-1 text-neutral-400">{`i'm Junior Front-end Developer.`}</h3>
      <h3 className="mb-3 text-neutral-400">{`Primarily Developing with React and Typescript.`}</h3>
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition text-neutral-400 hover:text-neutral-700"
      >
        More about me &rarr;
      </a>
    </section>
  );
}
