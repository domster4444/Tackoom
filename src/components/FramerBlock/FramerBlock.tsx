'use client';

import * as motion from 'motion/react-client';
import { useEffect, useState } from 'react';

export default function Reordering() {
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1300);
    return () => clearTimeout(timeout);
  }, [order]);

  return (
    <ul style={container}>
      {order.map((imageSrc) => (
        <motion.li key={imageSrc} layout transition={spring} style={item}>
          <img src={imageSrc} alt="box content" style={imageStyle} />
        </motion.li>
      ))}
    </ul>
  );
}

const initialOrder = [
  'https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload//q_auto,dpr_2.0,f_auto/brontes/for-talents/find-great-work@2x.jpg',
  'https://cdn.prod.website-files.com/603fea6471d9d8559d077603/662e84eb5929da68bfc4f304_Frame%2086355783.webp',
  'https://cdn.prod.website-files.com/603fea6471d9d8559d077603/64b698a2a5bb0896eca48fa7_Shot35_Upwork_Q2%20Content%20Development_01644_final%201.png',
  'https://cdn.prod.website-files.com/603fea6471d9d8559d077603/66e1541e7a5a3af9f86c94e3_imgContainer%202.png',
];

/**
 * ==============   Utils   ================
 */
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

/**
 * ==============   Styles   ================
 */

const spring = {
  type: 'spring',
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  position: 'relative',
  display: 'grid',
  gap: 10,
  width: '100%',
  height: '100%',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
};

const item: React.CSSProperties = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  overflow: 'hidden', // Ensures images don't spill out of the box
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Makes sure images fit well within the box
};
