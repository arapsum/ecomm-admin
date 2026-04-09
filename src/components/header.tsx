"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import SearchCommand from "@/components/search-command";
import { Separator, SidebarTrigger } from "@/components/ui";
import NotificationDropdown, { ToggleTheme } from "./notifications-dropdown";
import ProfileDropdown from "./profile-dropdown";

function Header() {
  const [openSearchCommand, setOpenSearchCommand] = useState(false);

  return (
    <header className="flex sticky top-0 backdrop-blur-xl z-10 h-16 shrink-0 justify-between items-center  transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      {/* Left side */}
      <section className="flex gap-2 items-center px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-vertical:h-4 data-vertical:self-auto"
        />

        {/* Search input  */}
        <button
          type="button"
          onClick={() => setOpenSearchCommand(true)}
          className="relative"
        >
          <SearchIcon className="absolute left-3 top-1/2 text-gray-600 -translate-y-1/2 dark:text-gray-300 size-4" />

          <input
            className="hidden py-1.5 pr-4 pl-10 bg-gray-100 rounded-xl md:block md:w-60 lg:w-80 dark:bg-gray-700"
            placeholder="Search..."
          />

          <div className="hidden right-3 top-1/2 py-0.5 px-1.5 text-xs text-gray-500 bg-white rounded-md shadow-lg -translate-y-1/2 md:inline-flex md:absolute dark:text-gray-400 dark:bg-black">
            ⌘K
          </div>
        </button>

        <SearchCommand
          open={openSearchCommand}
          setOpen={setOpenSearchCommand}
        />
      </section>
      {/* Right Section */}
      <section className="flex gap-4 items-center px-4 md:gap-6">
        <NotificationDropdown />
        <ToggleTheme />

        <Separator orientation="vertical" />

        <ProfileDropdown />
      </section>
    </header>
  );
}

export default Header;
