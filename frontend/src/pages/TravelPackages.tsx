import Header from '@/components/header';
import PackageCard from '@/components/package-card';
import { PaginationImp } from '@/components/pagination';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Sort from '@/components/sort';
import { Separator } from '@/components/ui/separator';
import Filters from '@/components/filters';
import { useState,useEffect } from 'react';
import axios from 'axios';

interface Props {}

function TravelPackages(props: Props) {
    const {} = props
    const [trPackages, setTrPackages] = useState([]);
    const [trPackagesLength, setTrPackagesLength] = useState(0);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/packages`)
        .then((response) => {
            console.log(response.data);
            setTrPackages(response.data.data);
            setTrPackagesLength(response.data.totalPackages); 
        }).catch((error) => {
            console.log(error);
        });
    }, []);


    return (
        <>
            <main className="flex h-full w-full">
                <Sidebar active="packages"/>
                <div className="flex flex-col gap-3 w-full ml-16">
                <Header noPackages={trPackagesLength > 0 ? trPackages.length : 0}/>
                <Filters/>

                <Search />
                <Sort />
                <div className="p-12 w-full">
                    <Separator />
                </div>
                <div className="flex flex-col gap-4 w-4/6 px-12">
                    {trPackagesLength > 0 ? trPackages.map((trPackage: any) => (
                        <PackageCard key={trPackage.id} trPackage={trPackage} />
                        
                    )) : <p>No packages found</p>}
                </div>
                <div className="flex m-6"><PaginationImp/></div>
                </div>
            </main>
        </>
    )
}

export default TravelPackages
