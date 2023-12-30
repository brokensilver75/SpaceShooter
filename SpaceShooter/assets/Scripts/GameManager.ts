import { _decorator, Component, EventTouch, Node, ToggleContainer, input, Input, Vec2, CCInteger, Contact2DType, Collider2D, IPhysics2DContact } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property (
        {
            type: Player,
            tooltip: 'Player'
        }
    )
    private player: Player;

    @property (
        {
            type: CCInteger,
            tooltip: 'laser speed'
        }
    )
    private laserSpeed: number;

    onLoad() {
        input.on(Input.EventType.TOUCH_MOVE, this.changePlayerPos, this);
        input.on(Input.EventType.TOUCH_START, this.playerTouched, this);
        input.on(Input.EventType.TOUCH_END, this.playerUnTouched, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    changePlayerPos(event: EventTouch) {
        this.player.newPos = new Vec2(event.getLocationX(), event.getLocationY());
        this.player.movePlayer();
    }

    playerTouched(event: EventTouch) {
        if (event.getLocationX() === this.player.getPlayerLocation().x && event.getLocationY() === this.player.getPlayerLocation().y)
        {
            this.player.playerTouched = true;
        }
    }

    playerUnTouched(event: EventTouch) {
        this.player.playerTouched = false;

    }

    public getLaserSpeed(): number {
        return this.laserSpeed;
    }

    
}


