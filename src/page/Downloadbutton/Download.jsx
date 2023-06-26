import { AiOutlineDownload } from "react-icons/ai";

const pdffile = "http://localhost:5173/sibom-saha-Resume (3).pdf";

const Download = () => {
  return (
    <div className="btn btn-outline btn-warning">
      <a
        href={"../../../public/sibom-saha-Resume (3).pdf"}
        download={"sibom-saha-Resume (3).pdf"}
      >
        <span className="flex items-center">
          {" "}
          <AiOutlineDownload className="text-4xl" />
          Download The Resume
        </span>
      </a>
    </div>
  );
};

export default Download;
