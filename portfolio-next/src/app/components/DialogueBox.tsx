import Link from "next/link";

const DialogueBox = () => {
  return (
    <Link href="/" className={`w-[90%] max-w-xl cursor-pointer z-50`}>
      <div className="bg-[#242834]/90 backdrop-blur-sm border-4 border-[#B39F67] text-white px-6 py-4 rounded-lg shadow-lg relative">
        <p className="text-base sm:text-lg font-mono text-left">
          &quot;Hey You look lost ...&quot;
        </p>
        <div className="absolute bottom-2 right-4 text-[#B39F67] animate-puls text-sm">
          ▶ Go Back
        </div>
      </div>
    </Link>
  );
};
export default DialogueBox;
