import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BibliographyProps {
    onClose: () => void;
}

const Bibliography: React.FC<BibliographyProps> = ({ onClose }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const sources = [
        { 
            title: "United States History Savvas 12.6: An Unsettled Society", 
            author: "Course Material", 
            link: "#" 
        },
        { 
            title: "AP United States History Chapter 21", 
            author: "Course Material", 
            link: "#" 
        },
        { 
            title: "The Great Migration", 
            author: "Encyclopedia Britannica", 
            link: "https://www.britannica.com/event/Great-Migration" 
        },
        { 
            title: "Sharecroppers", 
            author: "American Battlefield Trust", 
            link: "https://www.battlefields.org/learn/articles/sharecroppers" 
        },
        { 
            title: "The Great Migration", 
            author: "History.com", 
            link: "https://www.history.com/articles/great-migration" 
        },
        { 
            title: "A New African American Identity: The Harlem Renaissance", 
            author: "NMAAHC", 
            link: "https://nmaahc.si.edu/explore/stories/new-african-american-identity-harlem-renaissance" 
        },
        { 
            title: "Brown v. Board: Discover", 
            author: "Library of Congress", 
            link: "https://www.loc.gov/exhibits/brown/discover-6.html" 
        },
        { 
            title: "The Roaring Twenties: Society", 
            author: "BBC Bitesize", 
            link: "https://www.bbc.co.uk/bitesize/guides/z9b4srd/revision/4" 
        },
        { 
            title: "The Palmer Raids and Suppression of Dissent", 
            author: "First Amendment Encyclopedia", 
            link: "https://firstamendment.mtsu.edu/article/the-palmer-raids-and-suppression-of-dissent/" 
        },
        { 
            title: "The Birth of the Civil Liberties Bureau (1917-1919)", 
            author: "Princeton University Archives", 
            link: "https://universityarchives.princeton.edu/2012/09/the-birth-of-the-civil-liberties-bureau-and-the-national-civil-liberties-bureau1917-1919/" 
        },
        { 
            title: "ACLU Defends KKK's Right to Free Speech", 
            author: "ACLU", 
            link: "https://www.aclu.org/press-releases/aclu-em-defends-kkks-right-free-speech" 
        },
        { 
            title: "Roots of Prohibition", 
            author: "PBS / Ken Burns", 
            link: "https://www.pbs.org/kenburns/prohibition/roots-of-prohibition" 
        },
        { 
            title: "Temperance and Home Protection (1876)", 
            author: "Iowa State University", 
            link: "https://awpc.cattcenter.iastate.edu/2020/11/04/temperance-and-home-protection-1876/" 
        },
        { 
            title: "Prohibition: Unintended Consequences", 
            author: "PBS / Ken Burns", 
            link: "https://www.pbs.org/kenburns/prohibition/unintended-consequences" 
        },
        { 
            title: "Gitlow v. New York (Case Summary)", 
            author: "Oyez", 
            link: "https://www.oyez.org/cases/1900-1940/268us652" 
        },
        { 
            title: "Gitlow v. New York", 
            author: "Encyclopedia Britannica", 
            link: "https://www.britannica.com/event/Gitlow-v-New-York" 
        },
        { 
            title: "A Few Reflections on the Benjamin Gitlow Story", 
            author: "The Fire", 
            link: "https://www.thefire.org/news/blogs/ronald-kl-collins-first-amendment-news/few-reflections-benjamin-gitlow-story-landmark#:~:text=Gitlow%20and%20his%20ideological%20comrades,the%20power%20of%20the%20state.%E2%80%9D" 
        },
        { 
            title: "Amendment I", 
            author: "Constitution.Congress.gov", 
            link: "https://constitution.congress.gov/constitution/amendment-1/" 
        },
        { 
            title: "Amendment XIV", 
            author: "Constitution.Congress.gov", 
            link: "https://constitution.congress.gov/constitution/amendment-14/" 
        },
        { 
            title: "Amendment XVIII", 
            author: "Constitution.Congress.gov", 
            link: "https://constitution.congress.gov/constitution/amendment-18/" 
        },
        { 
            title: "Dillingham Commission Reports", 
            author: "Immigration History", 
            link: "https://immigrationhistory.org/item/dillingham-commission-reports/" 
        },
        { 
            title: "Harding Scholar Works Article", 
            author: "Harding University", 
            link: "https://scholarworks.harding.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1054&context=tenor" 
        },
        { 
            title: "1917 Barred Zone Act", 
            author: "Immigration History", 
            link: "https://immigrationhistory.org/item/1917-barred-zone-act/" 
        },
        { 
            title: "1921 Emergency Quota Law", 
            author: "Immigration History", 
            link: "https://immigrationhistory.org/item/%E2%80%8B1921-emergency-quota-law/" 
        },
        { 
            title: "The Immigration Act of 1924", 
            author: "Office of the Historian", 
            link: "https://history.state.gov/milestones/1921-1936/immigration-act" 
        },
        { 
            title: "Famous Cases: Palmer Raids", 
            author: "FBI.gov", 
            link: "https://www.fbi.gov/history/famous-cases/palmer-raids" 
        },
        { 
            title: "JSTOR Article: 259851", 
            author: "JSTOR", 
            link: "https://www.jstor.org/stable/259851" 
        },
        { 
            title: "Criminal Syndicalism Laws", 
            author: "First Amendment Encyclopedia", 
            link: "https://firstamendment.mtsu.edu/encyclopedia/case/criminal-syndicalism-laws/" 
        },
        { 
            title: "Old Immigrants vs New Immigrants", 
            author: "American Historama", 
            link: "https://www.american-historama.org/1881-1913-maturation-era/old-immigrants-vs-new-immigrants.htm" 
        }
    ];

    // Pagination Logic
    const totalPages = Math.ceil(sources.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSources = sources.slice(indexOfFirstItem, indexOfLastItem);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-deco-black flex flex-col items-center justify-center p-8"
        >
            <div className="border-4 border-deco-gold p-10 max-w-4xl w-full bg-deco-black relative flex flex-col h-full max-h-[800px]">
                {/* Corners */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-deco-gold -mt-4 -ml-4"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-deco-gold -mt-4 -mr-4"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-deco-gold -mb-4 -ml-4"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-deco-gold -mb-4 -mr-4"></div>

                <h1 className="text-5xl font-serif text-deco-gold text-center mb-8 uppercase tracking-widest">Bibliography</h1>

                {/* List Container - set to grow to fill space */}
                <div className="flex-1 space-y-6 overflow-y-auto">
                    {currentSources.map((source, index) => (
                        <a key={index} href={source.link} target="_blank" rel="noopener noreferrer" className="block group border-b border-gray-800 pb-4 hover:border-deco-gold transition">
                            <div className="flex justify-between items-end">
                                <span className="text-xl md:text-2xl font-serif text-white group-hover:text-deco-gold transition italic truncate pr-4">
                                    {source.title}
                                </span>
                                <span className="text-gray-500 uppercase text-xs md:text-sm tracking-wider whitespace-nowrap">{source.author}</span>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-8 mt-8 mb-8">
                    <button 
                        onClick={handlePrev} 
                        disabled={currentPage === 1}
                        className={`text-3xl text-deco-gold transition ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-125 cursor-pointer'}`}
                    >
                        &#8592; {/* Left Arrow */}
                    </button>
                    
                    <span className="text-white font-serif text-lg tracking-widest">
                        PAGE {currentPage} <span className="text-gray-500 text-sm mx-2">OF</span> {totalPages}
                    </span>

                    <button 
                        onClick={handleNext} 
                        disabled={currentPage === totalPages}
                        className={`text-3xl text-deco-gold transition ${currentPage === totalPages ? 'opacity-30 cursor-not-allowed' : 'hover:scale-125 cursor-pointer'}`}
                    >
                        &#8594; {/* Right Arrow */}
                    </button>
                </div>

                <div className="text-center">
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