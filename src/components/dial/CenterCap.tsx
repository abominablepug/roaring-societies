export default function CenterCap({ size, children }: any) {
  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center font-semibold text-gray-800 pointer-events-none"
      style={{ width: size, height: size, background: 'linear-gradient(180deg,#f7f7f7,#e9e9e9)', boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.08)' }}
    >
      {children}
    </div>
  );
}
