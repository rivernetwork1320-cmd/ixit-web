# IXIT Co., Ltd. — QSAN 공식 한국 총판 엔터프라이즈 웹사이트

> QSAN Visual Identity Guidelines v10 (January 2025) 기반으로 구축된 B2B 엔터프라이즈 스토리지 솔루션 웹사이트

---

## 🏢 프로젝트 개요

| 항목 | 내용 |
|------|------|
| **회사명** | IXIT Co., Ltd. |
| **역할** | QSAN Technology 공식 한국 총판 |
| **전화** | 070-8859-6531 |
| **이메일** | sales1@ixit.kr |
| **웹사이트** | https://www.ixit.co.kr |
| **기술 스택** | Vanilla HTML5 / CSS3 / ES6+ JavaScript (No Framework) |
| **기준 문서** | QSAN VI Guideline v10 (Jan 2025) |

---

## 🎨 QSAN VI Guideline v10 — Design Token System

### Primary Brand Colors

| 토큰 | 값 | 용도 | 출처 |
|------|-----|------|------|
| `--qsan-green` | `#5EC400` | 주 브랜드 컬러, CTA, 강조 | Pantone 375 C / C54 M0 Y100 K0 |
| `--qsan-green-light` | `#72D900` | 호버 상태, 그라데이션 | VI 파생 |
| `--qsan-green-dark` | `#4AA000` | 눌림 상태 | VI 파생 |
| `--qsan-black` | `#231F20` | 로고/타입 전용 검정 | VI 공식 (near-black) |

### Supporting Gray Scale (VI Guideline)

| 토큰 | 값 | VI 명칭 | 용도 |
|------|-----|---------|------|
| `--gray-1` | `#3D3D3D` | Gray 1 (75% black) | 다크 텍스트, 아이콘 |
| `--gray-2` | `#6D6E70` | Gray 2 (55% black) | 보조 텍스트 |
| `--gray-3` | `#A7A9AC` | Gray 3 (35% black) | 비활성 요소 |
| `--gray-4` | `#D1D3D4` | Gray 4 (20% black) | 구분선, 라이트 |
| `--gray-5` | `#F1F1F2` | Gray 5 (5% black) | 오프화이트 배경 |

### Site Background System (Dark Mode)

| 토큰 | 값 | 용도 |
|------|-----|------|
| `--bg-base` | `#0B0B0B` | 페이지 기본 배경 |
| `--bg-level-1` | `#111111` | 섹션 배경 |
| `--bg-level-2` | `#161616` | 카드 표면 |
| `--bg-level-3` | `#1E1E1E` | 엘리베이티드 요소 |
| `--bg-level-4` | `#242424` | 오버레이 |

---

## 🔤 Typography — VI Guideline

| 역할 | 폰트 | Weight | Letter-spacing | 용도 |
|------|------|--------|---------------|------|
| Display | Barlow | 800 ExtraBold | -0.035em | 히어로 대형 타이틀 |
| H1 | Barlow | 800 ExtraBold | -0.03em | 섹션 주제목 |
| H2 | Barlow | 700 Bold | -0.025em | 섹션 타이틀 |
| H3 | Barlow | 600 SemiBold | -0.015em | 카드 타이틀 |
| Body | Barlow / Noto Sans KR | 400 Regular | -0.005em | 본문 |
| Caption | Barlow | 700 Bold | 0.1em + uppercase | 태그, 레이블 |
| Numbers | Barlow | 800 ExtraBold | -0.03em | 통계, 데이터 |

**Google Fonts CDN:**
```html
<link href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Noto+Sans+KR:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
```

---

## 🏷️ QSAN Box Logo — VI Guideline

| 규칙 | 사양 |
|------|------|
| 박스 배경 | QSAN Green `#5EC400` |
| 텍스트 | 흰색 `#FFFFFF`, Barlow 900 (Black weight) |
| Letter-spacing | 0.06em |
| Clear Space | 박스 높이 ÷ 4 (최소 여백) |
| 최소 크기 | 디지털: 박스 높이 25px |
| 반전 버전 | 그린 배경 위: 흰 박스 + 그린 텍스트 (`.logo-invert`) |
| Partner Lockup | 세로 구분선 + 파트너사명 + 부제목 |

**HTML 구현:**
```html
<div class="qsan-badge-logo">
  <span class="qsan-badge-text">QSAN</span>
  <sup class="qsan-badge-reg">®</sup>
</div>
```

---

## 🏅 QCP Certificate Badge

QSAN Certified Partner 인증 배지 (`.qcp-badge` 컴포넌트):
- 녹색 `Q` 아이콘 박스 (QSAN Green `#5EC400`)
- "QSAN Certified Partner" 타이틀 (Barlow 800)
- "Korea Official Distributor" 서브 (그린 캡션)

