import {
  getStoryblokApi,
} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      {/* <img className="mx-auto mt-15 w-20" src="https://a.storyblok.com/f/291684/259x194/231cec7b8b/images-1.jpeg"></img> */}
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/pdf`, sbParams, {cache: "no-store"});
}
