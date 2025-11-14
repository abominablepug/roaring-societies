export default function Screen({ children }: { children: React.ReactNode }) {
    return (
    <div className="h-[50dvh] aspect-video bg-black flex items-center justify-center border border-white">
        {children}
    </div>
    );
}