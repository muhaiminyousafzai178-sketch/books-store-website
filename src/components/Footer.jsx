import { Mail, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <div className="relative mt-40 p-5">

      {/* Logo Card */}
      <div className="absolute -top-20 left-20 bg-gray-200 
                      w-72 h-60 rounded-3xl 
                      flex items-center justify-center
                      shadow-[0_15px_40px_rgba(0,0,0,0.15)]">
        <h1 className="text-5xl font-bold text-yellow-500">LOGO</h1>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white pt-32 pb-16 px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Empty column for spacing under logo */}
          <div></div>

          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-6">About</h2>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-yellow-500 cursor-pointer">Home</li>
              <li className="hover:text-yellow-500 cursor-pointer">Services</li>
              <li className="hover:text-yellow-500 cursor-pointer">Products</li>
              <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Contact Info</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-500" />
                Info@mrbook.ca
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-500" />
                Mr Book : 236-333-9767
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-yellow-500" />
                Working Hours : 24/7
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-6">Social Links</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-yellow-500 cursor-pointer">
                <Instagram size={16} />
                Instagram
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-500 cursor-pointer">
                <Facebook size={16} />
                Facebook
              </li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;