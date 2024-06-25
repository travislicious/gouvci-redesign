
import { Button } from '@/components/ui/button'
import twitter from '/twitter.svg'
import facebook from '/facebook.svg'
import youtube from '/youtube.svg'
import logo from '/logo.svg'


function App() {

  return (
    <main className="bg-primary w-screen h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="" className='w-40 mb-6'/>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-background text-center">Portail du Gouvernement.</h1>
    <p className="leading-7 [&:not(:first-child)]:mt-2 text-background text-xl text-center w-[30rem]">
      Bienvenue sur le portail du gouvernement, la porte d'entrée à toutes les informations du gouvernement ivoirien.
    </p>
    <Button className='bg-background text-orange-500 text-lg mt-4 hover:bg-muted hover:text-orange-600 hover:scale-105 transition-all duration-200'>Entrez sur le site.</Button>
    
    <div className='flex gap-8 items-center justify-center mt-4'>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-orange-400 p-1 border-orange-400'>
        <a href="https://www.google.com" target='_blank'>      
        <img src={twitter} alt="Twitter"/>
        </a>
      </Button>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-orange-400 p-1 border-orange-400'>
        <img src={facebook} alt="Twitter"/>
      </Button>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-orange-400 p-1 border-orange-400'>
        <img src={youtube} alt="Twitter"/>
      </Button>
    </div>
    </main>
  )
}

export default App
