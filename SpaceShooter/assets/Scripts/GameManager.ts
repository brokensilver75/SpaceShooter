import { _decorator, Component, EventTouch, Node, ToggleContainer, input, Input, Vec2, CCInteger, Contact2DType, Collider2D, IPhysics2DContact, RichText, director, Vec3, Button, CCFloat, Prefab, instantiate } from 'cc';
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

    @property (
        {
            type: CCInteger,
            tooltip: 'Asteroid speed'
        }
    )
    private asteroidSpeed: number;

    @property (
        {
            type: RichText,
            tooltip: 'Score'
        }
    )
    private scoreText: RichText;

    @property (
        {
            type: CCInteger,
            tooltip: 'TargetScore'
        }
    )
    private targetScore: number = 100;

    @property(
        {
            type: Prefab,
            tooltip: 'CoinPrefab'
        }
    )
    private coinPrefab: Prefab;

    @property(
        {
            type: CCInteger,
            tooltip: 'AsteroidSpawnerSpeed'
        }
    )
    private asteroidSpawnerSpeed: number;

    @property(
        {
            type: CCFloat,
            tooltip: 'AsteroidSpawnRate'
        }
    )
    private asteroidSpawnRate: number;

    @property (
        {
            type: RichText,
            tooltip: 'Next Level'
        }
    )
    private nextButton: RichText;

    private score: number = 0;
    private level: number = 1;
    //private levelOver: boolean = false;

    onLoad() {
        input.on(Input.EventType.TOUCH_MOVE, this.changePlayerPos, this);
        input.on(Input.EventType.TOUCH_START, this.playerTouched, this);
        input.on(Input.EventType.TOUCH_END, this.playerUnTouched, this);
        this.nextButton.node.on(Input.EventType.TOUCH_START, this.pressToAdvance, this);
    }

    start() {
        this.nextButton.node.active = false;
    }

    update(deltaTime: number) {
        this.levelWin();
        this.adjustLevelStats();
    }

    adjustLevelStats() {

        switch(this.level) {
            case 1: 
                this.laserSpeed = 200;
                this.asteroidSpeed = 100;
                this.targetScore = 20;
                break;
            case 2: 
                this.laserSpeed = 200;
                this.asteroidSpeed = 150;
                this.targetScore = 50;
                break;
            case 3:
                this.laserSpeed = 200;
                this.asteroidSpeed = 200;
                this.targetScore = 100;
                break;
        }
    }

    levelWin() {

        if (this.level === 3)
        {
            if (this.score == this.targetScore)
                this.gameOver();
        }

        else if (this.score === this.targetScore)
            this.levelAdvance();

        
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

    public getAsteroidSpeed(): number {
        return this.asteroidSpeed;
    }

    public getSpawnerSpeed(): number {
        return this.asteroidSpawnerSpeed;
    }

    public getSpawnRate(): number {
        return this.asteroidSpawnRate;
    }

    /*public instantiateCoin(spawnNode: Node) {
        this.addScore();
        var coin = instantiate(this.coinPrefab);
        //console.log(coin.name);
        coin.setWorldPosition(spawnNode.getPosition());
        spawnNode.parent.addChild(coin);
    }*/

    addScore() {
        this.score += 10;
        this.scoreText.string = String(this.score);
    }

    gameOver() {
        director.loadScene('GameOver');
    }

    resetScore() {
        this.score = 0;
        this.scoreText.string = '00';
    }

    resetPlayer() {
        this.player.node.position = new Vec3(0, -400, 0);
    }

    levelAdvance() {
        this.level++;
        this.resetScore();
        director.pause();
        this.nextButton.node.active = true;

    }

    pressToAdvance()
    {
        director.resume();
        this.nextButton.node.active = false;
    }

}


