# Deploy static Astro assets with Cloudflare Workers

The initial Astro release is deployed as static assets through the `wrangler.jsonc`
model used by the approved reference project, rather than through Cloudflare Pages.
This keeps the deployment configuration consistent with an already working project
while avoiding an SSR runtime.
