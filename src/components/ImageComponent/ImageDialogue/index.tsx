
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { ImageResource } from "../../../types/imageTypes"

interface ImageDetailsDialogProps {
    image: ImageResource;
    onClose: () => void;
}

export const ImageDetailsDialog = ({image, onClose}: ImageDetailsDialogProps) => {
    

    const handleClose = () => {
        onClose();
    }

    return (
        <Dialog
        open={image ? true : false}
        onClose={handleClose}
      >
        <DialogTitle>{image.title}</DialogTitle>
        {image.description ? (
            <DialogContent>
                <DialogContentText>
                    {image.description}
                </DialogContentText>
            </DialogContent>
        ) : 
        <></>}
      </Dialog>
    )
}