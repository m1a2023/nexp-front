import Image from "next/image";
import { Goals } from "../../components/goals";
import { ProfileCardTemplate } from "../../components/profileCard";
import BackgroundProfilePic2 from "../../../public/profile-bg-element2.png";
import BackgroundProfilePic3 from "../../../public/profile-bg-element3.png";

export default function Profile() {
  return (
    <div className="flex flex-row h-full w-full bg-gray-200">
      <div className="flex flex-col w-1/3 min-w-[33%] p-6 pr-3 gap-y-6 justify-start text-xl h-full">
        <ProfileCardTemplate
          name={"Name"}
          nickname={"nickname"}
          age={"20" + " y.o."}
          email={"example@email.com"}
        />
        <div className="relative rounded-2xl w-full h-full overflow-hidden">
          <Image
            className="absolute"
            src={BackgroundProfilePic3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={300}
            height={300}
            quality={100}
            alt="bg-pic"
          />
        </div>
      </div>

      <div className="flex flex-col w-2/3 p-6 pl-3 gap-y-3 justify-start text-xl h-full">
        <div className="relative w-full h-full">
          <Image
            className="rounded-2xl"
            src={BackgroundProfilePic2}
            quality={100}
            layout="fill"
            objectFit="cover"
            alt="bg-pic-2"
          />
        </div>
        <Goals />
      </div>
    </div>
  );
}
