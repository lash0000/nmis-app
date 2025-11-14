import Identifiers from "../modules/identifiers/IdentifiersPage"

export const routes = [
  {
    path: "/",
    element: <Identifiers />,
    metadata: {
      title: "Home — My App",
      description: "Welcome to the home page.",
      image: "https://example.com/home.png",
      url: "https://example.com/",
    },
  },
]
