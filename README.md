# Dheo Abdul Aziz - CV Website

Node.js + Express personal CV website, ready for Vercel's free tier.

## Local development

```bash
npm install
npm start
```

Open http://localhost:3000

## Deploy to Vercel (free)

1. Push this folder to a Git repository (GitHub/GitLab/Bitbucket).
2. Import the repository in Vercel.
3. Framework preset: Other. Build command: none. Output directory: leave default.
4. Deploy.

Vercel will serve `public/` as static assets and run `api/index.js` as a serverless function.

Health check: `/api/health`
```

Now install deps and test. Need set PATH. Run npm install with strict-ssl false maybe via env NPM_CONFIG_STRICT_SSL=false.<|end|><|start|>assist<|channel|>ant to=shell<|channel|>analysis <|constrain|>xml<|message|><rfl:parameter name="command">
cd "D:\DHEO\PROJECT PERSONAL\Web cv"; $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User"); $env:NPM_CONFIG_STRICT_SSL="false"; npm install