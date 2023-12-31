import { _decorator, Collider2D, Component, Contact2DType, find, IPhysics2DContact, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Coin')
export class Coin extends Component {
    private coinSpeed: number;

    private manager;

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }  
        
        this.manager = find("GameManager").getComponent("GameManager");
        this.coinSpeed = this.manager.getAsteroidSpeed();
    }
    
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y - this.coinSpeed * deltaTime);
        if (this.node.getPosition().y < -480)
        {
            this.node.destroy();
        }
    }

    onContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {
        
        if (otherCollider.name === "Player<BoxCollider2D>")
        {
            this.manager.addScore();
            setTimeout(() => {
                this.node.destroy();
            }, 1);
        }

    }
}


