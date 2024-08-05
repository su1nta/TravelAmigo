import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { LuConstruction } from "react-icons/lu";
import { Link } from 'react-router-dom';

interface Props {}

const Construction = (props: Props) => {
    const {} = props
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <main className="h-full w-full">
                <Sidebar active="analytics" isOpen={isSidebarOpen}/>
                <div className="flex flex-col h-full items-center justify-center gap-3 ml-0 sm:ml-16">
                <div className="text-9xl mt-28"><LuConstruction /></div>
                <h1 className="text-4xl">Construction going on</h1>
                <h3 className="text-lg">before dust and dirt goes into your eye...</h3>
                <div className="mt-4">
                    <Button variant={'outline'} asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
                <Button
                    variant="floating"
                    size="icon"
                    className="mr-2 md:hidden"
                    onClick={toggleSidebar}
                >
                    <HiMenuAlt3 className="h-6 w-6" />
                </Button>
            </div>
            </main>
        </>
    )
}

export default Construction
