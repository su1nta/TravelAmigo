import { useState } from 'react';
import { Button } from './ui/button';

const Sort = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null)

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName === activeButton ? null : buttonName)
  }

  return (
    <div className="flex gap-1 w-full px-12 mt-3">
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
  )
}

export default Sort