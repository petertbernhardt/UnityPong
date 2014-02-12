﻿#pragma strict

static var player1Score : int = 0;
static var player2Score : int = 0;

static function Score (wallName : String) {
	if (wallName == "rightWall") {
		player1Score += 1;
	} else {
		player2Score += 1;
	}
}

function OnGUI() {
	GUI.Label(new Rect(Screen.width/2-150-12, 20, 100, 100), "" + player1Score);
	GUI.Label(new Rect(Screen.width/2+150-12, 20, 100, 100), "" + player2Score);
}