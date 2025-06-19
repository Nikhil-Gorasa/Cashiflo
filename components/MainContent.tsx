'use client';

import dynamic from 'next/dynamic';
import Preloader from './Preloader';

// Dynamically import Spline with no SSR to avoid hydration issues
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-black" />
});

export default function MainContent() {
  return (
    <>
      <Preloader />
      <div className="website-content">
        <main className="w-screen h-screen bg-black">
          <Spline scene="https://prod.spline.design/hrs3OYE4IJDvTpoR/scene.splinecode" />
        </main>
      </div>
    </>
  );
} 