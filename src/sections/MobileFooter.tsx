import chevronsDown from '@/assets/icons/chevrons-down.svg'
import { JoinButton } from '@/components/JoinButton'

/** mobile 전용: 화면 하단에 고정되는 CTA + 스크롤 안내 */
export function MobileFooter() {
  return (
    <footer className="sticky bottom-0 z-10 flex w-full flex-col items-center justify-center gap-4 overflow-clip bg-bg px-4 pt-3 pb-[max(24px,env(safe-area-inset-bottom))] md:hidden">
      <JoinButton className="w-full" />
      <img src={chevronsDown} alt="" width={24} height={24} />
    </footer>
  )
}
