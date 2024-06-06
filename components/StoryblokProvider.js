/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import Pdf from "./Pdf";
import { Text } from "@react-pdf/renderer";
import ImageComponent from './ImageComponent'
import TextComponent from "./TextComponent";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: "your-access-token",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    pdf: Pdf,
    text: TextComponent,
    image: ImageComponent,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
