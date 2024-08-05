import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

function Footer() {
    return (
        <>
            <div className="flex flex-col w-full h-auto items-center justify-center">
                <div className="w-full">
                <Separator />
                </div>
                <div className="p-2">
                    <h4 className="text-md font-thin italic">
                        <Button variant="link" className="p-0" asChild><a href="https://github.com/su1nta" target="blank">© su1nta</a></Button>. All Rights Reserved</h4>
                </div>
            </div>
        </>
    )
}

export default Footer
