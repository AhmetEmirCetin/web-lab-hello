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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

      <section className="card">
        <h2>Hakkımda</h2>
        <p>
          Yazılım mühendisliği öğrencisiyim ve veri alanında uzmanlaşmak
          istiyorum. Arabalar ve motor teknolojilerine ilgim var.
        </p>
      </section>

      <section className="card">
        <h2>Hobilerim</h2>
        <ul>
          <li>Araba incelemek</li>
          <li>Motor sürmek</li>
          <li>Kod yazmak</li>
          <li>Teknoloji araştırmak</li>
        </ul>
      </section>

      <section className="card">
        <h2>İletişim</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              type="text"
              name="name"
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

          <button type="submit">Gönder</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2026 Ahmet Emir ÇETİN</p>
      </footer>
    </main>
  );
}

export default App;