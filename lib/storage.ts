import { env } from 'cloudflare:workers';
export function storage(){if(!env.DB)throw new Error('Property storage is unavailable');return env.DB}
export function bucket(){if(!env.BUCKET)throw new Error('Media storage is unavailable');return env.BUCKET}
export function sameOrigin(request:Request){const origin=request.headers.get('origin');return !origin || origin===new URL(request.url).origin}
