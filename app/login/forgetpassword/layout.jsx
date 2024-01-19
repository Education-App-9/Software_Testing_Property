import CompanyLogo from "@/components/Logos/CompanyLogo";
import ForgetPasswordSection from "@/components/Sections/ForgetPassword/ForgetPasswordSection";
import Image from "next/image";

const ForgetPasswordLayout = () => {
  return (
    <main className="grid h-full grid-cols-2 bg-[#F3F4F6] p-6">
      {/* Left side */}
      <div className="px-14">
        <CompanyLogo />
        <ForgetPasswordSection />
      </div>
      {/* Right Side */}
      <div className="flex flex-col items-center justify-center rounded-[22px] bg-white">
        <h1 className="mb-1 mt-10 text-3xl font-bold leading-[44px]">
          Forgot Your Password!
        </h1>
        <p className="max-w-lg text-center text-lg font-medium leading-6 text-[rgba(0,0,0,0.7)]">
          Do not worry we got you
        </p>
        <Image
          className=""
          src="/svgs/login.svg"
          width={518}
          height={518}
          alt="login"
        />
      </div>
    </main>
  );
};

export default ForgetPasswordLayout;
