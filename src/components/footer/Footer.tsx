import { HomeIcon } from "@/components/icons/HomeIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container grid gap-12 px-4 py-12 md:grid-cols-2 md:px-6 lg:gap-16">
        <div className="flex flex-col gap-4">
          <Link className="flex items-center space-x-2" href="#">
            <HomeIcon className="w-5 h-5" />
            <span className="font-semibold">Home</span>
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 Niche Store Ecommerce. All rights reserved.
          </p>
        </div>
        <div className="grid gap-4">
          <Link className="font-semibold" href="#">
            Contact Us
          </Link>
          <Link className="font-semibold" href="#">
            Privacy Policy
          </Link>
          <Link className="font-semibold" href="#">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
