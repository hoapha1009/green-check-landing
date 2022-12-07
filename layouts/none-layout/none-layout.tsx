import { DefaultHead } from "../default-head";

interface PropsType extends ReactProps {}

export function NoneLayout({ ...props }: PropsType) {
  return (
    <>
      <DefaultHead />
      <div className="flex flex-col w-full min-h-screen">{props.children}</div>
    </>
  );
}
