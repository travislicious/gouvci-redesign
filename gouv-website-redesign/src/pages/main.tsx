import { Search, Menu, Video, Headphones, Newspaper, Image } from "lucide-react"
import logo from '/logo.svg'
import twitter from '/twitter.svg'
import facebook from '/facebook.svg'
import youtube from '/youtube.svg'
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
import { NewsItem } from "@/components/newsItem"
import { FeatureItem } from "@/components/FeatureItem"
import { AtOne } from "@/components/AtOneItem"
import { FocusItem } from "@/components/FocusItem"

  

export function MainPage() {
    return (
        <main className="bg-[#FBF6EE] w-screen h-full flex flex-col items-center">
            <header className="w-full bg-[#FFB534] p-2 text-background h-16 flex gap-2 items-center">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                            <ul className="w-32 bg-[#FFB534] flex flex-col gap-2 p-2 divide-y-2 divide-[#fac261] ">
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
                <div className="w-full h-full xl:border-r-2 border-neutral-300 flex gap-2 flex-col bg-muted">
                    <div className="w-full h-[35rem] flex flex-col xl:flex-row border-b-2 p-5 bg-[#65B741] xl:h-auto">
                    <div className="w-full h-60 flex flex-col justify-center xl:h-full">
                    <h1 className="text-2xl font-semibold text-background mb-2">Bienvenue sur la page officielle du gouvernement.</h1>
                    <p className="text-lg text-background mb-2 xl:w-96">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quam, consectetur consequuntur harum eius in et odit, tempore explicabo iure, voluptatem porro. Numquam eius illum recusandae similique architecto cupiditate maiores?</p>
                    <div className="flex gap-2 items-center">
                    <Input type="search" placeholder="Recherchez..." className="w-full bg-transparent placeholder:text-neutral-200 border-[#70ca4a] md:w-96 focus-visible:bg-[#5fad3e]"/>
                    <Button variant="outline" size='icon' className="bg-transparent hover:bg-[#5fad3e] border-[#70ca4a]">
                    <Search className="text-background"/>
                    </Button>
                    </div>
                    <div className="w-96 xl:flex gap-2 h-10 mt-5 hidden">
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#5fad3e] p-1 border-[#70ca4a]'>
                            <a href="https://www.google.com" target='_blank'>      
                            <img src={twitter} alt="Twitter"/>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#5fad3e] p-1 border-[#70ca4a]'>
                        <a href="https://www.google.com" target='_blank'>      
                            <img src={facebook} alt="Twitter"/>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#5fad3e] p-1 border-[#70ca4a]'>
                        <a href="https://www.google.com" target='_blank'>      
                            <img src={youtube} alt="Twitter"/>
                            </a>
                        </Button>
                    </div>
                    </div>
                    <div className="w-full xl:w-96 p-2 mt-2 h-full mb-4">
                        <h1 className="text-xl text-background mb-2">Flash Infos</h1>
                        <FlashNewsItem/>
                    </div>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center w-full p-3 justify-between">
                            <h1 className="text-3xl font-semibold text-neutral-300">Actualités</h1>
                            <a href="#" className="text-lg text-[#FFB534] hover:underline">Tout Afficher</a>
                        </div>
                        <ul className="flex flex-col gap-2 md:grid p-2 items-center justify-center md:grid-cols-3 md:grid-rows-1 w-full">
                            <NewsItem/>
                            <NewsItem/>
                            <NewsItem/>
                        </ul>
                    </div>
                    <div className="w-full">
                        <div className="flex items-center w-full p-3 justify-between">
                            <h1 className="text-3xl font-semibold text-neutral-300 w-full text-center">Gouv'Productions</h1>
                        </div>
                        <ul className="flex flex-col gap-2 md:grid p-2 items-center justify-center md:grid-cols-4 md:grid-rows-1 w-full">
                            <FeatureItem name="Gouv'Photos" icon={<Image className="w-full h-full opacity-70" strokeWidth={0.5}/>} description="Toute l'actualité en photos."/>
                            <FeatureItem name="Gouv'Vidéos" icon={<Video className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en vidéo."/>
                            <FeatureItem name="Gouv'Audios" icon={<Headphones className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en audio."/>
                            <FeatureItem name="Gouv'Publications" icon={<Newspaper className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en journaux."/>
                        </ul>
                    </div>
                    
                </div>
                <div className="w-96 h-full hidden xl:flex flex-col"></div>
            </div>
        </main>
    )
}