import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export const FooterButton = ({ path, title }) => {
  return (
    <Link className="inline-block" href={path}>
      <button className="btn_link" type="button">
        {title}
        <MoveUpRight size={18} />
      </button>
    </Link>
  )
}
