import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Heart, MapPin, Wifi, Bed } from "lucide-react";

export default function PackageCard() {
  return (
    <Card className="flex flex-col md:flex-row w-full border p-4 rounded-lg">
      <CardHeader className="flex-shrink-0 items-center justify-center">
        <img
          src="https://via.placeholder.com/200x113"
          alt="Apartment"
          className="w-full h-auto max-h-80 object-cover"
        />
      </CardHeader>
      <div className="flex-grow mt-4 md:mt-0 md:ml-4">
        <CardContent className="p-0">
          <CardTitle>Entire apartment rental in Collingwood</CardTitle>
          <CardDescription>
            A Stylish Apt, 5 min walk to Queen Victoria Market
          </CardDescription>
          <div className="flex items-center mt-2 space-x-1">
            <Star className="text-yellow-500 w-4 h-4" />
            <p className="text-sm font-medium">4.9</p>
            <p className="text-sm text-gray-500">(202 reviews)</p>
          </div>
          <div className="flex items-center mt-2 space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <p>Collingwood VIC</p>
            <Bed className="w-4 h-4" />
            <p>1 bed</p>
            <Wifi className="w-4 h-4" />
            <p>Wi-Fi</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center mt-4 p-0">
          <p className="text-xl font-semibold">₹ 2,400</p>
          <button className="text-gray-500 hover:text-black">
            <Heart className="w-5 h-5" />
          </button>
        </CardFooter>
      </div>
    </Card>
  );
}
