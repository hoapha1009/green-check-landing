import { ErrorCatcher } from "../../components/shared/utilities/misc";
import { DefaultHead } from "../default-head";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { DefaultLayoutProvider } from "./provider/default-layout-provider";

interface PropsType extends ReactProps {}

export function DefaultLayout({ ...props }) {
  return (
    <DefaultLayoutProvider>
      <DefaultLayoutContent {...props}>{props.children}</DefaultLayoutContent>
    </DefaultLayoutProvider>
  );
}

function DefaultLayoutContent({ ...props }) {
  return (
    <>
      <DefaultHead />

      <div className="w-full min-h-screen mx-auto text-gray-700 bg-white shadow-lg">
        <Header {...props} />
        <div className="pt-3 lg:pt-6 bg-gray-50 lg:px-10">
          <ErrorCatcher>{props.children}</ErrorCatcher>
        </div>
        <Footer />
      </div>
    </>
  );
}
