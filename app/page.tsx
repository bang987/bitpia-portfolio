import Image from 'next/image'

export default function Page() {
  return (
    <div className="mesh-gradient grid-pattern min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient relative pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="container-main">
          {/* Badge */}
          <div className="animate-fade-in-up">
            <span className="badge">
              <span className="badge-dot"></span>
              Enterprise AI Solutions
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] animate-fade-in-up delay-100">
            <span className="text-balance">AI 시대,</span>
            <br />
            <span className="inline-flex items-baseline">
              <Image
                src="/img/bitpia_logo.png"
                alt="BITPIA"
                width={280}
                height={52}
                className="h-10 md:h-12 lg:h-16 w-auto inline-block align-baseline dark:invert"
                priority
              />
              <span className="text-neutral-900 dark:text-white">가 해결합니다.</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed animate-fade-in-up delay-200">
            복잡한 서류 업무부터 금융권 감사 대응까지,
            <br className="hidden sm:block" />
            당신의 비즈니스를 실행하는{' '}
            <strong className="text-neutral-900 dark:text-white font-semibold">AI 직원</strong>을 만들어 드립니다.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <a
              href="mailto:bang987@naver.com"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              무료 상담 신청
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#solutions"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              솔루션 둘러보기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="container-main">
          <div className="glass rounded-3xl p-8 md:p-12 animate-fade-in-up delay-400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="stat-value text-4xl md:text-5xl font-bold">99.2%</div>
                <div className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">심의 정확도</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-4xl md:text-5xl font-bold">90%</div>
                <div className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">업무 시간 단축</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-4xl md:text-5xl font-bold">50+</div>
                <div className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">도입 기업</div>
              </div>
              <div className="text-center">
                <div className="stat-value text-4xl md:text-5xl font-bold">24/7</div>
                <div className="mt-2 text-sm md:text-base text-neutral-600 dark:text-neutral-400">무중단 운영</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="container-main">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white animate-fade-in-up">
              주요 솔루션
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto animate-fade-in-up delay-100">
              산업별 특화된 AI 솔루션으로 업무 효율을 극대화합니다
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: 의료광고 AI 심의 */}
            <a
              href="http://bang987.iptime.org:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative glass rounded-2xl p-8 card-hover animate-fade-in-up delay-200"
            >
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full">
                Demo
              </span>

              {/* Icon */}
              <div className="icon-container w-16 h-16 mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                의료광고 AI 심의
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                의료광고 심의 규정 기반 AI 자동 심의 시스템으로 심의 시간을 90% 단축합니다.
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:gap-2 transition-all">
                데모 보기
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            {/* Card 2: ActuAlly */}
            <div className="group relative glass rounded-2xl p-8 card-hover animate-fade-in-up delay-300">
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-full">
                Enterprise
              </span>

              {/* Icon */}
              <div className="icon-container w-16 h-16 mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                ActuAlly
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                IFRS17 특화 도메인 RAG 기반 보험 감사 Agent로 복잡한 규정 검토를 자동화합니다.
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400">
                문의하기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>

            {/* Card 3: 업무 자동화 */}
            <div className="group relative glass rounded-2xl p-8 card-hover animate-fade-in-up delay-400">
              {/* Status Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 text-xs font-medium bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-full">
                Custom
              </span>

              {/* Icon */}
              <div className="icon-container w-16 h-16 mb-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                업무 자동화
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                반복적인 서류 업무, 메일 대응, 데이터 처리를 AI가 자동으로 처리합니다.
              </p>

              {/* Link */}
              <span className="inline-flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                문의하기
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 border-t border-neutral-200/50 dark:border-neutral-800/50">
        <div className="container-main">
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-10 uppercase tracking-widest font-medium animate-fade-in-up">
            신뢰할 수 있는 기술 파트너
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 animate-fade-in-up delay-100">
            {/* ISO Badge */}
            <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">ISO 27001</div>
                <div className="text-xs text-neutral-400">정보보안</div>
              </div>
            </div>

            {/* ISMS Badge */}
            <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">ISMS</div>
                <div className="text-xs text-neutral-400">인증 준비중</div>
              </div>
            </div>

            {/* AWS Badge */}
            <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">AWS</div>
                <div className="text-xs text-neutral-400">Cloud Partner</div>
              </div>
            </div>

            {/* AI Badge */}
            <div className="flex items-center gap-3 text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold">OpenAI</div>
                <div className="text-xs text-neutral-400">API Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden animate-fade-in-up">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-teal-500/5 pointer-events-none" />

            <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              AI 직원과 함께 비즈니스를 혁신하세요
            </h2>
            <p className="relative text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
              무료 상담을 통해 귀사에 맞는 AI 솔루션을 찾아드립니다.
              <br />
              전문 컨설턴트가 직접 연락드립니다.
            </p>
            <a
              href="mailto:bang987@naver.com"
              className="relative btn-primary inline-flex items-center justify-center gap-2"
            >
              상담 신청하기
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
