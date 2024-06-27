import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

export function ErrorPage() {
    return (
        <main className="bg-[#FFB534] w-screen h-screen flex flex-col items-center justify-center
        ">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-background">Une erreur est survenue.</h1>
            <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-center text-secondary w-[27rem] mt-4">La page que vous essayez de rejoindre n'existe pas ou à été déplacée ailleurs.</h3>
            <Button className='bg-background text-orange-500 text-lg mt-4 hover:bg-muted hover:text-orange-600 hover:scale-105 transition-all duration-200'>
      <Link to="/"> Retourner au portail.</Link>
    </Button>
        </main>
    )
}