
export interface ImageResource {
  img: string;
  imgVariants: string[];
  title: string;
  artist: string;
  artistWebsite?: string;
  description?: string;
  cols?: number;
  rows?: number;
}