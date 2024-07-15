import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/list-item";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { SignupModal, SigninModal } from "@/components";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  const [signinOpen, setSigninOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const onCloseSignin = () => {
    setSigninOpen(false);
  };
  const onCloseSignup = () => {
    setSignupOpen(false);
  };

  return (
    <nav className=" bg-white md:py-2 py-3 px-5 md:px-10 flex justify-between items-center md:space-x-5 w-full border-b border-gray-300">
      <div className="hidden md:flex items-center space-x-10">
        {/* logo */}
        <Link to="/">
          <Logo />
        </Link>
        {/* logo */}
        {/* menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="py-0 text-sm hover:text-blue-500">
                Hire Freelancer
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!rounded-none">
                <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="py-0 text-sm hover:text-blue-500">
                Find job
              </NavigationMenuTrigger>
              <NavigationMenuContent className="!rounded-none">
                <ul className="grid w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* menu */}
      </div>
      {/* right */}
      <div className="hidden md:flex items-center space-x-8">
        {/* right menu */}
        <ul className="flex items-center space-x-8 text-sm font-[500] text-gray-700">
          <li>
            <Select defaultValue="en">
              <SelectTrigger className="w-[95px] border-none focus:border-none focus:ring-white focus:outline-none">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="kh">Khmer</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </li>
          <li>
            <Link to="#" onClick={() => setSignupOpen(true)}>
              Sign up
            </Link>
            <SignupModal isOpen={signupOpen} onClose={onCloseSignup} />
          </li>
          <li>
            <Link to="#" onClick={() => setSigninOpen(true)}>
              Log in
            </Link>
            <SigninModal isOpen={signinOpen} onClose={onCloseSignin} />
          </li>
        </ul>

        <Link
          to={""}
          className="py-2 px-5 text-white text-center font-[500] text-sm rounded bg-blue-500 hover:bg-blue-400"
        >
          Post a job
        </Link>

        {/* right menu */}
        {/* profile */}

        {/* profile */}
      </div>
      {/* right */}

      {/* mobile view */}
      <div className="md:hidden flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <Logo />
        </Link>
        {/* logo */}
        <Link
          to={""}
          className="w-[50%] py-2 px-5 text-white text-center font-[500] text-sm rounded bg-blue-500 hover:bg-blue-400"
        >
          Post a job
        </Link>
      </div>
      {/* mobile view */}
    </nav>
  );
};

export default Navbar;
