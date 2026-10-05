'use client';

import {useEffect, useState} from 'react';
import {BotMessageSquare, House, X} from 'lucide-react';

export function AssistantWelcome({screen, active, onOpen}: {screen: string; active: boolean; onOpen: () => void}) {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (dismissed) return;
    const show = () => setExpanded(true);
    const timer = window.setTimeout(show, 2200);
    const surface = document.querySelector('.site');
    window.addEventListener('scroll', show, {passive: true});
    surface?.addEventListener('scroll', show, {passive: true});
    return () => {window.clearTimeout(timer); window.removeEventListener('scroll', show); surface?.removeEventListener('scroll', show);};
  }, [dismissed, screen]);
  const open = () => {setSelected(true); setExpanded(false); setDismissed(true); onOpen();};
  return <aside className={'assistant-welcome' + (selected || active ? ' is-selected' : '')} aria-label="Property assistant">
    {expanded && !active && <div className="assistant-card">
      <button className="assistant-dismiss" aria-label="Dismiss assistant welcome" onClick={() => {setExpanded(false); setDismissed(true);}}><X size={18}/></button>
      <div className="assistant-heading"><span className="assistant-emblem"><House size={24} aria-hidden="true"/></span><strong>Hi, I’m your property guide.</strong></div>
      <p>Looking for a home or land? Tell me your city and budget.</p>
      <button className="assistant-start" onClick={open}><BotMessageSquare size={20} aria-hidden="true"/>Let’s find your place</button>
    </div>}
    <button className="assistant-launcher" aria-haspopup="dialog" aria-expanded={active} onClick={open}><BotMessageSquare size={23} aria-hidden="true"/><span>Ask property assistant</span></button>
  </aside>;
}
