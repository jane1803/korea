import Link from "next/link";
import Image from "next/image";
import { Badge, Button, Card, SectionTitle, cn } from "@/components/ui";
import WaitlistForm from "@/components/WaitlistForm";

function Check() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-brand-50 text-brand-700 ring-1 ring-brand-100"
    >
      ✓
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-ink-100 bg-white/75 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-extrabold">
            <span className="tracking-tight text-ink-950">아리아드네</span>
            <span className="hidden text-xs font-semibold text-ink-600 sm:inline">
              임팩트 디자인 플랫폼
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <Button
              href="https://tally.so/r/J9zx8Y"
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              상담하기
            </Button>
            <Button
              href="https://tally.so/r/J9zx8Y"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              미리 알림
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute inset-0 noise opacity-50" />
        <div className="container relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <Badge>
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-500" />
                기업·기관 맞춤 · 브랜드 일관성 · 사회적 가치
              </Badge>
            </div>
            <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
              보고서 쓰기도 벅찬데,
              <br className="hidden sm:block" />
              디자인까지 관리해야 하나요?
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-ink-700 sm:text-lg">
              흔한 템플릿은 그만. 기업·기관의 톤앤매너를 완벽히 학습하는 가장 편리한{" "}
              <span className="font-bold text-ink-950">임팩트 디자인 플랫폼</span>, 아리아드네
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="https://tally.so/r/J9zx8Y"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                사전 알림 신청
              </Button>
              <Button
                href="#how"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                작동 방식 보기
              </Button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  k: "Prompt-less",
                  v: "프롬프트 리스",
                  d: "복잡한 명령어 공부는 그만. 문서만 업로드하면 디자인이 완성됩니다."
                },
                {
                  k: "Tone & Manner",
                  v: "브랜드 일관성",
                  d: "우리 브랜드다운 결과물. 로고와 전용 서체, 브랜드 무드를 AI가 완벽히 구현합니다."
                },
                {
                  k: "Social Impact",
                  v: "사회적 가치",
                  d: "디자인이 만드는 상생. 사용료는 경력보유 여성 디자이너와 공유되어 사회적 가치를 창출합니다."
                }
              ].map((m) => (
                <Card key={m.v} className="text-left">
                  <div className="text-2xl font-extrabold text-ink-950">
                    {m.k}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-ink-900">
                    {m.v}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-ink-700">
                    {m.d}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="왜 필요한가"
          title="왜 담당자들은 '아리아드네'를 선택할까요?"
          desc="브랜드 일관성과 업무 효율, 그리고 사회적 가치를 한 번에."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              흔한 템플릿은 우리 브랜드답지 않으니까
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              시중의 템플릿은 편리하지만, 우리 기관만의 고유한 분위기를 담지 못해 결국 다시 수정해야 합니다.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              명령어 잘 쓰는 직원만 일 잘하나요?
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              프롬프트 능력에 따른 업무 격차를 없앱니다. 문서를 올리는 방식이라 누구나 균일한 고퀄리티를 냅니다.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              복잡한 계약과 정산, 이제 그만
            </div>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              간단한 건 AI로, 중요한 건 전문가에게. 업체 찾고 견적서 받는 행정 소요를 획기적으로 줄여드립니다.
            </p>
          </Card>
        </div>
      </section>

      <section id="how" className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="어떻게 돌아가나"
            title={
              <>
                프롬프트 없이 클릭만 하세요.
                <br />
                나머지는 아리아드네가 해결합니다.
              </>
            }
            desc="기관(기업)의 가이드라인 세팅은 최초 1회면 끝. 실무에서는 4단계로 편리하게."
          />

          <div className="mt-12 space-y-16 sm:space-y-20">
            {/* Step 1 */}
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="order-1">
                <Card className="overflow-hidden border-0 bg-white p-0 shadow-[0_8px_30px_rgba(10,20,40,0.12)] ring-1 ring-ink-100">
                  <Image
                    src="/mockups/mockup1.png"
                    alt="브랜드 온보딩"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </Card>
              </div>
              <div className="order-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 1. 브랜드 온보딩 (Onboarding)
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700 sm:text-base">
                  가이드라인(CI/BI)과 선호 스타일을 학습해 섞이지 않는 전용 모델 구축
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 2. 스타일 마켓 (Style Selection)
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700 sm:text-base">
                  검증된 전문가(경력보유 디자이너)의 스타일 에셋을 선택하여 퀄리티 확보
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="overflow-hidden border-0 bg-white p-0 shadow-[0_8px_30px_rgba(10,20,40,0.12)] ring-1 ring-ink-100">
                  <Image
                    src="/mockups/mockup2.png"
                    alt="스타일 마켓"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="order-1">
                <Card className="overflow-hidden border-0 bg-white p-0 shadow-[0_8px_30px_rgba(10,20,40,0.12)] ring-1 ring-ink-100">
                  <Image
                    src="/mockups/mockup3.png"
                    alt="하이브리드 편집"
                    width={1200}
                    height={800}
                    className="h-auto w-full object-contain"
                  />
                </Card>
              </div>
              <div className="order-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 3. 하이브리드 편집 (Hybrid Editor)
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-700 sm:text-base">
                  배경은 AI가, 텍스트는 웹 에디터가 자동 배치. PPT처럼 쉬운 수정
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <Card className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Step 4. 전문가 연결 (Expansion)
              </div>
              <p className="mt-3 text-sm leading-7 text-ink-700 sm:text-base">
                중요한 프로젝트는 ‘의뢰하기’ 버튼 하나로. 계약/정산 행정 대행
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="tech" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="핵심 기술"
          title={
            <>
              외부 서버를 빌려 쓰지 않습니다.
              <br />
              기관 내부에 심어드리는 자체 AI 엔진입니다.
            </>
          }
          desc="데이터 외부 반출 걱정 없는 환경에서, 오직 우리 기관만의 규정을 학습합니다."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "기관 전용 안심 엔진 (Private Engine)",
              desc: "외부 AI(챗GPT 등)를 빌려 쓰지 않습니다. 오직 귀 기관만을 위한 단독 AI 엔진을 구축하여 보안과 성능을 모두 잡았습니다."
            },
            {
              title: "공공·기업 디자인 최적화 (Optimized Design)",
              desc: "일반적인 그림이 아닙니다. 10년 이상의 공공기관·기업 실무 데이터를 집중 학습시켜, 바로 결재 가능한 전문가 수준의 품질을 제공합니다."
            },
            {
              title: "내부 서버 설치 (Internal Install)",
              desc: "인터넷망을 통해 외부로 데이터가 나가지 않습니다. 기관 내부 컴퓨터(서버)에 직접 설치하여 보안 사고를 원천 차단합니다."
            },
            {
              title: "가이드라인 자동 적용 (Auto-Rule)",
              desc: "규정이 바뀔 때마다 AI를 새로 개발할 필요가 없습니다. 변경된 규정집 파일만 등록하면, AI가 즉시 새로운 규칙을 적용합니다."
            }
          ].map((x) => (
            <Card key={x.title}>
              <div className="text-sm font-extrabold text-ink-950">{x.title}</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">{x.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="cta" className="relative overflow-hidden border-t border-ink-100">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="container relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Card className="p-6 sm:p-8 text-center">
              <div>
                <div className="text-xs font-semibold tracking-wide text-brand-700">
                  출시 알림 신청
                </div>
                <h3 className="mt-2 text-balance text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                  복잡한 가이드라인에서 해방되는 가장 빠른 방법,
                  <br />
                  아리아드네 출시 알림을 받아보세요.
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-700 sm:text-base">
                  기업·기관 맞춤 임팩트 디자인 플랫폼이 준비되면 가장 먼저 문을 두드리겠습니다.
                  <br />
                  (아래 버튼을 누르면 알림 신청 페이지로 이동합니다.)
                </p>
                <div className="mt-6 flex justify-center">
                  <Button
                    href="https://tally.so/r/J9zx8Y"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6"
                  >
                    서비스 출시 알림 신청하기 (Tally)
                  </Button>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "브랜드 일관성 (톤앤매너)",
                  "프롬프트 리스 (문서만 업로드)",
                  "사회적 가치 (Social Impact)"
                ].map((x) => (
                  <div
                    key={x}
                    className={cn(
                      "flex items-center gap-2 rounded-xl bg-white p-3 text-sm font-semibold text-ink-900 ring-1 ring-ink-100"
                    )}
                  >
                    <Check />
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </Card>

            <footer className="mt-8 text-center text-xs text-ink-600">
              © {new Date().getFullYear()} Ariadne. All rights reserved.
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}

