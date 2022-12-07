import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { Button } from "../components/shared/utilities/form";
import { Accordion, Scrollbar } from "../components/shared/utilities/misc";
import { GetAppKey } from "../lib/graphql/auth.link";
import { useScreen } from "../lib/hooks/useScreen";
import { Footer } from "./default-layout/components/footer";

export interface SidebarMenu {
  title: string;
  subMenus: SidebarSubMenu[];
  isOpen?: boolean;
  hidden?: boolean;
  id?: string;
}

interface SidebarSubMenu {
  title: string;
  path: string;
  icon: JSX.Element;
  badge?: string | number;
  hidden?: boolean;
  id?: string;
}

interface Props extends ReactProps {
  name: string;
  menus: SidebarMenu[];
  top: string;
  widthClassName: string;
  closable?: boolean;
}
export default function DefaultSidebar({
  name,
  menus,
  top,
  widthClassName,
  closable,
  ...props
}: Props) {
  const router = useRouter();
  const sidebarStorage = GetAppKey() + "-sidebar-closed-menu";
  const [closedMenuObj, setClosedMenuObj] = useState<Object>(null);
  const screenXl = useScreen("xl");

  useEffect(() => {
    const closedMenuString = localStorage.getItem(sidebarStorage);
    if (closedMenuString) {
      setClosedMenuObj(JSON.parse(closedMenuString));
    } else {
      setClosedMenuObj({});
    }
  }, []);

  useEffect(() => {
    if (closedMenuObj) {
      localStorage.setItem(sidebarStorage, JSON.stringify(closedMenuObj));
    }
  }, [closedMenuObj]);

  const toggleMenu = (index) => {
    setClosedMenuObj({ ...closedMenuObj, [index]: !closedMenuObj[index] });
  };

  if (!closedMenuObj || !menus) return <></>;
  return (
    <>
      <div
        className={`fixed flex flex-col bg-white shadow top-14 ${widthClassName}`}
        style={{ top, height: `calc(100vh - ${top})` }}
      >
        <Scrollbar
          wrapperClassName="flex-1"
          hideTracksWhenNotNeeded
          autoHide
          innerClassName="py-3 flex flex-col items-center xl:block xl:items-start"
        >
          {menus.map((menu, index) => (
            <div className="mb-2 group" key={index}>
              <div
                className={`flex px-5 py-2 ${closable && screenXl ? "cursor-pointer" : ""}`}
                onClick={() => toggleMenu(index)}
              >
                {closable && screenXl ? (
                  <span className="flex-1 font-semibold text-gray-700 uppercase transition-all xl:text-md md:text-md sm:text-sm xs:text-xs">
                    {menu.title}
                  </span>
                ) : (
                  index > 0 && <div className="w-full border-t"></div>
                )}
                {closable && screenXl && (
                  <i
                    className={`${
                      closedMenuObj[index] ? "" : "opacity-0"
                    } group-hover:opacity-100 text-lg text-accent group-hover:text-accent-dark self-center transition ${
                      closedMenuObj[index] ? "" : "rotate-180"
                    }`}
                  >
                    <RiArrowDownSLine />
                  </i>
                )}
              </div>
              <Accordion
                className="flex flex-col gap-1 px-4"
                isOpen={closable && screenXl ? !closedMenuObj[index] : true}
              >
                {menu.subMenus.map((subMenu, index) => (
                  <Button
                    key={subMenu.title}
                    {...(router.pathname == subMenu.path ||
                    router.pathname.includes(`${subMenu.path}/`)
                      ? { light: true, primary: true }
                      : { hoverDarken: false })}
                    className={`xl:w-full pl-0 pr-0 xl:pl-3 xl:pr-1.5 w-12 justify-center h-11 rounded-xl xl:justify-start font-medium ${
                      router.pathname.includes(subMenu.path) ? "" : "hover:bg-slate-light"
                    }`}
                    iconClassName="text-lg xl:pr-2"
                    icon={subMenu.icon}
                    href={subMenu.path}
                    tooltip={screenXl ? "" : subMenu.title}
                    placement="right"
                    tooltipAppend="document"
                    text={
                      screenXl ? (
                        <div className="flex items-center justify-start font-medium">
                          <span>{subMenu.title}</span>
                          {subMenu.badge && <Badge value={subMenu.badge} />}
                        </div>
                      ) : (
                        ""
                      )
                    }
                  ></Button>
                ))}
              </Accordion>
            </div>
          ))}
        </Scrollbar>
        <Footer />
      </div>
    </>
  );
}

export function Badge({ value }) {
  return (
    <div
      className={`ml-1.5 bg-danger text-white rounded-full px-1 min-w-5 h-5 flex-center text-xs font-bold`}
    >
      {value}
    </div>
  );
}