---

## 📁 파일 구조

```
index.html          단일 페이지 메인 파일 (1,077줄)
css/
  style.css         VI 가이드라인 v10 기반 전체 스타일 (1,800줄+)
js/
  main.js           20개 인터랙티브 기능 (490줄)
README.md           프로젝트 문서
```

---

## 🖥️ 페이지 섹션 구성

| ID | 섹션 | 설명 |
|----|------|------|
| `#hero` | 히어로 | XF5 제품 이미지, 통계, 플로팅 스펙카드 |
| `#trusted-by` | 신뢰 로고 | Samsung, LG, SK텔레콤 등 8개사 |
| `#why-ixit` | IXIT 소개 | 6개 핵심 강점 카드 |
| `#products` | 제품 라인업 | **Unified Storage / Block Storage / Expansion Units / Compute Nodes** 4탭 |
| `#solutions` | 솔루션 | AI·방송·의료·금융·교육 산업별 탭 |
| `#case-studies` | 도입 사례 | 3개 고객 레퍼런스 카드 |
| `#support` | 기술 지원 | 전화/원격/현장 지원 카드 |
| `#contact` | 문의 | 연락처 정보 + 문의 폼 |

---

## 🖼️ 제품 이미지 매핑 (v3 — 4-Tab 재구성 반영)

### Unified Storage (XN Series)
| 모델 | 폼팩터 | 인터페이스 | 이미지 |
|------|--------|-----------|--------|
| XN5 | 2U 26-Bay | NVMe · Dual-Active | `genspark.ai/api/files/s/ISPofDw8` |
| XN4 | 2U 26-Bay | NVMe · Dual-Active | `genspark.ai/api/files/s/ZRpPexey` |
| XN3 | 2U 12-Bay | NVMe · Dual-Active | `genspark.ai/api/files/s/KRVgaIbS` |
| XN2 | 2U 16/12-Bay, 1U 4-Bay | SATA · Single | `genspark.ai/api/files/s/ZRpPexey` |
| XN1 | Desktop Tower 9/5-Bay | SATA · Single | `genspark.ai/api/files/s/KRVgaIbS` |
| Lineup | — | — | `genspark.ai/api/files/s/vC1Msp1y` |

### Block Storage (XF Series)
| 모델 | 폼팩터 | 네트워크 | 이미지 |
|------|--------|---------|--------|
| XF5 | 2U 26-Bay | 8×25GbE iSCSI | `genspark.ai/api/files/s/7vsfvEfq` |
| XF4 | 2U 26-Bay | 8×10GbE iSCSI | `genspark.ai/api/files/s/7ksyc4aC` |
| XF3 | 2U 12-Bay | 8×10GbE iSCSI | `genspark.ai/api/files/s/sxAg6enN` |
| Lineup | — | — | `genspark.ai/api/files/s/9EtKukKp` |

### Expansion Units (XE/XD Series)
| 모델 | 폼팩터 | 타입 | 최대 용량 |
|------|--------|------|---------|
| XE5 | 2U 26-Bay | Ethernet NVMe | 1,474 TB · 최대 4대 |
| XD5378 | 4U 78-Bay | SAS Direct | 2,028 TB · 최대 4대 |
| XD5300 | 4U/3U/2U 멀티 | SAS Direct | 491 TB · 최대 20대 |
| Lineup | — | — | `genspark.ai/api/files/s/14UFSXbY` |

### Compute Nodes (플레이스홀더)
| 노드 | 용도 |
|------|------|
| AI / GPU 컴퓨트 | NVIDIA H100/A100 연동 |
| 하이퍼컨버지드(HCI) | VMware vSAN ReadyNode |
| 엣지 컴퓨트 | 1U/2U 저전력 |
| 백업 어플라이언스 | Veeam/Veritas 통합 |

---

## ⚙️ JavaScript 기능 (20개)

