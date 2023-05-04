import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 relative overflow-hidden bg-conic-gradient">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left mt-5">
                        <h2 className="font-bold font-title mb-2">Adresse</h2>
                        <p className="font-body">
                            123 Rue des Exemples<br />
                            75000 Paris<br />
                            France
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left mt-5">
                        <h2 className="font-bold font-title mb-2">Téléphone</h2>
                        <p className="font-body">+33 1 23 45 67 89</p>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left mt-5">
                        <h2 className="font-bold font-title mb-2">Email</h2>
                        <p className="font-body">contact@exemple.com</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm font-body">&copy; {new Date().getFullYear()} Exemple. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
