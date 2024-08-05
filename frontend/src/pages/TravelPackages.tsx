import Header from '@/components/header';
import PackageCard from '@/components/package-card';
import { PaginationImp } from '@/components/pagination';
import Search from '@/components/search';
import Sidebar from '@/components/sidebar';
import Sort from '@/components/sort';
import { Separator } from '@/components/ui/separator';
import Filters from '@/components/filters';
import { useState, useEffect } from 'react';
import apiClient from '@/ApiClient';

const TravelPackages = () => {
  const [trPackages, setTrPackages] = useState<any[]>([]);
  const [trPackagesLength, setTrPackagesLength] = useState(0);
  const [currPage, setCurrPage] = useState(1);
  const [packageLimit, setPackageLimit] = useState(5);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    apiClient
      .get(`/api/packages`, { params: { page: currPage, limit: packageLimit } })
      .then((response) => {
        console.log("API Response:", response.data);
        setTrPackages([...response.data.data]); // Ensure immutability
        setCurrPage(response.data.page);
        setPackageLimit(response.data.limit);
        setTrPackagesLength(Number(response.data.totalPackages));
      })
      .catch((error) => {
        console.log("API Error:", error);
      });
  }, [currPage, packageLimit]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="flex h-full w-full">
        <Sidebar active="packages" isOpen={isSidebarOpen} />
        <div className="flex flex-col gap-3 w-full ml-0 sm:ml-16">
          <Header 
            noPackages={trPackagesLength > 0 ? trPackagesLength : 0} 
            toggleSidebar={toggleSidebar} 
          />
          <Filters filterType="destination" setTrPackages={setTrPackages} />
          <Search
            setTrPackages={setTrPackages}
            setCurrPage={setCurrPage}
            setPackageLimit={setPackageLimit}
            setTrPackagesLength={setTrPackagesLength}
          />
          <Sort 
            trPackages={trPackages} 
            setTrPackages={setTrPackages} 
          />

          <div className="p-12 w-full">
            <Separator />
          </div>

          <div className="flex flex-col gap-4 w-full px-12">
            {trPackagesLength > 0 ? (
              trPackages.map((trPackage: any) => <PackageCard key={trPackage.id} trPackage={trPackage} />)
            ) : (
              <h3 className="text-3xl">No packages found</h3>
            )}
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
  );
};

export default TravelPackages;
