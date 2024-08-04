import { Button } from "./ui/button";
import { StarIcon } from "@radix-ui/react-icons";

interface Props {
    noPackages: number;
}

function Header({ noPackages }: Props) {
    return (
        <header className="w-full px-4 py-6 md:px-12 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                        {noPackages} Packages to Travel
                    </h1>
                    <h3 className="mt-2 text-lg md:text-2xl font-medium text-slate-400">
                        Add Description/ Sub-heading
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
