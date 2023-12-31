import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PlayerShield')
export class PlayerShield extends Component {

    private life: number;

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }  
        this.life = 2;
    }

    start() {

    }

    update(deltaTime: number) {

        if (this.life === 0)
        {
            this.life = 2;
            this.node.active = false;
        }

        
    }

    onContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {

        if (this.node.active)
        {
            if (otherCollider.name === "Asteroid<BoxCollider2D>" || otherCollider.name === "AsteroidRed<BoxCollider2D>" || otherCollider.name === "CoinAsteroid<BoxCollider2D>")
            {
                if (this.life != 0)
                {
                    setTimeout(() => {
                        this.life--;
                    }, 1);
                }
            }
        }
    }
}


