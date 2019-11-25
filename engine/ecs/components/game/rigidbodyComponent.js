class RigidBody extends Component
{
    constructor(opts)
    {
        super(opts);
    }

    create()
    {
        this.velocity = this.getOpt("velocity", Vector2);
        this.drag = this.getOpt("drag", Vector2, new Vector2(0.1, 0.1));

        super.create();
    }
}