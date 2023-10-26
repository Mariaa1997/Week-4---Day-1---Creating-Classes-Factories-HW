class Dinner{
    constructor(appetizer,entree,dessert){
        this.appetizer=appetizer
        this.entree=entree
        this.dessert=dessert
    }
}
class Chef{
    
makedinner(appetizer,entree,dessert){
    return new Dinner(appetizer,entree,dessert)

}
}   

const chef1=new Chef()
console.log(chef1.makedinner('fries','noodles','cake'));
console.log(chef1.makedinner('wings','pasta','pastree'));
console.log(chef1.makedinner('fish fillets','fried rice','ice cream'));