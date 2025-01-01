import { Player } from "./components/player"

export default function Page() {
    return (<>
        <header className="bg-yellow-100 text-yellow-800 mb-4 text-center text-2xl">Olá mundo! Testando server, feliz ano novo!</header>
        <main className="flex flex-grow flex-col justify-evenly content-center">
            {/* <div className="flex flex-col justify-between"> */}
            <div className="m-8 self-stretch">
                <h1 className="text-yellow-800 text-8xl text-center">Feliz 2025</h1>
            </div>
            <div className="m-8">
                <h3 className="text-6xl text-yellow-800 text-center">Que tudo se conserte e nada estrague.</h3>
            </div>
            
            {/* </div> */}
        </main>
        <div className="flex-col content-end m-2">
                <Player></Player>
            </div>
        <footer className="bg-yellow-100 text-center">Made By Hermes</footer>
    </>
    )
}
export const dynamic = 'force-dynamic'