export default function Notch({ angleDeg, size, rimSize, isMajor }: any) {
  // position: place a rotatable container at the wheel center, then translate the mark outwards
  const markHeight = rimSize * (isMajor ? 3.2 : 2.1);
  const radius = size / 2;
  const radiusOffset = radius - markHeight / 2; // place the mark so its center sits on circle border
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(-50%, -50%) rotate(${angleDeg}deg)`,
    transformOrigin: 'center center',
    pointerEvents: 'none',
  };

  const markStyle: React.CSSProperties = {
    width: rimSize,
    height: markHeight,
    background: isMajor ? '#111' : '#333',
    borderRadius: 2,
    opacity: 0.95,
    transform: `translateY(-${radiusOffset}px)`,
  };

  return (
    <div style={containerStyle} aria-hidden>
      <div style={markStyle} />
    </div>
  );
}
