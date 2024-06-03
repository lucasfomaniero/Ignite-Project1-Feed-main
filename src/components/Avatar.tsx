
import { ImgHTMLAttributes, useState } from 'react';
import styles from './Avatar.module.css'
import { getRandomGender } from '../utils/getRandomGender';
import { getRandomNumber } from '../utils/getRandomNumber';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}



export function Avatar({ hasBorder = true, src, ...props}: AvatarProps) {

    const gender = getRandomGender();
    const number = getRandomNumber(1, 99);
    const hasImage = src !== undefined && src !== '';
    const imgUrl = hasImage ? src : `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
    const [avatar, _] = useState<string>(imgUrl)
    return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    alt={`Random ${gender} avatar`}
    src={avatar}
    {...props}
    />
}