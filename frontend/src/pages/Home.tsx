import Sidebar from "@/components/sidebar";

const Home = () =>{

  return (
    <>
      <main className="flex h-full w-full">
        <Sidebar active="home"/>
        <div className="flex flex-col gap-3 w-full px-4 md:px-8 lg:ml-16">
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
