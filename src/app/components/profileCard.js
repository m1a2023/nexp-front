import Image from "next/image";
import author from "../../../public/demophoto.jpg";

export const ProfileCardTemplate = ({ name, nickname, age, email }) => {
  return (
    <div className="flex flex-col grow-0 p-6 mt-3 w-full h-fit gap-3 bg-white justify-start rounded-3xl hover:shadow-violet-400 hover:shadow-xl duration-500 shadow-2xl select-none">
      <div className="flex justify-center py-[1.8%] pb-4">
        <div className="flex justify-center grow-1 w-fit h-fit">
          <Image
            className="rounded-2xl"
            src={author}
            placeholder="blur"
            width={260}
            quality={100}
            alt="User picture"
          />
        </div>
      </div>

      <div className="flex flex-col justify-start text-black font-bold text-xl text-nowrap">
        <div className="flex flex-row w-full gap-x-3">
          <div className="opacity-40">nick</div>
          <div className="truncate hover:text-electric-indigo duration-200">
            {nickname}
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-3">
          <div className="opacity-40">email</div>
          <div className="truncate hover:text-electric-indigo duration-200">
            {email}
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-3">
          <div className="opacity-40">name</div>
          <div className="truncate hover:text-electric-indigo duration-200">
            {name}
          </div>
        </div>
        <div className="flex flex-row w-full gap-x-3">
          <div className="opacity-40">age</div>
          <div className="truncate hover:text-electric-indigo duration-200">
            {age}
          </div>
        </div>
      </div>
    </div>
  );
};
