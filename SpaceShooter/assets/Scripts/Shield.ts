import { _decorator, Collider2D, Component, Contact2DType, find, IPhysics2DContact, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Shield')
export class Shield extends Component {

    private shieldSpeed: number;
    private manager;

    start() {

    }

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }        
        this.manager = find("GameManager").getComponent("GameManager");
        this.shieldSpeed = this.manager.getAsteroidSpeed();
    }

    onContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {

        if (otherCollider.name === "Player<BoxCollider2D>" || otherCollider.name === "PlayerShield<CircleCollider2D>")
        { 
            
            setTimeout(() => {
                this.manager.turnshieldOn();
                this.node.destroy();
            }, 1);
        }
    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y - this.shieldSpeed * deltaTime);
        if (this.node.getPosition().y < -480)
        {
            this.node.destroy();
        }
    }
}


