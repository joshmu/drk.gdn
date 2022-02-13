import React, { useEffect } from 'react';
import { Scene } from 'three';

export const HomeScene: React.FC = () => {
  useEffect(() => {
    // todo: init
    // initThree();
  }, []);

  return <h1>- DRK.GDN -</h1>;
};

function initThree() {
  createScene('home');
}

// create scene

function createScene(sceneName: string): void {
  console.log(`Creating scene ${sceneName}`);

  const scene = new Scene();
}

// todo: https://threejs.org/docs/#manual/en/introduction/Drawing-lines
// todo: https://tympanus.net/codrops/2021/10/04/deconstructing-the-homunculus-jp-distortion-with-three-js/

// check if WebGL is available
// function checkWebGL(): void {
//   if (WebGL.isWebGLAvailable()) {
//     // Initiate function or other initializations here
//     animate();
//   } else {
//     const warning = WebGL.getWebGLErrorMessage();
//     document.getElementById('container').appendChild(warning);
//   }
// }
