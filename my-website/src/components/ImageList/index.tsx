import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { itemData } from './helper'
import { ImageResource } from '../types/imageTypes';
import { ImageDetailsDialog } from '../ImageDialogue';
import Link from '@docusaurus/Link';

export default function TitlebarImageList() {
  const [currentImage, setCurrentImage] = useState<ImageResource|null>(null);

  return (
    <div>
      {currentImage ? <ImageDetailsDialog image={currentImage} onClose={() => setCurrentImage(null)}/> : <></>}
      <ImageList cols={3} sx={{ width: "100%", height: "100%" }}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<Link href={item.artistWebsite}>{item.artist}</Link>}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                  onClick={() => setCurrentImage(item)}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

