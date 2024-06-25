import { Search } from "lucide-react"
import logo from '/logo.svg'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  

export function MainPage() {
    return (
        <main className="bg-background w-screen h-screen flex flex-col items-center">
            <header className="w-full bg-primary p-2 text-background h-16 flex gap-2 items-center border-b-2 border-b-orange-400">
                <img src={logo} alt="" className="w-12"/>
                <h1 className="scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl text-background w-[40rem]">GOUVERNEMENT DE CÔTE D&apos;IVOIRE.</h1>
                <div className="w-full flex gap-3 items-center justify-end">
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
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>

                </div>

            </header>
            <div className="w-full h-full flex items-center">
                <div className="w-full h-full bg-red-500"></div>
                <div className="w-96 bg-blue-500 h-full hidden md:block"></div>
            </div>
        </main>
    )
}