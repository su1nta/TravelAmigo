import Sidebar from '@/components/sidebar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Props {}

function Construction(props: Props) {
    const {} = props

    return (
        <>
            <Sidebar active="construction"/>
            <div className="flex flex-col gap-3 ml-16">
                <h1 className="text-4xl mt-28">This Site is under Construction</h1>
                <div className="mt-4">
                    <Button variant={'outline'} asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Construction
