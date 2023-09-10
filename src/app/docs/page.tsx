import NavBar from "@/components/NavBar";
import { Card, Col, Row } from "antd";
import Link from "next/link";

function Page() {
  const fakeDocs = [
    {
      fileId: "1",
      fileName: "test1",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
    {
      fileId: "2",
      fileName: "test2",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
    {
      fileId: "3",
      fileName: "test3",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
    {
      fileId: "4",
      fileName: "test4",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
    {
      fileId: "5",
      fileName: "test5",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
    {
      fileId: "6",
      fileName: "test6",
      fileType: "pdf",
      fileSize: "1.2MB",
      fileDate: "2021-10-10",
    },
  ];

  return (
    <div>
      <NavBar />
      <Row gutter={[16, 24]} style={{ padding: "2rem 4rem" }}>
        {fakeDocs.map((doc) => {
          return (
            <Col key={doc.fileId} span={8}>
              <Card
                hoverable={true}
                title={doc.fileName}
                extra={<Link href="/">Chat</Link>}
              >
                <p>上传日期: {doc.fileDate}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Page;
