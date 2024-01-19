import SearchIconSvg from "@/components/Svgs/SearchIconSvg";

import ChatOpenerButton from "./ChatOpenerButton";
import Image from "next/image";
import WhatsappRedirectSvg from "@/components/Svgs/WhatsappRedirectSvg";
import EmailRedirectSvg from "@/components/Svgs/EmailRedirectSvg";
import CallRedirectSvg from "@/components/Svgs/CallRedirectSvg";
import AddImageSvg from "@/components/Svgs/AddImageSvg";
import SenderMessage from "./SenderMessage";
import RecieverMessage from "./RecieverMessage";

const MessagingSection = () => {
  return (
    <div className="flex w-full h-full border-[0.881px] border-[#EBE9F1] rounded min-h-[80vh] max-h-[85vh]">
      <div className="w-1/4 flex flex-col h-full">
        {/* Search bar */}
        <div className="p-2 border-r-[0.881px] border-b-[0.881px] border-[#EBE9F1]">
          <div className="flex items-center gap-2 rounded-full shadow-[0px_1.99853px_7.99413px_0px_rgba(153,153,153,0.20)] px-3">
            <SearchIconSvg width={20} height={20} />
            <input
              className="outline-none focus:outline-none w-full min-h-[45px]"
              type="search"
              name="messagingSearch"
              id="messagingSearch"
            />
          </div>
        </div>
        {/* Chats Section */}
        <div className="flex-col pt-5 border-r-[0.881px] border-[#EBE9F1] h-full">
          <h2 className="text-lg text-themetext font-medium px-3 py-1">
            Chats
          </h2>
          <ChatOpenerButton />
          <ChatOpenerButton selected />
          <ChatOpenerButton />
          <ChatOpenerButton />
          <ChatOpenerButton />
          <ChatOpenerButton />
        </div>
      </div>
      <div className="w-3/4 flex flex-col h-full">
        <div className="px-4 py-2 w-full border-b-[0.881px] border-[#EBE9F1] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-[45px] h-[45px]">
              <Image
                src="/imgs/profile-2.png"
                height={40}
                width={40}
                alt="profileimg"
              />
              <div className="absolute bottom-0 right-0 h-[13px] w-[13px] flex justify-center items-center bg-white rounded-full">
                <div className="bg-primary h-[8px] w-[8px] rounded-full"></div>
              </div>
            </div>
            <div className="text-themetext font-semibold">Helena Reynolds</div>
          </div>
          <div className="flex gap-1 items-center">
            <WhatsappRedirectSvg />
            <EmailRedirectSvg />
            <CallRedirectSvg />
          </div>
        </div>
        <div className="bg-[url('/imgs/msgbg.png')] bg-cover bg-no-repeat w-full h-full flex flex-col gap-1 p-2 overflow-y-scroll">
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={[
              "Hey John, I am looking for the best admin template. Could you please help me to find it out? 😎",
            ]}
            profilePic={"/imgs/profile.png"}
          />
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <SenderMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
          <RecieverMessage
            messages={["How can we help? We're here for you! 😄"]}
            profilePic={"/imgs/profile.png"}
          />
        </div>
        <div className="bg-white flex gap-2 items-center w-full py-2 px-5">
          <div className="flex gap-2 items-center rounded-full border-[0.881px] border-[#EBE9F1] w-full px-3">
            <input
              className="outline-none focus:outline-none w-full min-h-[45px] rounded-full px-2"
              type="text"
              name="msgdraft"
              id="msgdraft"
              placeholder="Type your message here..."
            />
            <AddImageSvg />
          </div>
          <button className="bg-primary px-7 py-2 rounded-full font-semibold border border-primary">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagingSection;
