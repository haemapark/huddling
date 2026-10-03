import heroPenguins from '@/assets/images/hero-penguins.png'
import glowEllipse from '@/assets/images/glow-ellipse.svg'
import glowEllipseMobile from '@/assets/images/glow-ellipse-mobile.svg'
import { JoinButton } from '@/components/JoinButton'

export function Hero() {
  return (
    <main className="flex w-full flex-1 flex-col items-center overflow-clip px-4 pt-[54px] pb-9 md:px-9 md:pt-[72px]">
      <section className="flex w-full flex-col items-center gap-10 md:gap-[60px]">
        <div className="flex w-full flex-col gap-4 text-center">
          <h1 className="text-heading-30-sb md:text-heading-36-sb lg:text-heading-48-sb">
            AI를 함께 실험하고
            <br />
            경험을 나누는 커뮤니티
          </h1>
          <p className="text-body-16-m text-content-medium">
            지금 바로 3기 멤버십 알림 신청하고, 다음 성장의 주인공이 되어보세요.
          </p>
        </div>

        <div className="relative aspect-[1032/880] w-full md:h-[358px] md:w-[420px] md:aspect-auto">
          {/* 이미지 하단 블루 글로우 (Ellipse 1) */}
          <img
            src={glowEllipseMobile}
            alt=""
            width={568}
            height={384}
            className="pointer-events-none absolute top-[83%] left-1/2 max-w-none -translate-1/2 md:hidden"
          />
          <img
            src={glowEllipse}
            alt=""
            width={658}
            height={412}
            className="pointer-events-none absolute top-[82%] left-1/2 hidden max-w-none -translate-1/2 md:block"
          />
          <img
            src={heroPenguins}
            alt="깃발을 든 펭귄과 아기 펭귄"
            className="relative size-full object-cover"
          />
        </div>

        <JoinButton className="hidden w-[220px] md:flex" />
      </section>
    </main>
  )
}
