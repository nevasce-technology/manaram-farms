import { ArrowSquareOut } from "@phosphor-icons/react";
import { contactMap } from "../../data/contact-data";

export default function ContactMap() {
  return (
    <section className="contact-map-section" aria-labelledby="contact-map-heading">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 xl:px-14">
        <div className="contact-map-panel">
          <div className="contact-map-panel__header">
            <div>
              <h2 id="contact-map-heading" className="contact-map-panel__title font-display">
                Find us on the map
              </h2>
              <p className="contact-map-panel__lead">Head office in Baluwatar, Kathmandu.</p>
            </div>
            <a
              href={contactMap.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-map-panel__link group"
            >
              <span>Open in Google Maps</span>
              <ArrowSquareOut size={16} weight="bold" aria-hidden="true" />
            </a>
          </div>

          <div className="contact-map-embed">
            <iframe
              loading="lazy"
              src={contactMap.embedSrc}
              title={contactMap.title}
              aria-label={contactMap.title}
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
