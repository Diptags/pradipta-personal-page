import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={"/images/sorry-404.png" || ""}
        width={500}
        height={500}
        alt={"Sorry Page Does Not Exists"}
      />

      {/* Back to Home Page */}
      <div className="mt-6">
        <Link href="/">
          <button className="btn_link" type="button">
            Back to Home Page
            <Home size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
