import {AvatarComponent} from '@rainbow-me/rainbowkit';
import {makeGradientStatic} from 'ethereum-gradient-base64';
 
export const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
    const image = makeGradientStatic(address);
    return ensImage ? (
      <img
        src={ensImage}
        width={size}
        height={size}
        style={{ borderRadius: 999 }}
      />
    ) : (
      <div>
        <img
            src={image}
            width={size}
            height={size}
            style={{ borderRadius: 999 }}
        />
      </div>
    );
};
  