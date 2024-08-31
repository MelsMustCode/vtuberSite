import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { ImageResource } from "../../../types/imageTypes";
import Carousel from "react-multi-carousel";
import useBaseUrl from "@docusaurus/useBaseUrl";

interface ImageDetailsDialogProps {
  image: ImageResource;
  onClose: () => void;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const ImageDetailsDialog = ({
  image,
  onClose,
}: ImageDetailsDialogProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={image ? true : false} onClose={handleClose}>
      <DialogTitle>{image.title}</DialogTitle>
      <DialogContent>
          <Box>
            <Carousel responsive={responsive}>
              {image.imgVariants ?? image.imgVariants.forEach((i) => (
                // <img
                //   srcSet={`${i}?w=248&fit=crop&auto=format&dpr=2 2x`}
                //   src={`${i}?w=248&fit=crop&auto=format`}
                //   loading="lazy"
                // />
                <img 
                  src={useBaseUrl(i)}
                  loading="lazy"
                />
              ))}
            </Carousel>
            <DialogContentText>{image.description}</DialogContentText>
          </Box>
        </DialogContent>
    </Dialog>
  );
};
