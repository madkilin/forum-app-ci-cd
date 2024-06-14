import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <div className="sticky mt-0 pt-0 z-[1600]">
      <LoadingBar showFastActions />
    </div>
  );
}

export default Loading;
