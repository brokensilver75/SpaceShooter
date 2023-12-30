import { _decorator, CCInteger, Component, Node, Contact2DType, Collider2D, IPhysics2DContact, RigidBody, RigidBody2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Asteroid')
export class Asteroid extends Component {
    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpeed'
        }
    )
    private asteroidSpeed: number;

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onShipContact, this);
            collider.on(Contact2DType.BEGIN_CONTACT, this.onLaserContact, this);
        }  
    }
    
    start() {

    }

    update(deltaTime: number) {
        this.node.setPosition(this.node.getPosition().x, this.node.getPosition().y - this.asteroidSpeed * deltaTime);
        if (this.node.getPosition().y < -480)
        {
            this.node.destroy();
        }
    }

    onShipContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {
        setTimeout(() => {
            otherCollider.node.destroy();
        }, 1);

    }

    onLaserContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {

        setTimeout(() => {
            this.node.destroy();
        }, 1);
        
        setTimeout(() => {
            otherCollider.node.destroy();
        }, 1);
    }


}


