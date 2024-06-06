import { storyblokEditable } from "@storyblok/react/rsc";
import { Image } from "@react-pdf/renderer"; 


const ImageComponent = ({ blok }) => {
  const url = blok.image.filename.replace('https://a.storyblok.com', 'https://s3.amazonaws.com/a.storyblok.com')
  return  <div {...storyblokEditable(blok)} 
>
<Image className="mx-auto mt-15 w-20" src={url}/>

</div>;
};

export default ImageComponent;