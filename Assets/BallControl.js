#pragma strict

function Start () {
	var randomNum = Random.Range(0, 2);
	if (randomNum <= 0.5) {
		// simple code, can change later
		rigidbody2D.AddForce(new Vector2(80, 10));
	} else {
		// simple code, can change later
		rigidbody2D.AddForce(new Vector2(-80, -10));
	}
}

function OnCollisionEnter2D (colInfo : Collision2D) {
	if (colInfo.collider.tag == "Player") {
		Debug.Log("It's working!");
	}
}