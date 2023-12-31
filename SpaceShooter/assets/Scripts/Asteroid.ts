import { _decorator, CCInteger, Component, Node, Contact2DType, Collider2D, IPhysics2DContact, RigidBody, RigidBody2D, Game, find, director } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('Asteroid')
export class Asteroid extends Component {
    
    private asteroidSpeed: number;

    private manager;

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }  
        
        this.manager = find("GameManager").getComponent("GameManager");
        this.asteroidSpeed = this.manager.getAsteroidSpeed();
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

    onContact(selfCollider:Collider2D, otherCollider:Collider2D, contact:IPhysics2DContact | null) {

        if (otherCollider.name === "SpaceLaser<BoxCollider2D>")
        {
            this.manager.addScore();
            setTimeout(() => {
                this.node.destroy();
            }, 1);
            
            setTimeout(() => {
                otherCollider.node.destroy();
            }, 1);
        }

        if (otherCollider.name === "Player<BoxCollider2D>")
        {
            this.manager.gameOver();
        }

        if (otherCollider.name === "PlayerShield<CircleCollider2D>")
        {
            setTimeout(() => {
                this.node.destroy();
            }, 1);
        }

        
    }


}


