import React from "react";
type TAppDetailProps = {
  // params: {
  //   id: string;
  // };
  params: Promise<{ id: string }>;
};
const AppsDetailPage = async ({ params }: TAppDetailProps) => {
  const { id } = await params;
  return <div> App Details Page {id}</div>;
};

export default AppsDetailPage;
