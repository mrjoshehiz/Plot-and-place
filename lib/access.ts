import {getChatGPTUser} from '@/app/chatgpt-auth';
import {env} from 'cloudflare:workers';
export async function visitor(){const user=await getChatGPTUser();const ownerEmail=(env as unknown as {OWNER_EMAIL?:string}).OWNER_EMAIL?.trim().toLowerCase();return {user,isOwner:!!user&&!!ownerEmail&&user.email.toLowerCase()===ownerEmail}}
export const privateHeaders={'Cache-Control':'private, no-store'};
