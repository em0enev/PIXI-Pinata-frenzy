import { PixiPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { Container, Sprite } from "pixi.js";

export default class Cactus extends Container{
    constructor(){
        super();
        this.leftCactus =null;
        this.rightCactus = null;

        this._createLeftCactus();
        this._createRightCactus();
        gsap.registerPlugin(PixiPlugin)
    }

    dance(){
        gsap.fromTo(this.leftCactus, { pixi: { angle: 30 }}, { pixi: { angle: -20 } , yoyo: true, repeat: -1, ease: 'power0.easeNone', duration: 0.5});
        gsap.fromTo(this.rightCactus, { pixi: { angle: 30 }}, { pixi: { angle: -20 } , yoyo: true, repeat: -1, ease: 'power0.easeNone', duration: 0.5});
        
    }

    _createLeftCactus(){
        this.leftCactus = new Sprite.from('cactus1')
        this.leftCactus.pivot.x = this.leftCactus.width /2
        this.leftCactus.pivot.y = this.leftCactus.height
        this.leftCactus.angle = 30 
        this.leftCactus.x = -600
        this.addChild(this.leftCactus)
    }

    _createRightCactus(){
        this.rightCactus = new Sprite.from('cactus2')
        this.rightCactus.pivot.x = this.leftCactus.width /2
        this.rightCactus.pivot.y = this.leftCactus.height
        this.rightCactus.angle = 30 
        this.rightCactus.x = 600
     
        this.addChild(this.rightCactus)
    }
}