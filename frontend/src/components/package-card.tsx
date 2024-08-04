import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Heart, MapPin } from "lucide-react";

interface Props {
  trPackage: any
}

const PackageCard = ({ trPackage }:Props)  => {

  return (
    <Card className="flex flex-col md:flex-row w-full border p-4 rounded-lg">
      <CardHeader className="flex-shrink-0 items-center justify-center">
        <img
          src={trPackage.imageUrl}
          alt="Destination"
          className="w-full h-auto max-h-80 object-cover"
        />
      </CardHeader>
      <div className="flex-grow mt-4 md:mt-0 md:ml-4">
        <CardContent className="p-0">
          <CardTitle>{trPackage.title}</CardTitle>
          <CardDescription>{trPackage.description}</CardDescription>
          <div className="flex items-center mt-2 space-x-1">
            <Star className="text-yellow-500 w-4 h-4" />
            <p className="text-sm font-medium">{trPackage.rating}</p>
            <p className="text-sm text-gray-500">({trPackage.reviews})</p>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <p>{trPackage.destination}</p>
            {trPackage.highlights.map((highlight:any, index:any) => (
              <p key={index}>{highlight}</p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center mt-4 p-0">
          <p className="text-xl font-semibold">₹ {trPackage.price}</p>
          <button className="text-gray-500 hover:text-black">
            <Heart className="w-5 h-5" />
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}

export default PackageCard;