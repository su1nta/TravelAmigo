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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import apiClient from '@/ApiClient';
import { Button } from './ui/button';
import { DualRangeSlider } from './ui/dualrangeslider';

interface Props {
    setTrPackages: Dispatch<SetStateAction<any[]>>;
}

interface Option {
    value: string;
    label: string;
}

const Filters = ({ setTrPackages }: Props) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [priceValues, setPriceValues] = useState([0, 0]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });

    useEffect(() => {
        apiClient.get("/api/destinations")
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

        apiClient.get('/api/packages/getprices')
            .then((response) => {
                const minPrice = response.data.minPrice;
                const maxPrice = response.data.maxPrice;
                setPriceValues([minPrice, maxPrice]);
                setPriceRange({ min: minPrice, max: maxPrice });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleDestFilter = (value: string) => {
        setSelectedOption(value);
        let url = "/api/packages";
        apiClient.get(url, { params: { destination: value } })
            .then((response) => {
                setTrPackages(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const clearSelection = () => {
        setSelectedOption("");
        setTrPackages([]); // Clear the travel packages when selection is cleared
        apiClient.get("/api/packages", { params: { page: 1, limit: 5 } })
            .then((response) => {
                setTrPackages(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handlePriceFilter = () => {
        let url = "/api/packages";
        apiClient.get(url, { params: { minPrice: priceValues[0], maxPrice: priceValues[1] } })
            .then((response) => {
                setTrPackages(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 w-full h-auto sm:h-16 px-4 sm:px-12 items-center bg-background-secondary/90 justify-start">
            {options.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-0">
                    <Select value={selectedOption} onValueChange={handleDestFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder={`Select a destination`} />
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
                </div>
            )}

            <div className="flex flex-col items-center justify-center w-auto md:w-64 pt-1 sm:pt-0">
                <Popover>
                    <PopoverTrigger>
                        <Button variant="outline">Select Price Range</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <DualRangeSlider
                            label={(value) => <span>₹{value}</span>}
                            labelPosition="top"
                            value={priceValues}
                            onValueChange={setPriceValues}
                            min={priceRange.min}
                            max={priceRange.max}
                            step={100}
                        />
                        <Button variant="outline" onClick={handlePriceFilter} className="mt-4">Filter</Button>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Filters;
