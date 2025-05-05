import Image from "next/image";

type Props = {
  size?: number;
};

const Loading = ({ size = 100 }: Props) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Image src="/loader.svg" alt="loader" width={size} height={size} />
    </div>
  );
};

export default Loading;
