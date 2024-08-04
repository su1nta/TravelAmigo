import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Heart, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

interface Props {
  trPackage: any;
}

const PackageCard = ({ trPackage }: Props) => {
  return (
    <Card className="flex flex-col md:flex-row w-full border p-4 rounded-lg">
      <CardHeader className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
        <img
          src={trPackage.imageUrl}
          alt="Destination"
          className="w-full h-auto max-h-48 md:max-h-36 rounded-md object-center object-cover"
        />
      </CardHeader>
      <div className="flex-grow mt-4 md:mt-0 md:ml-4">
        <CardContent className="p-0">
          <CardTitle className="text-lg font-semibold">{trPackage.title}</CardTitle>
          <CardDescription className="text-sm text-gray-700">{trPackage.description}</CardDescription>
          <div className="flex items-center mt-2 space-x-2">
            <Star className="text-yellow-500 w-4 h-4" />
            <p className="text-sm font-medium">{trPackage.rating}</p>
            <p className="text-sm text-gray-500">({trPackage.reviews})</p>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <p className="font-medium">{trPackage.destination}</p>
          </div>
          <div className="flex flex-wrap mt-2 gap-2">
            {trPackage.highlights.map((highlight: any, index: any) => (
              <Badge variant={'outline'} key={index} className="text-xs">{highlight}</Badge>
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
