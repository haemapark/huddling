import { UserPlus } from 'lucide-react'
import logInIcon from '@/assets/icons/log-in.svg'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-4 py-3 md:px-9">
      <Logo />

      {/* mobile: 아이콘 링크 */}
      <nav className="flex items-center gap-4 text-content-high md:hidden">
        <a href="#login" aria-label="로그인" className="hover:text-content-highest">
          <img src={logInIcon} alt="" width={24} height={24} />
        </a>
        <a href="#signup" aria-label="회원가입" className="hover:text-content-highest">
          {/* Figma log-in 아이콘과 같은 lucide 세트·선 두께(1.7) */}
          <UserPlus size={24} strokeWidth={1.7} aria-hidden />
        </a>
      </nav>

      {/* tablet / desktop: 텍스트 링크 */}
      <nav className="hidden items-center justify-end gap-[42px] text-center text-body-16-m whitespace-nowrap text-content-high md:flex">
        <a href="#login" className="hover:text-content-highest">
          로그인
        </a>
        <a href="#signup" className="hover:text-content-highest">
          회원가입
        </a>
      </nav>
    </header>
  )
}
