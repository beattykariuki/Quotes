export class Quote {
    public showDescription: boolean;
    public Like: number;
    public Unlike: number;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
        this.showDescription = false;
        this.Like = 0;
        this.Unlike = 0;
    }
}
