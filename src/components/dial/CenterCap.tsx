export default function CenterCap({ size, children }: any) {
  return (
    <div
      className="rounded-full flex items-center justify-center font-semibold text-gray-800"
      style={{ width: size, height: size, background: 'linear-gradient(180deg,#f7f7f7,#e9e9e9)', boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.08)' }}
    >
      {children}
    </div>
  );
}
