import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Home = () =>{

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <main className="flex h-full w-full">
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-[-1]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="256"
          height="256"
          fill="#fffff0"
          viewBox="0 0 256 256"
          className="w-full h-full opacity-5"
        >
          <path d="M209,81l-33,31,32,88-24,24-48-72-24,24v24L88,224,72,184,32,168l24-24H80l24-24L32,72,56,48l88,32,31-33A24,24,0,0,1,209,81Z" opacity="0.2"></path>
          <path d="M185.33,114.21l29.14-27.43.17-.16a32,32,0,0,0-45.26-45.26l-.16.17L141.79,70.67l-83-30.2a8,8,0,0,0-8.39,1.86l-24,24a8,8,0,0,0,1.22,12.31l63.89,42.59L76.69,136H56a8,8,0,0,0-5.65,2.34l-24,24A8,8,0,0,0,29,175.42l36.82,14.73,14.7,36.75.06.16a8,8,0,0,0,13.18,2.47l23.87-23.88A8,8,0,0,0,120,200V179.31l14.76-14.76,42.59,63.89a8,8,0,0,0,12.31,1.22l24-24a8,8,0,0,0,1.86-8.39Zm-.07,97.23-42.59-63.89A8,8,0,0,0,136.8,144a7.09,7.09,0,0,0-.79,0,8,8,0,0,0-5.66,2.34l-24,24A8,8,0,0,0,104,176v20.69L90.93,209.76,79.43,181A8,8,0,0,0,75,176.57l-28.74-11.5L59.32,152H80a8,8,0,0,0,5.66-2.34l24-24a8,8,0,0,0-1.22-12.32L44.56,70.74l13.5-13.49,83.22,30.26a8,8,0,0,0,8.56-2l30.94-32.88A16,16,0,0,1,203.4,75.22l-32.87,30.94a8,8,0,0,0-2,8.56l30.26,83.22Z"></path>
        </svg>
      </div>
        <Sidebar active="home" isOpen={isSidebarOpen}/>
        <div className="flex flex-col gap-3 w-full px-4 md:px-8 lg:ml-16">
          <Button
              variant="floating"
              size="icon"
              className="mr-2 md:hidden"
              onClick={toggleSidebar}
          >
              <Menu className="h-6 w-6" />
          </Button>
          <div>
            <h1 className="mt-20 md:mt-28 lg:mt-36 scroll-m-20 leading-tight text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Welcome to Travel-Amigo
            </h1>
            <h2 className="mt-6 md:mt-8 lg:mt-10 scroll-m-20 pb-2 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight transition-colors">
              To see all the travel packages, navigate to the Travel Packages section (second option in the sidebar).
            </h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
