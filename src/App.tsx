import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form başarıyla gönderildi!");
  };

  return (
    <main className="container">
      <header className="header">
        <h1>Ahmet Emir ÇETİN</h1>
        <p className="subtitle">
          Fırat Üniversitesi - Yazılım Mühendisliği 3. Sınıf
        </p>
      </header>

      <section className="card" aria-labelledby="about-title">
        <h2 id="about-title">Hakkımda</h2>
        <p>
          Yazılım mühendisliği öğrencisiyim ve veri alanında uzmanlaşmak
          istiyorum. Arabalar ve motor teknolojilerine ilgim var.
        </p>
      </section>

      <section className="card" aria-labelledby="hobby-title">
        <h2 id="hobby-title">Hobilerim</h2>
        <ul>
          <li>Araba incelemek</li>
          <li>Motor sürmek</li>
          <li>Kod yazmak</li>
          <li>Teknoloji araştırmak</li>
        </ul>
      </section>

      <section className="card" aria-labelledby="contact-title">
        <h2 id="contact-title">İletişim</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" aria-label="İletişim formunu gönder">
            Gönder
          </button>
        </form>
      </section>

      <footer className="footer">
        <small>© 2026 Ahmet Emir ÇETİN</small>
      </footer>
    </main>
  );
}

export default App;