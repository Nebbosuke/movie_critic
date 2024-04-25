"use client";
import ShowPage from "./Top";
import Page from "./Page";

interface Props {
  window?: () => Window;
}

export default function Show(props: Props) {
  return <Page props={props} lamda={<ShowPage />} />;
}
