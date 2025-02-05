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
      className={`${
        activeTabId === tab.id ? "text-yellow-400" : ""
      } hover:text-yellow-400`}
    >
      {title}
    </Link>
  );
};

export default TabItem;
