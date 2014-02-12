#pragma strict

static var player1Score : int = 0;
static var player2Score : int = 0;

var layout : GUISkin;

static function Score (wallName : String) {
	if (wallName == "rightWall") {
		player1Score += 1;
	} else {
		player2Score += 1;
	}
}

function OnGUI() {
	GUI.skin = layout;
	GUI.Label(new Rect(Screen.width/2-150-12, 25, 100, 100), "" + player1Score);
	GUI.Label(new Rect(Screen.width/2+150-12, 25, 100, 100), "" + player2Score);
}