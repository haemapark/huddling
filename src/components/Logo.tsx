import logo from '@/assets/images/logo.png'

/** 로고 원본 PNG 를 Figma 와 동일한 비율로 크롭해서 보여준다. */
export function Logo() {
  return (
    <a href="/" aria-label="홈" className="relative block size-7 shrink-0 overflow-clip md:size-[38px]">
      <span className="absolute top-1/2 left-1/2 h-full w-[94.74%] -translate-1/2 overflow-hidden">
        <img
          src={logo}
          alt=""
          className="absolute top-[-21.11%] left-[-19.44%] h-[142.22%] w-[138.89%] max-w-none"
        />
      </span>
    </a>
  )
}