| # | 기능 | 설명 |
|---|------|------|
| 1 | Sticky Nav | 스크롤 시 반투명 배경 + backdrop blur |
| 2 | Mobile Hamburger | 모바일 풀스크린 메뉴 |
| 3 | Smooth Scroll | 앵커 링크 오프셋 80px smooth |
| 4 | IntersectionObserver | `.animate-slide-up` 스크롤 트리거 |
| 5 | Counter Animation | easeOut cubic, `data-count` 속성 |
| 6 | Product Tabs | **Unified / Block / Expansion / Compute** 4탭 전환 |
| 7 | Industry Tabs | 5개 산업 탭 + fade 트랜지션 |
| 8 | Hero Particles | 50개 랜덤 파티클 생성 |
| 9 | Drive Activity | 랙 드라이브 LED 시뮬레이션 |
| 10 | Metric Animate | 스펙 값 스크롤 페이드 |
| 11 | Contact Form | 폼 전송 + 성공 상태 (1.5s delay) |
| 12 | Hover Tilt | 제품 카드 3D 틸트 효과 |
| 13 | Active Nav | 현재 섹션 네비 하이라이트 |
| 14 | Spec Parallax | 플로팅 스펙카드 패럴랙스 |
| 15 | Typed Effect | 히어로 타이핑 애니 (Solutions/Innovation...) |
| 16 | Why Cards | 스태거드 카드 입장 애니 |
| 17 | IOPS Live | 실시간 IOPS 수치 변동 표시 |
| 18 | Scroll Progress | 상단 그린 프로그레스바 (`#5EC400`) |
| 19 | Lazy Loading | IntersectionObserver 기반 이미지 |
| 20 | Back to Top | 스크롤 400px+ 시 표시 |

---

## ✅ 완료된 기능

- [x] 엔터프라이즈 B2B 사이트 전체 구조 구현
- [x] 메가 메뉴 네비게이션 (VI 그린 상단 테두리)
- [x] Hero — XF5 실제 제품 이미지 + 플로팅 스펙카드
- [x] 통계 카운터 애니메이션
- [x] 제품 탭 **완전 재구성** (Unified Storage / Block Storage / Expansion Units / Compute Nodes)
  - XN5 / XN4 / XN3 (NVMe row) + XN2 / XN1 (SATA row) — 라인업 비교 이미지 포함
  - XF5 / XF4 / XF3 (All-NVMe, iSCSI Block) — 라인업 비교 이미지 포함
  - XE5 / XD5378 / XD5300 (Ethernet·SAS Expansion) — 아이콘 기반 비주얼
  - AI GPU / HCI / Edge / Backup 컴퓨트 노드 카드 (출시 예정)
- [x] 산업별 솔루션 탭 (AI/방송/의료/금융/교육)
- [x] 도입사례 카드 (3개)
- [x] 기술 지원 카드 (전화/원격/현장)
- [x] 문의 폼 (유효성 검사 + 성공 상태)
- [x] QSAN Box Logo CSS 구현 (VI 가이드라인 비율)
- [x] QCP 인증 배지 컴포넌트
- [x] 실제 회사 정보 (IXIT, 070-8859-6531, sales1@ixit.kr)
- [x] VI 가이드라인 v10 색상 시스템 (`#5EC400` Pantone 375 C)
- [x] VI 가이드라인 v10 타이포그래피 (Barlow + Noto Sans KR)
- [x] VI 가이드라인 v10 그레이 스케일 팔레트
- [x] 스크롤 진행바 VI 색상 (`#5EC400` → `#8FE000`)
- [x] 반응형 (1100px 태블릿, 768px 모바일, 480px 소형)
- [x] 빌드 검증 ✅ (콘솔 에러 없음)

---

## 🔜 권장 다음 단계

1. **실제 제품 모델명 정렬** — XS5226D 등 플레이스홀더를 IXIT 실제 취급 모델로 교체
2. **고객사 로고 이미지** — trusted-by 섹션 텍스트를 실제 로고 이미지로 교체
3. **연락처 폼 백엔드 연동** — Formspree / EmailJS 등 실제 전송 서비스 연결
4. **도입사례 실제 데이터** — 레퍼런스 카드에 실제 고객사 정보 입력
5. **SEO 강화** — Open Graph 이미지, 구조화 데이터(JSON-LD) 추가
6. **Analytics** — Google Analytics 또는 네이버 애널리틱스 삽입
7. **QSAN 공식 이미지 라이센스** — 제품 이미지 QSAN Korea 공식 허가 확인

---

## 📋 빌드 상태

| 항목 | 상태 |
|------|------|
| 콘솔 에러 | ✅ 없음 |
| 폰트 로드 | ✅ Barlow + Noto Sans KR (Google Fonts CDN) |
| 아이콘 | ✅ Font Awesome 6.4.0 (jsDelivr CDN) |
| 반응형 | ✅ 1100px / 768px / 480px |
| VI 색상 | ✅ `#5EC400` (Pantone 375 C) |
| VI 타이포그래피 | ✅ Barlow 계층 (300~900) |
| VI 그레이 스케일 | ✅ Gray 1–5 적용 |
| 마지막 빌드 검증 | ✅ 2026-06-30 (제품 탭 4탭 재구성 + 레거시 HTML 완전 제거 후) |
