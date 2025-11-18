import { useState } from 'react';
import Dial from './components/dial';
import dialImg from './images/dial.png';
import Overlay from './components/topic/Overlay';
import Topic from './components/topic';
import venky from './images/venky.png';
import door from './images/door.png';

export default function App() {
  const [screen, setScreen] = useState(0);

  return (
    <div className="h-screen w-full bg-[url(./images/imagebg.jpg)] bg-cover bg-center flex justify-center items-center">
      <Dial
        size={400}
        notches={8}
        initialIndex={0}
        onChange={(index) => setScreen(index)}
        imageSrc={dialImg}
      />

      <div style={{ display: 'none' }}>{screen}</div>

      <Overlay visible={screen !== 0} onClose={() => setScreen(0)}>
        <div className='flex align-center justify-center h-full w-full'>
          <Topic topicNumber={screen} characterSrc={venky} doorSrc={door} />
        </div>
      </Overlay>
    </div>
  )
}
