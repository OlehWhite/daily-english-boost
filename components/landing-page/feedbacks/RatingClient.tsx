'use client';

import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';

interface Props {
  rating: number;
}

const RatingClient = ({ rating }: Props) => {
  const [isRender, setIsRender] = useState<boolean>(false);

  useEffect(() => {
    setIsRender(true);
  }, []);

  if (!isRender) return null;

  return (
    <div className="flex mb-4 gap-3">
      <Rating
        initialValue={rating}
        readonly
        size={24}
        SVGstyle={{ display: 'inline-block', marginRight: '4px' }}
        style={{ display: 'flex' }}
      />

      <span className="font-bold">{rating}</span>
    </div>
  );
};

export default RatingClient;
