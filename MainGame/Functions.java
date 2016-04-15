package MainGame;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;


public class Functions {

	
/**	public static void main(String[] args) {
		
		
		
			Functions f = new Functions();
			f.setup();
			f.turnGoTrough();
			
			
		};
		**/
				
		
	public class Card {
			private String name;
			private int value;
			private int price;
			private String type;
			
			
			public Card(String name) {
				this.name = name;
			}
			
			
		};
		
	public void setup(Player p) {
		//standard deck setup
		ArrayList<Card> deck = new ArrayList<>();
			for(int i =0; i<7;i++){
				
				deck.add(new Card("Koper"));
				
				
			}
			for(int i =0; i<3;i++){
				
				deck.add(new Card("Estate"));
				
				
			};
			
		Collections.shuffle(deck);
		
		p.setDeck(deck);
			
				
	}
	
	public void drawCards(Player p,int AantalDraw){
		
		ArrayList<Card> hand = p.getHand();
		ArrayList<Card> deck = p.getDeck();
		System.out.println("draw cards");
		
		for(int i = 0; i<AantalDraw; i++){
			
			Card kaart = deck.get(i);
			hand.add(kaart);
			deck.remove(i);

	        System.out.println(kaart.name);
	      


	        
	        
															
		};
		p.setHand(hand);
		
		p.setDeck(deck);
		
	};
			
	public void discardHand(Player p, int aantal){
	
	System.out.println("DiscardedHand");
	
	ArrayList<Card>hand = p.getHand(); 
	ArrayList<Card>discarded = p.getDiscarded();
	
	for(int i= 0; i<aantal; i++){
		
		Card kaart = hand.get(i);
		discarded.add(kaart);
		
	};
	
	p.setHand(hand);
	p.setDiscarded(discarded);
				
	};
	
	
	public void newDeck(Player p){
	
		//Kijken of aantal kaarten in deck <5
		
		int totaalAantal = p.getDeck().size();
		ArrayList<Card>discarded = p.getDiscarded();
		ArrayList<Card> deck = p.getDeck();
		
		if(totaalAantal<5){
			
			System.out.println("Discard word deck"); 	
				
		
			deck =discarded;
			discarded.clear();
			Collections.shuffle(deck);			  		
		}

		else{
			System.out.println("Deck is groot genoeg");
			drawCards(p,5);
		}
			
		
		
		System.out.println("Discarded size");
		System.out.println(discarded.size());
		System.out.println(deck.size());
		
	};	
	
	
	public void koperBuy(Player p, int aantal){
	    	
		ArrayList<Card> discarded = p.getDiscarded();
		
		 for(int i =0; i<aantal;i++){
			 discarded.add(new Card("koper"));
		 }
	    	
	    	
	    };
   

	public void turnGoTrough(Player p){
		
		System.out.println("TurnStart");
		System.out.println("DrawPhase");
		
		drawCards(p,5);
		
		System.out.println("ActionPhase, next = n");
		
		int AantalActions = p.getActions();
		System.out.println("U hebt "+ AantalActions +" actions");
		
		
		Scanner input = new Scanner(System.in);
		String next = input.nextLine();
		
		if(next != null){
			
			System.out.println("Purchase Phase");
			
			int AantalPurchases = p.getPurchases();
			System.out.println(AantalPurchases);
			
			System.out.println("Press P for koper, else press any key");
			
			
						
			String keuze = input.nextLine(); 
			if(keuze.equals("p")){
				
				koperBuy(p,1);
				p.spelerAP(0,-1);
				int AantalPurchases2 = p.getPurchases();
				System.out.println("U hebt nog "+AantalPurchases2 + " buys over");
				
		
			}
			else{
				System.out.println("End turn?");
				String end = input.nextLine();
				if(end != null){
					
					discardHand(p,5);
					
				};
			
				
			};

			
			System.out.println("End turn?");
			String end = input.nextLine();
			if(end != null){
				
				discardHand(p,p.getHand().size());		
			
			};
			
		System.out.println("Turn finished");
		
		}					
	};	
}


