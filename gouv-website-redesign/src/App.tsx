
import { Button } from '@/components/ui/button'
import twitter from '/twitter.svg'
import facebook from '/facebook.svg'
import youtube from '/youtube.svg'
import logo from '/logo.svg'
import { Link } from 'react-router-dom'


function App() {

  return (
    <main className="bg-[#F57F01] w-screen h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="" className='w-40 mb-6'/>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-background text-center">Portail du Gouvernement.</h1>
    <p className="leading-7 [&:not(:first-child)]:mt-2 text-background text-xl text-center w-[30rem]">
      Bienvenue sur le portail du gouvernement, la porte d'entrée à toutes les informations du gouvernement ivoirien.
    </p>
    <Button className='bg-background text-[#F57F01] text-lg mt-4 hover:bg-muted hover:scale-105 transition-all duration-200'>
      <Link to="/home">Entrez sur le site.</Link>
    </Button>
    
    <div className='flex gap-8 items-center justify-center mt-4'>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#fc9425] p-1 border-[#fc9425]'>
        <a href="https://www.google.com" target='_blank'>      
        <img src={twitter} alt="Twitter"/>
        </a>
      </Button>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#fc9425] p-1 border-[#fc9425]'>
      <a href="https://www.google.com" target='_blank'>      
        <img src={facebook} alt="Twitter"/>
        </a>
      </Button>
      <Button variant='outline' size='icon' className='bg-transparent hover:bg-[#fc9425] p-1 border-[#fc9425]'>
      <a href="https://www.google.com" target='_blank'>      
        <img src={youtube} alt="Twitter"/>
        </a>
      </Button>
    </div>
    <h1 className="w-full text-2xl font-semibold text-center mt-5 text-white italic">Ce site est juste un redesign de la page officielle.</h1>
    </main>
  )
}

export default App
