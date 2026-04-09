import { BookOpenIcon, BoxesIcon, CogIcon, UserIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui";

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

function SearchCommand({ open, setOpen }: Props) {
  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      className="max-w-xs sm:max-w-md md:max-w-lg"
    >
      <Command className="rounded-lg border">
        <CommandInput
          placeholder="Type a command or search..."
          className="py-4"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <BoxesIcon />
              <span>Products</span>
            </CommandItem>
            <CommandItem>
              <BookOpenIcon />
              <span>Orders</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <UserIcon />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CogIcon />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

export default SearchCommand;
