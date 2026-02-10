import React, { useState, useMemo } from 'react';
import { Search, Code2, Sparkles, ArrowRight, Copy, Check } from 'lucide-react';

const LANGUAGES = [
  'Python',
  'JavaScript',
  'Java',
  'C++',
  'C#',
  'C',
  'TypeScript',
  'PHP',
  'Swift',
  'Kotlin',
  'Go',
  'Rust',
  'Ruby',
  'R',
  'Dart',
  'Scala',
  'Perl',
  'Objective-C',
  'MATLAB',
  'SQL',
  'Shell',
  'Lua',
  'Haskell',
  'Elixir',
  'Clojure',
  'HTML',
  'CSS',
  'Fortran',
  'Assembly'
].sort();

const LanguageDropdown = ({ value, onChange, label, side }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredLanguages = useMemo(() => {
    if (!searchTerm) return LANGUAGES;
    return LANGUAGES.filter(lang =>
      lang.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSelect = (language) => {
    onChange(language);
    setSearchTerm('');
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-sm font-semibold mb-2 text-gray-200">
        {label}
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={isOpen ? searchTerm : value}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search language..."
          className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-500 transition-all"
        />
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute z-20 w-full mt-2 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl max-h-64 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((language) => (
                  <div
                    key={language}
                    onClick={() => handleSelect(language)}
                    className="px-4 py-3 hover:bg-cyan-500/20 cursor-pointer text-white transition-colors border-b border-gray-700/50 last:border-0"
                  >
                    {language}
                  </div>
                ))
              ) : (
                <div className="px-4 py-3 text-gray-500">No languages found</div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function CodeVerter() {
  const [sourceLanguage, setSourceLanguage] = useState('Python');
  const [targetLanguage, setTargetLanguage] = useState('JavaScript');
  const [sourceCode, setSourceCode] = useState('');
  const [convertedCode, setConvertedCode] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = async () => {
    if (!sourceCode.trim()) {
      setError('Please enter some code to convert');
      return;
    }

    if (!sourceLanguage || !targetLanguage) {
      setError('Please select both source and target languages');
      return;
    }

    if (sourceLanguage === targetLanguage) {
      setError('Source and target languages must be different');
      return;
    }

    setIsConverting(true);
    setError('');
    setConvertedCode('');

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [
            {
              role: 'user',
              content: `Convert the following ${sourceLanguage} code to ${targetLanguage}. Provide ONLY the converted code without any explanations, comments, or markdown formatting:\n\n${sourceCode}`
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      if (data.content && data.content[0] && data.content[0].text) {
        let code = data.content[0].text.trim();
        // Remove markdown code blocks if present
        code = code.replace(/^```[\w]*\n/, '').replace(/\n```$/, '');
        setConvertedCode(code);
      } else {
        setError('Failed to convert code. Please try again.');
      }
    } catch (err) {
      setError('An error occurred while converting. Please check your connection and try again.');
      console.error('Conversion error:', err);
    } finally {
      setIsConverting(false);
    }
  };

  const handleCopy = async () => {
    if (convertedCode) {
      await navigator.clipboard.writeText(convertedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-12 h-12 text-cyan-400" />
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              CodeVerter
            </h1>
            <Sparkles className="w-10 h-10 text-purple-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-400 font-light">
            Transform code between <span className="text-cyan-400 font-semibold">{LANGUAGES.length}+ languages</span> with AI-powered precision
          </p>
        </div>

        {/* Main conversion area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Source Code Panel */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-6 transform hover:scale-[1.02] transition-all duration-300">
            <LanguageDropdown
              value={sourceLanguage}
              onChange={setSourceLanguage}
              label="Source Language"
              side="left"
            />
            <div className="mt-4">
              <label className="block text-sm font-semibold mb-2 text-gray-200">
                Your Code
              </label>
              <textarea
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
                placeholder="// Paste your code here..."
                className="w-full h-96 px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-100 placeholder-gray-600 font-mono text-sm resize-none scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
                spellCheck="false"
              />
            </div>
          </div>

          {/* Target Code Panel */}
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700/50 p-6 transform hover:scale-[1.02] transition-all duration-300">
            <LanguageDropdown
              value={targetLanguage}
              onChange={setTargetLanguage}
              label="Target Language"
              side="right"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-200">
                  Converted Code
                </label>
                {convertedCode && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-all"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                )}
              </div>
              <textarea
                value={convertedCode}
                readOnly
                placeholder="// Converted code will appear here..."
                className="w-full h-96 px-4 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-gray-100 placeholder-gray-600 font-mono text-sm resize-none scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
                spellCheck="false"
              />
            </div>
          </div>
        </div>

        {/* Convert Button */}
        <div className="text-center mb-6">
          <button
            onClick={handleConvert}
            disabled={isConverting}
            className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100"
          >
            <div className="flex items-center gap-3">
              {isConverting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Converting...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Convert Code
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </div>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-2xl mx-auto p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-center backdrop-blur-sm animate-shake">
            {error}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by Claude AI • Supporting {LANGUAGES.length} Programming Languages</p>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Orbitron:wght@900&display=swap');
        
        h1 {
          font-family: 'Orbitron', sans-serif;
        }
        
        textarea, code {
          font-family: 'Space Mono', monospace;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thumb-gray-700::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 4px;
        }

        .scrollbar-track-gray-900::-webkit-scrollbar-track {
          background-color: #111827;
        }

        .scrollbar-track-gray-800::-webkit-scrollbar-track {
          background-color: #1f2937;
        }
      `}</style>
    </div>
  );
}
