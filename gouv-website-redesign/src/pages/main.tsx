import { Search, Menu } from "lucide-react"
import logo from '/logo.svg'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
import { FlashNewsItem } from './../components/flashNewsItem';

  

export function MainPage() {
    return (
        <main className="bg-background w-screen h-screen flex flex-col items-center">
            <header className="w-full bg-primary p-2 text-background h-16 flex gap-2 items-center border-b-2 border-b-orange-600">
                <img src={logo} alt="" className="w-12"/>
                <h1 className="scroll-m-20 text-lg font-semibold tracking-tight xl:text-xl text-background w-full">GOUVERNEMENT DE CÔTE D&apos;IVOIRE.</h1>
                <div className="flex items-center justify-end w-full xl:hidden">
                <Button className="border-orange-400 hover:bg-orange-400 bg-transparent p-2" variant='outline' size='icon'>
                    <Menu className="text-background"/>
                </Button>
                </div>
                <div className="w-full gap-3 items-center justify-end hidden xl:flex">
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Premier Ministre</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Gouvernement</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Actualités</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Côte d&apos;Ivoire.</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Salle E-Presse</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>
                <NavigationMenu className="bg-transparent">
                    <NavigationMenuList className="bg-transparent">
                        <NavigationMenuItem className="bg-transparent">
                        <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">Produits CICG</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="w-32 bg-primary flex flex-col gap-2 p-2 divide-y-2 divide-orange-400">
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                                <li className="text-lg font-semibold text-background cursor-pointer hover:underline">Test</li>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>

                </div>

            </header>
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full xl:border-r-2 border-neutral-300 flex gap-2 flex-col">
                    <div className="w-full h-[35rem] flex flex-col xl:flex-row border-b-2 p-5 bg-green-600">
                    <div className="w-full h-60 flex flex-col justify-center">
                    <h1 className="text-2xl font-semibold text-background mb-2">Bienvenue sur la page officielle du gouvernement.</h1>
                    <p className="text-lg text-background mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quam, consectetur consequuntur harum eius in et odit, tempore explicabo iure, voluptatem porro. Numquam eius illum recusandae similique architecto cupiditate maiores?</p>
                    <div className="flex gap-2 items-center">
                    <Input type="search" placeholder="Recherchez..." className="w-96 bg-transparent placeholder:text-background border-green-500"/>
                    <Button variant="outline" size='icon' className="bg-transparent hover:bg-green-500 border-green-500">
                    <Search className="text-background"/>
                    </Button>
                    </div>
                    </div>
                    <div className="w-full xl:w-96 p-2 mt-4 h-full mb-4">
                        <h1 className="text-xl text-background mb-2">Flash Infos</h1>
                        <FlashNewsItem/>
                    </div>
                    </div>
                    <div className="w-full">
                    </div>
                    
                </div>
                <div className="w-96 h-full hidden xl:flex flex-col"></div>
            </div>
        </main>
    )
}