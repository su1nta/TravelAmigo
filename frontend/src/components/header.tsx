import { Button } from "./ui/button";
import { StarIcon } from "@radix-ui/react-icons";
import { HiMenuAlt3 } from "react-icons/hi";

interface Props {
    noPackages: number;
    toggleSidebar: () => void;
}

function Header({ noPackages, toggleSidebar }: Props) {
    return (
        <header className="w-full px-4 py-6 md:px-12 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <div className="flex items-center mb-2 md:mb-0">
                        <Button
                            variant="floating"
                            size="icon"
                            className="mr-2 md:hidden"
                            onClick={toggleSidebar}
                        >
                            <HiMenuAlt3 className="h-6 w-6" />
                        </Button>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                            {noPackages} Packages to Travel
                        </h1>
                    </div>
                    <h3 className="-mt-2 text-lg md:text-2xl -z-10 font-medium text-slate-400">
                        Escape from reality with us
                    </h3>
                </div>
                <div className="mt-6 md:mt-0 flex flex-col md:flex-row gap-4">
                    <Button variant={'outline'} className="w-full md:w-auto">Share</Button>
                    <Button variant={'default'} size={'wide'} className="w-full md:w-auto">
                        <StarIcon className="mr-2"/>
                        Save Search
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;