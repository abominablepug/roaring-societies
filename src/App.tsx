import { useState } from 'react';
import Dial from './components/dial';

export default function App() {
  const [screen, setScreen] = useState(0);

  const generateScreen = () => {
    switch (screen) {
      case 0:
        return (
          <div className='flex h-screen w-full justify-center items-center bg-gray-200'>
            <Dial
              size={300}
              notches={12}
              initialIndex={0}
              onChange={(index) => setScreen(index)}
            />
          </div>
        )
      default:
        return (
          <div className='flex h-screen w-full justify-center items-center bg-red-500'>
            <h1>Server Error 500</h1>
          </div>
        )
    }
  }

  return (
    <div className="h-screen w-full bg-[url(./images/imagebg.jpg)] bg-cover bg-center flex justify-center items-center">
      <Dial
        size={400}
        notches={10}
        initialIndex={0}
        onChange={(index) => setScreen(index)}
      />
    </div>
  )
}
