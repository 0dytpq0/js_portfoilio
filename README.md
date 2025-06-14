# js_portfolio

개인 포트폴리오 웹사이트입니다.
Next.js(App Router)와 TypeScript를 기반으로, 자기소개, 프로젝트, 경험, 기술스택, 문제해결 경험 등 다양한 정보를 한눈에 볼 수 있도록 구성했습니다.

## 프로젝트 개요

- **프로젝트명**: js_portfolio
- **설명**: 자기소개, 프로젝트, 경험, 기술스택, 문제해결 경험 등 다양한 섹션으로 구성된 포트폴리오 웹사이트
- **Demo**: [https://js-portfoilio.vercel.app/](https://js-portfoilio.vercel.app/)
- **GitHub**: [https://github.com/0dytpq0/js_portfoilio](https://github.com/0dytpq0/js_portfoilio)

## 기술 스택

- TypeScript
- Next.js (App Router)
- React
- Tailwind CSS
- Git & Vercel

## 주요 기능

- 자기소개, 기술스택, 프로젝트, 경험, 교육 등 다양한 섹션 제공
- 프로젝트 상세 및 문제해결 경험을 모달로 제공

## 기술적 결정

- **Next.js(App Router)**: 파일 기반 라우팅과 SSR/CSR 지원으로 SEO 및 초기 로딩 속도 최적화
- **Tailwind CSS**: 빠르고 일관된 반응형 UI 개발

## 폴더 구조

```
src/
  app/                # Next.js app router 구조
  components/
    atoms/            # UI atomic 컴포넌트
    molecules/        # UI molecule 컴포넌트
    organisms/        # UI organism 컴포넌트(섹션, 모달 등)
  constants/
    data/             # 정적 데이터(프로젝트, 기술, 유저 등)
  context/            # React context
  hooks/              # 커스텀 훅
  types/              # 타입 정의
  utils/              # 유틸 함수
public/               # 정적 파일(이미지 등)
```

## 시작하기

```bash
npm install
npm run dev
```

## Author

- Joseph Park ([GitHub](https://github.com/0dytpq0))
- Blog: [https://velog.io/@0dytpq0/posts](https://velog.io/@0dytpq0/posts)

