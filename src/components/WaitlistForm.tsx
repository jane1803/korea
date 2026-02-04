"use client";

import { useMemo, useState } from "react";

function isLikelyEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function WaitlistForm({
  toEmail = "hello@ariadne.local",
  subject = "[아리아드네] 사전예약 알림 신청",
  className
}: {
  toEmail?: string;
  subject?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");

  const mailtoHref = useMemo(() => {
    const bodyLines = [
      "아리아드네 출시/베타 오픈 알림을 신청합니다.",
      "",
      `이메일: ${email || "(미입력)"}`,
      `기관/부서(선택): ${org || "(미입력)"}`
    ];
    const params = new URLSearchParams({
      subject,
      body: bodyLines.join("\n")
    });
    return `mailto:${toEmail}?${params.toString()}`;
  }, [email, org, subject, toEmail]);

  const canSubmit = isLikelyEmail(email);

  return (
    <div className={className}>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-1">
          <span className="text-xs font-semibold text-ink-700">
            이메일 <span className="text-brand-700">*</span>
          </span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputMode="email"
            autoComplete="email"
            placeholder="name@org.go.kr"
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-ink-950 ring-1 ring-ink-200 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
          />
        </label>

        <label className="grid gap-1">
          <span className="text-xs font-semibold text-ink-700">
            기관/부서 <span className="text-ink-500">(선택)</span>
          </span>
          <input
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            autoComplete="organization"
            placeholder="예) A시청 홍보담당관"
            className="h-11 w-full rounded-xl bg-white px-3 text-sm text-ink-950 ring-1 ring-ink-200 placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-brand-400/60"
          />
        </label>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-5 text-ink-600">
          입력하신 정보는 <span className="font-semibold">알림 안내</span> 목적에만
          사용됩니다.
        </p>
        <a
          href={mailtoHref}
          aria-disabled={!canSubmit}
          className={[
            "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition",
            canSubmit
              ? "bg-ink-950 text-white shadow-soft hover:translate-y-[-1px]"
              : "pointer-events-none bg-ink-200 text-ink-500"
          ].join(" ")}
        >
          사전예약 알림 신청
        </a>
      </div>
    </div>
  );
}

