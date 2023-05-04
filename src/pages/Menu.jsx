import { Link } from 'react-router-dom';
import Logo from "./../assets/blend_logo.png"
export default function Menu() {
    const titles = [
        { title: 'Home', path: '/' },
        { title: 'Recommandation', path: '/recommandation' },
        { title: 'Random Cocktail', path: '/cocktail-aleatoire' },
    ];

    return (
        <div className="min-h-screen bg-raisin-black text-white flex flex-col items-center">
            <header className="bg-raisin-black mt10">
                <Link to="/">
                    <img src={Logo} alt="logo Blend" className="shadow-lg shadow-pacific-cyan rounded-full w-32 mt-10" />
                </Link>
            </header>

            <main className="p-8">
                <ul className="space-y-8 flex flex-col items-center">
                    {titles.map((titleItem, index) => (
                        <li key={index} className="text-xl font-title">
                            <Link
                                to={titleItem.path}
                                className="text-white underline"
                            >
                                <h1>{titleItem.title}</h1>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
    );
}