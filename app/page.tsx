import { BlogPosts } from 'app/components/posts'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        AI 시대 .. BITPIA가 해결합니다.
      </h1>
      <p className="mb-4 text-lg">
        {`복잡한 서류 업무부터 금융권 감사 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다.`}
      </p>

      <div className="my-8 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
        <h2 className="font-semibold text-xl mb-4">주요 솔루션</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">📄 AI 문서 처리</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              복잡한 서류와 문서를 자동으로 분석하고 처리합니다.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">✉️ 보험사 AI 감사 Agent 솔루션(ActuAlly)</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              범용 LLM의 한계를 극복하고, 복잡한 IFRS17 보험규정에 최적화된 '도메인특화 RAG기술' 을 적용한 지능형감사 에이전트
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-1">⚙️ 업무 프로세스 자동화</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              반복적인 업무를 AI가 자동으로 수행합니다
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            자세히 알아보기 →
          </Link>
        </div>
      </div>

      <div className="my-8">
        <h2 className="font-semibold text-xl mb-4">최신 글</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
