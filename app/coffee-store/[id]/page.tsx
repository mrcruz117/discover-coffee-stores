import React from "react";

export default function page(props: { params: { id: string } }) {
  const {
    params: { id },
  } = props;
  console.log("id: ", id);
  return <div>Store Page: {id}</div>;
}
