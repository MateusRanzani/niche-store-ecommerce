import { HomeIcon } from "@/components/icons/HomeIcon";
import { ShoppingCartIcon } from "@/components/icons/ShoppingCartIcon";
import Link from "next/link";

export const Menu = () => {
  return (
    <>
      <nav className="w-full border-b border-gray-200 border-gray-200 bg-white dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between space-x-4 h-[60px]">
            <div className="flex items-center space-x-4">
              <Link className="flex items-center space-x-2" href="#">
                <span className="sr-only">Home</span>
                <HomeIcon className="w-5 h-5" />
                <span className="font-semibold">Home</span>
              </Link>
              <Link className="font-semibold" href="#">
                Products
              </Link>
              <Link className="font-semibold" href="#">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Link className="font-semibold" href="#">
                  Sign in
                </Link>
                <Link className="font-semibold" href="#">
                  Create account
                </Link>
              </div>
              <Link className="flex items-center space-x-2" href="#">
                <ShoppingCartIcon className="w-5 h-5" />
                <span className="font-semibold">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
