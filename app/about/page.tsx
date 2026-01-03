export const metadata = {
  title: '소개',
  description: 'BITPIA는 AI 기술로 비즈니스 자동화 솔루션을 제공합니다.',
}

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        BITPIA 소개
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <h2 className="font-semibold text-xl mb-4 mt-8">우리의 미션</h2>
        <p className="mb-4">
          BITPIA는 인공지능 기술을 활용하여 비즈니스의 반복적이고 복잡한 업무를 자동화하는 AI 직원 솔루션을 제공합니다.
        </p>
        <p className="mb-4">
          복잡한 서류 업무부터 메일 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다.
        </p>

        <h2 className="font-semibold text-xl mb-4 mt-8">핵심 서비스</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>AI 문서 처리 자동화</strong>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              복잡한 서류 업무를 AI가 자동으로 처리합니다
            </p>
          </li>
          <li className="mb-2">
            <strong>스마트 이메일 응답</strong>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              고객 문의에 대한 자동 응답 및 분류 시스템
            </p>
          </li>
          <li className="mb-2">
            <strong>비즈니스 프로세스 자동화</strong>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              반복적인 업무 프로세스를 AI로 자동화
            </p>
          </li>
          <li className="mb-2">
            <strong>맞춤형 AI 직원 개발</strong>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              귀사의 비즈니스에 특화된 AI 솔루션 제공
            </p>
          </li>
        </ul>

        <h2 className="font-semibold text-xl mb-4 mt-8">왜 BITPIA인가?</h2>
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">⚡ 빠른 도입</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            복잡한 설정 없이 빠르게 AI 자동화를 시작할 수 있습니다.
          </p>

          <h3 className="font-semibold text-lg mb-2">🎯 맞춤형 솔루션</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            각 비즈니스의 특성에 맞는 맞춤형 AI 직원을 제공합니다.
          </p>

          <h3 className="font-semibold text-lg mb-2">📈 비용 절감</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            반복 업무 자동화로 인건비와 시간을 절감할 수 있습니다.
          </p>

          <h3 className="font-semibold text-lg mb-2">🔒 안전한 데이터 관리</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            엔터프라이즈급 보안으로 데이터를 안전하게 보호합니다.
          </p>
        </div>

        <h2 className="font-semibold text-xl mb-4 mt-8">문의하기</h2>
        <p className="mb-4">
          BITPIA의 AI 직원 솔루션에 관심이 있으시다면 언제든 문의해 주세요.
        </p>
        <p className="mb-4">
          <strong>이메일:</strong>{' '}
          <a
            href="mailto:bang987@naver.com"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            bang987@naver.com
          </a>
        </p>
      </div>
    </section>
  )
}
