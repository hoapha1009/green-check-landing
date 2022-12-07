import getConfig from "next/config";

export function Footer() {
  const { publicRuntimeConfig } = getConfig();

  return (
    <footer className="w-full bg-primary py-0.5 text-center text-white">
      {`Green Agri © ${new Date().getFullYear()} Ver${publicRuntimeConfig.version}`}
    </footer>
  );
}
