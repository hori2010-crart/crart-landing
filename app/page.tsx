import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1c1c1c] font-sans selection:bg-stone-200">
      
      {/* 1. 네비게이션 바 (상단 고정) */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-stone-900">CRART</h1>
        <div className="space-x-8 text-sm font-medium text-stone-500 hidden md:flex">
          <a href="#philosophy" className="hover:text-stone-900 transition">Philosophy</a>
          <a href="#products" className="hover:text-stone-900 transition">Products</a>
          <a href="#contact" className="hover:text-stone-900 transition">Contact</a>
        </div>
      </nav>

      {/* 2. Hero Section (메인 비주얼) */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-tighter bg-stone-100 text-stone-600 rounded-full">
          Digital Craftsmanship & Minimal Design
        </span>
        <h2 className="text-5xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
          나무의 본질에 <br /> <span className="font-serif italic">디지털의 정밀함</span>을 더하다
        </h2>
        <p className="text-stone-500 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          CRART는 CNC 정밀 가공 기술과 장인의 섬세한 마감을 결합하여, 
          캠핑과 일상의 경계를 허무는 프리미엄 가구 솔루션을 제안합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="https://open.kakao.com/o/YOUR_LINK" target="_blank" className="bg-stone-900 text-white px-10 py-4 rounded-lg hover:bg-stone-800 transition shadow-lg text-sm font-medium">
            맞춤 제작 문의하기
          </a>
          <a href="#products" className="border border-stone-200 px-10 py-4 rounded-lg hover:bg-stone-50 transition text-sm font-medium">
            포트폴리오 보기
          </a>
        </div>
      </section>

      {/* 3. Philosophy (브랜드 철학) */}
      <section id="philosophy" className="py-24 bg-stone-50 border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">01. Precision</h3>
            <p className="text-stone-500 text-sm leading-relaxed">CNC 디지털 제조 공법을 통해 0.1mm의 오차도 허용하지 않는 완벽한 결합 구조를 설계합니다.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">02. Materials</h3>
            <p className="text-stone-500 text-sm leading-relaxed">지속 가능한 최고급 자작나무 합판과 천연 오일을 사용하여 시간이 흐를수록 깊어지는 가치를 담습니다.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">03. Flexibility</h3>
            <p className="text-stone-500 text-sm leading-relaxed">보관과 이동이 간편한 하이브리드 가변 구조를 통해 야외 활동의 품격을 높여줍니다.</p>
          </div>
        </div>
      </section>

      {/* 4. Products (제품 갤러리 - 이미지가 없어도 깔끔한 레이아웃) */}
      <section id="products" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-light mb-4">CRART Collections</h2>
          <div className="w-12 h-[1px] bg-stone-300 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 제품 카드 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-stone-100 mb-6 overflow-hidden rounded-sm relative">
               <div className="absolute inset-0 flex items-center justify-center text-stone-400 opacity-50">Photo of Hybrid Table</div>
            </div>
            <h4 className="text-lg font-medium mb-1 group-hover:underline underline-offset-4 tracking-tight">Hybrid Variable Table Box</h4>
            <p className="text-stone-400 text-sm italic">Plywood, Walnut Finish</p>
          </div>
          {/* 제품 카드 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-stone-100 mb-6 overflow-hidden rounded-sm relative">
               <div className="absolute inset-0 flex items-center justify-center text-stone-400 opacity-50">Photo of Camping Stool</div>
            </div>
            <h4 className="text-lg font-medium mb-1 group-hover:underline underline-offset-4 tracking-tight">Minimalist Folding Stool</h4>
            <p className="text-stone-400 text-sm italic">Birch Plywood</p>
          </div>
        </div>
      </section>

      {/* 5. Footer (하단 정보) */}
      <footer id="contact" className="bg-stone-900 text-stone-400 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <h2 className="text-white text-2xl font-bold tracking-widest">CRART</h2>
            <p className="text-sm max-w-xs leading-relaxed">디지털 제조 플랫폼 기반의 프리미엄 가구 브랜드. 인천/김포 지역을 중심으로 로컬 제작 네트워크를 지향합니다.</p>
          </div>
          <div className="space-y-4 text-sm">
            <p className="text-white font-medium">Contact Us</p>
            <p>Email: contact@crart.com</p>
            <p>Instagram: @crart_furniture</p>
            <p>Location: Gyeonggi-do, Gimpo-si</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-800 text-[10px] uppercase tracking-widest">
          © 2026 CRART. All rights reserved.
        </div>
      </footer>
    </div>
  );
}