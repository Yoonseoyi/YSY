import localFont from "next/font/local";

const SpoqaHanSansNeo = localFont({
  src: [
    {
      path: "./SpoqaHanSansNeo-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./SpoqaHanSansNeo-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./SpoqaHanSansNeo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  //페이지 로드시 다운로드 지연하지 않는 설정
});

export default SpoqaHanSansNeo;
