"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";

const API_BASE = "/api/recipe";

async function fetchFromImageAPI(file) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch(`${API_BASE}/from-image`, {
    method: "POST",
    body: formData,
    signal: AbortSignal.timeout(30000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to generate recipe");
  return data;
}

async function fetchFromTextAPI(ingredientsList) {
  const response = await fetch(`${API_BASE}/from-text`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ingredients: ingredientsList }),
    signal: AbortSignal.timeout(30000),
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || "Failed to generate recipe");
  return data;
}

const ANALYSIS_MESSAGES = [
  "🔍 Scanning image...",
  "🧠 Identifying ingredients...",
  "👨‍🍳 Crafting your recipe...",
];

const TEXT_ANALYSIS_MESSAGES = [
  "🧠 Analysing ingredients...",
  "✨ Asking Gemini AI...",
  "🍽️ Preparing your recipe...",
];

export default function AiChef() {
  const [theme, setTheme] = useState("dark");
  const [activeTab, setActiveTab] = useState("image-tab");
  const [isDragOver, setIsDragOver] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [currentFile, setCurrentFile] = useState(null);
  const [ingredients, setIngredients] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [textLoading, setTextLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);
  const [recipeKey, setRecipeKey] = useState(0);
  const [statusMsg, setStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const imageInputRef = useRef(null);
  const recipeResultRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("ai-chef-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved ? saved : prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("ai-chef-theme", next);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setRecipe(null);
    setErrorMsg("");
    setStatusMsg("");
  };

  const handleFile = useCallback((file) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a valid image file.");
      return;
    }
    setCurrentFile(file);
    setRecipe(null);
    setErrorMsg("");
    const reader = new FileReader();
    reader.onload = (e) => setPreviewSrc(e.target.result);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
  };

  const runStatusMessages = (messages, intervalMs = 900) => {
    let i = 0;
    setStatusMsg(messages[0]);
    const id = setInterval(() => {
      i = (i + 1) % messages.length;
      setStatusMsg(messages[i]);
    }, intervalMs);
    return () => clearInterval(id);
  };

  const handleGenerateImage = async () => {
    if (!currentFile || !previewSrc) return;
    setImageLoading(true);
    setRecipe(null);
    setErrorMsg("");
    const clearStatus = runStatusMessages(ANALYSIS_MESSAGES);
    try {
      const data = await fetchFromImageAPI(currentFile);
      setRecipe(data);
      setRecipeKey((k) => k + 1);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      clearStatus();
      setStatusMsg("");
      setImageLoading(false);
    }
  };

  const handleGenerateText = async () => {
    const textStr = ingredients.trim();
    if (!textStr) {
      alert("Please enter ingredients first.");
      return;
    }
    const ingredientsArr = textStr.split(",").map((i) => i.trim()).filter((i) => i);
    setTextLoading(true);
    setRecipe(null);
    setErrorMsg("");
    const clearStatus = runStatusMessages(TEXT_ANALYSIS_MESSAGES);
    try {
      const data = await fetchFromTextAPI(ingredientsArr);
      setRecipe(data);
      setRecipeKey((k) => k + 1);
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      clearStatus();
      setStatusMsg("");
      setTextLoading(false);
    }
  };

  useEffect(() => {
    if (recipe && recipeResultRef.current) {
      recipeResultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [recipe, recipeKey]);

  return (
    <>
      {/* Dynamic Background Decor */}
      <div className="background-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="floating-food f1">🍅</div>
        <div className="floating-food f2">🥦</div>
        <div className="floating-food f3">🥕</div>
        <div className="floating-food f4">🥑</div>
        <div className="floating-food f5">🍋</div>
        <div className="floating-food f6">🍓</div>
        <div className="floating-food f7">🍆</div>
        <div className="floating-food f8">🥗</div>
      </div>

      {/* Nav Bar */}
      <nav className="chef-nav">
        <Link href="/" className="chef-nav-logo">
          🍳 AI Chef
        </Link>
        <button
          className="theme-toggle chef-nav-toggle"
          aria-label="Toggle Dark/Light Mode"
          onClick={toggleTheme}
        >
          <span className="icon-sun">☀️</span>
          <span className="icon-moon">🌙</span>
        </button>
      </nav>

      <main className="container">
        <header className="hero">
          <h1>
            AI <span className="text-gradient">Chef</span>
          </h1>
          <p>From pixels to plates. Discover extraordinary recipes crafted by AI.</p>
        </header>

        <section className="glass-panel main-panel">
          {/* Tab Controls */}
          <div className="tab-controls">
            <button
              className={`tab-btn ${activeTab === "image-tab" ? "active" : ""}`}
              onClick={() => switchTab("image-tab")}
            >
              📸 Upload Image
            </button>
            <button
              className={`tab-btn ${activeTab === "text-tab" ? "active" : ""}`}
              onClick={() => switchTab("text-tab")}
            >
              ✍️ Enter Ingredients
            </button>
          </div>

          {/* ── Image Tab ── */}
          <div className={`tab-content ${activeTab === "image-tab" ? "active" : ""}`}>
            <div
              className={`upload-area ${isDragOver ? "dragover" : ""}`}
              onClick={() => imageInputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={imageInputRef}
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => { if (e.target.files.length) handleFile(e.target.files[0]); }}
              />
              {!previewSrc && (
                <>
                  <div className="upload-icon">📸</div>
                  <h3>Drag &amp; Drop or Click to Upload</h3>
                  <p>Supported: JPG, PNG, WEBP</p>
                </>
              )}
              {previewSrc && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={previewSrc} alt="Recipe Image Preview" className="image-preview" />
              )}
            </div>

            {imageLoading && statusMsg && (
              <div className="status-banner">{statusMsg}</div>
            )}

            <button
              className={`generate-btn ${imageLoading ? "loading" : ""}`}
              onClick={handleGenerateImage}
              disabled={!currentFile || imageLoading}
            >
              <span className="btn-text">✨ Generate Recipe</span>
              <div className="spinner"></div>
            </button>
          </div>

          {/* ── Text Tab ── */}
          <div className={`tab-content ${activeTab === "text-tab" ? "active" : ""}`}>
            <div className="input-area">
              <label htmlFor="ingredients-input">What&apos;s in your fridge?</label>
              <textarea
                id="ingredients-input"
                placeholder="e.g. chicken breast, garlic, olive oil, thyme, mushrooms..."
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
              />
            </div>

            {textLoading && statusMsg && (
              <div className="status-banner">{statusMsg}</div>
            )}

            <button
              className={`generate-btn ${textLoading ? "loading" : ""}`}
              onClick={handleGenerateText}
              disabled={textLoading}
            >
              <span className="btn-text">✨ Generate Recipe</span>
              <div className="spinner"></div>
            </button>
          </div>
        </section>

        {/* ── Error Card ── */}
        {errorMsg && (
          <section className="error-card glass-panel">
            <div className="error-icon">⚠️</div>
            <div className="error-body">
              <h3>Could not generate recipe</h3>
              <p>{errorMsg}</p>
              <button className="error-retry-btn" onClick={() => setErrorMsg("")}>
                Dismiss
              </button>
            </div>
          </section>
        )}

        {/* ── Recipe Result ── */}
        {recipe && (
          <section
            key={recipeKey}
            ref={recipeResultRef}
            className="recipe-result glass-panel"
          >
            <div className="result-header">
              <h2 className="recipe-title-shimmer">✨ {recipe.title} ✨</h2>
            </div>
            <div className="result-body">
              <div className="ingredients-list cascade-anim">
                <h3>Ingredients</h3>
                <ul>
                  {recipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div className="instructions-list cascade-anim delay-1">
                <h3>Instructions</h3>
                <ol>
                  {recipe.instructions.map((inst, i) => (
                    <li key={i}>{inst}</li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
