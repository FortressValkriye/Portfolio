import React from 'react';


export default function Page() {
  const isBrowser = typeof window !== 'undefined'
  if (isBrowser) {
    // We load the component only in the browser; we never load `some-component` in Node.js.
    return import('./client');
  } else {
    <div>HHiii</div>
  }
}