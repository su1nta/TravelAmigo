import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
    trPackagesLength: any,
    currPage: any,
    setCurrPage: any,
    packageLimit: any
}

export function PaginationImp(paginationProps: Props) {
    const {trPackagesLength, currPage, setCurrPage, packageLimit } = paginationProps;
    
    const totalPages = Math.ceil(trPackagesLength / packageLimit);

    const handlePageChange = (pageNo: number) => {
        if (pageNo > 0 && pageNo <= totalPages) {
            setCurrPage(pageNo);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {currPage > 1 ? (
                        <PaginationPrevious 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currPage - 1);
                            }}
                        />
                    ) : (
                        <PaginationPrevious 
                            href="#" 
                            style={{ pointerEvents: 'none', opacity: 0.5 }}
                        />
                    )}
                </PaginationItem>
                {[...Array(totalPages)].map((_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink 
                            href="#" 
                            isActive={index + 1 === currPage} 
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(index + 1);
                            }}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    {currPage < totalPages ? (
                        <PaginationNext 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currPage + 1);
                            }}
                        />
                    ) : (
                        <PaginationNext 
                            href="#" 
                            style={{ pointerEvents: 'none', opacity: 0.5 }}
                        />
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
