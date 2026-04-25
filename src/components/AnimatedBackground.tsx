import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-surface">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/5 blur-[120px] animate-blob" />
      <div className="absolute bottom-[10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-tertiary/5 blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-[110px] animate-blob animation-delay-4000" />
    </div>
  );
};

export default AnimatedBackground;
