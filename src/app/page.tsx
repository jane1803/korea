import Link from "next/link";
import { Badge, Button, Card, SectionTitle, cn } from "@/components/ui";

const TALLY_URL = "https://tally.so/r/J9zx8Y";

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
            <span className="tracking-tight text-ink-950">🧵 Ariadne</span>
            <span className="hidden text-xs font-semibold text-ink-600 sm:inline">
              AI 디자인 에디터
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button href={TALLY_URL} target="_blank" rel="noreferrer" size="sm">
              출시 알림 받기
            </Button>
            <Button href="#how" variant="secondary" size="sm" className="hidden sm:inline-flex">
              작동 방식 보기
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute inset-0 noise opacity-50" />
        <div className="container relative py-14 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-ink-950 sm:text-5xl">
              복잡한 명령어 없이,
              <br className="hidden sm:block" />
              안내를 따라 완성하는 AI 디자인 에디터
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium leading-8 text-ink-800">
              실타래를 따라가듯,
              <br />
              클릭만으로 완성되는 디자인 경험
            </p>
            <p className="mt-4 text-pretty text-base leading-7 text-ink-700">
              문서만 올리면 AI가 내용을 이해하고
              <br className="hidden sm:block" />
              바로 쓰고, 바로 고칠 수 있는 디자인을 만들어줍니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={TALLY_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                출시 알림 받기
              </Button>
              <Button href="#how" variant="secondary" className="w-full sm:w-auto">
                서비스 작동 방식 자세히 보기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 쏟아지는 생성형 AI... */}
      <section id="problem" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow=""
          title="쏟아지는 생성형 AI 디자인 서비스 앞에서 길을 잃으셨나요?"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <div className="text-sm font-extrabold text-ink-950">막막한 프롬프트 🤯</div>
            <p className="mt-2 text-sm font-semibold text-ink-800">“명령어 공부하느라 야근하시나요?”</p>
            <p className="mt-2 text-sm leading-6 text-ink-700">
              캔바, 미리캔버스를 써도 결국 내가 다시 고쳐야 했던 경험
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-ink-950">수정 불가능한 결과물 🖼️</div>
            <p className="mt-2 text-sm font-semibold text-ink-800">
              “오타 하나 고치려는데 그림 전체가 바뀌어 버리는 ‘통이미지’에 지치셨나요?”
            </p>
            <p className="mt-2 text-sm leading-6 text-ink-700">
              빠르긴 한데 어딘가 사람 냄새 안 나는 디자인
            </p>
          </Card>
        </div>
        <p className="mt-10 text-center text-base font-semibold text-ink-900">
          아리아드네는 이 모든 문제에서 출발했습니다.
        </p>
      </section>

      {/* 아리아드네의 실타래를 따라오세요 */}
      <section id="how" className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow=""
            title="아리아드네의 실타래를 따라오세요"
            desc="복잡한 미로 같던 디자인이 명쾌해집니다."
          />
          <div className="mt-12 space-y-10">
            <Card>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                STEP 1. 워크스페이스 설정 🏢
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                하나의 계정에서 여러 개의 프로젝트를 활용할 수 있어요.
              </p>
              <ul className="mt-3 space-y-1 text-sm leading-6 text-ink-700">
                <li>· 브랜드 계정 (로고, 서체, 스타일 학습)</li>
                <li>· 프로젝트 계정</li>
                <li>· 개인 활용 등</li>
              </ul>
            </Card>
            <Card>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                STEP 2. 문서 업로드 & 디자인 선택 📄
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                기획안, 홍보 문서, 텍스트 파일을 그대로 올리세요. 프롬프트는 필요 없습니다.
              </p>
              <p className="mt-2 text-sm font-semibold text-ink-900">디자인 종류 선택</p>
              <p className="text-sm leading-6 text-ink-700">포스터, 배너, 카드뉴스 등 필요한 디자인을 선택합니다.</p>
            </Card>
            <Card>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                STEP 3. 스타일 필터 적용 ✨
              </div>
              <p className="mt-2 text-sm font-semibold text-ink-900">“원하는 분위기를 클릭하세요.”</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink-700">
                <li>· 따뜻한 스타일</li>
                <li>· 신뢰감 있는 스타일</li>
              </ul>
            </Card>
            <Card>
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                STEP 4. 에디터에서 완성 🛠️
              </div>
              <p className="mt-2 text-sm leading-6 text-ink-700">즉시 수정 가능한 원본을 제공합니다.</p>
              <ul className="mt-2 space-y-1 text-sm leading-6 text-ink-700">
                <li>· 레이어 편집</li>
                <li>· 다운로드 가능</li>
                <li>· 한글 및 요소 편집 가능</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 왜 아리아드네인가요? */}
      <section className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow=""
          title="왜 아리아드네인가요?"
          desc="가장 강력한 3가지 차별화 기능"
        />
        <div className="mt-10 space-y-8">
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              ① 그림이 아닌 ‘편집 가능한 AI 디자인’
            </div>
            <blockquote className="mt-3 border-l-2 border-brand-300 pl-4 text-sm italic text-ink-700">
              “PPT처럼 클릭해서 고치세요. 우리는 수정 가능한 원본을 드립니다.”
            </blockquote>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              텍스트와 배경이 합쳐진 이미지가 아닙니다. 모든 요소가 분리된 레이어(Layer) 구조로 생성되어
              실무 활용도가 높습니다.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              ② 완벽하게 분리된 ‘멀티 워크스페이스’
            </div>
            <blockquote className="mt-3 border-l-2 border-brand-300 pl-4 text-sm italic text-ink-700">
              “하나의 계정으로, 여러 브랜드를 안전하게 관리하세요.”
            </blockquote>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              기관 본청의 공식 스타일과 행사용 크리에이티브 스타일을 데이터 섞임 없이 독립적으로 운영합니다.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-extrabold text-ink-950">
              ③ 사람의 감각을 더한 디자인
            </div>
            <blockquote className="mt-3 border-l-2 border-brand-300 pl-4 text-sm italic text-ink-700">
              “AI의 편리함에 전문가의 따뜻한 터치를 입혔습니다.”
            </blockquote>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              경력보유 여성 디자이너들의 감각적인 스타일 필터를 제공합니다.
              사용 시마다 디자이너와 수익을 나누는 착한 기술입니다.
            </p>
          </Card>
        </div>
      </section>

      {/* 공공 · 기업 · 개인까지 */}
      <section className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow=""
            title="공공 · 기업 · 개인까지"
            desc="아리아드네는 누구나 쓸 수 있는 디자인 비서를 지향합니다."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <Card>
              <div className="text-sm font-extrabold text-ink-950">공공기관</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                브랜드 톤앤매너를 유지하며 빠른 제작이 필요할 때
              </p>
            </Card>
            <Card>
              <div className="text-sm font-extrabold text-ink-950">기업/마케팅팀</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                반복되는 홍보물을 효율적으로 만들고 싶을 때
              </p>
            </Card>
            <Card>
              <div className="text-sm font-extrabold text-ink-950">개인 사업자</div>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                디자인이 어렵고 부담스러울 때
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 아리아드네가 지향하는 방식 */}
      <section className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow=""
          title="아리아드네가 지향하는 방식"
          desc="(철학적 이유)"
        />
        <div className="mx-auto mt-10 max-w-2xl space-y-4 text-center text-sm leading-7 text-ink-700">
          <p>프롬프트를 잘 쓰는 사람만 빠르게 일하는 구조는 오래가지 않습니다.</p>
          <p>템플릿 중심의 디자인은 결국 다시 손이 갑니다.</p>
          <p>빠르기만 한 AI 디자인은 쉽게 잊혀집니다.</p>
          <p className="pt-4 font-semibold text-ink-950">
            아리아드네는 ‘이해하고, 안내하고, 고칠 수 있는 디자인’을 목표로 합니다.
          </p>
        </div>
      </section>

      {/* 스타일 마켓 */}
      <section className="border-y border-ink-100 bg-ink-50/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow=""
            title="사람의 감각을 더하는 디자인 스타일 마켓"
            desc="아리아드네의 디자인 스타일은 실제 디자이너의 작업 감각을 학습한 스타일 필터입니다."
          />
          <ul className="mx-auto mt-6 max-w-lg space-y-2 text-sm leading-6 text-ink-700">
            <li>· 따뜻한 분위기</li>
            <li>· 신뢰감 있는 공공 디자인</li>
            <li>· 절제된 기업 홍보 스타일</li>
          </ul>
          <p className="mt-6 text-center text-sm leading-6 text-ink-700">
            원하는 분위기를 선택하면 AI는 그 감각을 반영해 디자인을 생성합니다.
          </p>
          <p className="mt-3 text-center text-sm leading-6 text-ink-700">
            이 스타일들은 경력보유 여성 디자이너의 작업 데이터를 기반으로 만들어졌습니다.
            <br />
            스타일 선택은 디자이너에게 정당한 수익으로 연결됩니다.
          </p>
        </div>
      </section>

      {/* 복잡한 설정 없이 */}
      <section className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow=""
          title="복잡한 설정 없이 시작할 수 있습니다"
          desc="아무 설정 없이 바로 사용하거나, 필요하다면 브랜드 스타일을 학습시킬 수도 있습니다. 처음엔 가볍게, 쓸수록 똑똑하게."
        />
      </section>

      {/* CTA */}
      <section id="cta" className="relative overflow-hidden border-t border-ink-100">
        <div className="absolute inset-0 grid-fade opacity-70" />
        <div className="container relative py-14 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink-950 sm:text-3xl">
              문서만 올리면, 디자인은 알아서.
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-700">
              복잡한 디자인 작업을 가볍게 시작해보세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={TALLY_URL} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                출시 알림 받기
              </Button>
              <Button href="#how" variant="secondary" className="w-full sm:w-auto">
                서비스 작동 방식 자세히 보기
              </Button>
            </div>
            <footer className="mt-12 text-center text-xs text-ink-600">
              © {new Date().getFullYear()} Ariadne. All rights reserved.
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
