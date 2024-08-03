import { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

interface Props {}
interface Option {
  value: string;
  label: string;
}

function Filters(props: Props) {
    const {} = props;

    const [options, setOptions] = useState<Option[]>([]);
    
    useEffect(() => {
      const fetchOptions = async () => {
          const data = [
              {
                  value: "next.js",
                  label: "Next.js",
              },
              {
                  value: "sveltekit",
                  label: "SvelteKit",
              },
              {
                  value: "nuxt.js",
                  label: "Nuxt.js",
              },
              {
                  value: "remix",
                  label: "Remix",
              },
              {
                  value: "astro",
                  label: "Astro",
              },
          ];
          setOptions(data);
      };
      fetchOptions();
  }, []);

    return (
        <>
            <div className="flex gap-5 w-full h-16 pl-12 items-center justify-start">
              {options.length > 0 && 
                <Select>
                    <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                    </SelectContent>
                </Select>
              }
            </div>
        </>
    )
}

export default Filters
