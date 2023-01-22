import type { AvatarComponent } from '@rainbow-me/rainbowkit';
import { identicon } from 'minidenticons';
import Image from 'next/image';

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  return ensImage ? (
    <Image alt='' src={ensImage} width={size} height={size} style={{ borderRadius: 999 }} />
  ) : (
    <div
      style={{ border: '1px solid #000', width: size, borderRadius: 999, height: size }}
      dangerouslySetInnerHTML={{
        __html: identicon(address),
      }}
    />
  );
};
export default CustomAvatar;
