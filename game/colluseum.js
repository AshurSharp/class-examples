const colluseum = {
    "floor": "sand",
    "shape": "circle",
    "fighters": [],
    "firstPlayersTurn":true
}
colluseum.load = function(){
this.fighters[0] = fighter.new("Trump", 10, 3, 6);
this.fighters[1] = fighter.new("Biden", 3, 9, 1);

}




colluseum.go =function(){ 
let fighter1 = this.fighters[0];
let fighter2 = this.fighters[1];
while(fighter1.hp > 0 && fighter2.hp > 0){  
    if(this.firstPlayersTurn){
        fighter1.hp = fighter1.hp -2;
        if(fighter1.hp <= 0){
         document.getElementById("fighter2").classList.add("dead");
        }
    }else{
       fighter2.hp = fighter1.hp -2;
       if(fighter2.hp <= 0){
        document.getElementById("fighter2").classList.add("dead");
       }
    }  
    this.firstPlayersTurn = !this.firstPlayersTurn;
    console.log("1:"+fighter1.hp+"  2:"+fighter2.hp);
}
    alert("gameover");
}