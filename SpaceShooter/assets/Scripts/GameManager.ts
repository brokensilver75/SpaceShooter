import { _decorator, Component, EventTouch, Node, ToggleContainer, input, Input, Vec2 } from 'cc';
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

    onLoad() {
        input.on(Input.EventType.TOUCH_MOVE, this.changePlayerPos, this);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    changePlayerPos(event: EventTouch) {
        this.player.newPos = new Vec2(event.getLocationX(), event.getLocationY());
        this.player.movePlayer();
    }
}


