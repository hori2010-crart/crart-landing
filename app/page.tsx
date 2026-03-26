import React, { useState } from 'react';

/**
 * CRART 공식 고도화 랜딩페이지
 * 파라메트릭 설계(1mm 커스텀)와 로컬 분산 제조 시스템을 강조한 UI
 */
export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#3e3a35] font-sans selection:bg-[#e5decb] scroll-smooth">
      
      {/* 1. Navigation Bar */}
      <nav className="fixed w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#e1dcd3] px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1a1918] rounded-sm flex items-center justify-center">
            <span className="text-[#fdfbf7] font-bold text-xs">C</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tighter text-[#1a1918]">CRART</h1>
        </div>
        <div className="hidden md:flex space-x-10 text-sm font-semibold text-[#6c6760]">
          <a href="#concept" className="hover:text-[#a67c52] transition">Concept</a>
          <a href="#process" className="hover:text-[#a67c52] transition">Process</a>
          <a href="#collection" className="hover:text-[#a67c52] transition">Collection</a>
          <a href="#faq" className="hover:text-[#a67c52] transition">FAQ</a>
        </div>
        <a href="https://open.kakao.com/o/YOUR_LINK" target="_blank" className="bg-[#1a1918] text-[#fdfbf7] px-5 py-2 rounded-full text-xs font-bold hover:bg-[#a67c52] transition shadow-md">
          START PROJECT
        </a>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative pt-48 pb-32 px-6 max-w-6xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#e5decb]/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#f4f0e6] border border-[#e1dcd3] rounded-full">
          <p className="text-[11px] font-bold tracking-widest text-[#a67c52] uppercase">Digital Craftsmanship & Local Network</p>
        </div>

        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] text-[#1a1918]">
          나무의 본질, <br />
          <span className="font-light italic text-[#a67c52]">데이터로 완성하다</span>
        </h2>
        
        <p className="text-lg md:text-2xl max-w-3xl mb-14 leading-relaxed text-[#6c6760] font-medium">
          CRART는 1mm 단위의 파라메트릭 설계를 통해 당신의 공간에 완벽히 들어맞는 
          맞춤형 프리미엄 가구 솔루션을 제공합니다. 로컬 제조 시스템으로 탄소 배출은 줄이고 품질은 높였습니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="group bg-[#1a1918] text-[#fdfbf7] px-12 py-5 rounded-xl hover:bg-[#a67c52] transition-all shadow-2xl flex items-center gap-3">
            <span className="text-lg font-bold">1mm 맞춤 설계하기</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* 3. Problem & Concept Section */}
      <section id="concept" className="py-32 bg-[#1a1918] text-[#fdfbf7]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              버려지는 <span className="text-[#a67c52]">공간(Dead Space)</span>,<br />
              더 이상 타협하지 마세요.
            </h3>
            <p className="text-[#c9c1b5] text-xl leading-relaxed">
              기성 가구의 고정된 규격은 1~2인 가구의 소중한 공간을 낭비하게 만듭니다. 
              CRART는 파라메트릭 설계를 통해 클릭 몇 번으로 나만의 최적화된 가구 치수를 결정하고, 
              지역 공방에서 즉시 제작에 들어가는 혁신적인 시스템을 구축했습니다.
            </p>
            <div className="flex gap-10 pt-4">
              <div>
                <p className="text-3xl font-bold text-[#e5decb]">1mm</p>
                <p className="text-xs text-[#6c6760] font-bold uppercase tracking-wider">Precision Unit</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e5decb]">24h</p>
                <p className="text-xs text-[#6c6760] font-bold uppercase tracking-wider">Data Sync</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#2a2826] rounded-[40px] border border-[#3e3a35] overflow-hidden flex items-center justify-center p-12">
               <div className="w-full h-full border-2 border-dashed border-[#3e3a35] rounded-2xl flex items-center justify-center relative">
                  <span className="text-[#6c6760] font-mono text-sm">[치수 가변형 3D 설계 모델링 영역]</span>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a67c52] px-4 py-1 rounded text-white text-xs font-bold">W: 1200mm</div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a67c52] px-4 py-1 rounded text-white text-xs font-bold rotate-90">H: 750mm</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section */}
      <section id="process" className="py-32 max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1918] mb-6 tracking-tight">How it works</h2>
          <p className="text-[#6c6760] font-medium">데이터가 가구가 되는 세 단계의 혁신</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Custom Design", desc: "온라인에서 필요한 폭, 높이, 깊이를 입력하세요. 실시간 3D 미리보기와 견적을 확인할 수 있습니다." },
            { step: "02", title: "Smart Fabrication", desc: "입력된 수치는 자동으로 CNC 가공 데이터로 변환되어 지역 파트너 공방으로 전송됩니다." },
            { step: "03", title: "Eco Delivery", desc: "가장 가까운 공방에서 제작하여 탄소 배출을 줄이고, 정교하게 마감된 프리미엄 가구를 집 앞으로 배송합니다." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white border border-[#e1dcd3] rounded-[40px] hover:shadow-xl transition-all">
              <span className="text-4xl font-black text-[#f4f0e6] block mb-6">{item.step}</span>
              <h4 className="text-2xl font-bold text-[#1a1918] mb-4">{item.title}</h4>
              <p className="text-[#6c6760] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Collection Preview */}
      <section id="collection" className="py-32 bg-[#f4f0e6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-4">The Collection</h2>
              <p className="text-[#6c6760] font-medium">디지털 크래프트맨십으로 완성된 CRART의 라인업</p>
            </div>
            <div className="flex gap-2">
              {['Deskterior', 'Camping', 'Small Furniture'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2 rounded-full text-xs font-bold border transition-all ${activeTab === i ? 'bg-[#1a1918] text-white border-[#1a1918]' : 'bg-transparent text-[#6c6760] border-[#e1dcd3]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden mb-6 relative border border-[#e1dcd3]">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic group-hover:scale-110 transition-transform">
                  [가변형 하이브리드 테이블 사진]
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#1a1918]">Hybrid Variable Desk</h4>
              <p className="text-[#a67c52] text-sm font-semibold">Customizable Birch Plywood</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden mb-6 relative border border-[#e1dcd3]">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic group-hover:scale-110 transition-transform">
                  [미니멀 캠핑 스툴 사진]
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#1a1918]">Minimalist Folding Stool</h4>
              <p className="text-[#a67c52] text-sm font-semibold">Premium Baltic Birch</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1918] mb-16 text-center tracking-tight">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "배송 기간은 얼마나 걸리나요?", a: "데이터 기반 분산 제조 시스템을 통해 주문 후 영업일 기준 보통 7~10일 내외로 수령 가능합니다." },
            { q: "직접 조립해야 하는 방식인가요?", a: "기본적으로 완제품 혹은 반조립 상태로 배송되며, 누구나 5분 내외로 쉽게 결합할 수 있는 정밀 조립 구조로 설계되었습니다." },
            { q: "소재는 안전한가요?", a: "최고급 자작나무 합판(E0 등급 이상)과 인체에 무해한 천연 오일 마감만을 고집합니다." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-white border border-[#e1dcd3] rounded-2xl">
              <h4 className="text-lg font-bold text-[#1a1918] mb-3">Q. {faq.q}</h4>
              <p className="text-[#6c6760] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer & Contact */}
      <footer id="contact" className="bg-[#1a1918] text-[#fdfbf7] py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">CRART</h2>
          <p className="text-xl md:text-2xl text-[#c9c1b5] max-w-2xl mb-12 font-light leading-relaxed">
            당신의 공간을 위한 단 하나의 수치, <br />
            CRART의 디지털 크래프트맨십이 실현합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-20">
             <button className="bg-[#a67c52] text-white px-10 py-4 rounded-full font-bold hover:bg-[#d4a373] transition shadow-lg">
                구매 및 주문 제작 문의
             </button>
             <button className="border border-[#3e3a35] text-[#fdfbf7] px-10 py-4 rounded-full font-bold hover:bg-[#2a2826] transition">
                공방 파트너십 제안
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-20 border-t border-[#3e3a35] text-sm font-medium text-[#6c6760]">
            <div>
              <p className="text-[#a67c52] mb-4 uppercase tracking-widest text-xs">Address</p>
              <p>경기도 김포시 (CRART Design Lab)</p>
            </div>
            <div>
              <p className="text-[#a67c52] mb-4 uppercase tracking-widest text-xs">Contact</p>
              <p>contact@crart.com</p>
              <p>@crart_furniture</p>
            </div>
            <div>
              <p className="text-[#a67c52] mb-4 uppercase tracking-widest text-xs">Mission</p>
              <p>지속 가능한 로컬 제조 생태계 구축</p>
            </div>
          </div>
          
          <p className="mt-20 text-[10px] font-bold tracking-[0.3em] uppercase opacity-30">© 2026 CRART. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}