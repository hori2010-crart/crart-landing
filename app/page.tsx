export default function CustomBookshelfHomepage() {
  const NAVER_FORM_URL = "https://form.naver.com/your-form-link";
  const benefits = [
    {
      title: "우리집에 딱 맞는 사이즈",
      desc: "가로, 세로, 깊이를 공간에 맞게 선택해 애매한 빈틈 없이 제작합니다.",
    },
    {
      title: "주문 후 제작",
      desc: "재고를 쌓아두지 않고 주문 정보를 기준으로 제작해 불필요한 낭비를 줄입니다.",
    },
    {
      title: "실제 공방 제작",
      desc: "디지털 설계와 공방 제작을 결합해 맞춤형 가구를 보다 현실적인 방식으로 제공합니다.",
    },
  ];

  const process = [
    "원하는 디자인과 사이즈 입력",
    "주문 내용 확인 및 제작 도면 정리",
    "공방 제작 진행",
    "완성 후 배송 및 설치 안내",
  ];

  const faqs = [
    {
      q: "사이즈는 어떻게 주문하나요?",
      a: "희망하는 가로, 세로, 깊이를 입력하면 주문 내용을 확인한 뒤 제작 가능 여부와 세부 사항을 안내합니다.",
    },
    {
      q: "제작 기간은 얼마나 걸리나요?",
      a: "기본적으로 주문 확정 후 약 2~3주를 예상합니다. 사이즈와 사양에 따라 달라질 수 있습니다.",
    },
    {
      q: "가격은 어떻게 정해지나요?",
      a: "기본 가격을 기준으로 하되, 사이즈와 옵션에 따라 추가 비용이 반영될 수 있습니다.",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#f5f5f4",
      color: "#1c1917",
      fontFamily: "Arial, sans-serif",
      lineHeight: 1.5,
    },
    container: {
      maxWidth: "1120px",
      margin: "0 auto",
      padding: "0 24px",
    },
    header: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      borderBottom: "1px solid #e7e5e4",
      background: "rgba(245,245,244,0.95)",
      backdropFilter: "blur(8px)",
    },
    headerInner: {
      maxWidth: "1120px",
      margin: "0 auto",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap",
    },
    brandTitle: {
      fontSize: "24px",
      fontWeight: 700,
      margin: 0,
    },
    brandDesc: {
      fontSize: "13px",
      color: "#78716c",
      marginTop: "4px",
    },
    nav: {
      display: "flex",
      gap: "18px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    navLink: {
      color: "#57534e",
      textDecoration: "none",
      fontSize: "14px",
    },
    darkButton: {
      display: "inline-block",
      background: "#1c1917",
      color: "#ffffff",
      textDecoration: "none",
      padding: "12px 18px",
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: 700,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    lightButton: {
      display: "inline-block",
      background: "#ffffff",
      color: "#1c1917",
      textDecoration: "none",
      padding: "12px 18px",
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: 700,
      border: "1px solid #d6d3d1",
      cursor: "pointer",
    },
    hero: {
      maxWidth: "1120px",
      margin: "0 auto",
      padding: "72px 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: "40px",
      alignItems: "center",
    },
    badge: {
      display: "inline-block",
      padding: "8px 12px",
      borderRadius: "999px",
      border: "1px solid #d6d3d1",
      background: "#ffffff",
      color: "#57534e",
      fontSize: "13px",
      marginBottom: "16px",
    },
    heroTitle: {
      fontSize: "64px",
      lineHeight: 1.1,
      letterSpacing: "-0.03em",
      margin: 0,
    },
    heroDesc: {
      marginTop: "24px",
      fontSize: "18px",
      color: "#57534e",
      maxWidth: "620px",
    },
    buttonRow: {
      display: "flex",
      gap: "12px",
      marginTop: "28px",
      flexWrap: "wrap",
    },
    statBox: {
      marginTop: "28px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
      padding: "20px",
      borderRadius: "24px",
      border: "1px solid #e7e5e4",
      background: "#ffffff",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    },
    statTitle: {
      fontSize: "28px",
      fontWeight: 700,
      margin: 0,
    },
    statDesc: {
      marginTop: "6px",
      fontSize: "14px",
      color: "#78716c",
    },
    cardOuter: {
      borderRadius: "32px",
      border: "1px solid #e7e5e4",
      background: "#ffffff",
      padding: "28px",
      boxShadow: "0 16px 32px rgba(0,0,0,0.08)",
    },
    cardInner: {
      borderRadius: "24px",
      background: "linear-gradient(135deg, #f5f5f4, #fef3c7)",
      padding: "24px",
    },
    sampleTitle: {
      marginBottom: "16px",
      fontSize: "14px",
      color: "#57534e",
      fontWeight: 700,
    },
    whiteCard: {
      borderRadius: "24px",
      background: "#ffffff",
      padding: "20px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    },
    dimLabel: {
      fontSize: "12px",
      color: "#78716c",
    },
    dimValue: {
      marginTop: "4px",
      fontSize: "22px",
      fontWeight: 700,
    },
    dims: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
      marginTop: "16px",
      marginBottom: "16px",
    },
    dimCard: {
      borderRadius: "18px",
      background: "#f5f5f4",
      padding: "16px",
    },
    dashedBox: {
      borderRadius: "16px",
      border: "1px dashed #a8a29e",
      padding: "16px",
      fontSize: "14px",
      color: "#57534e",
      marginBottom: "16px",
    },
    sectionWhite: {
      background: "#ffffff",
      borderTop: "1px solid #e7e5e4",
      borderBottom: "1px solid #e7e5e4",
      padding: "72px 0",
    },
    section: {
      padding: "72px 0",
    },
    sectionTitleWrap: {
      maxWidth: "760px",
      marginBottom: "32px",
    },
    sectionKicker: {
      color: "#78716c",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "8px",
    },
    sectionTitle: {
      fontSize: "42px",
      lineHeight: 1.2,
      margin: 0,
    },
    sectionDesc: {
      marginTop: "16px",
      fontSize: "17px",
      color: "#57534e",
    },
    benefitGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },
    benefitCard: {
      borderRadius: "28px",
      border: "1px solid #e7e5e4",
      background: "#fafaf9",
      padding: "24px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
    },
    benefitTitle: {
      fontSize: "24px",
      fontWeight: 700,
      margin: 0,
    },
    benefitDesc: {
      marginTop: "12px",
      fontSize: "15px",
      color: "#57534e",
    },
    processGrid: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: "32px",
      alignItems: "start",
    },
    processList: {
      display: "grid",
      gap: "14px",
    },
    processItem: {
      display: "flex",
      gap: "14px",
      alignItems: "flex-start",
      borderRadius: "24px",
      border: "1px solid #e7e5e4",
      background: "#ffffff",
      padding: "18px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
    },
    processNum: {
      width: "40px",
      height: "40px",
      borderRadius: "999px",
      background: "#1c1917",
      color: "#ffffff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      flexShrink: 0,
    },
    processText: {
      fontSize: "16px",
      fontWeight: 600,
      paddingTop: "8px",
    },
    darkSection: {
      background: "#1c1917",
      color: "#ffffff",
      padding: "72px 0",
    },
    orderGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "32px",
      alignItems: "center",
    },
    orderText: {
      color: "#d6d3d1",
      fontSize: "17px",
      marginTop: "16px",
      maxWidth: "520px",
    },
    formCard: {
      borderRadius: "32px",
      background: "#ffffff",
      padding: "28px",
      color: "#1c1917",
      boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
    },
    inputGrid: {
      display: "grid",
      gap: "14px",
    },
    label: {
      display: "block",
      fontSize: "14px",
      fontWeight: 700,
      marginBottom: "8px",
    },
    input: {
      width: "100%",
      borderRadius: "16px",
      border: "1px solid #d6d3d1",
      padding: "14px 16px",
      fontSize: "15px",
      boxSizing: "border-box",
    },
    textarea: {
      width: "100%",
      minHeight: "120px",
      borderRadius: "16px",
      border: "1px solid #d6d3d1",
      padding: "14px 16px",
      fontSize: "15px",
      boxSizing: "border-box",
      resize: "vertical",
    },
    threeCols: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
    },
    note: {
      fontSize: "12px",
      color: "#78716c",
      marginTop: "8px",
    },
    helperBox: {
      marginTop: "16px",
      borderRadius: "16px",
      background: "#f5f5f4",
      padding: "14px 16px",
      fontSize: "14px",
      color: "#57534e",
    },
    faqList: {
      display: "grid",
      gap: "14px",
      marginTop: "32px",
    },
    faqCard: {
      borderRadius: "24px",
      border: "1px solid #e7e5e4",
      background: "#ffffff",
      padding: "22px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
    },
    faqQ: {
      fontSize: "20px",
      fontWeight: 700,
    },
    faqA: {
      marginTop: "12px",
      fontSize: "15px",
      color: "#57534e",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div>
            <div style={styles.brandTitle}>맞춤 책장</div>
            <div style={styles.brandDesc}>사이즈 맞춤 제작 서비스</div>
          </div>
          <nav style={styles.nav}>
            <a href="#benefits" style={styles.navLink}>특징</a>
            <a href="#process" style={styles.navLink}>주문 방법</a>
            <a href="#faq" style={styles.navLink}>자주 묻는 질문</a>
          </nav>
          <a href={NAVER_FORM_URL} target="_blank" rel="noreferrer" style={styles.darkButton}>주문 문의</a>
        </div>
      </header>

      <main>
        <section style={styles.hero}>
          <div>
            <div style={styles.badge}>공간에 맞춰 제작하는 사이즈 맞춤 책장</div>
            <h1 style={styles.heroTitle}>
              우리집에 딱 맞는
              <br />
              사이즈 책장
            </h1>
            <p style={styles.heroDesc}>
              기성 책장이 애매하게 남기는 공간을 줄이고, 원하는 크기에 맞춰 제작하는 주문형 책장 서비스입니다.
              복잡한 상담보다 먼저, 필요한 사이즈를 기준으로 간단하게 문의하고 제작을 시작할 수 있습니다.
            </p>
            <div style={styles.buttonRow}>
              <a href={NAVER_FORM_URL} target="_blank" rel="noreferrer" style={styles.darkButton}>사이즈 입력하고 문의하기</a>
              <a href="#process" style={styles.lightButton}>주문 방법 보기</a>
            </div>
            <div style={styles.statBox}>
              <div>
                <div style={styles.statTitle}>맞춤</div>
                <div style={styles.statDesc}>가로·세로·깊이 선택</div>
              </div>
              <div>
                <div style={styles.statTitle}>공방</div>
                <div style={styles.statDesc}>주문 후 제작</div>
              </div>
              <div>
                <div style={styles.statTitle}>간단</div>
                <div style={styles.statDesc}>문의 기반 진행</div>
              </div>
            </div>
          </div>

          <div style={styles.cardOuter}>
            <div style={styles.cardInner}>
              <div style={styles.sampleTitle}>예시 주문 카드</div>
              <div style={styles.whiteCard}>
                <div>
                  <div style={styles.dimLabel}>제품</div>
                  <div style={styles.dimValue}>사이즈 맞춤 책장</div>
                </div>
                <div style={styles.dims}>
                  <div style={styles.dimCard}>
                    <div style={styles.dimLabel}>가로</div>
                    <div style={styles.dimValue}>900mm</div>
                  </div>
                  <div style={styles.dimCard}>
                    <div style={styles.dimLabel}>세로</div>
                    <div style={styles.dimValue}>1800mm</div>
                  </div>
                  <div style={styles.dimCard}>
                    <div style={styles.dimLabel}>깊이</div>
                    <div style={styles.dimValue}>280mm</div>
                  </div>
                </div>
                <div style={styles.dashedBox}>
                  원하는 공간에 맞춰 사이즈를 입력하면 주문 내용을 검토한 뒤 제작 가능 여부와 예상 일정을 안내합니다.
                </div>
                <a href={NAVER_FORM_URL} target="_blank" rel="noreferrer" style={styles.darkButton}>주문 문의 시작하기</a>
              </div>
            </div>
          </div>
        </section>

        <section id="benefits" style={styles.sectionWhite}>
          <div style={styles.container}>
            <div style={styles.sectionTitleWrap}>
              <div style={styles.sectionKicker}>왜 필요한가</div>
              <h2 style={styles.sectionTitle}>기성 가구의 애매함을 줄이는 방식</h2>
              <p style={styles.sectionDesc}>
                공간에 안 맞는 기성 가구와, 절차가 복잡한 전통적 주문제작 사이의 간극을 줄이는 데 초점을 둡니다.
              </p>
            </div>
            <div style={styles.benefitGrid}>
              {benefits.map((item) => (
                <div key={item.title} style={styles.benefitCard}>
                  <h3 style={styles.benefitTitle}>{item.title}</h3>
                  <p style={styles.benefitDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.processGrid}>
              <div>
                <div style={styles.sectionKicker}>주문 방법</div>
                <h2 style={styles.sectionTitle}>복잡한 과정 없이, 필요한 정보부터</h2>
                <p style={styles.sectionDesc}>
                  초기에는 자동 견적보다 간단한 주문 문의 방식을 우선 적용해 실제 고객 반응과 제작 과정을 검증합니다.
                </p>
              </div>
              <div style={styles.processList}>
                {process.map((step, index) => (
                  <div key={step} style={styles.processItem}>
                    <div style={styles.processNum}>{index + 1}</div>
                    <div style={styles.processText}>{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="order" style={styles.darkSection}>
          <div style={styles.container}>
            <div style={styles.orderGrid}>
              <div>
                <div style={styles.sectionKicker}>주문 문의</div>
                <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>먼저 사이즈를 남겨주세요</h2>
                <p style={styles.orderText}>
                  원하는 책장 크기와 설치 공간 정보를 남겨주시면 제작 가능 여부, 예상 일정, 상세 진행 방법을 안내합니다.
                </p>
              </div>
              <div style={styles.formCard}>
                <div style={styles.inputGrid}>
                  <div>
                    <label style={styles.label}>이름</label>
                    <input style={styles.input} placeholder="홍길동" readOnly />
                  </div>
                  <div>
                    <label style={styles.label}>연락처</label>
                    <input style={styles.input} placeholder="010-0000-0000" readOnly />
                  </div>
                  <div style={styles.threeCols}>
                    <div>
                      <label style={styles.label}>가로(mm)</label>
                      <input style={styles.input} placeholder="900" readOnly />
                    </div>
                    <div>
                      <label style={styles.label}>세로(mm)</label>
                      <input style={styles.input} placeholder="1800" readOnly />
                    </div>
                    <div>
                      <label style={styles.label}>깊이(mm)</label>
                      <input style={styles.input} placeholder="280" readOnly />
                    </div>
                  </div>
                  <div>
                    <label style={styles.label}>추가 요청사항</label>
                    <textarea style={styles.textarea} placeholder="설치 공간, 원하는 분위기, 참고사항 등을 적어주세요." readOnly />
                  </div>
                  <a href={NAVER_FORM_URL} target="_blank" rel="noreferrer" style={{ ...styles.darkButton, textAlign: "center" }}>네이버 폼으로 문의하기</a>
                  <div style={styles.helperBox}>
                    버튼을 누르면 네이버 폼이 새 창에서 열립니다. 폼에 이름, 연락처, 희망 사이즈를 남겨주시면 확인 후 연락드리는 방식으로 운영합니다.
                  </div>
                  <p style={styles.note}>
                    현재 코드에서는 상단의 NAVER_FORM_URL 값을 실제 네이버 폼 주소로 바꾸면 바로 연결됩니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.sectionTitleWrap}>
              <div style={styles.sectionKicker}>FAQ</div>
              <h2 style={styles.sectionTitle}>자주 묻는 질문</h2>
            </div>
            <div style={styles.faqList}>
              {faqs.map((item) => (
                <div key={item.q} style={styles.faqCard}>
                  <div style={styles.faqQ}>{item.q}</div>
                  <div style={styles.faqA}>{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
