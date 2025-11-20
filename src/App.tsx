import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TOPICS } from './data';
import type { Topic } from './types';
import Dial from './components/Dial';
import GameRoom from './components/GameRoom';
import Bibliography from './components/Bibliography';

function App() {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);

  return (
    <div className="min-h-screen bg-deco-black text-white font-sans selection:bg-deco-gold selection:text-black">
      
      {/* Landing / Dial Page */}
      {/* We hide the dial visually when a topic is active, but keep it in DOM or unmount it */}
      {!currentTopic && (
          <Dial 
            topics={TOPICS} 
            onSelect={(topic) => setCurrentTopic(topic)}
            dialImage="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000"
          />
      )}

      {/* Overlays */}
      <AnimatePresence mode="wait">
        {currentTopic && (
           currentTopic.isBibliography ? (
             <Bibliography key="bib" onClose={() => setCurrentTopic(null)} />
           ) : (
             <GameRoom 
                key="game"
                topic={currentTopic} 
                onExit={() => setCurrentTopic(null)}
                playerImage="https://cdn-icons-png.flaticon.com/512/206/206853.png" // Simple placeholder sprite
             />
           )
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;