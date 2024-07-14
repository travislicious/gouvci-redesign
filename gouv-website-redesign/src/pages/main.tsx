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
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import {
      Accordion,
      AccordionContent,
      AccordionItem,
      AccordionTrigger,
    } from "@/components/ui/accordion"
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
  
interface NavigationItem {
    title: string;
    links: string[];
  }
  
  const navigationData: NavigationItem[] = [
    {
      title: 'Premier Ministre',
      links: [
        'Missions',
        'Cabinet',
        'Discours et Interventions',
        'Biographie',
        'Structure et programmes de la Primature',
        'Anciens Premiers Ministres',
      ],
    },
    {
      title: 'Gouvernement',
      links: [
        'Gouvernement',
        'Agenda',
        'Institutions',
        'Anciens Gouvernements',
      ],
    },
    {
      title: 'Actualités',
      links: [
        'Politique',
        'Economie',
        'Diplomatie',
        'Santé/Sport',
        'Société',
        'Education',
      ],
    },
    {
      title: 'Côte d\'Ivoire',
      links: [
        'Symboles de la République',
        'Textes Fondamentaux',
        'Cartes',
        'Histoire',
        'Géographie',
        'Investir',
        'Voyager et Vivre',
      ],
    },
    {
      title: 'Salle E-Presse',
      links: [
        'Conseil des ministres',
        'Communiqués',
        'Déclaration et Discours',
        'Textes Officiels',
        'Codes',
        'Dossiers de Presse',
        'Notes de Rédactions',
        'Reportages Photo',
        'Revue de Presse',
      ],
    },
    {
      title: 'Produits CICG',
      links: [
        'Agence à la Une',
        'Chantier d\'ici',
        'Citoyen à la une',
        'C\'est Ici',
        'Debrief',
        'Echange Citoyens',
        'Gouv\'Actu',
        'Gouv\'Devinettes',
        'Gouv\'Eclairage',
        'Gouv\'Hebdo',
        'Gouv\'Impact',
        'Gouv\'Space',
        'Gouv\'Talk',
        'Impact Développement',
        'Minute du développement',
        'Les Rendez-Vous du Gouvernement',
        'Micro Citoyen',
        'Tout Savoir Sur',
      ],
    },
  ];

export function MainPage() {
    const [flashNews, setFlashNews] = useState<FlashNews>() 
    const [focusNews, setFocusNews] = useState<SItem[]>([]) 
    const [news, setNews] = useState<SItem[]>([]) 
    const [docs, setDocs] = useState<Doc[]>([]) 
    const [atOne, setAtOne] = useState<AtOneType>() 
    const [loading, setLoading] = useState(true)

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
            setLoading(false)
        })
        
    }

    const fetchData = async() => {
        await fetchFlashNews()
        await fetchAtOne()
        await fetchFocusData()
        await fetchNews()
        await fetchDocs()
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
         !loading ? (
            <main className="bg-[#FBF6EE] w-screen h-full flex flex-col items-center scrollbar-hide">
            <header className="w-full bg-[#F57F01] p-2 text-background h-16 flex gap-2 items-center">
                <img src={logo} alt="" className="w-12"/>
                <h1 className="scroll-m-20 text-lg font-semibold tracking-tight xl:text-xl text-background w-full">GOUVERNEMENT DE CÔTE D&apos;IVOIRE.</h1>
                <div className="flex items-center justify-end w-full xl:hidden">
                <Drawer direction="right">
                <DrawerTrigger>
                <Button className="border-orange-400 hover:bg-orange-400 bg-transparent p-2" variant='outline' size='icon'>
                    <Menu className="text-background"/>
                </Button>
                </DrawerTrigger>
                <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 max-sm:w-[300px] rounded-none bg-[#F57F01] border-none text-white w-[400px] xl:hidden">
                    <div className="w-full h-full flex flex-col gap-2 p-2">
                    <DrawerHeader>
                    <DrawerTitle className="text-3xl">Menu.</DrawerTitle>
                    </DrawerHeader>
                    { navigationData.map((item) => {
                        return (
                        <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>{item?.title}</AccordionTrigger>
                        <AccordionContent>
                        <ul className="w-full bg-[#F57F01] flex flex-col gap-2 *:my-0.5">
                                        { item?.links.map((link) => {
                                            return (
                                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">{link}</a>
                                            )
                                        })}

                                    </ul>
                        </AccordionContent>
                    </AccordionItem>
                    </Accordion>
                    )
                    })}
                    <DrawerFooter>
                    <DrawerClose>
                        <Button className="border-2">Fermer</Button>
                    </DrawerClose>
                    </DrawerFooter>
                    </div>
                </DrawerContent>
                </Drawer>
                </div>
                <div className="w-full gap-3 items-center justify-end hidden xl:flex">
  
                { navigationData.map((item) => {
                    return (
                        <NavigationMenu className="bg-transparent">
                        <NavigationMenuList className="bg-transparent">
                                <NavigationMenuItem className="bg-transparent">
                                <NavigationMenuTrigger className="text-background bg-transparent text-lg hover:underline">{item?.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="w-32 bg-[#F57F01] flex flex-col gap-2 divide-y  divide-[#fa9a34] *:mx-2 *:my-0.5">
                                        { item?.links.map((link) => {
                                            return (
                                                <a href="#" className="font-semibold text-background cursor-pointer hover:underline">{link}</a>
                                            )
                                        })}

                                    </ul>
                                </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            </NavigationMenu>
                    )
                })}

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
        ) : (
            
        <div role="status" className="w-screen bg-[#F57F01] h-screen flex flex-col items-center justify-center">
        <svg aria-hidden="true" className="w-20 h-20 text-[#f59b3b] animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
        </div>

        )
    )
}