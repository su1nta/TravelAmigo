import { useState } from 'react';
import './App.css'
import { ThemeProvider } from './components/themeProvider';
import Sidebar from "./components/sidebar";
import Header from './components/header';
import { Separator } from "@/components/ui/separator";
import Filters from './components/filters';
import Search from './components/search';
import Sort from './components/sort';
import PackageCard from './components/package-card';
import { PaginationImp } from './components/pagination';

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main className="flex h-full w-full">
        <Sidebar />
        <div className="flex flex-col gap-3 w-full ml-16">
          <Header />
          {/* <Filters/> */}

          <Search />
          <Sort />
          <div className="p-12 w-full">
            <Separator />
          </div>
          <div className="flex flex-col gap-4 w-4/6 px-12">
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
            <PackageCard />
          </div>
          <div className="flex m-6"><PaginationImp/></div>
        </div>
      </main>
      </ThemeProvider>
    </>
  )
}

export default App
