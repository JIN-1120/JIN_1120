import Image from "next/image";
import { SparkleIcon, StarIcon, ArrowDownIcon, MailIcon, PhoneIcon, SwooshIcon, BoltIcon } from "@/components/icons";
import Parallax from "@/components/parallax";
import Reveal from "@/components/reveal";

const ABOUT_TAGS = [
  { label: "5+ 年鑽研扯鈴", color: "#ff4d6d" },
  { label: "雙鈴／多鈴玩家", color: "#2ec4ff" },
  { label: "街頭 × 劇場演出", color: "#ffd23f" },
  { label: "校園講座經驗", color: "#33d6a6" },
];

const GALLERY_ITEMS = [
  { src: "/image/performer-04.jpg", ratio: "3/2", caption: "雙鈴．街頭巡演", tag: "FIG. 01" },
  { src: "/image/performer-02.jpg", ratio: "2/3", caption: "騰空．單鈴平衡", tag: "FIG. 02" },
  { src: "/image/performer-05.jpg", ratio: "3/2", caption: "雙鈴．側身俐落", tag: "FIG. 03" },
  { src: "/image/performer-01.jpg", ratio: "2/3", caption: "仰角．街頭即景", tag: "FIG. 04" },
  { src: "/image/performer-03.jpg", ratio: "2/3", caption: "拋高．仰望天際", tag: "FIG. 05" },
];

const HISTORY_ITEMS = [
  {
    era: "12 世紀",
    title: "宋代雛形——「胡敲」",
    desc: "空竹的雛形出現於中國北方市集，作為兒童玩具與街頭技藝流傳，是扯鈴技藝最早的文字記載。",
    color: "#ff4d6d",
  },
  {
    era: "明清時期",
    title: "工藝與表演成熟",
    desc: "空竹技藝發展成熟，成為廟會、雜耍班的重要節目，匠師開始講究鈴身開孔比例，追求嗡鳴共鳴音色。",
    color: "#2ec4ff",
  },
  {
    era: "19 世紀末",
    title: "西傳為「Diabolo」",
    desc: "隨貿易與文化交流傳入歐洲，被重新命名為 Diabolo，在歐美馬戲團與街頭表演中掀起流行風潮。",
    color: "#ffd23f",
  },
  {
    era: "當代",
    title: "國際舞台與傳承創新",
    desc: "扯鈴成為國際性表演藝術與競技項目，結合特技、舞蹈與燈光音樂，也是我持續鑽研、想傳遞下去的技藝。",
    color: "#33d6a6",
  },
];

const SKILL_ITEMS = [
  { no: "01", title: "基礎拋接", desc: "拋高、接繩、繞八字等入門動作，是我每天練習的基本功。", color: "#ff4d6d" },
  { no: "02", title: "花式甩繩", desc: "利用繩索甩動軌跡創造視覺線條，如風車、蝴蝶等經典花式。", color: "#2ec4ff" },
  { no: "03", title: "雙鈴／多鈴", desc: "同時操控兩顆以上的鈴，考驗手眼協調與節奏掌握能力。", color: "#ffd23f" },
  { no: "04", title: "拋接特技", desc: "高拋後接繩、腳勾、身體纏繞等高難度動作，是我最喜歡的舞台亮點。", color: "#33d6a6" },
  { no: "05", title: "街頭即興", desc: "在戶外場地依現場氣氛調整節奏與難度，與觀眾即時互動。", color: "#ff4d6d" },
  { no: "06", title: "器械延伸", desc: "結合棍、傘等道具，擴展表演的視覺與敘事張力。", color: "#2ec4ff" },
];

