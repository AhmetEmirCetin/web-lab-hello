import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors">
      {/* Karanlık Mod Butonu */}
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-lg z-50 cursor-pointer"
      >
        🌓 Temayı Değiştir
      </button>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b-2 pb-4">
        UI Kit [cite: 1330]
      </h1>

      {/* 1. BUTTONS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Buttons [cite: 1820]</h2>
        <div className="flex flex-wrap gap-4 items-end">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* 2. INPUTS */}
      <section className="space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Inputs [cite: 1875]</h2>
        <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />
        <Input id="ui-err" label="Hatalı Input" error="Bu alan zorunludur" />
        <Input id="ui-help" label="Yardım Metni" helpText="E-posta adresinizi girin" />
      </section>

      {/* 3. CARDS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Cards [cite: 1992]</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="elevated" title="Elevated Card">Gölgeli kart örneği.</Card>
          <Card variant="outlined" title="Outlined Card">Çerçeveli kart örneği.</Card>
          <Card variant="filled" title="Filled Card">Dolgulu arka planlı kart.</Card>
        </div>
      </section>

      {/* 4. ALERTS */}
      <section className="space-y-4 max-w-xl">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Alerts [cite: 2081]</h2>
        <Alert variant="info" title="Bilgi">Bilgilendirme mesajı.</Alert>
        <Alert variant="success" title="Başarılı">İşlem tamamlandı.</Alert>
        <Alert variant="warning" title="Uyarı">Dikkat edilmesi gereken durum.</Alert>
        <Alert variant="error" title="Hata" dismissible>Bir hata oluştu.</Alert>
      </section>
    </div>
  );
}