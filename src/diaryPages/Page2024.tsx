"use client";
import ShowPage from "../diary/2024";
import Page from "../component/Page";

interface Props {
  window?: () => Window;
}

export default function Show(props: Props) {
  return <Page props={props} lamda={<ShowPage />} />;
}
