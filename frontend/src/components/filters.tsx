import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import apiClient from '@/ApiClient';
import { Button } from './ui/button';

interface Props {
    filterType: string;
    trPackages: Dispatch<SetStateAction<never[]>>;
}

interface Option {
    value: string;
    label: string;
}

const Filters = ({ filterType, trPackages }: Props) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | "">("");

    useEffect(() => {
        let url = "";
        switch (filterType) {
            case 'destination':
                url = "/api/destinations";
                break;
            default:
                url = "/api/lost"; // In case of an undefined filterType
                break;
        }

        apiClient.get(url)
            .then((response) => {
                const data = response.data.map((destination: string) => ({
                    value: destination.toLowerCase(),
                    label: destination,
                }));
                setOptions(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [filterType]);

    const handleFilter = (value: string) => {
        setSelectedOption(value);
        let url = "/api/packages";
        apiClient.get(url, { params: { destination: value } })
            .then((response) => {
                trPackages(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const clearSelection = () => {
        setSelectedOption("");
        trPackages([]); // Clear the travel packages when selection is cleared
        apiClient.get("/api/packages",
            { params: { page: 1, limit: 5 } }
        )
            .then((response) => {
                trPackages(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log('Selection Cleared');
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-16 px-4 sm:px-12 items-center sm:items-start justify-start">
            {options.length > 0 && (
                <>
                <Select value={selectedOption} onValueChange={handleFilter}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder={`Select a ${filterType}`} />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Destinations</SelectLabel>
                        {options.map(option => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                        ))}
                    </SelectGroup>
                    </SelectContent>
                </Select>
                <div>
                    <Button variant="outline" onClick={clearSelection} className="w-full sm:w-auto sm:ml-4 mt-2 sm:mt-0">
                        Clear Selection
                    </Button>
                </div>
                </>
            )}
        </div>


    );
};

export default Filters;
