import { useEffect, useState } from 'react'
import { ComboBox } from './combobox'

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
            <div className="bg-slate-700 w-full h-16">
              {options.length > 0 && <ComboBox options={options} />}
            </div>
        </>
    )
}

export default Filters
