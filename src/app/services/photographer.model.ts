import * as uuid from 'uuid';
export class Photographer {
    public id:number;
    public name:string;
    public description:string;
    public categories:[];
    public imgPath:[];
    public address:string;
    constructor(id,name,desc,categories,imgPath,address) {
        this.id=id;
        this.name=name;
        this.description=desc;
        this.categories=categories;
        this.imgPath=imgPath;
        this.address=address;
    }
}