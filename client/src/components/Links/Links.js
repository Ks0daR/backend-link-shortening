import React, { useState } from "react";

const Links = () => {
  const [links, setLinks] = useState(null);

  return <pre>{JSON.stringify(links)}</pre>;
};

export default Links;
