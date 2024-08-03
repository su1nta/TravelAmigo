import { useState, useEffect } from 'react';
import { CiHome } from "react-icons/ci";
import { Button } from './/ui/button';
import { ModeToggle } from "./modeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
interface Props {}

function Sidebar(props: Props) {
    const {} = props
    const [avatarImage, setAvatarImage] = useState("");
    useEffect(() => {
        fetch("https://api.github.com/users/su1nta").then(
            (response) => response.json()
        ).then((data) => {
            setAvatarImage(data.avatar_url)
        })
    })

    return (
        <>
            <aside className="flex fixed flex-col justify-between items-center p-3 w-16 h-screen bg-slate-600">
                
                <div className="flex flex-col gap-3 mt-6">
                    <Button variant={'default'}><CiHome/></Button>
                    <Button variant={'outline'}><CiHome/></Button>
                    <Button variant={'outline'}><CiHome/></Button>
                    <Button variant={'outline'}><CiHome/></Button>
                    <Button variant={'outline'}><CiHome/></Button>
                </div>
                <div className="flex flex-col gap-3 mb-3 items-center">
                    <ModeToggle />
                    <Button variant={'outline'}><CiHome/></Button>
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
