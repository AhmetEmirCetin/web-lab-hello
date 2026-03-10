import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      
      {/* 1. HEADER & NAV (Flexbox ile) */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Ahmet Yılmaz</h1>
          <nav>
            <ul className="flex space-x-6 text-sm font-medium">
              <li><a href="#hakkimda" className="hover:text-blue-600 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="hover:text-blue-600 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="hover:text-blue-600 transition-colors">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* 2. HAKKIMDA (Responsive Flex) */}
      <section id="hakkimda" className="py-20 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profil" 
            className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-blue-500"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Merhaba, Ben Ahmet 👋</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler tasarlıyorum[cite: 2302, 2303].
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROJELER (Grid & Card Bileşeni) */}
      <section id="projeler" className="py-20 bg-gray-50 dark:bg-gray-900/50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projelerim</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="E-Ticaret Sitesi" image="https://via.placeholder.com/400x200" variant="elevated">
              React ve Tailwind ile geliştirilmiş tam kapsamlı bir mağaza uygulaması[cite: 2348].
            </Card>
            <Card title="Hava Durumu App" image="https://via.placeholder.com/400x200" variant="outlined">
              OpenWeather API kullanarak anlık veriler sunan şık bir arayüz.
            </Card>
            <Card title="Blog Platformu" image="https://via.placeholder.com/400x200" variant="filled">
              Markdown destekli, hızlı ve SEO uyumlu kişisel blog sitesi.
            </Card>
          </div>
        </div>
      </section>

      {/* 4. İLETİŞİM (Form & Input/Button Bileşenleri) */}
      <section id="iletisim" className="py-20 px-4 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Bana Ulaşın</h2>
        <form className="space-y-6">
          <Input id="p-name" label="Ad Soyad" placeholder="Adınızı girin" required />
          <Input id="p-email" label="E-posta" type="email" placeholder="ornek@mail.com" required />
          <div className="space-y-1">
            <label className="block text-sm font-medium">Mesajınız</label>
            <textarea className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none" rows={4}></textarea>
          </div>
          <Button variant="primary" className="w-full">Mesaj Gönder</Button>
        </form>
      </section>

    </div>
  );
}