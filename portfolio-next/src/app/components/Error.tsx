import Image from "next/image";
import DialogueBox from "./DialogueBox";

const ErrorPage = () => {
  return (
    <div className="mb-4 mx-2 md:mx-0 pb-6">
      <div className="relative mx-auto my-auto">
        <Image
          width={1000}
          height={1000}
          alt="error"
          src="/errorpage.gif"
          className="rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <DialogueBox />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
