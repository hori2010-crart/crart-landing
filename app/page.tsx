export default function Home() {
  return (
    <main className="min-h-screen bg-white text-stone-900">
      {/* Hero Section */}
      <section className="py-20 px-10 text-center">
        <h1 className="text-5xl font-light mb-6">CRART</h1>
        <p className="text-xl text-stone-600 mb-10">디지털 제작으로 완성하는 나만의 프리미엄 캠핑 가구</p>
        <button className="bg-stone-900 text-white px-8 py-3 rounded-full hover:bg-stone-700 transition">
          제품 둘러보기
        </button>
      </section>

      {/* Feature Section */}
      <section className="bg-stone-50 py-16 px-10 grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="font-bold mb-2">CNC 정밀 제작</h3>
          <p className="text-sm text-stone-500">오차 없는 설계로 완성도를 높입니다.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">지속 가능한 소재</h3>
          <p className="text-sm text-stone-500">최고급 자작나무와 천연 마감을 지향합니다.</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">맞춤형 디자인</h3>
          <p className="text-sm text-stone-500">공간과 용도에 맞는 맞춤 설계가 가능합니다.</p>
        </div>
      </section>
    </main>
  );
}