import Scene from './Scene';
import gsap from 'gsap';
import Footer from '../components/Footer';
import Music from '../components/Music';
import Pinata from '../components/Pinata';
import Cactus from '../components/Cactus';

export default class Play extends Scene {
  async onCreated() {

    this._music = new Music();

    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;
    this.addChild(footer);

    const pinata = new Pinata()
    const cactus = new Cactus();
    cactus.y = 350
    this.addChild(cactus)
    this.addChild(pinata)

    this.background.alpha = 0;
    this.alpha = 0;

    this._music.once(Music.events.INTRO, () => {
      this.alpha = 1;
      this.background.alpha = 1;
      gsap.to(this.background.scale, { x: 0.8, y: 0.8, duration: 10, yoyo: true, repeat: -1, ease: 'linear.none' });
    });

    this._music.on(Music.events.BEAT, () => {
    })

    this._music.once(Music.events.START, () => {
      this._music.once(Music.events.BEAT, () => {
        pinata.dance();
        cactus.dance();
      })
      this._music.on(Music.events.BEAT,() => {
        pinata._createElements();
      })
    })
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) { // eslint-disable-line no-unused-vars

  }
}
