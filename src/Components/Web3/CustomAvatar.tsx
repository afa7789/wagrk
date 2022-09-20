import {AvatarComponent} from '@rainbow-me/rainbowkit';
import makeGradient from 'ethereum-gradient-base64';
 
export const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
    const image = makeGradient(address);
    return ensImage ? (
      <img
        src={ensImage}
        width={size}
        height={size}
        style={{ borderRadius: 2 }}
      />
    ) : (
      <div>
        <img
            src={image}
            width={size}
            height={size}
            style={{ borderRadius: 2 }}
        />
      </div>
    );
};
  