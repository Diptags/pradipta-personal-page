import Image from "next/image";

const PageNotFound = () => {
  return (
    <Image
      src={"/sorry.png" || ""}
      width={500}
      height={500}
      alt={"Sorry Page Not Found"}
    />
  )
}

export default PageNotFound
