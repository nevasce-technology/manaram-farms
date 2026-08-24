import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden">
        <img
          src="/hero.jpg"
          alt="Cows grazing across a sunlit valley at Manaram Farms"
          className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink/55 via-ink/10 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-24 md:px-10 md:pb-20">
          <motion.div
            className="max-w-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-4xl leading-[1.05] font-extrabold tracking-tight text-white md:text-6xl">
              Milk from this valley.
            </h1>
            <p className="font-sans mt-4 max-w-[38ch] text-base leading-[1.65] text-white/90 md:text-lg">
              Manaram Farms raises dairy on open pasture. What you drink started on this grass.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="font-display inline-flex h-12 items-center rounded-full bg-steel px-7 text-sm font-extrabold tracking-wide text-white transition-transform hover:bg-steel-deep active:scale-[0.98]"
              >
                See products
              </Link>
              <Link
                to="/about"
                className="font-display inline-flex h-12 items-center rounded-full border border-white/40 bg-white/15 px-7 text-sm font-extrabold tracking-wide text-white backdrop-blur-md transition-colors hover:bg-white/25"
              >
                Our story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
          <h2 className="font-display text-3xl leading-tight font-extrabold tracking-tight text-pine md:col-span-5 md:text-5xl">
            A working farm, not a mood board.
          </h2>
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-sans max-w-[65ch] text-lg leading-[1.65] text-ink/80">
              We milk, bottle, and cook from the same land. Visit for the view. Stay for yogurt
              that still tastes like morning.
            </p>
            <Link
              to="/about"
              className="font-display mt-8 inline-flex text-sm font-extrabold tracking-wide text-steel hover:text-steel-deep"
            >
              Read about the farm
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <h2 className="font-display max-w-lg text-3xl font-extrabold tracking-tight text-pine md:text-4xl">
            What leaves the dairy this week
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[1.35rem] bg-pine/10 md:grid-cols-4">
            {[
              { name: "Whole milk", note: "Glass bottles, same-day chill" },
              { name: "Set yogurt", note: "Slow cultured, mild tang" },
              { name: "Cultured ghee", note: "Clarified in small pans" },
              { name: "Fresh paneer", note: "Pressed in the morning" },
            ].map((item) => (
              <Link
                key={item.name}
                to="/products"
                className="bg-paper px-6 py-10 transition-colors hover:bg-white"
              >
                <p className="font-display text-xl font-extrabold text-pine">{item.name}</p>
                <p className="font-sans mt-2 text-sm leading-[1.6] text-ink/70">{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
