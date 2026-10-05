'use client';

import {useEffect, useRef, useState} from 'react';

export function HomeWalkthrough() {
  const video = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    const sync = () => {
      if (!visible || document.hidden || preference.matches) element.pause();
      else void element.play().catch(() => setReady(false));
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, {threshold: .1});
    observer.observe(element);
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    sync();
    return () => {observer.disconnect(); preference.removeEventListener('change', sync); document.removeEventListener('visibilitychange', sync);};
  }, []);

  return <>
    <img className="walkthrough-poster" src="/home-walkthrough-poster.jpg" width={1280} height={720} fetchPriority="high" alt="Contemporary courtyard home with a pool"/>
    {!failed && <video ref={video} className={'hero-video' + (ready ? ' is-ready' : '')} muted loop playsInline preload="metadata" poster="/home-walkthrough-poster.jpg" aria-label="Architectural concept walkthrough from the courtyard pool into the living and dining room" onCanPlay={() => setReady(true)} onError={() => {setFailed(true); setReady(false);}}><source src="/home-walkthrough.mp4" type="video/mp4"/></video>}

  </>;
}

const concepts = [
  {image: '/inspiration-courtyard.jpg', title: 'A quieter courtyard', alt: 'Contemporary tropical courtyard home with a landscaped garden'},
  {image: '/inspiration-duplex.jpg', title: 'Room for everyday life', alt: 'Two-storey family duplex with natural stone and glass'},
  {image: '/inspiration-interior.jpg', title: 'Open to the outdoors', alt: 'Airy modern living room opening onto a garden'},
];

export function HomeInspiration() {
  return <section className="home-inspiration" aria-labelledby="inspiration-title">
    <div className="inspiration-heading"><div><p className="eyebrow">Home inspiration</p><h2 id="inspiration-title">Picture the possibilities.</h2></div></div>
    <div className="inspiration-window"><div className="inspiration-track">{[0, 1].map(copy => <div className="inspiration-set" key={copy} aria-hidden={copy === 1 ? true : undefined}>{concepts.map(concept => <figure key={concept.image}><img src={concept.image} alt={copy === 0 ? concept.alt : ''} width={960} height={640} loading="lazy"/><figcaption>{concept.title}</figcaption></figure>)}</div>)}</div></div>
  </section>;
}
