import { useEffect, useState } from 'react';

const FloatingBalloons = () => {
  const [items, setItems] = useState<Array<{ id: number; left: string; delay: number; duration: number; emoji: string }>>([]);

  useEffect(() => {
    const floatingEmojis = ['🎈', '🎁', '🌹', '🎈', '🎁', '🌹', '🎈', '🎁'];
    const newItems = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${10 + Math.random() * 80}%`,
      delay: Math.random() * 8,
      duration: 18 + Math.random() * 8,
      emoji: floatingEmojis[i % floatingEmojis.length],
    }));
    setItems(newItems);
  }, []);

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 1,
    }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: 'absolute',
            fontSize: '2.5rem',
            left: item.left,
            animation: `floatUp ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            opacity: 0.8,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
          }}
        >
          {item.emoji}
        </div>
      ))}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(120vh) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20vh) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingBalloons;
