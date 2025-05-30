// components/LinkButton.js
export default function LinkButton({ href, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 text-[#ffffff] bg-[#ffffff0a] border border-transparent rounded-lg transition-all duration-300 ease-in-out hover:text-[#F97A00] hover:border-[#F97A00] cursor-pointer">
        {label}
      </button>
    </a>
  );
}
