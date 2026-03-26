export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* 1. 첫 화면 */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl font-bold mb-4">
          내 공간에 딱 맞는 맞춤 가구
        </h1>
        <p className="mb-6 text-lg">
          사이즈만 입력하면 제작까지 연결됩니다
        </p>
        <a
          href="https://naver.me/폼링크"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          상담 신청하기
        </a>
      </section>

      {/* 2. 문제 */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          이런 고민 있으셨나요?
        </h2>
        <div className="max-w-xl mx-auto space-y-4 text-center">
          <p>✔ 맞는 사이즈 가구가 없음</p>
          <p>✔ 맞춤 제작은 너무 번거로움</p>
          <p>✔ 가격이 불투명함</p>
        </div>
      </section>

      {/* 3. 해결 */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-10">
          이렇게 해결합니다
        </h2>
        <div className="space-y-4">
          <p>1. 디자인 선택</p>
          <p>2. 사이즈 입력</p>
          <p>3. 제작 및 배송</p>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="bg-black text-white text-center py-20">
        <h2 className="text-2xl mb-6">
          지금 바로 상담 받아보세요
        </h2>
        <a
          href="https://naver.me/폼링크"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          무료 상담 신청
        </a>
      </section>

    </main>
  );
}