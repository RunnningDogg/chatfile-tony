import NavBar from "@/components/NavBar";
import { Avatar, Button } from "antd";
import { log } from "console";

function Page() {
  const arr = Array.from({ length: 10 }, (_, i) => i + 1);
  console.log(arr);

  return (
    <div>
      <NavBar />
      <div className="chat-container ml-auto mr-5 flex w-2/3 flex-col">
        <div className="chat-container relative  flex  h-[85vh] flex-col overflow-y-scroll border-l-2 bg-slate-200">
          {arr.map((i) => {
            console.log(i);
            return (
              <div
                key={i}
                className={
                  `flex items-start gap-4 rounded px-4 py-6  ` +
                  ` ${i % 2 === 0 ? " flex-row-reverse  " : ""}`
                }
              >
                <Avatar style={{ backgroundColor: "#f56a00" }}>U</Avatar>
                <p className="max-w-lg flex-1 rounded-lg bg-slate-50 px-2 py-4">
                  Explain how to use the chat feature here. Explain how to use
                  the chat feature here. Explain how to use the chat feature
                  here. Explain how to use the chat feature here. Explain how to
                  use the chat
                </p>
              </div>
            );
          })}
        </div>
        <div className="relative mt-2 flex w-full bg-slate-100 p-2 ">
          <input
            placeholder="input your question"
            className="w-full flex-1 px-2 py-4"
          />
          <button className="absolute  right-5 top-1/2 -translate-y-1/2  rounded border bg-geek-500 px-4  py-2  text-slate-50 hover:bg-geek-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
