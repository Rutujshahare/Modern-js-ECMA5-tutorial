
class School
{
  constructor(Name)
  {
    this.Name=Name;
  }
  greet()
  {
    console.log(`Hello ${this.Name}`);
  }
}
class College extends School
{
  constructor(Name,Cname)
  {
    super(Name);
    this.Cname=Cname;
  }
  greet()
  {
    console.log(`${ this.Name}my college name is ${this.Cname}`);
  }
}
const o1=new School("rutuj Shahare");
const o2=new College('rahul shahare',"GHRCEM");

o1.greet();
o2.greet();