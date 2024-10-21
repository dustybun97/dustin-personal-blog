import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { AtSign } from "lucide-react";
export function Footer() {
  return (
    <>
      <footer className="bg-gray-100 py-4 px-6 flex justify-between items-center font-sans">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <span className="text-gray-600 text-sm font-semibold">
              Get in touch
            </span>
            <Linkedin />
            <Github />
            <AtSign />
          </div>
        </div>
        <div className="text-gray-600 hover:text-gray-800 text-sm font-semibold">
          Home page
        </div>
      </footer>
    </>
  );
}
