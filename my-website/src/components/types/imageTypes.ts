
export interface ImageResource {
  img: File;
  imgVariants?: File[];
  title: string;
  artist: string;
  artistWebsite?: string;
  description?: string;
}