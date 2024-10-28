const MobileNavButton = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {

  return (<button
    className="md:hidden block space-y-2 p-2"
    onClick={onToggle}
    aria-label="Toggle Menu"
  >
    {isOpen ? (
      <div
        className="flex flex-col"
      >
        <span className="block h-1 w-8 bg-black rounded-sm rotate-45 translate-y-0 dark:bg-gray-200"></span>
        <span className="block h-1 w-8 bg-black rounded-sm -rotate-45 -translate-y-1 dark:bg-gray-200"></span>
      </div>
    ) : (
      <div
        className="flex flex-col space-y-0.5"
      >
        <span className="block w-8 h-1 bg-black rounded-sm dark:bg-gray-200"></span>
        <span className="block w-8 h-1 bg-black rounded-sm dark:bg-gray-200"></span>
        <span className="block w-8 h-1 bg-black rounded-sm dark:bg-gray-200"></span>
      </div>
    )}
  </button>)
}

export default MobileNavButton;