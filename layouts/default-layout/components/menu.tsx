import Link from "next/link";
import { useRouter } from "next/router";

export function MenuList() {
  const router = useRouter();

  return (
    <div className="flex items-center px-10 bg-primary">
      {MENU_LIST.map((item) => (
        <Link key={item.href} href={item.href}>
          <a>
            <div
              className={`cursor-pointer px-4 py-2.5 font-medium text-white hover:text-gray-200 ${
                !router.asPath.startsWith(item.href) && "bg-primary-dark"
              }`}
            >
              {item.label}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}

interface Menu {
  href: string;
  label: string;
}

const MENU_LIST: Menu[] = [{ href: "/mrl", label: "Tra cứu MRL" }];
