import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t py-8 px-10">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-lg text-white/80 font-semibold mb-4">Connect</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/blogs"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg text-white/80 font-semibold mb-4">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Learning Materials
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg text-white/80 font-semibold mb-4">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © 2025 IT Club Bugema Main Campus. All rights reserved..
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
