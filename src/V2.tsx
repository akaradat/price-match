function V2() {
  return (
    <div className="min-h-dvh flex flex-col">
      {/* Menu Bar */}
      <header className="bg-teal-500 text-white p-4 flex items-center">
        <MenuIcon className="h-6 w-6 mr-2" />
        <h1 className="text-xl font-bold">PriceMatch V2</h1>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <h2 className="text-lg">Welcome to Version 2 of PriceMatch!</h2>
      </div>
    </div>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default V2;
