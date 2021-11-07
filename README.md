# resume 📃

- **Framework**: [ReactPDF](https://react-pdf.org)
- **Database**: [Airtable](https://airtable.com)
- **Development**: [Vite.js](http://vitejs.dev)
- **Deployment**: [Vercel](https://vercel.com)

## Overview

- `scripts/build.js`: Build the server entry code to be imported by the serverless function. Powered by [esbuild](https://esbuild.github.io).
- `api/resume.ts`: Serverless function that gets my information from an Airtable base and responses the PDF document.
- `src/app`: Contains the ReactPDF document app.
- `src/browser`: The entry level for Vite.js, it uses an static [data.json](./src/data.json) to populate the app.
- `src/server`: The entry level for Serveless, it uses a [function invocation](./src/server/main.tsx#L5) to populate the app.
- `src/react-pdf.ts`: Re-exportation of ReactPDF because of [a bug](https://github.com/vitejs/vite/issues/3405).

## Running

### Prepare

```bash
git clone https://github.com/rqbazan/resume.git
cd resume
yarn
```

### Development

```bash
yarn dev:web
```

### Production <sup>_similar_</sup>

1. Create a `.env` file similar to [`.env.example`](./.env.example).
2. Set `NODE_ENV=production` in your terminal session.

```bash
vercel dev

```
