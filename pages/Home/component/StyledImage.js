import Image from "next/image";
import { styled } from '@mui/material'

const ImageWrap = styled.span`
  margin: 32px auto;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
  }
`;

const StyledImage = ({ alt, image, width, height }) => {
    return (
        <ImageWrap>
            <Image
                alt={alt}
                src={image}
                width={width}
                height={height}
                quality={70}
            />
        </ImageWrap>
    );
};

export default StyledImage;
