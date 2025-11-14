export default function ScreenImage({ src }: { src: string; }) {
  return (
    <img src={src} alt="Image" className="flex-1" />
  );
}