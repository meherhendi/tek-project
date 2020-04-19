export class Certif { //class Certif
    public id? : string ;
    public name: string;
    public rating : number;
    public imagePath: string;
    public Description: string;
    public Chapters : string[];
    public Purpose : string;
    public passing_info : string;
    public sectionstest : string[];
    
    public Related_Certif : string[];

    constructor(
       name: string,
       rating : number,
       imagePath: string,
       Description: string,
       Chapters : string[],
       Purpose : string,
       passing_info : string,
       sectionstest : string[],
       
       Related_Certif : string[]
       ) {
      this.name = name;
      this.rating = rating;
      this.imagePath = imagePath;
      this.Description = Description;
      this.Chapters = Chapters ;
      this.Purpose = Purpose ;
      this.passing_info = passing_info;
      this.sectionstest = sectionstest ;
      this.Related_Certif = Related_Certif
    
    }
  }