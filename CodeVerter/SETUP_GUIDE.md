# 🚀 CodeVerter Setup Guide

Complete setup instructions to get CodeVerter running on your machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- Git for version control

## 🛠️ Step-by-Step Installation

### 1. Clone or Download the Repository

**Option A: Using Git**
```bash
git clone https://github.com/yourusername/codeverter.git
cd codeverter
```

**Option B: Download ZIP**
- Download the repository as a ZIP file
- Extract it to your desired location
- Open terminal/command prompt in that folder

### 2. Install Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- Lucide React (for icons)
- Tailwind CSS (for styling)
- All other necessary packages

### 3. Verify Installation

Check that everything is installed correctly:
```bash
npm list
```

### 4. Start Development Server

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

If it doesn't open automatically, manually navigate to `http://localhost:3000`

## 📁 Project Structure

After installation, your project should look like this:

```
codeverter/
├── node_modules/          # Dependencies (auto-generated)
├── public/
│   └── index.html        # HTML template
├── src/
│   ├── CodeVerter.jsx    # Main component
│   ├── App.js            # App wrapper
│   ├── index.js          # Entry point
│   └── index.css         # Styles
├── .gitignore            # Git ignore rules
├── package.json          # Project config
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── README.md             # Main documentation
├── SETUP_GUIDE.md        # This file
└── LICENSE               # MIT License
```

## 🎨 Customization

### Change App Title

Edit `public/index.html`:
```html
<title>CodeVerter - Your Custom Title</title>
```

### Modify Colors

Edit `src/CodeVerter.jsx` and change the gradient classes:
```javascript
// Find and modify these lines
className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
```

### Add More Languages

In `src/CodeVerter.jsx`, locate the `LANGUAGES` array and add your language:
```javascript
const LANGUAGES = [
  'Python',
  'JavaScript',
  // Add more languages here
  'YourNewLanguage',
].sort();
```

## 🔧 Troubleshooting

### Problem: "npm command not found"
**Solution:** Install Node.js from https://nodejs.org/

### Problem: Port 3000 already in use
**Solution:** Either:
- Stop the process using port 3000
- Or run: `PORT=3001 npm start` to use a different port

### Problem: Tailwind styles not working
**Solution:** 
1. Delete `node_modules` folder
2. Run `npm install` again
3. Restart the dev server

### Problem: Icons not showing
**Solution:** 
```bash
npm install lucide-react --save
npm start
```

### Problem: Build errors
**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

## 🏗️ Building for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deploy to Popular Platforms

**Vercel:**
```bash
npm install -g vercel
vercel
```

**Netlify:**
- Drag and drop the `build` folder to netlify.com
- Or use Netlify CLI

**GitHub Pages:**
1. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/codeverter"
```
2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```
3. Add scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
4. Deploy:
```bash
npm run deploy
```

## 🔐 API Configuration (Important!)

For production use, **DO NOT** expose API keys in frontend code.

### Recommended Setup:

1. Create a backend API endpoint
2. Store API keys in environment variables
3. Make requests to your backend instead of directly to Anthropic

Example backend (Node.js/Express):
```javascript
app.post('/api/convert', async (req, res) => {
  const { sourceCode, sourceLanguage, targetLanguage } = req.body;
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY, // Stored securely
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: `Convert...` }]
    })
  });
  
  const data = await response.json();
  res.json(data);
});
```

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Anthropic API Docs](https://docs.anthropic.com/)

## 🆘 Getting Help

If you encounter issues:

1. Check the Troubleshooting section above
2. Search existing GitHub Issues
3. Create a new Issue with:
   - Your Node.js version (`node --version`)
   - Your npm version (`npm --version`)
   - Error messages
   - Steps to reproduce

## ✅ Verification Checklist

Before deploying, make sure:

- [ ] App runs without errors locally
- [ ] All 29 languages are selectable
- [ ] Search/autocomplete works
- [ ] Code conversion works
- [ ] Copy button works
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] Build completes successfully

---

**You're all set! Happy coding! 🎉**
