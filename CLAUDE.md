# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

BITPIA 포트폴리오 웹사이트로, Next.js 16 기반의 블로그 시스템과 AI 자동화 비즈니스 서비스를 소개합니다. 한국 시장(ko_KR)을 위해 최적화되어 있으며, AI 직원 솔루션(문서 처리, 보험사 감사 Agent ActuAlly 등)에 초점을 맞추고 있습니다.

## 개발 명령어

```bash
# 의존성 설치 (geist 폰트 패키지 호환성 문제로 --legacy-peer-deps 필수)
npm install --legacy-peer-deps

# 개발 서버 실행 (기본 포트 3000, 사용 중이면 다음 포트 사용)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

## 아키텍처

### Next.js App Router 구조

- **`app/`** - Next.js 13+ App Router와 React Server Components 사용
  - `layout.tsx` - Geist 폰트, Analytics, SpeedInsights, 한글 메타데이터가 포함된 루트 레이아웃
  - `page.tsx` - BITPIA 서비스를 소개하는 홈페이지
  - `blog/` - MDX 지원 블로그 시스템
    - `posts/` - frontmatter가 있는 MDX 블로그 포스트 (title, publishedAt, summary, image)
    - `utils.ts` - 파일 기반 블로그 시스템 (파일시스템에서 MDX 읽기 및 frontmatter 파싱)
    - `[slug]/page.tsx` - 동적 블로그 포스트 페이지
  - `about/` - 소개 페이지
  - `components/` - 공유 React 컴포넌트 (nav, footer, mdx, posts)

### 주요 기술 스택

- **Next.js 16** - Turbopack으로 빠른 빌드
- **Tailwind CSS 4.0** (alpha) - PostCSS 사용
- **MDX** - `next-mdx-remote`로 블로그 콘텐츠 작성, `sugar-high`로 구문 강조
- **Geist 폰트** - Next.js 16 호환성을 위해 `--legacy-peer-deps` 필요
- **Vercel Analytics & Speed Insights** - 루트 레이아웃에 통합

### 블로그 시스템

블로그 포스트는 `app/blog/posts/` 디렉토리의 MDX 파일로, YAML frontmatter 형식:

```markdown
---
title: '포스트 제목'
publishedAt: '2024-01-01'
summary: '간단한 설명'
image: '/images/example.png'
---

본문 내용...
```

`app/blog/utils.ts`의 `getBlogPosts()` 함수가 빌드 타임에 파일을 읽고 파싱하여 정적 생성합니다.

### SEO 및 메타데이터

- 동적 OG 이미지 생성: `app/og/route.tsx`
- RSS 피드: `app/rss/route.ts`
- 사이트맵 생성: `app/sitemap.ts`
- Robots.txt: `app/robots.ts`
- 한국어 로케일 메타데이터는 루트 레이아웃에서 설정

### 스타일링

- Tailwind CSS 4.0 alpha, `@tailwindcss/postcss` 플러그인 사용
- CSS 클래스(`dark:` 접두사)로 다크 모드 지원
- Geist Sans, Geist Mono 폰트
- `max-w-xl` 중앙 정렬 레이아웃의 모바일 우선 반응형 디자인

## 중요 사항

- **의존성 설치**: geist 폰트 패키지의 Next.js 16 peer dependency 제약으로 반드시 `npm install --legacy-peer-deps` 사용
- **콘텐츠 언어**: 모든 사용자 대면 콘텐츠는 한글
- **TypeScript**: strict 모드는 비활성화(`strict: false`)되어 있으나 `strictNullChecks`는 활성화
- **빌드 시스템**: Turbopack 사용으로 더 빠른 개발 및 빌드
