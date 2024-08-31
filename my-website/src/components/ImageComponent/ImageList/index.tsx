import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { imageData } from '../../../data/data'
import { ImageResource } from '../../../types/imageTypes';
import { ImageDetailsDialog } from '../ImageDialogue';
import Link from '@docusaurus/Link';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


export default function TitlebarImageList() {
  
  const [currentImage, setCurrentImage] = useState<ImageResource|null>(null);

  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  return (
    <>
      {currentImage ? <ImageDetailsDialog image={currentImage} onClose={() => setCurrentImage(null)}/> : <></>}
      <ImageList cols={4} sx={{ width: '100%', height: '100%', overflow: "hidden"
      }}>
        {imageData.map((item, index) => (
          <ImageListItem 
            key={index}
            style={{
              margin: "12px",
              transition: "transform 0.3s ease-in-out",
              transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
              zIndex: hoveredIndex === index ? 10 : 1
            }  
            }
            cols={item.cols || 1} rows={item.rows || 1}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
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
    </>
    
  );

}

