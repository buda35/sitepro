"use client";

import { useState } from "react";

export default function Admin() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  // Liste statique des images déjà présentes (à améliorer avec une API plus tard)
  const images = [
    "hero1.jpg",
    "hero2.jpg",
    "hero3.jpg",
    "braises.jpg",
    "portfolio.jpg",
    "hellfest.jpg",
    "islande.jpg",
    "hero1.svg",
    "hero2.svg",
    "hero3.svg",
    "story.svg",
  ];

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setMessage("Image uploadée avec succès ! (Rafraîchissez la page pour voir la nouvelle image)");
      } else {
        setMessage("Erreur lors de l'upload.");
      }
    } catch (err) {
      setMessage("Erreur lors de l'upload.");
    }
  };

  return (
    <div className="min-h-screen bg-light-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <img src="/uploads/logo-tn.jpg" alt="Logo Terre Nordique" className="w-80 max-w-full mb-4" />
          <h1 className="text-4xl font-bold text-custom-grey text-center">Terre Nordique</h1>
        </div>
        <form onSubmit={handleUpload} className="mb-8 flex flex-col md:flex-row items-center gap-4">
          <input type="file" accept="image/*" onChange={handleFileChange} className="border p-2 rounded" />
          <button type="submit" className="bg-accent-red text-white px-6 py-2 rounded hover:bg-accent-red/90 transition-colors">Uploader</button>
        </form>
        {message && <div className="mb-6 text-center text-accent-red font-bold">{message}</div>}
        <h2 className="text-2xl font-bold text-custom-grey mb-4">Images existantes</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img} className="bg-white rounded shadow p-2 flex flex-col items-center">
              {img.endsWith('.svg') ? (
                <img src={`/uploads/${img}`} alt={img} className="w-32 h-32 object-contain mb-2" />
              ) : (
                <img src={`/uploads/${img}`} alt={img} className="w-32 h-32 object-cover mb-2" />
              )}
              <span className="text-xs break-all">{img}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 