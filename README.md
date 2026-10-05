# Plot & Place

Source for the Nigerian property discovery website, including the responsive interface, property search and filters, map, saved properties, inspection bookings, owner listings, media uploads, home concepts, assistant and walkthrough video.

Live site: https://plot-and-place.sylviemailletb107185.chatgpt.site

## Development

Requires Node.js 22.13+ and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

The application uses React, Vinext, Cloudflare Workers, D1 and R2. The public Vite/Cloudflare configuration replaces platform-owned preview and publishing utilities; those internal utilities and credentials are excluded. The existing live deployment is unchanged.

## Authentication and persistence

The current live host supplies verified ChatGPT identity headers and the `/signin-with-chatgpt` and `/signout-with-chatgpt` flows. Local browsing works anonymously. Saving, bookings and uploads require authentication. A separate deployment must implement a trusted authentication gateway which strips visitor-supplied identity headers before injecting verified identity. Do not expose the API directly while trusting client-supplied identity headers.

For separate hosting, provision D1 and R2, replace the placeholder database ID and bucket name in `wrangler.jsonc`, apply the SQL migrations, and implement the authentication gateway. Existing production database records and uploaded private media are not copied into this repository. The supplied public photographs, fonts and walkthrough video are included.

Set the server-side `OWNER_EMAIL` environment variable to grant owner access. Owner access is disabled when this setting is absent. Personal account details and deployment credentials are excluded from this export.
