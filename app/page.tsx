'use client';

import React, { useState } from 'react';

/**
 * CRART 공식 고도화 랜딩페이지 (V7.2 사업계획서 기반)
 * 1mm 파라메트릭 설계 및 로컬 분산 제조 시스템 강조
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
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-[#f4f0e6] border border-[#e1dcd3] rounded-full shadow-sm">
          <p className="text-[11px] font-bold tracking-widest text-[#a67c52] uppercase">Digital Craftsmanship & Local Network</p>
        </div>

        <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-10 leading-[0.9] text-[#1a1918]">
          나무의 본질, <br />
          <span className="font-light italic text-[#a67c52]">데이터로 완성하다</span>
        </h2>
        
        <p className="text-lg md:text-2xl max-w-3xl mb-14 leading-relaxed text-[#6c6760] font-medium">
          CRART는 1.7조 원 규모의 중소형 가구 시장의 한계를 파라메트릭 설계로 해결합니다.<br className="hidden md:block" />
          상담과 실측 없이, 당신의 공간에 1mm 단위로 딱 맞는 가구를 소유하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="group bg-[#1a1918] text-[#fdfbf7] px-12 py-5 rounded-xl hover:bg-[#a67c52] transition-all shadow-2xl flex items-center gap-3">
            <span className="text-lg font-bold">1mm 맞춤 설계 시작하기</span>
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
              기성 가구와 <span className="text-[#a67c52]">Dead Space</span>의<br />
              부조화를 해결합니다.
            </h3>
            <p className="text-[#c9c1b5] text-xl leading-relaxed">
              1~2인 가구 비중 65%. 하지만 가구 시장은 여전히 대량 생산 위주의 규격품에 머물러 있습니다. 
              CRART는 Fusion360 기반의 자동화 설계를 통해, 맞춤 가구의 높은 비용과 번거로운 상담 과정을 완전히 제거했습니다.
            </p>
            <div className="flex gap-10 pt-4">
              <div>
                <p className="text-3xl font-bold text-[#e5decb]">1.7T</p>
                <p className="text-xs text-[#6c6760] font-bold uppercase tracking-wider">Target Market</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#e5decb]">CNC</p>
                <p className="text-xs text-[#6c6760] font-bold uppercase tracking-wider">Smart Fabrication</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-[#2a2826] rounded-[40px] border border-[#3e3a35] overflow-hidden flex flex-col items-center justify-center p-12 group">
               <div className="w-full h-full border-2 border-dashed border-[#3e3a35] rounded-2xl flex items-center justify-center relative group-hover:border-[#a67c52] transition-colors">
                  <span className="text-[#6c6760] font-mono text-sm text-center">
                    [파라메트릭 가변 설계 모델링]<br/>
                    <span className="text-[10px] opacity-50 italic">W/H/D 변동 시 실시간 렌더링</span>
                  </span>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a67c52] px-4 py-1 rounded text-white text-[10px] font-bold shadow-lg">W: 1200mm</div>
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a67c52] px-4 py-1 rounded text-white text-[10px] font-bold rotate-90 shadow-lg translate-x-[-15px]">H: 750mm</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Process Section (Workflow 기반) */}
      <section id="process" className="py-32 max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-[#1a1918] mb-6 tracking-tight">Digital Workflow</h2>
          <p className="text-[#6c6760] font-medium uppercase tracking-widest text-xs">데이터가 실물이 되는 최적의 경로</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Web Order", desc: "온라인 웹사이트에서 원하는 디자인의 폭, 높이, 깊이를 직접 입력합니다." },
            { step: "02", title: "Auto Data", desc: "입력된 값은 파라메트릭 시스템을 통해 즉시 CNC 가공 데이터(CAM)로 변환됩니다." },
            { step: "03", title: "Local Fab", desc: "거주지와 가장 가까운 지역 파트너 공방에서 생산하여 탄소 배출을 줄이고 품질을 높입니다." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 bg-white border border-[#e1dcd3] rounded-[40px] hover:border-[#a67c52] transition-all group">
              <span className="text-4xl font-black text-[#f4f0e6] block mb-6 group-hover:text-[#e5decb] transition-colors">{item.step}</span>
              <h4 className="text-2xl font-bold text-[#1a1918] mb-4">{item.title}</h4>
              <p className="text-[#6c6760] leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Collection Preview */}
      <section id="collection" className="py-32 bg-[#f4f0e6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1918] mb-4 tracking-tighter">Collection</h2>
              <p className="text-[#6c6760] font-medium italic">Smart Furniture for Modern Life</p>
            </div>
            <div className="flex gap-2">
              {['Home Office', 'Camping', 'Living'].map((tab, i) => (
                <button 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-2 rounded-full text-[11px] font-bold border transition-all tracking-widest uppercase ${activeTab === i ? 'bg-[#1a1918] text-white border-[#1a1918]' : 'bg-transparent text-[#6c6760] border-[#e1dcd3] hover:border-[#a67c52]'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden mb-6 relative border border-[#e1dcd3] shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic group-hover:scale-105 transition-transform duration-700">
                  [가변형 하이브리드 테이블 박스]
                </div>
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold border border-[#e1dcd3]">PATENT PENDING</div>
              </div>
              <h4 className="text-xl font-bold text-[#1a1918]">Hybrid Storage Table</h4>
              <p className="text-[#a67c52] text-xs font-bold uppercase tracking-widest mt-1">Design Patent Applied</p>
            </div>
            <div className="group cursor-pointer">
              <div className="aspect-[16/10] bg-white rounded-3xl overflow-hidden mb-6 relative border border-[#e1dcd3] shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center text-stone-300 italic group-hover:scale-105 transition-transform duration-700">
                  [미니멀 자작나무 스툴]
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#1a1918]">Baltic Birch Minimal Stool</h4>
              <p className="text-[#a67c52] text-xs font-bold uppercase tracking-widest mt-1">100% Digital Fabrication</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1918] mb-16 text-center tracking-tight">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: "맞춤형인데 배송이 왜 빠른가요?", a: "기존의 상담-실측-설계 단계를 데이터로 자동화했습니다. 주문 즉시 가까운 공방에서 제작에 들어가기 때문에 기성품과 유사한 속도로 배송됩니다." },
            { q: "품질 관리는 어떻게 이루어지나요?", a: "동일한 CNC 가공 데이터와 CRART의 표준 제작 매뉴얼을 전국의 파트너 공방에 배포하여 어디서나 균일한 고품질 가구를 생산합니다." },
            { q: "E0 등급 자재를 사용하나요?", a: "네, CRART는 인체에 무해한 최고급 자작나무 합판(E0 등급 이상)과 천연 오일 마감만을 원칙으로 합니다." }
          ].map((faq, i) => (
            <div key={i} className="p-8 bg-white border border-[#e1dcd3] rounded-3xl hover:border-[#a67c52] transition-colors">
              <h4 className="text-lg font-bold text-[#1a1918] mb-3 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#f4f0e6] text-[#a67c52] flex items-center justify-center text-[10px] font-black">Q</span>
                {faq.q}
              </h4>
              <p className="text-[#6c6760] leading-relaxed text-sm ml-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Footer & Contact */}
      <footer id="contact" className="bg-[#1a1918] text-[#fdfbf7] py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 italic">CRART</h2>
          <p className="text-xl md:text-2xl text-[#c9c1b5] max-w-2xl mb-12 font-light leading-relaxed">
            공간의 한계를 데이터로 넘어서는 <br />
            새로운 가구 제조 생태계를 만듭니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-24">
             <button className="bg-[#a67c52] text-white px-12 py-5 rounded-full font-bold hover:bg-[#d4a373] transition-all shadow-xl">
                구매 및 비스포크 문의
             </button>
             <button className="border border-[#3e3a35] text-[#fdfbf7] px-12 py-5 rounded-full font-bold hover:bg-white hover:text-[#1a1918] transition-all">
                제조 파트너십 제안
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-20 border-t border-[#3e3a35] text-[11px] font-medium text-[#6c6760] tracking-widest uppercase">
            <div>
              <p className="text-[#a67c52] mb-4">Location</p>
              <p className="normal-case">Gimpo-si, Gyeonggi-do (CRART Lab)</p>
            </div>
            <div>
              <p className="text-[#a67c52] mb-4">Email</p>
              <p className="normal-case">contact@crart.com</p>
              <p className="normal-case">@crart_official</p>
            </div>
            <div>
              <p className="text-[#a67c52] mb-4">Vision</p>
              <p className="normal-case">Sustainable Distributed Manufacturing</p>
            </div>
          </div>
          
          <p className="mt-20 text-[9px] font-bold tracking-[0.5em] uppercase opacity-20">© 2026 CRART. Digital Craftsmanship.</p>
        </div>
      </footer>

    </div>
  );
}