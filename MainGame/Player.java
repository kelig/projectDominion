package MainGame;

public class Player {
	
		private String name;
		private int actions;
		private int purchases;
	
		private int moneyTurn; //hoeveel dat persoon kan spenderen in 1 beurt
	
		
		public int getActions(){
			
			return actions;
		};
		
		public int getPurchases(){
			
			return purchases;
		};
		
		
		
		
		public void spelerNaam(String name) {
			this.name = name;
		}
		
		public void spelerAP(int Actions, int purchases){			
			this.actions += Actions;
			this.purchases += purchases;
		}
		

	
	public void setupPlayer(){
		spelerAP(1,1);
		
	
		
		
	}; 	
	

	
	
	
	};
