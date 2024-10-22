import { Link, Head } from '@inertiajs/react';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';

export default function Welcome() {
    const [pokelist, setPokelist] = useState([]); 
    const [search, setSearch] = useState('');
    const [memoCount, memoSetCount] = useState(0); 
    const [loading, setLoading] = useState(true);

    const handleSearch = (e) => {
        setSearch(e.target.value.trim());
    }
0
    const PokeLists = useMemo(async () => {
        if (memoCount === 0) {
            memoSetCount(1);
        }
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        if (response.status === 200) {
            return response.data;
        } else return null;
    }, [memoCount])

    useEffect(() => {
        setLoading(true)
        PokeLists.then((data) => {
            console.log("poke list => ", data)
            setPokelist(data);
        }).catch((error) => {
            console.log("error => ", error)
            setPokelist([]);
        }).finally(() => {
            setLoading(false)
        })
    }, [PokeLists]);

    useEffect(() => {
        setLoading(true)

        if (search != "") {
            PokeLists.then((data) => {
                var temp = data.results.filter((item) => item.name.includes(search))
                setPokelist({ ...data, results: temp });
            }).catch((error) => {
                console.log("error => ", error)
                setPokelist([]);
            }).finally(() => {
                setLoading(false)
            })
        } else {
            PokeLists.then((data) => {
                console.log("poke list => ", data)
                setPokelist(data);
            }).catch((error) => {
                console.log("error => ", error)
                setPokelist([]);
            }).finally(() => {
                setLoading(false)
            })
        }
    }, [search]);

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
                                            <input type="text" className='w-full' value={search} onChange={handleSearch} placeholder={`Search available count (${pokelist?.count || 0})`} />
                                        </div>
                                        <ul className='w-full list-inside' style={{ 
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gridGap: '10px'
                                        }}>
                                            {loading ? <>loading...</> : pokelist?.results && pokelist?.results?.map((pokemon, index) => (
                                                
                                                <li key={index} className='py-1'>
                                                    <Link href={`/overview/${pokemon.name}`} className='underline hover:text-blue-500'>{pokemon.name}</Link>
                                                </li>
                                            )) }
                                        </ul>
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
