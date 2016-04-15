package Kaarten;

import MainGame.Functions.Card;
import MainGame.Player;

public class KaartFuncties {

	
	
	public void buyIncrease(Player p,int increase){
	 
		p.spelerAP(0,increase); //Zal het aanta purchases aanpassen
 }
	public void actionIncrease(Player p,int increase){
		
		p.spelerAP(increase,0);
		
	}	
	public void moneyTurnIncrease(Player p,int increase){
		
		p.moneyTurnIncrease(increase);
		
	};
	public void drawCards(Player p, int AantalDraw){
		
		System.out.println("draw cards");
		for(int i = 0; i<AantalDraw; i++){
			
			Card kaart = p.getDeck().get(i);
			p.getHand().add(kaart);
			p.getHand().remove(i);     
	        
															
		};	

};


}