const STATS = [
  { value: "5+", label: "年鑽研扯鈴" },
  { value: "10+", label: "拿手技法" },
  { value: "30+", label: "場演出經驗" },
  { value: "3+", label: "縣市巡演足跡" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="halftone-lg relative overflow-hidden">
        <Parallax speed={0.05} className="speed-burst pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="relative order-2 lg:order-1">
            <span className="font-display -rotate-2 inline-block rounded-full border-[3px] border-[#241c14] bg-[#ffd23f] px-4 py-1.5 text-xs tracking-widest text-[#241c14] shadow-[3px_3px_0_0_#241c14]">
              嗨，我是扯鈴表演者
            </span>

            <h1 className="comic-text font-display mt-6 text-6xl leading-[0.95] sm:text-7xl">李榮晉</h1>
            <p className="font-hand mt-3 text-xl text-[#ff4d6d] sm:text-2xl">DIABOLO PERFORMER</p>

            <p className="mt-6 max-w-md text-base leading-loose text-[#241c14]/80 sm:text-lg">
              一條繩、兩支棍、一顆鈴，是我表達自己的方式。從練習場到街頭、從校園到劇場舞台，我用扯鈴轉出屬於自己的節奏與故事，也想把這份熱情分享給每一位觀眾。
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#gallery"
                className="font-display rounded-full border-[3px] border-[#241c14] bg-[#ff4d6d] px-7 py-3 text-sm text-[#fff6e6] shadow-[4px_4px_0_0_#241c14] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#241c14]"
              >
                看我表演
              </a>
              <a
                href="#contact"
                className="font-display rounded-full border-[3px] border-[#241c14] bg-[#fff6e6] px-7 py-3 text-sm text-[#241c14] shadow-[4px_4px_0_0_#241c14] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#241c14]"
              >
                邀約合作
              </a>
            </div>

            <div className="speech-bubble font-hand mt-10 max-w-xs rounded-2xl border-[3px] border-[#241c14] bg-[#fff6e6] px-5 py-3.5 text-sm text-[#241c14] shadow-[4px_4px_0_0_#241c14]">
              「咻——這次換我轉給你看！」
            </div>
          </div>

          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2">
            <Parallax speed={0.1} className="pointer-events-none absolute -top-6 -right-6 sm:-top-10 sm:-right-10">
              <StarIcon className="animate-spin-slow h-16 w-16 text-[#ffd23f] sm:h-28 sm:w-28" />
            </Parallax>

            <Parallax speed={0.07}>
              <div className="relative overflow-hidden rounded-3xl border-[4px] border-[#241c14] shadow-[8px_8px_0_0_#241c14]">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/image/performer-04.jpg"
                    alt="李榮晉表演雙鈴扯鈴"
                    fill
                    priority
                    sizes="(min-width: 1024px) 480px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Parallax>

            <Parallax speed={0.16} className="pointer-events-none absolute -top-3 left-6">
              <SparkleIcon className="animate-float h-8 w-8 text-[#2ec4ff]" />
            </Parallax>
            <Parallax speed={-0.14} className="pointer-events-none absolute -bottom-3 left-1/3">
              <SparkleIcon className="animate-float h-6 w-6 text-[#ff4d6d] [animation-delay:1.2s]" />
            </Parallax>
            <Parallax speed={0.09} className="absolute -bottom-4 right-4">
              <span className="font-display rotate-6 inline-block rounded-full border-[3px] border-[#241c14] bg-[#33d6a6] px-3 py-1.5 text-[11px] text-[#241c14] shadow-[3px_3px_0_0_#241c14]">
                現場實拍★
              </span>
            </Parallax>
          </div>
        </div>

        <a
          href="#about"
          aria-label="向下捲動"
          className="relative mx-auto mb-8 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#241c14] bg-[#fff6e6] text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
        >
          <ArrowDownIcon className="h-5 w-5" />
        </a>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden">
        <div className="-skew-y-1 overflow-hidden border-y-[3px] border-[#241c14] bg-[#ff4d6d]">
          <div className="skew-y-1 flex h-11 items-center">
            <div className="animate-[marquee_20s_linear_infinite] flex shrink-0 items-center gap-8 whitespace-nowrap px-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="font-display flex items-center gap-8 text-xs tracking-[0.25em] text-[#fff6e6]">
                  <span>李榮晉</span>
                  <StarIcon className="h-3 w-3 text-[#ffd23f]" />
                  <span>DIABOLO PERFORMER</span>
                  <StarIcon className="h-3 w-3 text-[#ffd23f]" />
                  <span>街頭 × 劇場</span>
                  <StarIcon className="h-3 w-3 text-[#ffd23f]" />
                  <span>邀約表演洽詢中</span>
                  <StarIcon className="h-3 w-3 text-[#ffd23f]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading no="01" title="關於我" color="#ff4d6d" />

        <div className="mt-12 grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal delay={80} className="rounded-3xl border-[3px] border-[#241c14] bg-[#fff6e6] p-7 shadow-[5px_5px_0_0_#241c14] sm:p-9">
              <p className="font-hand text-lg text-[#ff4d6d] sm:text-xl">大家好，我是李榮晉。</p>
              <p className="mt-4 text-base leading-loose text-[#241c14]/85 sm:text-lg">
                從第一次讓扯鈴穩穩轉在繩上開始，我就迷上了那種一秒失手、一秒又找回節奏的刺激感。這幾年我利用課餘與假日時間反覆練習，從街頭空地到正式舞台，一次次把動作練得更穩、更有自己的風格。
              </p>
              <p className="mt-5 text-base leading-loose text-[#241c14]/85 sm:text-lg">
                對我來說，扯鈴不只是技巧的堆疊，更是一種和自己對話、和觀眾互動的方式。我也喜歡研究這項技藝背後的歷史脈絡，希望能把傳統與當代表演美學一起分享給更多人。
              </p>
            </Reveal>

            <Reveal delay={160} className="mt-6 flex flex-wrap gap-3">
              {ABOUT_TAGS.map((tag, i) => (
                <span
                  key={tag.label}
                  className={`font-display rounded-full border-[3px] border-[#241c14] px-4 py-2 text-xs text-[#241c14] shadow-[3px_3px_0_0_#241c14] ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                  style={{ background: tag.color }}
                >
                  {tag.label}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Parallax speed={0.08}>
              <div className="relative rounded-3xl border-[3px] border-[#241c14] bg-[#fff6e6] p-3 shadow-[6px_6px_0_0_#241c14]">
                <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl border-[3px] border-dashed border-[#241c14]/40">
                  <Image
                    src="/image/performer-02.jpg"
                    alt="李榮晉騰空表演單鈴平衡"
                    fill
                    sizes="(min-width: 1024px) 380px, 90vw"
                    className="object-cover"
                  />
                </div>
                <span className="font-display absolute -top-3 -left-3 rotate-[-6deg] rounded-full border-[3px] border-[#241c14] bg-[#2ec4ff] px-3 py-1 text-[10px] text-[#241c14] shadow-[3px_3px_0_0_#241c14]">
                  ABOUT ME
                </span>
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="halftone-lg border-y-[3px] border-[#241c14] bg-[#fff1d1]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading no="02" title="演出精華" color="#2ec4ff" />
          <p className="font-hand mt-4 max-w-lg text-base text-[#241c14]/70 sm:ml-16 sm:text-lg">
            幾個street pop-up與活動現場的瞬間，每一張都是真實的演出紀錄。
          </p>

          <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {GALLERY_ITEMS.map((item, i) => (
              <Parallax
                key={item.src}
                speed={i % 2 === 0 ? 0.08 : -0.08}
                className="mb-6 break-inside-avoid"
              >
                <Reveal delay={i * 70}>
                  <div
                    className={`rounded-2xl border-[3px] border-[#241c14] bg-[#fff6e6] p-2.5 shadow-[5px_5px_0_0_#241c14] transition-transform hover:-translate-y-1 ${
                      i % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: item.ratio }}>
                      <Image
                        src={item.src}
                        alt={`李榮晉扯鈴表演 - ${item.caption}`}
                        fill
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between px-2 pt-3 pb-1.5">
                      <span className="font-display text-[11px] tracking-widest text-[#241c14]/50">{item.tag}</span>
                      <span className="font-hand text-sm text-[#241c14]">{item.caption}</span>
                    </div>
                  </div>
                </Reveal>
              </Parallax>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="overflow-hidden">
        <div className="-skew-y-1 overflow-hidden border-y-[3px] border-[#241c14] bg-[#2ec4ff]">
          <div className="halftone-inv skew-y-1">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-16 sm:px-6 md:grid-cols-4">
              {STATS.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 90} className="text-center">
                  <p className="font-display text-4xl text-[#fff6e6] [text-shadow:3px_3px_0_#241c14] sm:text-5xl">{stat.value}</p>
                  <p className="font-display mt-3 flex items-center justify-center gap-1.5 text-xs tracking-[0.15em] text-[#241c14]">
                    <StarIcon className="h-3 w-3" />
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading no="03" title="表演技法" color="#ffd23f" />
        <p className="font-hand mt-4 max-w-lg text-base text-[#241c14]/70 sm:ml-16 sm:text-lg">
          這些是我平常練習、也最常在舞台上呈現的拿手技法。
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_ITEMS.map((skill, i) => (
            <Reveal key={skill.no} delay={(i % 3) * 80}>
              <div
                className={`group relative rounded-2xl border-[3px] border-[#241c14] bg-[#fff6e6] p-6 shadow-[5px_5px_0_0_#241c14] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#241c14] ${
                  i % 2 === 0 ? "-rotate-1 hover:rotate-0" : "rotate-1 hover:rotate-0"
                }`}
              >
                <span
                  className="font-display absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#241c14] text-sm text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
                  style={{ background: skill.color }}
                >
                  {skill.no}
                </span>
                <div className="flex justify-end">
                  <BoltIcon className="h-5 w-5 text-[#241c14]/20 transition-colors group-hover:text-[#ffd23f]" />
                </div>
                <h3 className="mt-3 text-lg font-bold text-[#241c14]">{skill.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#241c14]/70">{skill.desc}</p>
                <SwooshIcon className="mt-4 h-4 w-full text-[#241c14]/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* History */}
      <section id="history" className="halftone-lg border-y-[3px] border-[#241c14] bg-[#fff1d1]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading no="04" title="扯鈴的歷史" color="#33d6a6" />
          <p className="font-hand mt-4 max-w-lg text-base text-[#241c14]/70 sm:ml-16 sm:text-lg">
            我很喜歡研究這項技藝的故事，也想順道分享給你。
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {HISTORY_ITEMS.map((item, i) => (
              <Reveal key={item.era} delay={(i % 2) * 100}>
                <div
                  className={`relative rounded-2xl border-[3px] border-[#241c14] bg-[#fff6e6] p-6 shadow-[5px_5px_0_0_#241c14] ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <span
                    className="font-display absolute -top-4 -left-4 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#241c14] text-xs text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
                    style={{ background: item.color }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-display text-xs tracking-[0.2em] text-[#241c14]/50 uppercase">{item.era}</p>
                  <h3 className="mt-1.5 text-lg font-bold text-[#241c14] sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#241c14]/75 sm:text-base">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading no="05" title="邀約合作" color="#ff4d6d" />

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <div className="speech-bubble rounded-3xl border-[3px] border-[#241c14] bg-[#fff6e6] p-8 shadow-[5px_5px_0_0_#241c14]">
              <p className="font-hand text-xl text-[#ff4d6d] sm:text-2xl">想邀請我一起轉出精彩嗎？</p>
              <p className="mt-4 text-base leading-loose text-[#241c14]/80 sm:text-lg">
                無論是校園講座、商業活動開場，或是完整舞台演出，我都很樂意和你聊聊，量身打造一場結合技藝與故事的扯鈴表演。
              </p>
            </div>

            <a
              href="mailto:contact@diabolo-performer.example"
              className="font-display mt-8 inline-flex items-center gap-2 rounded-full border-[3px] border-[#241c14] bg-[#ff4d6d] px-8 py-3.5 text-sm text-[#fff6e6] shadow-[4px_4px_0_0_#241c14] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#241c14]"
            >
              <SparkleIcon className="h-4 w-4" />
              立即洽詢
            </a>
          </Reveal>

          <Reveal delay={120} className="relative lg:col-span-2">
            <span className="font-display absolute -top-4 right-6 rotate-6 rounded-full border-[3px] border-[#241c14] bg-[#ffd23f] px-3 py-1 text-[10px] text-[#241c14] shadow-[3px_3px_0_0_#241c14]">
              24hr 回覆
            </span>
            <div className="space-y-5 rounded-2xl border-[3px] border-[#241c14] bg-[#fff6e6] p-7 shadow-[5px_5px_0_0_#241c14]">
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-[#241c14] bg-[#2ec4ff]">
                  <MailIcon className="h-4 w-4 text-[#241c14]" />
                </span>
                <span className="text-sm text-[#241c14]/85">contact@diabolo-performer.example</span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-[#241c14] bg-[#ffd23f]">
                  <PhoneIcon className="h-4 w-4 text-[#241c14]" />
                </span>
                <span className="text-sm text-[#241c14]/85">(02) 1234-5678</span>
              </div>
              <div className="border-t-2 border-dashed border-[#241c14]/25 pt-5 text-xs leading-relaxed tracking-wide text-[#241c14]/55">
                演出邀約請提前 2 週來信，並附上活動時間、地點與場地類型，讓我能安排最合適的節目內容。
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ no, title, color }: { no: string; title: string; color: string }) {
  return (
    <Reveal className="flex items-center gap-4">
      <span
        className="font-display flex h-12 w-12 shrink-0 -rotate-3 items-center justify-center rounded-full border-[3px] border-[#241c14] text-sm text-[#241c14] shadow-[3px_3px_0_0_#241c14]"
        style={{ background: color }}
      >
        {no}
      </span>
      <h2 className="font-display text-2xl text-[#241c14] sm:text-3xl">{title}</h2>
      <SwooshIcon className="hidden h-4 flex-1 text-[#241c14]/25 sm:block" />
    </Reveal>
  );
}
