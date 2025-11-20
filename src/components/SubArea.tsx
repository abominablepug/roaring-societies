import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Door, InteractionItem, InfoContent, QuestionContent, ImageContent } from '../types';
import { X, Volume2, HelpCircle, Image as ImageIcon } from 'lucide-react';

interface SubAreaProps {
    door: Door;
    onClose: () => void;
}

const SubArea: React.FC<SubAreaProps> = ({ door, onClose }) => {
  const [selectedItem, setSelectedItem] = useState<InteractionItem | null>(null);

  const playAudio = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-deco-paper w-full max-w-5xl h-[80vh] rounded-lg shadow-2xl overflow-hidden flex flex-col border-4 border-deco-gold"
        >
            {/* Header */}
            <div className="bg-deco-black p-6 flex justify-between items-center border-b-4 border-deco-gold">
                <div>
                    <h2 className="text-3xl text-deco-gold font-serif font-bold">{door.destinationTitle}</h2>
                    <p className="text-gray-400 text-sm uppercase tracking-widest">{door.label}</p>
                </div>
                <button onClick={onClose} className="text-white hover:text-deco-gold transition">
                    <X size={32} />
                </button>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar List of Items */}
                <div className="w-1/3 bg-gray-200 border-r border-gray-300 overflow-y-auto p-4 space-y-3">
                    <h3 className="font-serif font-bold text-xl mb-4 text-deco-black border-b border-gray-400 pb-2">Artifacts</h3>
                    
                    {!door.items || door.items.length === 0 && <p className="italic text-gray-500">No artifacts found here.</p>}

                    {door.items && door.items.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`w-full text-left p-4 rounded border transition flex items-center gap-3 ${selectedItem?.id === item.id ? 'bg-deco-black text-deco-gold border-deco-gold' : 'bg-white text-gray-800 hover:bg-gray-50'}`}
                        >
                            {item.type === 'info' && <Volume2 size={20} />}
                            {item.type === 'question' && <HelpCircle size={20} />}
                            {item.type === 'image' && <ImageIcon size={20} />}
                            <span className="font-bold">{item.title}</span>
                        </button>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="w-2/3 bg-deco-paper p-8 overflow-y-auto flex flex-col items-center justify-center text-deco-black relative">
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"></div>
                    
                    {selectedItem ? (
                        <div className="w-full max-w-xl z-10">
                            
                            {/* INFO CARD */}
                            {selectedItem.type === 'info' && (
                                <div className="text-center">
                                    <Volume2 size={48} className="mx-auto mb-4 text-deco-black" />
                                    <h3 className="text-4xl font-serif mb-6 underline decoration-deco-gold">{selectedItem.title}</h3>
                                    <p className="text-xl leading-relaxed font-serif mb-8">"{(selectedItem as InfoContent).text}"</p>
                                    <button 
                                        onClick={() => playAudio((selectedItem as InfoContent).text)}
                                        className="bg-deco-black text-deco-gold px-6 py-2 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition"
                                    >
                                        Listen to Narration
                                    </button>
                                </div>
                            )}

                            {/* IMAGE CARD */}
                            {selectedItem.type === 'image' && (
                                <div className="bg-white p-4 shadow-lg rotate-1 border border-gray-300">
                                    <img src={(selectedItem as ImageContent).src} alt="Historical" className="w-full h-auto max-h-96 object-contain mb-4 sepia-[.3]" />
                                    <p className="font-serif italic text-center text-gray-700">{(selectedItem as ImageContent).caption}</p>
                                </div>
                            )}

                            {/* QUESTION CARD */}
                            {selectedItem.type === 'question' && (
                                <TriviaCard item={selectedItem as QuestionContent} />
                            )}
                        </div>
                    ) : (
                        <div className="text-center opacity-50">
                            <p className="text-2xl font-serif italic">Select an artifact from the left to examine it.</p>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    </div>
  );
};

// Internal Component for Trivia
const TriviaCard = ({ item }: { item: QuestionContent }) => {
    const [status, setStatus] = useState<'unanswered' | 'correct' | 'wrong'>('unanswered');

    const checkAnswer = (ans: string) => {
        if(ans === item.correctAnswer) setStatus('correct');
        else setStatus('wrong');
    }

    return (
        <div className="w-full">
            <h3 className="text-2xl font-bold mb-4 font-serif">Trivia Challenge</h3>
            <p className="text-xl mb-6">{item.question}</p>
            <div className="space-y-3">
                {item.options.map(opt => (
                    <button 
                        key={opt}
                        disabled={status === 'correct'}
                        onClick={() => checkAnswer(opt)}
                        className={`w-full p-4 text-left border-2 rounded font-bold transition
                            ${status === 'unanswered' ? 'border-deco-black hover:bg-deco-gold' : ''}
                            ${status === 'correct' && opt === item.correctAnswer ? 'bg-green-700 text-white border-green-700' : ''}
                            ${status === 'wrong' && opt === item.correctAnswer ? 'bg-green-700 text-white' : ''}
                            ${status === 'wrong' && opt !== item.correctAnswer ? 'opacity-50' : ''}
                        `}
                    >
                        {opt}
                    </button>
                ))}
            </div>
            {status === 'correct' && <p className="mt-4 text-green-800 font-bold text-center text-xl animate-bounce">Correct!</p>}
            {status === 'wrong' && <p className="mt-4 text-red-800 font-bold text-center text-xl">Incorrect, try again.</p>}
        </div>
    )
}

export default SubArea;