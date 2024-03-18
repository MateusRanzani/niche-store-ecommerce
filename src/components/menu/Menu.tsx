import { ShoppingCartIcon } from "@/components/icons/ShoppingCartIcon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import Image from "next/image";
import Link from "next/link";

export const Menu = ({categories}) => {
  return (
    <>
      <nav className="w-full border-b border-gray-200 border-gray-200 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between space-x-4 h-[60px]">
            <div className="flex items-center space-x-4">
              <div className="w-2/12">
                <Image
                  src="https://drive.google.com/uc?export=view&id=12Wwgv3YgxE9tsRlCW30Y_uVzbryjqhOs"
                  alt="logo"
                  width={384}
                  height={121}
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-bold hover:bg-inherit text-base ring-inherit">Products</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    {categories.map((category, index) => (
                    <DropdownMenuItem key={index} className="cursor-pointer">
                       {capitalizeFirstLetter(category)}
                      <DropdownMenuShortcut>&gt;</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link className="hidden sm:flex font-semibold text-base" href="#">
              <Button variant="ghost" className="font-bold hover:bg-inherit text-base">Contact</Button>
                
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2">
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
