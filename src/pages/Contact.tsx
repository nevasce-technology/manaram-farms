import { useRef, useState, type FormEvent } from "react";
import { usePageReveal } from "../hooks/usePageReveal";

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  usePageReveal(root);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main ref={root} className="bg-paper pt-28 pb-24 md:pt-32">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-pine md:text-6xl">
            Write to the farm
          </h1>
          <p className="font-sans mt-5 max-w-[65ch] text-lg leading-[1.65] text-ink/75">
            Orders, visits, and wholesale questions. We read mail after milking.
          </p>
        </div>

        <form onSubmit={onSubmit} className="flex max-w-lg flex-col gap-5 md:col-span-6 md:col-start-7">
          <label className="font-display flex flex-col gap-2 text-sm font-bold tracking-wide text-pine">
            Name
            <input
              required
              name="name"
              autoComplete="name"
              className="font-sans h-12 rounded-2xl border border-pine/15 bg-white px-4 text-base font-normal text-ink"
            />
          </label>
          <label className="font-display flex flex-col gap-2 text-sm font-bold tracking-wide text-pine">
            Email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="font-sans h-12 rounded-2xl border border-pine/15 bg-white px-4 text-base font-normal text-ink"
            />
          </label>
          <label className="font-display flex flex-col gap-2 text-sm font-bold tracking-wide text-pine">
            Message
            <textarea
              required
              name="message"
              rows={5}
              className="font-sans rounded-2xl border border-pine/15 bg-white px-4 py-3 text-base font-normal text-ink"
            />
          </label>
          <button
            type="submit"
            className="font-display h-12 rounded-full bg-steel px-7 text-sm font-extrabold text-white hover:bg-steel-deep active:scale-[0.98]"
          >
            Send message
          </button>
          {sent ? (
            <p className="font-sans text-sm leading-[1.6] text-moss" role="status">
              Saved on this page only. Wire this form to mail when you are ready.
            </p>
          ) : null}
        </form>
      </div>
    </main>
  );
}
