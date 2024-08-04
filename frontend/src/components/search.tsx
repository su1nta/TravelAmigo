import { Input } from './ui/input';
import { Button } from './ui/button';
import { useState } from 'react';

interface Props {}

function Search(props: Props) {
    const {} = props
    const [searchVal, setSearchVal] = useState("");

    const handleSearchClear = () => setSearchVal("")
    return (
        <div className="flex items-center justify-center space-x-3 px-12">
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center space-x-3">
            <div className="flex w-full md:w-3/5">
            <Input
                type="text"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Search rating, destination..."
            />
            </div>
            <div className="flex gap-2">
                <Button variant="outline" onClick={handleSearchClear}>
                Clear
                </Button>
                <Button type="submit">Search</Button>
            </div>
        </div>
        </div>
    )
}

export default Search
