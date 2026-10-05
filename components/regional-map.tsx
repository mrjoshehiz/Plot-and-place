'use client';
import {useEffect,useRef,useState} from 'react';
import type {Map as LeafletMap} from 'leaflet';

export function RegionalMap(){
  const surface=useRef<HTMLDivElement>(null);
  const [failed,setFailed]=useState(false);
  const [attempt,setAttempt]=useState(0);
  useEffect(()=>{
    let disposed=false,loaded=false,map:LeafletMap|undefined,resize:ResizeObserver|undefined;
    const timeout=setTimeout(()=>{if(!disposed&&!loaded)setFailed(true)},8000);
    import('leaflet').then(L=>{
      if(disposed||!surface.current)return;
      const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      map=L.map(surface.current,{scrollWheelZoom:false,dragging:!L.Browser.mobile,tapHold:false,zoomAnimation:!reduced,fadeAnimation:!reduced,markerZoomAnimation:false}).setView([7.8,6.2],6);
      map.attributionControl.setPrefix(false);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).on('tileload',()=>{loaded=true;clearTimeout(timeout);if(!disposed)setFailed(false)}).addTo(map);
      resize=new ResizeObserver(()=>map?.invalidateSize({animate:false}));resize.observe(surface.current);
    }).catch(()=>{if(!disposed)setFailed(true)});
    return()=>{disposed=true;clearTimeout(timeout);resize?.disconnect();map?.remove()};
  },[attempt]);
  return <div className="regional-map"><div ref={surface} inert={failed?true:undefined} aria-hidden={failed||undefined} style={{height:'100%',width:'100%'}} role="region" aria-label="Regional map of Nigeria. Use plus and minus to zoom. Property locations are not shown."/>{failed&&<div className="map-fallback" role="status"><p>The map could not load. You can continue browsing the properties below.</p><button className="btn light" onClick={()=>{setFailed(false);setAttempt(n=>n+1)}}>Retry map</button></div>}</div>;
}
