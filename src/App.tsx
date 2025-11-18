import { useState } from 'react';
import Dial from './components/dial';
import dialImg from './images/dial.png';
import Overlay from './components/topic/Overlay';

export default function App() {
  const [screen, setScreen] = useState(0);

  return (
    <div className="h-screen w-full bg-[url(./images/imagebg.jpg)] bg-cover bg-center flex justify-center items-center">
      <Dial
        size={400}
        notches={6}
        initialIndex={0}
        onChange={(index) => setScreen(index)}
        imageSrc={dialImg}
      />

      <div style={{ display: 'none' }}>{screen}</div>

      <Overlay visible={screen !== 0} onClose={() => setScreen(0)}>
        <div className='flex align-center justify-center h-full w-full'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-7xl'>COOL GAME HERE</h1>
          </div>
        </div>
      </Overlay>
    </div>
  )
}
