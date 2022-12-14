import React, {useState, useEffect } from "react";
import clsx from "clsx";
import { Link } from "gatsby-link";

import { ThemeSelector } from "@components/ThemeSelector";
import { Logomark, Logo } from "@components/Logo";
import { Search } from "@components/Search";



export function Header({ navigation }) {
    let [isScrolled, setIsScrolled] = useState(false)
  
    useEffect(() => {
      function onScroll() {
        setIsScrolled(window.scrollY > 0)
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll, { passive: true })
      }
    }, [])
  
    return (
      <header
        className={clsx(
          'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
          isScrolled
            ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
            : 'dark:bg-transparent'
        )}
      >
        <div className="mr-6 flex lg:hidden">
          {/* <MobileNavigation navigation={navigation} /> */}
        </div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link to="/" aria-label="Home page">
            <Logomark className="h-9 w-9 lg:hidden" />
            <Logo className="hidden h-9 w-auto fill-slate-700 dark:fill-sky-100 lg:block" />
          </Link>
        </div>
        <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
          <Search />
        </div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
          <ThemeSelector className="relative z-10" />
          <a href="https://github.com" className="group" aria-label="GitHub">
            {/* <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" /> */}
          </a>
        </div>
      </header>
    )
  }
  