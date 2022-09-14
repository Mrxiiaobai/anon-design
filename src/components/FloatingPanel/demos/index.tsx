import React, { useEffect, useRef } from 'react';
import { FloatingPanel } from '@anon/design-mobile';

const anchors = [100, window.innerHeight * 0.2, window.innerHeight * 0.8];
const minHeight = anchors[0];
const maxHeight = anchors[anchors.length - 1];

const App = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const onHeightChange = (height: number) => {
    const ratio = height / maxHeight;
    const target = targetRef.current;
    if (!target) return;
    target.style.height = '100%';
    target.style.backgroundImage = `linear-gradient(rgba(185,147,214,${ratio}),rgba(140,166,219,${ratio}))`;
  };

  useEffect(() => {
    onHeightChange(minHeight);
  }, []);

  return (
    <div
      style={{
        padding: 12,
      }}
    >
      <p>结合onHeightChange实现透明度变化</p>

      <FloatingPanel anchors={anchors} onHeightChange={onHeightChange}>
        <div ref={targetRef} />
      </FloatingPanel>
    </div>
  );
};

export default App;
