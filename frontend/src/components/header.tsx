import { Button } from "./ui/button"
import { StarIcon } from "@radix-ui/react-icons"

interface Props {
    noPackages: number
}

function Header({ noPackages }: Props) {
    return (
        <>
            <div className="flex items-center justify-between w-full h-32 px-12">
                <div className="text-left flex flex-col items-start justify-center">
                    <h1 className="scroll-m-20 leading-3 text-4xl font-extrabold tracking-tight lg:text-5xl">{noPackages} Packages to Travel</h1>
                    <h3 className="mt-3 scroll-m-20 text-2xl font-medium text-slate-400 tracking-tight">Add Description/ Sub-heading</h3>
                </div>
                <div className="flex gap-5">
                    <Button variant={'outline'}>Share</Button>
                    <Button variant={'default'} size={'wide'}>
                        <StarIcon className="mr-2"/>
                        Save Search
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Header
