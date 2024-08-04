import Header from '@/components/header';
import PackageCard from '@/components/package-card';
import {PaginationImp} from '@/components/pagination';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Sort from '@/components/sort';
import { Separator } from '@/components/ui/separator';
import Filters from '@/components/filters';
import { useState,useEffect } from 'react';
import apiClient from '@/ApiClient';

interface Props {}

function TravelPackages(props: Props) {
    const {} = props
    const [trPackages, setTrPackages] = useState([]);
    const [trPackagesLength, setTrPackagesLength] = useState(0);
    const [currPage, setCurrPage] = useState(1);
    const [packageLimit, setpackageLimit] = useState(5);

    useEffect(() => {
        apiClient.get(`/api/packages`,
             { params: { page: currPage, limit: packageLimit } })
        .then((response) => {
            console.log(response.data);
            setTrPackages(response.data.data);
            setCurrPage(response.data.page);
            setpackageLimit(response.data.limit);
            setTrPackagesLength(Number(response.data.totalPackages)); 
            
        }).catch((error) => {
            console.log(error);
        });
    }, [currPage, packageLimit]);

    console.log(trPackagesLength, packageLimit);
    

    return (
        <>
           <main className="flex h-full w-full">
                <Sidebar active="packages"/>
                <div className="flex flex-col gap-3 w-full ml-16">
                <Header noPackages={trPackagesLength > 0 ? trPackagesLength : 0}/>
                <Filters filterType='destination' trPackages={setTrPackages}/>
                <Search />
                <Sort />
                <div className="p-12 w-full">
                    <Separator />
                </div>
                <div className="flex flex-col gap-4 w-full sm:w-4/6 px-12">
                    {trPackagesLength > 0 ? trPackages.map((trPackage: any) => (
                        <PackageCard key={trPackage.id} trPackage={trPackage} />
                    )) : <p>No packages found</p>}
                </div>
                <div className="flex m-6">
                <PaginationImp
                    trPackagesLength={trPackagesLength}
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                    packageLimit={packageLimit}
                />
                </div>
                </div>
            </main>
        </>
    )
}

export default TravelPackages
