function SwiperSvg({ className }: { className?: string }) {
  return (
    <svg
      className={`sm:w-6 w-4  aspect-square animation  text-white rotate-180  ${className}`}
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66667 9.58333C0.884263 9.58333 0.25 10.2176 0.25 11C0.25 11.7824 0.884263 12.4167 1.66667 12.4167L21.6215 12.4167L14.8316 19.2066C14.2784 19.7598 14.2784 20.6568 14.8316 21.2101C15.3848 21.7633 16.2818 21.7633 16.8351 21.2101L25.0417 13.0035C26.1481 11.897 26.1482 10.103 25.0417 8.99653L16.8351 0.789932C16.2818 0.236688 15.3848 0.236688 14.8316 0.789932C14.2784 1.34318 14.2784 2.24016 14.8316 2.7934L21.6215 9.58333L1.66667 9.58333Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SwiperSvg;
