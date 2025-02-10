import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Church, Users, Calendar, Video, Radio } from 'lucide-react';
import Members from './pages/Members';
import Schedule from './pages/Schedule';
import Videos from './pages/Videos';
import Live from './pages/Live';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membros" element={<Members />} />
            <Route path="/horarios" element={<Schedule />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/aovivo" element={<Live />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="space-y-12">
      <section className="relative h-[500px] rounded-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920"
          alt="Árvore de folhas verdes cercada por neblina"
          className="w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Igreja Batista Carvalhos de Justiça</h1>
            <p className="text-xl font-bold mb-4">Venha fazer parte da nossa família</p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm p-8">
  <div className="flex items-center space-x-3 mb-6">
    <h2 className="text-2xl font-bold text-gray-800">Versículo do Dia</h2>
    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
      Novo
    </span>
  </div>
  <div className="space-y-4">
  <div className="border-l-4 border-purple-500 pl-4 py-2">
      <p className="font-semibold text-gray-800">Is 41:10</p>
      <p className="text-gray-600"> Por isso não tema, pois estou com você; não tenha medo, pois sou o seu Deus.</p>
      <p className="text-gray-600">Eu o fortalecerei e o ajudarei; Eu o segurarei com a minha mão direita vitoriosa.</p>
    </div>
  </div>
</section>
      
      <section className="bg-white rounded-2xl shadow-sm p-8">
  <div className="flex items-center space-x-3 mb-6">
    <h2 className="text-2xl font-bold text-gray-800">Mural de Avisos</h2>
    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
      Novo
    </span>
  </div>
  
  <div className="space-y-4">
    <div className="border-l-4 border-blue-500 pl-4 py-2">
      <p className="font-semibold text-gray-800">Retiro de Jovens</p>
      <p className="text-gray-600">Inscrições abertas para o retiro de jovens que acontecerá nos dias 15-17 de abril.</p>
    </div>

    <div className="border-l-4 border-green-500 pl-4 py-2">
      <p className="font-semibold text-gray-800">Escola Bíblica Dominical</p>
      <p className="text-gray-600">Nossa segunda aula do ano, no próximo domingo, não perca</p>
    </div>

    <div className="border-l-4 border-purple-500 pl-4 py-2">
      <p className="font-semibold text-gray-800">Culto de Santa Ceia</p>
      <p className="text-gray-600">Neste domingo teremos nosso culto especial de Santa Ceia às 18h.</p>
    </div>
  </div>
</section>

      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Link
          to="/membros"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Users className="w-12 h-12 mb-4 text-blue-600" />
          <h2 className="text-xl font-semibold mb-2">Nossos Membros</h2>
          <p className="text-gray-600">Conheça nossa comunidade</p>
        </Link>

        <Link
          to="/horarios"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Calendar className="w-12 h-12 mb-4 text-green-600" />
          <h2 className="text-xl font-semibold mb-2">Horários</h2>
          <p className="text-gray-600">Horários dos cultos e eventos</p>
        </Link>

        <Link
          to="/videos"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Video className="w-12 h-12 mb-4 text-red-600" />
          <h2 className="text-xl font-semibold mb-2">Vídeos</h2>
          <p className="text-gray-600">Assista nossas pregações</p>
        </Link>

        <Link
          to="/aovivo"
          className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <Radio className="w-12 h-12 mb-4 text-purple-600" />
          <h2 className="text-xl font-semibold mb-2">Ao Vivo</h2>
          <p className="text-gray-600">Assista nosso culto ao vivo</p>
        </Link>
      </section>

<section className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-sm p-8 text-white">
  <h2 className="text-2xl font-bold mb-6 text-center">Siga-nos nas Redes Sociais</h2>
  
  <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
    <a
      href="https://instagram.com/ibcj.dd"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
      <span className="font-medium">Instagram</span>
    </a>

    <a
      href="https://youtube.com/@carvalhosdejustica_dd"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>
      <span className="font-medium">YouTube</span>
    </a>

    <a
      href="https://facebook.com/ibcjdd"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
      <span className="font-medium">Facebook</span>
    </a>
  </div>
</section>


    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">IBCJ</h3>
            <p className="text-gray-400">Transformando vidas através do amor de Cristo</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato:</h3>
            <p className="text-gray-400">Telefone: (11) 1234-5678</p>
            <p className="text-gray-400">Email: contato@ibcjdiasdavila.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Endereço:</h3>
            <p className="text-gray-400">Av. Perimetral Sul, 150 - Urbis</p>
            <p className="text-gray-400">Dias Davila - BA</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;