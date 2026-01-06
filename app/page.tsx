export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        AI 시대 .. BITPIA가 해결합니다.
      </h1>
      <p className="mb-4 text-lg">
        {`복잡한 서류 업무부터 금융권 감사 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다.`}
      </p>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-6">주요 솔루션</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 의료광고 AI 심의 시스템 */}
          <a
            href="http://bang987.iptime.org:5173"
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/30 dark:to-cyan-900/30 rounded-xl border border-teal-200 dark:border-teal-800 hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            <div className="w-12 h-12 mb-4 bg-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2 group-hover:text-teal-600">의료광고 AI 심의</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              의료광고 심의 규정 기반 AI 자동 심의 시스템
            </p>
          </a>

          {/* 보험사 AI 감사 Agent */}
          <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl border border-indigo-200 dark:border-indigo-800">
            <div className="w-12 h-12 mb-4 bg-indigo-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2">ActuAlly</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              IFRS17 특화 도메인 RAG 기반 보험 감사 Agent
            </p>
          </div>

          {/* 업무 프로세스 자동화 */}
          <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-xl border border-amber-200 dark:border-amber-800">
            <div className="w-12 h-12 mb-4 bg-amber-500 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">업무 자동화</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              반복 업무를 AI가 자동으로 처리
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
