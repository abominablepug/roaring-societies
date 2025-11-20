import React from 'react';
import { motion } from 'framer-motion';

interface BibliographyProps {
    onClose: () => void;
}

const Bibliography: React.FC<BibliographyProps> = ({ onClose }) => {
    const sources = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", link: "#" },
        { title: "Jazz: A History of America's Music", author: "Geoffrey C. Ward", link: "#" },
        { title: "Flapper: A Madcap Story of Sex, Style, Celebrity", author: "Joshua Zeitz", link: "#" },
        { title: "The Library of Congress Digital Collections", author: "loc.gov", link: "https://www.loc.gov" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deco-black flex flex-col items-center justify-center p-8"
        >
            <div className="border-4 border-deco-gold p-10 max-w-4xl w-full bg-deco-black relative">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-deco-gold -mt-4 -ml-4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-deco-gold -mt-4 -mr-4"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-deco-gold -mb-4 -ml-4"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-deco-gold -mb-4 -mr-4"></div>

                <h1 className="text-5xl font-serif text-deco-gold text-center mb-12 uppercase tracking-widest">Bibliography</h1>

                <div className="space-y-6">
                    {sources.map((source, index) => (
                        <a key={index} href={source.link} className="block group border-b border-gray-800 pb-4 hover:border-deco-gold transition">
                            <div className="flex justify-between items-end">
                                <span className="text-2xl font-serif text-white group-hover:text-deco-gold transition italic">
                                    {source.title}
                                </span>
                                <span className="text-gray-500 uppercase text-sm tracking-wider">{source.author}</span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button 
                        onClick={onClose}
                        className="bg-deco-gold text-deco-black px-12 py-3 font-bold uppercase tracking-widest hover:bg-white transition"
                    >
                        Return to Start
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Bibliography;