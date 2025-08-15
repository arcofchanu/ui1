import React, { useState, useEffect } from 'react';

interface AppState {
  phase: 'welcome' | 'zooming' | 'blackScreen';
  buttonVisible: boolean;
  buttonFadingOut: boolean;
}

function App() {
  const [state, setState] = useState<AppState>({
    phase: 'welcome',
    buttonVisible: false,
    buttonFadingOut: false
  });

  // Button fade-in animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(prev => ({ ...prev, buttonVisible: true }));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    // Start button fade-out
    setState(prev => ({ ...prev, buttonFadingOut: true }));
    
    // After button fades out, start zoom
    setTimeout(() => {
      setState(prev => ({ ...prev, phase: 'zooming' }));
    }, 500);

    // After zoom animation, show black screen
    setTimeout(() => {
      setState(prev => ({ ...prev, phase: 'blackScreen' }));
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Welcome Phase */}
      {state.phase === 'welcome' && (
        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-1000 ease-in-out">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/welcome.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              }}
            />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          {/* Button */}
          <button
            onClick={handleButtonClick}
            className={`
              relative z-10 px-12 py-6 text-xl font-bold text-white 
              text-yellow-400
              bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900
              rounded-full shadow-2xl border-2 border-green-600
              hover:from-amber-800 hover:via-amber-700 hover:to-amber-800
              hover:scale-105 hover:shadow-3xl
              transition-all duration-300 ease-out relative overflow-hidden
              transform
              ${state.buttonVisible && !state.buttonFadingOut 
                ? 'opacity-100 translate-y-0' 
                : state.buttonFadingOut 
                ? 'opacity-0 translate-y-4' 
                : 'opacity-0 translate-y-8'
              }
            `}
            style={{ 
              fontFamily: 'Metamorphous, serif',
              backgroundColor: '#ffffff',
              transitionProperty: 'opacity, transform, background, box-shadow, scale',
              transitionDuration: '500ms, 500ms, 300ms, 300ms, 300ms'
            }}
          >
            <span className="relative z-10">Explore the world of HOBBIT's</span>
            
            {/* Enhanced woody texture overlays */}
            <div className="absolute inset-0 rounded-full opacity-40 bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900"></div>
            <div className="absolute inset-0 rounded-full opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-700 via-transparent to-amber-900"></div>
            <div className="absolute inset-0 rounded-full opacity-25 bg-gradient-to-r from-yellow-900 via-amber-800 to-yellow-900"></div>
            
            {/* Enhanced wood grain effects */}
            <div className="absolute inset-0 rounded-full opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(139,69,19,0.4)_25%,rgba(139,69,19,0.4)_50%,transparent_50%,transparent_75%,rgba(139,69,19,0.4)_75%)] bg-[length:6px_6px]"></div>
            <div className="absolute inset-0 rounded-full opacity-15 bg-[linear-gradient(90deg,transparent_30%,rgba(101,67,33,0.5)_30%,rgba(101,67,33,0.5)_70%,transparent_70%)] bg-[length:12px_4px]"></div>
            <div className="absolute inset-0 rounded-full opacity-10 bg-[linear-gradient(135deg,rgba(160,82,45,0.3)_0%,transparent_25%,rgba(160,82,45,0.3)_50%,transparent_75%,rgba(160,82,45,0.3)_100%)] bg-[length:10px_10px]"></div>
            
            {/* Wood knots and natural imperfections */}
            <div className="absolute top-3 left-8 w-3 h-3 rounded-full bg-amber-900 opacity-30"></div>
            <div className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-yellow-900 opacity-25"></div>
            <div className="absolute top-1/2 right-6 w-1 h-4 bg-amber-800 opacity-20 rounded-full transform -rotate-12"></div>
            
            {/* Subtle glow effect with woody color */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-700 opacity-20 blur-md"></div>
          </button>
        </div>
      )}

      {/* Zooming Phase */}
      {state.phase === 'zooming' && (
        <div className="absolute inset-0 flex items-center justify-center animate-zoom-in">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/welcome.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
              }}
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      )}

      {/* Black Screen Phase */}
      {state.phase === 'blackScreen' && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <p 
            className="text-4xl text-white animate-fade-in-slow"
            style={{ fontFamily: 'Metamorphous, serif' }}
          >
            It's done soon
          </p>
        </div>
      )}
    </div>
  );
}

export default App;