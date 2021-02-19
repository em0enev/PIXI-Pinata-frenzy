import { PixiPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { Container, Sprite } from "pixi.js";

export default class Cactus extends Container{
    constructor(name){
        super();
        this.name = name;
        this.cactus =null;
        this.rightCactus = null;

        this._createCactus();
        gsap.registerPlugin(PixiPlugin)
    }

    dance(){
        gsap.fromTo(this.cactus, { pixi: { angle: 30 }}, { pixi: { angle: -20 } , yoyo: true, repeat: -1, ease: 'power0.easeNone', duration: 0.5});
    }

    _createCactus(){
        this.cactus = new Sprite.from(this.name)
        this.cactus.pivot.x = this.cactus.width /2
        this.cactus.pivot.y = this.cactus.height
        this.cactus.angle = 30 
        this.addChild(this.cactus)
    }
}