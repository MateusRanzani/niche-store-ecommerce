import { HomeIcon } from "@/components/icons/HomeIcon";
import Link from "next/link";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container grid gap-12 px-4 py-12 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Link
            className="flex items-center justify-center lg:justify-normal space-x-2"
            href="#"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="font-semibold">Home</span>
          </Link>

          <div className="flex gap-2 flex justify-center lg:justify-normal">
            <Link className="flex items-center hover:scale-105" href="#">
              <TiSocialFacebookCircular className="text-2xl" />
            </Link>

            <Link className="flex items-center hover:scale-105" href="#">
              <TiSocialInstagramCircular className="text-2xl" />
            </Link>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-center lg:justify-normal w-fit cursor-pointer">
            customer@nichestore.com.br
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 flex justify-center lg:justify-normal">
            © 2023 Niche Store Ecommerce. All rights reserved.
          </p>
        </div>
        <div className="grid gap-4  flex justify-center lg:justify-normal">
          <Link className="font-semibold text-center lg:text-start" href="#">
            Contact Us
          </Link>
          <Link className="font-semibold text-center lg:text-start" href="#">
            Privacy Policy
          </Link>
          <Link className="font-semibold text-center lg:text-start" href="#">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
