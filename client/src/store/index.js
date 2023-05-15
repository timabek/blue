import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#3e4242',
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;