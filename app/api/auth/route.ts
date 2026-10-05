import {visitor,privateHeaders} from '@/lib/access';
export async function GET(){const {user,isOwner}=await visitor();return Response.json({signedIn:!!user,isOwner},{headers:privateHeaders})}
