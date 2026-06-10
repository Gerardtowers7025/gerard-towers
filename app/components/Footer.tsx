import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Apartments", href: "/apartments" },
    { label: "Amenities", href: "/amenities" },
    { label: "Neighborhood", href: "/neighborhood" },
    { label: "Management", href: "/management" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Logo + Building Info */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo-2.png"
              alt="Gerard Towers"
              width={150}
              height={50}
              className="mb-5 h-auto w-auto"
            />

            <p className="max-w-sm leading-7 text-gray-400">
              A full-service cooperative residence located in the heart of
              Forest Hills, Queens.
            </p>

            <div className="mt-4 leading-7 text-gray-400">
              <p className="font-medium text-white">Gerard Owners Corp.</p>
              <p>7025 Yellowstone Blvd.</p>
              <p>Forest Hills, NY 11375</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:text-center">
            <h3 className="mb-5 text-lg font-semibold">Navigation</h3>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center md:flex-col md:items-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white">Management Office</p>
                <p>
                  <a href="tel:7182637799" className="transition hover:text-white">
                    (718) 263-7799
                  </a>
                </p>
                <p>Fax: (718) 263-6569</p>
              </div>

              <div>
                <p className="font-medium text-white">Email</p>
                <a
                  href="mailto:contact@gerardownerscorp.com"
                  className="wrap-break-word transition hover:text-white"
                >
                  contact@gerardownerscorp.com
                </a>
              </div>

              <Link
                href="/contact"
                className="inline-block rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center gap-3 text-center text-sm text-gray-500 md:flex-row md:justify-between md:text-left">
            <p>
              © {new Date().getFullYear()} Gerard Owners Corp. All rights
              reserved.
            </p>

            <p>Forest Hills, Queens, New York</p>
          </div>
        </div>
      </div>
    </footer>
  );
}