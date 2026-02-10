# Deploy Portfolio with GitHub & Vercel

## Step 1: Create the GitHub repository

1. Go to **[github.com/new](https://github.com/new)**
2. Repository name: `portfolio` (or any name you prefer)
3. Set to **Public**
4. **Do not** initialize with README, .gitignore, or license (we already have these)
5. Click **Create repository**

## Step 2: Push your code

Run these commands in your terminal (replace `portfolio` with your repo name if different):

```bash
cd /Users/vikrantsingh/Desktop/pf

git remote add origin https://github.com/vinsin002/portfolio.git

git push -u origin main
```

If you used a different repo name:

```bash
git remote add origin https://github.com/vinsin002/YOUR-REPO-NAME.git
git push -u origin main
```

## Step 3: Deploy on Vercel

1. Go to **[vercel.com](https://vercel.com)** and sign in with **GitHub**
2. Click **Add New** → **Project**
3. Select your `portfolio` repository
4. Vercel will auto-detect Vite — click **Deploy**
5. Your site will be live at `https://portfolio-xxx.vercel.app`

Future pushes to `main` will trigger automatic deployments.
