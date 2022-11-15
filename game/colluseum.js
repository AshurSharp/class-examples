
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