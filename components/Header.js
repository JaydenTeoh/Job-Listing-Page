export default function Header() {
  return (
    <nav className="p-5 w-full flex flex-row justify-between items-center bg-[#1fc76a] mb-4">
      <img
        src="data:image/png;base64,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"
        alt="Nodeflair Logo"
        width="150"
        height="150"
        className="translate-x-[-30px]"
      />
      <button className="flex items-center font-semibold text-2xl text-white hover:text-slate-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-log-in mr-1"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
          <polyline points="10 17 15 12 10 7"></polyline>
          <line x1="15" y1="12" x2="3" y2="12"></line>
        </svg>
        Sign In
      </button>
    </nav>
  );
}
