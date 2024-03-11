'use client'; // tells next.js compiler to include this component in our js bundle
import React from 'react';

const AddToCard = () => {
  return (
    <div>
      <button
        className='btn btn-primary text-white'
        onClick={() => console.log('Click')}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCard;
