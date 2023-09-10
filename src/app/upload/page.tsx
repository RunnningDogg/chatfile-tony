import NavBar from "@/components/NavBar";
import FileTable from "./components/FileTable";
import UploadDragger from "./components/UploadDragger";
function Page() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col gap-6  ">
        <h1 className="mt-24 text-3xl font-bold text-center">上传文档</h1>
        <p className="  text-md text-slate-300 text-center">
          上传您的文档, 开始对话
        </p>
        <div className="mx-auto">
          <UploadDragger />
        </div>
        <div className="mt-10 mx-auto ">
          <FileTable />
        </div>
      </div>
    </div>
  );
}

export default Page;
