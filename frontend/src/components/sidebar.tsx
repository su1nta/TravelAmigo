import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ModeToggle } from "./modeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PiHouseLine, PiAirplaneTiltDuotone, PiPackage, PiChartLineUp } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils"; // Make sure you have this utility function

interface Props {
    active: string;
    isOpen: boolean; // Add this prop
}

const Sidebar = ({ active, isOpen }: Props) => {
    const [avatarImage, setAvatarImage] = useState("");
    const [isActive, setIsActive] = useState("");

    useEffect(() => {
        fetch("https://api.github.com/users/su1nta").then(
            (response) => response.json()
        ).then((data) => {
            setAvatarImage(data.avatar_url)
        });

        setIsActive(active);
    }, [active]);

    return (
        <>
        <aside className={cn(
            "flex fixed flex-col justify-between items-center p-3 w-16 h-screen z-20 bg-background transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}>
                
                <div className="flex flex-col gap-3 mt-6 items-center">
                    <PiAirplaneTiltDuotone className="text-4xl mb-3"/>
                    <Button variant={isActive == "home" ? 'secondary' : 'ghost'} size="icon" asChild>
                        <Link to={'/'}><PiHouseLine className="text-2xl"/></Link>
                    </Button>
                    <Button variant={isActive == "packages" ? 'secondary' : 'ghost'} size="icon">
                        <Link to={'/travelpackages'}><PiPackage className="text-2xl" /></Link>
                    </Button>
                    <Button variant={isActive == "analytics" ? 'secondary' : 'ghost'} size="icon">
                        <Link to={'/analytics'}><PiChartLineUp className="text-2xl" /></Link>
                    </Button>
                </div>
                <div className="flex flex-col gap-3 mb-3 items-center">
                    <ModeToggle />
                    <Button variant={'ghost'} size="icon"><TbSettings className="text-2xl"/></Button>
                    <Avatar className="rounded-full border-dashed border-slate-900 border-2">
                        <AvatarImage src={avatarImage} />
                        <AvatarFallback>User</AvatarFallback>
                    </Avatar>
                </div>
                
            </aside>
        </>
    )
}

export default Sidebar
