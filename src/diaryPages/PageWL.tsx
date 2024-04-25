"use client";
import ShowPage from "../diary/WatchList";
import Page from "../component/Page";

interface Props {
  window?: () => Window;
}

export default function Show(props: Props) {
  return <Page props={props} lamda={<ShowPage />} />;
}
