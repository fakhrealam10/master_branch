import React from "react";
import {
  Youtube,
  Facebook,
  Twitter,
  Linkedin,
  ArrowUpRight,
  ShieldCheck,
  CreditCard,
  Lock,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center space-y-3">
        <div>FOLLOW US</div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="text-white hover:text-gray-400">
            <Youtube className="h-8 w-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <Facebook className="h-8 w-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <Twitter className="h-8 w-8" />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
        <p className="mb-4">&copy; CANiK - All rights reserved</p>
        <div className="flex justify-center space-x-6">
          <ShieldCheck className="h-8" />
          <CreditCard className="h-8" />
          <Lock className="h-8" />
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <a href="#" className="text-white">
          <ArrowUpRight className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
