import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Bitpia.dev
      </h1>
      <p className="mb-4">
        {`"복잡한 서류 업무부터 메일 대응까지, 당신의 비즈니스를 실행하는 AI 직원을 만들어 드립니다."`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
