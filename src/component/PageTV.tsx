"use client";
import ShowPage from "./Tvshow";
import Page from "./Page";

interface Props {
  window?: () => Window;
}

export default function Show(props: Props) {
  return <Page props={props} lamda={<ShowPage />} />;
}
