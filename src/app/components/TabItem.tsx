import Link from "next/link";

type Props = {
  id: number;
  title: string;
  href: string;
  hover: string;
};

const TabItem = ({ id, title, href, hover }: Props) => {
  return (
    <Link
      key={id}
      href={href}
    >
      {title}
    </Link>
  );
};

export default TabItem;
