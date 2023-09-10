import NavBar from "@/components/NavBar";
import UploadDragger from "./components/UploadDragger";
import FileTable from "./components/FileTable";

export default function Home() {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      <NavBar />
      <section className="px-4 py-2 flex flex-col">
        <h1 className="text-3xl font-bold mt-24 text-center">
          你的智能文档助手,充当您的第二大脑
        </h1>
        <p className="mt-5   text-slate-400  text-center  ">
          通过AI技术, 可以及时的和文档对话, 并且给出信息源, 使得问答可信，可追溯
        </p>

        {/* upload dragger */}
        <div className="mt-10 max-w-2xl  mx-auto   ">
          <UploadDragger className="mt-8" />
        </div>

        {/* filetable */}
        <div className="mt-10 flex justify-center">
          <FileTable />
        </div>
      </section>
    </main>
  );
}
