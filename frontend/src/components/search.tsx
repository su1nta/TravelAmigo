import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';
import apiClient from '@/ApiClient';

interface Props {
    setTrPackages:any,
    setCurrPage: any,
    setPackageLimit: any,
    setTrPackagesLength: any
}

function Search({setTrPackages, setCurrPage, setPackageLimit, setTrPackagesLength}: Props) {
    const [searchVal, setSearchVal] = useState("");

    const handleSearchClear = () => {
        setSearchVal("")
        setTrPackages([]); // Clear the travel packages when selection is cleared
        apiClient.get("/api/packages",
            { params: { page: 1, limit: 5 } }
        )
            .then((response) => {
                setTrPackages(response.data.data);
                setTrPackagesLength(response.data.totalPackages);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const handleSearch = () => {
        apiClient.get(`/api/packages/search`,
                    { params: { term: searchVal } })
            .then((response) => {
                setTrPackages(response.data.data);
                setCurrPage(response.data.page);
                setPackageLimit(response.data.limit);
                setTrPackagesLength(Number(response.data.totalPackages)); 
                
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className="flex items-center justify-center space-x-3 px-12 mt-1">
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center space-x-3">
            <div className="flex w-full md:w-3/5">
            <Input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search rating, destination, description, duration, price..."
            />
            </div>
            <div className="flex gap-2">
                <Button variant="outline" onClick={handleSearchClear}>
                Clear
                </Button>
                <Button type="submit" onClick={handleSearch}>Search</Button>
            </div>
        </div>
        </div>
    )
}

export default Search
