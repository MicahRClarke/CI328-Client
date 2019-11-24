class System extends Base
{
    constructor(opts)
    {
        super(opts);
    }

    create()
    {
        this.components = this.getOpt("components", Array);
        this.dirty = this.getOpt("dirty", Boolean, false);

        super.create();
    }

    /**
     * Adds a component to the System.
     * @param {Component} comp 
     */
    addComponent(comp)
    {
        this.components.push(comp);
        console.log(`${comp.constructor.name} added to ${this.constructor.name}`);
        this.dirty = true;
    }

    /**
     * Removes a component from the system, if it exists.
     * @param {Component} comp 
     */
    removeComponent(comp)
    {
        let index = this.components.indexOf(comp);

        if(index !== -1)
        {
            this.components.splice(index, 1);
            console.log(`${comp.constructor.name} removed from ${this.constructor.name}`);
            this.dirty = true;
        }
        else
        {
            console.log(`${comp.constructor.name} doesn't exist in ${this.constructor.name}`);
        }
    }

    /**
     * Cycles through each component for processing.
     */
    cycle()
    {
        if(this.dirty)
        {
            this.sort();
            this.dirty = false;
        }

        for(let i = 0; i < this.components.length; i++)
        {
            this.process(this.components[i]);
        }
    }

    sort()
    {

    }

    /**
     * Method to be overwritten, processing each individual component in the system.
     * @param {Component} comp Component to process.
     */
    process(comp)
    {

    }
}