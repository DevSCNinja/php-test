import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detail({ pokemonName }) {
    const [pokemonInfo, setPokemonInfo] = useState([]);
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
            console.log("response => ", response)
            setPokemonInfo(response.data)
        }).catch((error) => {
            console.log("error => ", error)
            setPokemonInfo([])
        })
    }, [pokemonName]);

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className='max-w-6xl' >
                            <div className="w-full flex justify-end">
                                <Link href='/' className='underline hover:text-blue-500' >go to home</Link>
                            </div>
                        </header>
                        <main className="mt-6">
                            <div className="max-w-6xl mx-auto">
                                <div
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 "
                                >
                                    <div
                                        id="screenshot-container"
                                        className="relative flex w-full flex-col"
                                    >
                                        <div className='w-full mb-4'>
                                            <h1 className="font-semibold text-xl text-gray-800 leading-tight"> Pokémon Name: {pokemonName} </h1>
                                        </div>
                                        <div class="grid grid-cols-1 divide-y">
                                            <div className='flex'>

                                                <img src={pokemonInfo?.sprites?.front_default} alt="" />
                                            </div>

                                            <div className='flex '>
                                                <div className='mr-4'>species : </div>
                                                <div>
                                                    <p> name: {pokemonInfo?.species?.name} </p>
                                                    <p> url: {pokemonInfo?.species?.url} </p>
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div>
                                                    <p> height: {pokemonInfo?.height} </p>
                                                    <p> weight: {pokemonInfo?.weight} </p>
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div className='mr-4'>abilities : </div>
                                                <div>
                                                    {pokemonInfo?.abilities && pokemonInfo?.abilities?.map((ability, index) => (
                                                        <p key={index}> {ability?.ability?.name} ( {ability?.ability?.url} ) </p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div className='mr-4'>stats : </div>
                                                <div>
                                                    {pokemonInfo?.stats?.map((stat, index) => (
                                                        <p key={index}> {stat?.stat?.name} ( {stat?.stat?.url} ) </p>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className='flex '>
                                                <div className='mr-4'>types : </div>
                                                <div>
                                                    {pokemonInfo?.types?.map((type, index) => (
                                                        <p key={index}> {type?.type?.name} ( {type?.type?.url} ) </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
