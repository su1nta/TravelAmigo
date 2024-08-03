import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface Props {}

function Search(props: Props) {
    const {} = props
    const [searchVal, setSearchVal] = useState("");

    const handleSearchClear = () => setSearchVal("")
    return (
        <div className="w-full flex items-center space-x-3 px-12">
        <div className="w-3/5">
            <Input
            type="text"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="Search rating, destination..."
            />
        </div>
            <Button variant="outline" onClick={handleSearchClear}>Clear</Button>
            <Button type="submit">Search</Button>
        </div>
    )
}

export default Search
