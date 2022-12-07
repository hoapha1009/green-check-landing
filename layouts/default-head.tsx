import Head from "next/head";

export function DefaultHead({ fontSize, ...props }: { fontSize?: string }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="description" content="Green MRL Tra cứu thông tin nông nghiệp" />
        <link
          rel="icon"
          type="image/png"
          href={
            "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://peppervietnam.com/&size=128"
          }
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="manifest" crossOrigin="use-credentials" href="/manifest.json" /> */}
        <link rel="stylesheet" href={`/api/setting/theme/${"DEFAULT"}`}></link>
        {/* Facebook Pixel Code */}

        {/* End Facebook Pixel Code  */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        {fontSize && (
          <style>
            {`
              html, body {
                font-size: ${fontSize} !important;
              }
            `}
          </style>
        )}
      </Head>
    </>
  );
}
