import Link from "next/link";

type Props = {
  id: number;
  title: string;
  href: string;
};

const TabItem = ({ id, title, href }: Props) => {
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
