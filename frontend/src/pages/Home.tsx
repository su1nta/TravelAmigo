import Sidebar from "@/components/sidebar";

const Home = () =>{

  return (
    <>
      <main className="flex h-full w-full">
        <Sidebar active="home"/>
        <div className="flex flex-col gap-3 w-full ml-16">
          <div>
            <h1 className="scroll-m-20 leading-3 text-4xl font-extrabold tracking-tight lg:text-5xl mt-36">Welcome to Travel-Amigo</h1>
            <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              To See All the travel Packages, Navigate to the Travel Packages Section (Second option in the sidebar)
            </h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
