import { PixiPlugin } from "gsap/all";
import gsap from "gsap/gsap-core";
import { Container, Sprite } from "pixi.js";

export default class Pinata extends Container {
    constructor() {
        super();
        this.name = 'pinata'
        this._body = null;
        this._elements = null;

        this._createBody();
        this._createElementContainer();
        this._createElements();

        gsap.registerPlugin(PixiPlugin)
        this._body.on('click', () => this._createChili())
    }

    dance() {
        gsap.fromTo(this._body, { pixi: { angle: 30 } }, { pixi: { angle: -30 }, yoyo: true, repeat: -1, ease: 'power0.easeNone', duration: 0.5 });
    }

    _createBody() {
        this._body = new Sprite.from('pinata');
        this._body.y = -400
        this._body.pivot.x = this._body.width / 2
        this._body.pivot.y = 0
        this._body.angle = 30
        this._body.interactive = true;
        this._body.buttonMode = true;
        this.addChild(this._body)
    }

    _createElements() {
        const particle = new Sprite.from('particle')
        particle.name = 'particle'
        this._elements.addChild(particle)
        gsap.to(particle, { pixi: { scale: 0, alpha: 0 }, y: 900, duration: 5 })
    }

    _createChili() {
        const chili = new Sprite.from('chili')
        chili.name = 'chili';
        this._elements.addChild(chili)
        gsap.to(chili, { pixi: { rotation: 0 }, y: 1000, duration: 5 })
    }

    _createElementContainer() {
        this._elements = new Container();
        this._elements.x = this._body.x / 2
        this._elements.y = this._body.y / 2
        this.addChildAt(this._elements, 0)
    }
}