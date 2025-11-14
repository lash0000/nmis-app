import { createContext, useContext } from "react";
export const SEOContext = createContext(null);

export default function SEOMetadata({
  title = "",
  description = "",
  keywords = "",
  image = "",
  url = "",
  type = "website",
  twitterCard = "summary_large_image",
  children
}) {
  const setSEO = useContext(SEOContext);

  if (setSEO) {
    setSEO({
      title,
      description,
      keywords,
      image,
      url,
      type,
      twitterCard,
      extra: children || ""
    });
  }

  return null;
}
