# 🚀 CodeVerter

<div align="center">

![CodeVerter Banner](https://img.shields.io/badge/CodeVerter-AI%20Powered-cyan?style=for-the-badge&logo=react)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Claude AI](https://img.shields.io/badge/Claude-AI-7C3AED?style=for-the-badge)](https://www.anthropic.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

**Transform code between 29+ programming languages with AI-powered precision** ✨

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage)

</div>

---

## 📸 Preview

![CodeVerter Screenshot](https://via.placeholder.com/1200x600/1a1a2e/00d4ff?text=CodeVerter+Preview)

---

## ✨ Features

🎯 **29+ Programming Languages Supported**
- Python, JavaScript, TypeScript, Java, C++, C#, Go, Rust, Swift, Kotlin, and many more!
- Full support for HTML, CSS, SQL, Shell scripting, and more

🔍 **Smart Language Search**
- Type-ahead autocomplete
- Case-insensitive search
- Instant filtering

🤖 **AI-Powered Conversion**
- Powered by Claude Sonnet 4
- Context-aware code translation
- Maintains code logic and structure

💅 **Beautiful UI/UX**
- Modern dark theme with gradient effects
- Smooth animations and transitions
- Responsive design for all devices
- Copy-to-clipboard functionality

⚡ **Fast & Reliable**
- Real-time conversion
- Error handling
- Loading states
- Input validation

---

## 🛠️ Supported Languages

<table>
<tr>
<td>

- Assembly
- C
- C++
- C#
- Clojure
- CSS
- Dart
- Elixir
- Fortran
- Go

</td>
<td>

- Haskell
- HTML
- Java
- JavaScript
- Kotlin
- Lua
- MATLAB
- Objective-C
- Perl
- PHP

</td>
<td>

- Python
- R
- Ruby
- Rust
- Scala
- Shell
- SQL
- Swift
- TypeScript

</td>
</tr>
</table>

---

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm/yarn
- Anthropic API access (Claude API)

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/codeverter.git
cd codeverter
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up Tailwind CSS**

Make sure your `tailwind.config.js` includes:
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **Install required dependencies**
```bash
npm install lucide-react
```

5. **Start the development server**
```bash
npm start
# or
yarn start
```

6. **Open your browser**
```
http://localhost:3000
```

---

## 🔧 Configuration

### API Setup

The app uses the Anthropic Claude API. The API calls are made directly from the frontend. For production use, consider implementing a backend proxy to secure your API credentials.

**Important:** For production deployments, never expose API keys in frontend code. Use environment variables and a backend service.

### Environment Variables (Recommended for Production)

Create a `.env` file:
```env
REACT_APP_ANTHROPIC_API_KEY=your_api_key_here
```

Then update the fetch call to use:
```javascript
headers: {
  'Content-Type': 'application/json',
  'x-api-key': process.env.REACT_APP_ANTHROPIC_API_KEY,
}
```

---

## 💻 Usage

1. **Select Source Language** - Choose the programming language of your input code
2. **Enter Your Code** - Paste or type your code in the left panel
3. **Select Target Language** - Choose the language you want to convert to
4. **Click Convert** - Press the "Convert Code" button
5. **Copy Result** - Use the copy button to get your converted code

### Example

**Input (Python):**
```python
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))
```

**Output (JavaScript):**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("World"));
```

---

## 🎨 Customization

### Changing Colors

Edit the gradient colors in `CodeVerter.jsx`:
```javascript
// Header gradient
className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"

// Button gradient
className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600"
```

### Adding More Languages

Update the `LANGUAGES` array:
```javascript
const LANGUAGES = [
  'Python',
  'JavaScript',
  // Add your language here
  'YourLanguage',
].sort();
```

---

## 🏗️ Project Structure

```
codeverter/
├── public/
│   └── index.html
├── src/
│   ├── CodeVerter.jsx      # Main component
│   ├── App.js              # App wrapper
│   ├── index.js            # Entry point
│   └── index.css           # Tailwind imports
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Anthropic](https://www.anthropic.com/) for Claude AI
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React](https://reactjs.org/) for the framework

---

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/codeverter](https://github.com/yourusername/codeverter)

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ and ☕

</div>
