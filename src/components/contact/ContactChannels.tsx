import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";
import { contactDirect, contactOffices } from "../../data/contact-data";

export default function ContactChannels() {
  return (
    <div className="contact-aside">
      <div className="contact-direct-band">
        <p className="contact-direct-band__lead">Need a fast answer? Call or email us directly.</p>
        <div className="contact-direct-band__actions">
          <a href={contactDirect.phoneHref} className="contact-direct-band__action group">
            <span className="contact-direct-band__icon" aria-hidden="true">
              <Phone size={20} weight="bold" />
            </span>
            <span className="min-w-0">
              <span className="contact-direct-band__label">Phone</span>
              <span className="contact-direct-band__value">{contactDirect.phone}</span>
            </span>
          </a>
          <a href={contactDirect.emailHref} className="contact-direct-band__action group">
            <span className="contact-direct-band__icon" aria-hidden="true">
              <EnvelopeSimple size={20} weight="bold" />
            </span>
            <span className="min-w-0">
              <span className="contact-direct-band__label">Email</span>
              <span className="contact-direct-band__value">{contactDirect.email}</span>
            </span>
          </a>
        </div>
      </div>

      <section className="contact-locations" aria-labelledby="contact-locations-heading">
        <h2 id="contact-locations-heading" className="contact-locations__heading font-display">
          Where we are
        </h2>
        <ul className="contact-locations__list">
          {contactOffices.map((office) => (
            <li key={office.id} className="contact-location-row">
              <span className="contact-location-row__marker" aria-hidden="true">
                <MapPin size={18} weight="bold" />
              </span>
              <div>
                <h3 className="contact-location-row__title">{office.title}</h3>
                <address className="contact-location-row__address not-italic">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
