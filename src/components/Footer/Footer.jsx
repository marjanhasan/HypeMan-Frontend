import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className=" text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 text-center lg:text-left gap-4 p-6 md:p-12 justify-center bg-[#282828]">
        <div>
          <p className="mb-4">
            "HYPE TOWN brings you bold streetwear that speaks to individuality.
            Join THE SELF CLUB and feel the vibe of a community that celebrates
            you. It&apos;s more than fashion. It&apos;s a lifestyle. Stand out
            with HYPE TOWN!"
          </p>
          <address>
            House-03, Road-16, Sector-11, Uttara., Dhaka, Bangladesh
            <br />
            Phone: <a href="tel:01306347131">01306-347131</a>
            <br />
            Email:{" "}
            <a href="mailto:hypetown2024@gmail.com">hypetown2024@gmail.com</a>
          </address>

          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-8 w-8 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 delay-100"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-8 w-8 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 delay-100"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/01306347131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center h-8 w-8 rounded-full bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 delay-100"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="uppercase font-semibold">Utility</h2>
          <ul>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 uppercase font-semibold">
            unlock 15% off your first order
          </h2>
          <p className="mb-2">
            Subscribe to our newsletter and be the first to know about new
            arrivals, exclusive offers, and more!
          </p>
          <div className="mb-2 flex flex-row justify-center lg:justify-start gap-2">
            <input
              className="p-2 bg-white text-black rounded shrink min-w-0"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <button
              className="bg-white text-black py-2 px-1 sm:px-2 text-xs sm:text-base rounded whitespace-nowrap"
              type="submit"
            >
              Subscribe
            </button>
          </div>
          <p>
            By clicking "Subscribe", you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
      <p className="text-center align-middle py-6 mt-[1px] bg-[#282828]">
        <span className="align-middle">©</span> {new Date().getFullYear()}{" "}
        HypeMan. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
