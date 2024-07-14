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
import { DocsList } from "@/components/DocsList"
import { getDatabase, ref, get } from "firebase/database"
import { app } from "@/firebase"
import { useEffect, useState } from "react";
import { FlashNews, SItem, Doc, AtOneType } from "@/dataType";
  

export function MainPage() {
    const [flashNews, setFlashNews] = useState<FlashNews>() 
    const [focusNews, setFocusNews] = useState<SItem[]>([]) 
    const [news, setNews] = useState<SItem[]>([]) 
    const [docs, setDocs] = useState<Doc[]>([]) 
    const [atOne, setAtOne] = useState<AtOneType>() 

    const fetchFlashNews = async() => {
        const db = getDatabase(app);
        const snapshot = await ref(db, 'flash_news')
        get(snapshot).then((data) => {
            setFlashNews(data.val())
        })
    }

    const fetchFocusData = async() => {
        const db = getDatabase(app);
        const snapshot = await ref(db, 'focusItems')
        get(snapshot).then((data) => {
            setFocusNews(data.val())
        })
    }

    const fetchAtOne = async() => {
        const db = getDatabase(app);
        const snapshot = await ref(db, 'atOne')
        get(snapshot).then((data) => {
            setAtOne(data.val())
        })
    }

    const fetchNews = async() => {
        const db = getDatabase(app);
        const snapshot = await ref(db, 'newsItems')
        get(snapshot).then((data) => {
            setNews(data.val())
        })
    }

    const fetchDocs = async() => {
        const db = getDatabase(app);
        const snapshot = await ref(db, 'docs')
        get(snapshot).then((data) => {
            setDocs(data.val())
        })
    
    }

    const fetchData = async() => {
        fetchFlashNews()
        fetchAtOne()
        fetchFocusData()
        fetchNews()
        fetchDocs()
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <main className="bg-[#FBF6EE] w-screen h-full flex flex-col items-center scrollbar-hide">
            <header className="w-full bg-[#F57F01] p-2 text-background h-16 flex gap-2 items-center">
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
                            <ul className="w-32 bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  *:mx-2 *:my-0.5 ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Missions</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Cabinet</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Discours et Interventions</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Biographie</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Structure et programmes de la Primature</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Anciens Premiers Ministres</a>
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
                            <ul className="w-full bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouvernement</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Agenda</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Institutions</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Anciens Gouvernements</a>
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
                            <ul className="w-full bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Politique</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Economie</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Diplomatie</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Santé/Sport</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Société</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Education</a>
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
                            <ul className="w-full bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Symboles de la République</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Textes Fondamentaux</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Cartes</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Histoire</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Géographie</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Investir</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Voyager et Vivre</a>
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
                            <ul className="w-full bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Conseil des ministres</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Communiqués</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Déclaration et Discours</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Textes Officiels</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Codes</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Dossiers de Presse</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Notes de Rédactions</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Reportages Photo</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Revue de Presse</a>
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
                            <ul className="w-full bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5  ">
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Agence à la Une</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Chantier d'ici</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Citoyen à la une</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">C'est Ici</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Debrief</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Echange Citoyens</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Actu</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Devinettes</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Eclairage</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Hebdo</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Impact</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Space</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Gouv'Talk</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Impact Développement</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Minute du développement</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Les Rendez-Vous du Gouvernement</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Micro Citoyen</a>
                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">Tout Savoir Sur</a>
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    </NavigationMenu>

                </div>

            </header>
            <div className="w-full h-full flex-col flex xl:flex-row">
                <div className="w-full h-full xl:border-b-0 border-[#25a574] flex gap-2 flex-col bg-muted border-b-4">
                    <div className="w-full h-[35rem] flex flex-col xl:flex-row border-b-2 p-5 bg-[#009E62] xl:h-auto">
                    <div className="w-full h-full flex flex-col justify-center xl:h-full">
                    <h1 className="text-2xl font-semibold text-background mb-2">Bienvenue sur la page officielle du gouvernement.</h1>
                    <p className="text-lg text-background mb-2 w-[28rem] xl:w-96">Notre plateforme en ligne a été conçue pour fournir aux citoyens des informations complètes et à jour sur les activités gouvernementales, politiques, publiques et les services offerts par les différentes institutions de notre pays.</p>
                    <div className="flex gap-2 items-center mt-2">
                    <Input type="search" placeholder="Recherchez..." className="w-full bg-transparent placeholder:text-neutral-200 border-[#1ebe81] md:w-96 focus-visible:bg-[#1a9e6b]"/>
                    <Button variant="outline" size='icon' className="bg-transparent hover:bg-[#1ebe81] border-[#1ebe81]">
                    <Search className="text-background"/>
                    </Button>
                    </div>
                    <div className="w-96 xl:flex gap-2 h-10 mt-5 hidden">
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#1ebe81] p-1 border-[#1ebe81]'>
                            <a href="https://www.google.com" target='_blank'>      
                            <img src={twitter} alt="Twitter"/>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#1ebe81] p-1 border-[#1ebe81]'>
                        <a href="https://www.google.com" target='_blank'>      
                            <img src={facebook} alt="Twitter"/>
                            </a>
                        </Button>
                        <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#1ebe81] p-1 border-[#1ebe81]'>
                        <a href="https://www.google.com" target='_blank'>      
                            <img src={youtube} alt="Twitter"/>
                            </a>
                        </Button>
                    </div>
                    </div>
                    <div className="w-full xl:w-96 p-2 mt-2 h-full mb-4 max-sm:flex max-sm:justify-end max-sm:flex-col">
                        <h1 className="text-2xl text-background mb-2">Flash Infos</h1>
                        <FlashNewsItem title={flashNews?.title as string} content={flashNews?.content as string}/>
                    </div>
                    </div>
                    <div className="w-full h-full">
                        <div className="flex items-center w-full p-3 justify-between">
                            <h1 className="text-3xl font-semibold text-neutral-300">Actualités</h1>
                            <a href="#" className="text-lg text-[#F57F01] hover:underline text-center">Tout Afficher</a>
                        </div>
                        <ul className="flex flex-col gap-2 md:grid p-2 items-center justify-center md:grid-cols-3 md:grid-rows-1 w-full">
                            { news.slice(0, 6).map((item) => {
                                return <NewsItem key={item?.title as string} title={item?.title as string} content={item?.content as string} date={item?.date as string}/>
                            })}
                        </ul>
                    </div>
                    <div className="w-full h-full">
                        <div className="flex items-center w-full p-3 justify-between">
                            <h1 className="text-3xl font-semibold text-neutral-300 w-full text-center md:text-left">Gouv'Productions</h1>
                        </div>
                        <ul className="flex flex-col gap-2 md:grid p-2 items-center justify-center md:grid-cols-4 md:grid-rows-1 w-full">
                            <FeatureItem name="Gouv'Photos" icon={<Image className="w-full h-full opacity-70" strokeWidth={0.5}/>} description="Toute l'actualité en photos."/>
                            <FeatureItem name="Gouv'Vidéos" icon={<Video className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en vidéo."/>
                            <FeatureItem name="Gouv'Audios" icon={<Headphones className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en audio."/>
                            <FeatureItem name="Gouv'Publications" icon={<Newspaper className="w-full h-full opacity-70" strokeWidth={0.5}/>}  description="Toute l'actualité en journaux."/>
                        </ul>
                    </div>
                    
                </div>
                <div className="w-full xl:w-[28rem] h-full xl:flex flex-col divide-y-4 items-center divide-[#196d4d]">
                    <AtOne content={atOne?.content as string} date={atOne?.date as string}/>

                    <FocusItem items={focusNews}/>
                    <DocsList items={docs}/>
                </div>
            </div>
            <footer className="w-full flex flex-col bg-[#F57F01] text-white border-t-4 border-[#f39837] p-4">
                <div className="w-full flex items-center">
                    <div className="w-full flex items-center justify-center gap-3">
                    <img src={logo} alt="gouv-logo" width={52}/>
                    <h1 className="text-2xl font-bold">Copyright 2024, Ayomide.</h1>
                    </div>
                    <div></div>
                </div>
                <h1 className="w-full text-2xl font-semibold mb-5 text-center mt-4">Ce site est juste un redesign de la page officielle.</h1>
                <div className="w-full sm:grid grid-cols-4 grid-rows-4 h-full gap-3 flex flex-col">
                <a href="#" className="text-center hover:underline">Le Magazine</a>
                <a href="#" className="text-center hover:underline">Le Gouvernement</a>
                <a href="#" className="text-center hover:underline">Le 1er Ministre</a>
                <a href="#" className="text-center hover:underline">Ministère à la une</a>
                <a href="#" className="text-center hover:underline">Grand Dossiers</a>
                <a href="#" className="text-center hover:underline">Open Data</a>
                <a href="#" className="text-center hover:underline">Administration Numérique</a>
                <a href="#" className="text-center hover:underline">Services Publics</a>
                <a href="#" className="text-center hover:underline">Participation Citoyenne</a>
                <a href="#" className="text-center hover:underline">Annuaire des services publics</a>
                <a href="#" className="text-center hover:underline">Portail Fiscal</a>
                <a href="#" className="text-center hover:underline">Service de validation de déclaration de véhicules</a>
                <a href="#" className="text-center hover:underline">E-Réclamation CGRAE</a>
                <a href="#" className="text-center hover:underline">Demandez une prestation de pension de retraite</a>
                <a href="#" className="text-center hover:underline">Revue de Presse</a>
                <a href="#" className="text-center hover:underline">Objectifs de développement durable</a>
                </div>
            </footer>
        </main>
    )
}