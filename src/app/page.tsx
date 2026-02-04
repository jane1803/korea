import Link from "next/link";
import { Badge, Button, Card, SectionTitle, cn } from "@/components/ui";
import WaitlistForm from "@/components/WaitlistForm";

const nav = [
  { href: "#problem", label: "문제" },
  { href: "#how", label: "작동" },
  { href: "#tech", label: "기술" },
  { href: "#biz", label: "수익" },
  { href: "#status", label: "현황" }
] as const;

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
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-ink-950 text-white shadow-soft">
              A
            </span>
            <span className="tracking-tight text-ink-950">아리아드네</span>
            <span className="hidden text-xs font-semibold text-ink-600 sm:inline">
              설치형 AI 디자인 비서
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-ink-700 hover:text-ink-950"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="#cta"
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              데모 요청
            </Button>
            <Button href="#cta" size="sm">
              상담하기
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
                공공기관 맞춤형 · 내부 설치형 · 규정 준수
              </Badge>
            </div>
            <h1 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
              복잡한 규정은 AI가 지키고,
              <br className="hidden sm:block" />
              감각적인 스타일은 전문가가 더해주는
              <span className="text-brand-700"> 우리 기관 맞춤형</span> 디자인
              제작
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-ink-700 sm:text-lg">
              한글/보도자료를 넣으면 1분 안에 카드뉴스 초안을 만들고, 필요할 때는
              10분 내 전문가가 마감 퀄리티로 다듬어드립니다. 데이터는 기관 밖으로
              나가지 않습니다.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="#cta" className="w-full sm:w-auto">
                데모/도입 상담 요청
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
                  v: "초안 생성",
                  d: "규정 + 스타일 적용 자동화"
                },
                {
                  k: "10분",
                  v: "전문가 터치",
                  d: "SOS 요청 시 빠른 마감"
                },
                {
                  k: "내부설치",
                  v: "보안 준수",
                  d: "외부 서버 전송 없이 운영"
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
          title="기관의 규정·보안·인력 부족, 세 가지가 동시에 발목을 잡습니다"
          desc="일반 AI는 기관별 로고·서체·금지어 규정을 모르고, 외부 전송은 보안 규정에 걸리고, 외주는 느리고 비쌉니다."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              공공기관(고객)의 비명
            </div>
            <ul className="mt-4 space-y-3">
              {[
                {
                  t: "“남의 건 못 써요”",
                  d: "로고 위치, 전용 서체, 금지어 등 우리 규정을 모르면 결과물이 무용지물."
                },
                {
                  t: "“보안이 생명이에요”",
                  d: "공문서/자료를 외부(해외) 서버로 보내는 건 규정 위반이라 사용 불가."
                },
                {
                  t: "“사람이 없어요”",
                  d: "외주는 비싸고 수정에 3~4일. 급한 업무는 대응 불가."
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
            <div className="text-sm font-extrabold text-ink-950">
              전문 디자이너(파트너)의 비명
            </div>
            <ul className="mt-4 space-y-3">
              {[
                {
                  t: "“아이 키우며 일하고 싶어요”",
                  d: "밤낮 수정 전화·마감 압박 구조는 육아와 병행이 어렵습니다."
                },
                {
                  t: "“단순 알바는 싫어요”",
                  d: "이름을 건 디자이너로서 정체성을 지키며 일하고 싶습니다."
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
            <div className="mt-6 rounded-xl bg-ink-50 p-4">
              <div className="text-sm font-semibold text-ink-950">
                아리아드네의 해결 방식
              </div>
              <p className="mt-1 text-sm leading-6 text-ink-700">
                규정 준수는 AI가 자동화하고, 스타일은 검증된 디자이너 에셋으로
                선택하며, 마지막 퀄리티는 전문가가 빠르게 보증합니다.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section id="how" className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="어떻게 돌아가나"
            title="규칙(기관) + 감각(디자이너) + 보증(전문가)로 결과를 만듭니다"
            desc="기관별로 한 번만 세팅하면, 이후에는 문서만 넣고 스타일만 선택하면 됩니다."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              {
                step: "Step 1",
                title: "기관 세팅(비서 교육)",
                points: [
                  "A시청과 계약",
                  "규정집(로고·색상·금지어) 1회 등록",
                  "AI가 행정 규칙을 '참고서'처럼 기억"
                ]
              },
              {
                step: "Step 2",
                title: "스타일 등록(재료 준비)",
                points: [
                  "‘안심 인증 디자이너’가 스타일 에셋 업로드",
                  "마감 독촉 없이 편한 시간에 등록",
                  "예: 복지관 느낌 / 공문서 느낌"
                ]
              },
              {
                step: "Step 3",
                title: "비서에게 시키기(생성)",
                points: [
                  "담당자가 스타일 선택",
                  "보도자료(한글 파일) 투입",
                  "1분 만에 카드뉴스 초안 생성"
                ]
              },
              {
                step: "Step 4",
                title: "전문가 터치(최종 점검)",
                points: [
                  "아쉬우면 ‘도와주세요’ 버튼",
                  "전문가 PM이 10분 내 보정",
                  "‘규정 위반 없음’ 안심 리포트와 납품"
                ]
              }
            ].map((s) => (
              <Card key={s.step} className="relative overflow-hidden">
                <div className="text-xs font-semibold text-brand-700">
                  {s.step}
                </div>
                <div className="mt-2 text-base font-extrabold tracking-tight text-ink-950">
                  {s.title}
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-ink-300" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-400/10 blur-2xl" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tech" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="핵심 기술"
          title="남의 뇌를 빌리지 않고, 우리만의 뇌로 기관 내부에서 작동합니다"
          desc="오픈소스 기반 모델 + 우리 데이터 재교육 + 내부 설치 + 규정집 교체형 구조."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {[
            {
              title: "오픈소스 모델 활용",
              desc: "공개된 고성능 모델을 기반으로, 기관 요구에 맞춰 구성합니다."
            },
            {
              title: "우리 데이터로 재교육",
              desc: "10년 치 공공기관 디자인 파일로 ‘행정 전문 AI’로 정교화합니다."
            },
            {
              title: "내부 설치(보안)",
              desc: "인터넷을 타고 외부로 나가지 않도록 기관 내부 컴퓨터/서버에 설치합니다."
            },
            {
              title: "참고서(규정집) 교체 방식",
              desc: "기관이 바뀌어도 모델을 새로 만들지 않고, 규정집 파일만 갈아 끼우면 즉시 적용됩니다."
            }
          ].map((x) => (
            <Card key={x.title}>
              <div className="text-sm font-extrabold text-ink-950">{x.title}</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">{x.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="biz" className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="수익 & 보상"
            title="기관은 빠르고 안전하게, 디자이너는 지속 가능한 방식으로"
            desc="구독형 설치비/월과금 + 전문가 터치 과금. 디자이너는 제작비 + 러닝 개런티."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <Card>
              <div className="text-sm font-extrabold text-ink-950">
                디자이너 보상(파트너)
              </div>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white p-4 ring-1 ring-ink-100">
                  <div className="text-sm font-semibold text-ink-950">
                    초기: 에셋 제작비
                  </div>
                  <p className="mt-1 text-sm leading-6 text-ink-700">
                    스타일 에셋을 만들어 올릴 때마다 건별 제작비를 지급합니다.
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 ring-1 ring-ink-100">
                  <div className="text-sm font-semibold text-ink-950">
                    후기: 러닝 개런티(인세)
                  </div>
                  <p className="mt-1 text-sm leading-6 text-ink-700">
                    고객이 내 스타일을 많이 쓸수록 작가처럼 인세가 쌓입니다.
                  </p>
                </div>
              </div>
              <div className="mt-5 text-sm font-semibold text-brand-800">
                효과: “자는 동안에도 들어오는 구조”
              </div>
            </Card>

            <Card>
              <div className="text-sm font-extrabold text-ink-950">
                회사 수익(아리아드네)
              </div>
              <div className="mt-4 space-y-3">
                {[
                  {
                    t: "기관 계약",
                    d: "프로그램 설치비 + 월/연간 구독료"
                  },
                  {
                    t: "전문가 터치",
                    d: "사람이 직접 수정해주는 서비스 추가 이용료"
                  }
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-xl bg-white p-4 ring-1 ring-ink-100"
                  >
                    <div className="text-sm font-semibold text-ink-950">
                      {x.t}
                    </div>
                    <p className="mt-1 text-sm leading-6 text-ink-700">{x.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-ink-950 p-4 text-white">
                <div className="text-sm font-semibold">
                  도입 담당자에게 중요한 포인트
                </div>
                <p className="mt-1 text-sm leading-6 text-white/85">
                  “외부 반출 없는 내부 설치형”과 “규정 준수 리포트”로 감사/보안
                  리스크를 줄입니다.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="status" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="현재 준비 상태"
          title="기술·데이터·사람·시장 검증까지 준비되어 있습니다"
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "기술 검증", d: "가상의 시청(데모) 규정 적용 테스트 완료" },
            { t: "데이터", d: "1,000건+ 디자인 원본 파일 확보" },
            { t: "사람", d: "2,000명 규모 디자이너 커뮤니티 보유" },
            { t: "시장 확인", d: "랜딩페이지로 담당자 사전 신청 수요 확인 중" }
          ].map((x) => (
            <Card key={x.t}>
              <div className="text-sm font-extrabold text-ink-950">{x.t}</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">{x.d}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="cta" className="relative overflow-hidden border-t border-ink-100">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="container relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <Card className="p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-wide text-brand-700">
                    사전예약 알림
                  </div>
                  <h3 className="mt-2 text-balance text-xl font-extrabold tracking-tight text-ink-950 sm:text-2xl">
                    출시/베타 오픈 시 가장 먼저 알려드릴게요
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-700">
                    혜택/할인 없이 알림만 받습니다. (선착순 베타 좌석이 열릴 때도
                    함께 안내)
                  </p>
                </div>
                <div className="sm:min-w-[340px]">
                  <WaitlistForm />
                  <div className="mt-3">
                    <Button href="#problem" variant="secondary" className="w-full">
                      문제부터 다시 보기
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "기관 내부 설치형(보안 준수)",
                  "규정 위반 없음 리포트",
                  "필요 시 10분 전문가 터치"
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

