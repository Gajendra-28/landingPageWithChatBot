import { ChevronUp, GithubIcon, Instagram, Linkedin, MailIcon, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900">
        <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full shadow p-2 transition bg-gray-700 text-white hover:bg-gray-600"
              href="#MainContent"
            >
              <span className="sr-only">Back to top</span>
              <ChevronUp />
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center lg:justify-start text-3xl text-blue-300">
                AI Chatbot
              </div>

              <p className="mx-auto mt-4 max-w-md text-center leading-relaxed lg:text-left text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
              <div className="flex gap-2 mt-4">
                <Instagram color="gray" />
                <GithubIcon color="gray" />
                <MailIcon color="gray" />
                <Phone color="gray" />
                <Linkedin color="gray" />
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="#"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="#"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="#"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  className="transition text-white hover:text-white/75"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-center text-sm lg:text-right text-gray-400">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
