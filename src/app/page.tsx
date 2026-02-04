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
              설치형 AI 디자인 비서
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
                우리 기관 맞춤형 · 보안 걱정 ZERO · 전문 디자이너 스타일 탑재
              </Badge>
            </div>
            <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
              보고서 쓰기도 벅찬데,
              <br className="hidden sm:block" />
              디자인까지 관리해야 하나요?
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-ink-700 sm:text-lg">
              우리 기관 및 기업 스타일은 AI가, 퀄리티는 전문가가 책임집니다.
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
                  k: "1분",
                  v: "프롬프트 없는 자동 생성",
                  d: "복잡한 명령어 공부는 그만. 텍스트만 넣으면 AI가 우리 기관 규정(가이드라인)을 완벽하게 적용합니다."
                },
                {
                  k: "휴먼스타일",
                  v: "검증된 전문가 디자인",
                  d: "기계적인 느낌은 NO. 11년 차 베테랑 디자이너의 고유한 스타일(Asset)을 학습하여 따뜻하고 전문적인 결과물을 만듭니다."
                },
                {
                  k: "내부 설치",
                  v: "데이터 유출 0%",
                  d: "외부 서버 전송 없는 설치형 솔루션으로, 엄격한 보안 심사도 문제없습니다."
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
          title="AI 도입, 시민들의 따가운 시선이 걱정되시나요?"
          desc="기술은 필요하지만, '일자리 뺏는 거 아니냐', '세금 낭비 아니냐'는 시선 때문에 망설이는 담당자님을 위한 해답이 필요합니다."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-extrabold text-ink-950">고객의 고민</div>
            <ul className="mt-4 space-y-3">
              {[
                {
                  t: "보안: “기술은 필요한데, 사고 터질까 봐 겁나요”",
                  d: "챗GPT 썼다가 공문서 유출되면 징계감이라, 알면서도 손이 잘 안 가시죠?"
                },
                {
                  t: "톤앤매너: “결국 사람이 다시 손봐야 해요”",
                  d: "로고 컬러, 그래픽… AI는 우리 사정을 모릅니다. 톤앤매너가 맞지 않는 디자인은 소용이 없습니다."
                },
                {
                  t: "합리성: “단순 업무에 비싼 외주는 부담스럽죠”",
                  d: "엄청난 예술 작품을 원하는 게 아닙니다. 딱 ‘합리적인 비용’에 ‘준수한 퀄리티’—그 균형점이 필요하신 거 다 압니다."
                }
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <Check />
                  <div>
                    <div className="text-sm font-semibold text-ink-950">
                      {x.t}
                    </div>
                    <div className="text-sm leading-6 text-ink-700">{x.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <div className="text-sm font-extrabold text-ink-950">사회적 명분</div>
            <ul className="mt-4 space-y-3">
              {[
                {
                  t: "상생: “일자리 뺏는 게 아니라, 돕는 기술입니다”",
                  d: "단순 자동 생성이 아닙니다. 경력보유 디자이너의 ‘스타일 에셋’을 정당하게 구매하여 상생합니다."
                },
                {
                  t: "휴먼터치: 담당자님을 지켜드리는 ‘휴먼터치’ 인증",
                  d: "결과물에 ‘전문가 협업 인증’이 포함됩니다. “기계가 다 했다”는 민원 공격, 저희가 막아드립니다."
                },
                {
                  t: "ESG: 혁신과 상생, 점수도 두 마리 토끼로",
                  d: "기술 혁신(Smart) 도입 성과와 사회적 가치(Social) 창출을 동시에 설명할 수 있어, 보고서에 쓸 말이 풍성해집니다."
                }
              ].map((x) => (
                <li key={x.t} className="flex gap-3">
                  <Check />
                  <div>
                    <div className="text-sm font-semibold text-ink-950">
                      {x.t}
                    </div>
                    <div className="text-sm leading-6 text-ink-700">{x.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-8 flex justify-center">
          <Card className="max-w-2xl bg-brand-50 text-center ring-1 ring-brand-100">
            <p className="text-sm font-semibold leading-7 text-brand-900">
              일자리를 위협하는 AI가 아닙니다.
              <br />
              시민과 디자이너, 그리고 담당자님 모두를 위한{" "}
              <span className="font-extrabold">‘상생형 AI’</span>를 지향합니다.
            </p>
          </Card>
        </div>
      </section>

      <section id="how" className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="어떻게 돌아가나"
            title="프롬프트 없이 클릭만 하세요. 나머지는 아리아드네가 해결합니다."
            desc="기관(기업)의 가이드라인 세팅은 최초 1회면 끝. 실무에서는 딱 3단계만 거치세요."
          />

          <div className="mt-12 space-y-16 sm:space-y-20">
            {/* Step 1 */}
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-1">
                <Card className="overflow-hidden border-0 bg-white shadow-soft">
                  <Image
                    src="/mockups/mockup1.png"
                    alt="디자이너 스타일 선택 화면"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-2xl object-cover shadow-md"
                  />
                </Card>
              </div>
              <div className="order-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 1. 휴먼 스타일 매칭 (Select)
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                  오늘은 어떤 디자이너와 일해볼까요?
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-700 sm:text-base">
                  ‘안심 인증 디자이너’들의 다양한 스타일 에셋 중에서,
                  <br className="hidden sm:block" />
                  우리 프로젝트 성격에 딱 맞는 휴먼스타일을 선택하세요.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 lg:order-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 2. 프롬프트 없는 생성 (No Prompt)
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                  보도자료만 올리면, 나머지는 AI가 알아서.
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-700 sm:text-base">
                  복잡한 명령어 공부는 필요 없습니다.
                  <br className="hidden sm:block" />
                  작성하신 보도자료나 기획안(HWP/Word)만 업로드하세요.
                  <br className="hidden sm:block" />
                  사전에 학습된 우리 기관 규정에 맞춰 AI가 즉시 디자인을 시작합니다.
                </p>
              </div>
              <div className="order-1 lg:order-2">
                <Card className="overflow-hidden border-0 bg-white shadow-soft">
                  <Image
                    src="/mockups/mockup2.png"
                    alt="파일 업로드 및 생성 화면"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-2xl object-cover shadow-md"
                  />
                </Card>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-1">
                <Card className="overflow-hidden border-0 bg-white shadow-soft">
                  <Image
                    src="/mockups/mockup3.png"
                    alt="완성된 디자인과 전문가 터치 화면"
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-2xl object-cover shadow-md"
                  />
                </Card>
              </div>
              <div className="order-2">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  Step 3. AI 안심 인증서 발급 (Certification)
                </div>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                  단순 AI 결과물이 아닙니다. ‘사람’이 참여했습니다.
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-700 sm:text-base">
                  별도의 수정 요청 없이도, 검증된 디자이너의 에셋으로 생성되어 높은 퀄리티를 보장합니다.
                  <br className="hidden sm:block" />
                  결과물과 함께 ‘경력보유 디자이너 참여 인증’과 ‘가이드라인 준수 확인서’를 제공합니다.
                  <br className="hidden sm:block" />
                  “윤리적이고 안전한 AI를 사용했다”는 증빙 자료로 활용하여, 대외적인 시선과 감사 부담을 덜어드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="핵심 기술"
          title="외부 서버를 빌려 쓰지 않습니다. 기관 내부에 심어드리는 자체 AI 엔진입니다."
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
                  보안 걱정 없는 설치형 AI 비서가 준비되면 가장 먼저 문을 두드리겠습니다.
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
                  "기관 내부 설치형(보안 준수)",
                  "규정 위반 없음 리포트",
                  "Human-Touch 인증 (전문가 협업)"
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

