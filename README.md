# Lost Ark Helper
This is a tool intended to help with playing Lost Ark and its millions of systems and mechanics.


I don't intend for this to use any traditional database as of yet so we're just gonna edit json files. If I feel the need to do so, I'll implement it.
This is gonna be an open source project, so I need to think about how internationalization is gonna work from the ground up and make it easierto translate it to other languages.

## OPTIONS SCREEN

Probably will take a bit of time to set up but once you do it will be a lot easier to maintain
 This is supposed to be per character on the roster, so we're going to want to ask these questions for every character in the account
	
*SHOULD IMPLEMENT SOMETHING FOR REST BONUS BUT THIS GOES TO THE BACKLOG FOR SURE*
### Tracking
- Guardian Raids
- Chaos Dungeons
- Una's Tasks (Daily)
			This will also need to have something to track the reputation status. The idea is to copy and paste from [this spreadsheed](https://docs.google.com/spreadsheets/d/1pwb9TDbFGjxd1ozSmy7KTwrjk9l1d-N-9L-CW8JyH7I/edit#gid=84821778)
- Una's Tasks (Weekly)
- Cube tickets
- Boss Rush tickets
- Platinum Field tickets
- Guild Donation
- Guild Research
- Current bifrosts
- Tower Progression

## MARKET AND CRAFTING

This is gonna be a bit trickier since we don't really have an API to track the auction house or anything of that sort, but 
it is possible to something with it copying stuff from [this spreadsheet](https://docs.google.com/spreadsheets/d/1j9b5NgyM8WpiKfpfRPIgtnE5w3t2Pj0VxZi3lTZwc-U/edit#gid=0)
just so we can centralize everything in one single project other than going through a fuckton of spreadsheets

## SIMULATIONCRAFT-ESQUE TOOL

The idea is to just have some place we can save our damage results from the training grounds in the app, again, so we don't have
to rely on multiple spreadsheets

## RAPPORT CALCULATOR 

This will be something to track one's roster's rapport without having to mentally calculate how many items you need for the next level
and SAVE it, so thats whats gonna make it a lot better than the maxroll tool (and it will also be local so we wont explode google chrome's 
memory like the maxroll tool does

## WEEKLY ROSTER BUYABLES 

Used to track, uh, weekly roster buyables
- Merchant ship materials
- Maybe event sellers
- Sylmael bloodstone sellers

## MOKOKO SEEDS TRACKER

A basic mokoko seed area tracked just so you know if you're stuck with some stat/level lock on a certain seed or you 100%'d the area, nothing too fancy
