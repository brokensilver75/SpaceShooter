import { _decorator, CCInteger, Component, Node, Contact2DType, Collider2D, IPhysics2DContact, RigidBody, RigidBody2D, Game, find } from 'cc';

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

    private game;

    onLoad() {
        let collider = this.getComponent(Collider2D);
        if (collider)
        {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }  
        
        this.game = find("GameManager").getComponent("GameManager");
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
            this.game.addScore();
            setTimeout(() => {
                this.node.destroy();
            }, 1);
            
            setTimeout(() => {
                otherCollider.node.destroy();
            }, 1);
        }

        if (otherCollider.name === "Player<BoxCollider2D>")
        {
            setTimeout(() => {
                otherCollider.node.destroy();
            }, 1);
        }

        
    }


}


