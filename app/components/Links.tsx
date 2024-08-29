import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconChartBar,
} from "@tabler/icons-react";
import React from "react";
import { FloatingDock } from "./ui/floating-dock";

function Links() {
  const links = [
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full text-blue-300" />,
      href: "https://www.linkedin.com/in/shashank-bhatnagar-874247216/",
    },
    {
      title: "Leetcode",
      icon: <IconBrandLeetcode className="h-full w-full text-orange-300" />,
      href: "https://leetcode.com/u/Shashank_bhatnagar03/",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/Shanks__03",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Shashankbhatnagar03",
    },

    {
      title: "Codeforces",
      icon: (
        <IconChartBar className="h-15 w-15 text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codeforces.com/profile/Shashank_bhatnagar03",
    },
  ];

  return (
    <div className="flex items-center justify-center w-full my-10 mb-20">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default Links;
