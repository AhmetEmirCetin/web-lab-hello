import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form başarıyla gönderildi!");
    console.log(formData);
  };

  return (
    <div className="container">
      <header>
        <h1>Ahmet Emir ÇETİN</h1>
        <h2>Fırat Üniversitesi - Yazılım Mühendisliği</h2>
      </header>

      <section className="section">
        <h3>Hakkımda</h3>
        <p>
          3. sınıf yazılım mühendisliği öğrencisiyim.
          Yazılımda özellikle veri alanında ilerlemek istiyorum.
          Arabalar ve motorlara ilgim var.
        </p>
      </section>

      <section className="section">
        <h3>Hobilerim</h3>
        <ul>
          <li>Araba incelemek</li>
          <li>Motor sürmek</li>
          <li>Kod yazmak</li>
          <li>Teknoloji araştırmak</li>
        </ul>
      </section>

      <section className="section">
        <h3>İletişim Formu</h3>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Mesajınız"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Gönder</button>
        </form>
      </section>
    </div>
  );
}

export default App;