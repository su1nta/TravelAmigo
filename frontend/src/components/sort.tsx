import { useEffect, useState } from 'react';
import { Button } from './ui/button';

interface Props{
  trPackages: any;
  setTrPackages: React.Dispatch<React.SetStateAction<any[]>>
}

const Sort = ({trPackages, setTrPackages}: Props) => {
  const [activeButton, setActiveButton] = useState<string | null>(null)
  const [localTrPackages, setLocalTrPackages] = useState<any[]>([]);

  useEffect(() => {
    setLocalTrPackages(trPackages);
  }, [trPackages]);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName === activeButton ? null : buttonName);
  
    switch (buttonName) {
      case "date":
        const sortedByDate = [...localTrPackages].sort((a, b) => {
          const dateA = new Date(a.availableTo).getTime();
          const dateB = new Date(b.availableTo).getTime();
          return dateA - dateB;
        });
        setLocalTrPackages(sortedByDate);
        setTrPackages(sortedByDate);
        break;
  
      case "price":
        const sortedByPrice = [...localTrPackages].sort((a, b) => {
          return a.price - b.price;
        });
        setLocalTrPackages(sortedByPrice);
        setTrPackages(sortedByPrice);
        break;
  
      default:
        break;
    }
  };
  
  

    return (
      <div className="flex justify-center sm:justify-start gap-1 w-full px-12 mt-3 sm:mt-0">
        <Button
          variant={activeButton === 'date' ? 'default' : 'outline'}
          onClick={() => handleButtonClick('date')}
        >
          Sort by Date
        </Button>
        <Button
          variant={activeButton === 'price' ? 'default' : 'outline'}
          onClick={() => handleButtonClick('price')}
        >
          Sort by Price
        </Button>
      </div>
    );
}

export default Sort