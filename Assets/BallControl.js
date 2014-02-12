#pragma strict

var ballSpeed : float = 100;

// Randomly picks which side to launch towards and at what angle
function Start () {
	yield WaitForSeconds (2);
	GoBall();	
}

function GoBall () {
	var randomNum = Random.Range(0f, 1f);
	if (randomNum <= 0.5) {
		// simple code, can change later
		rigidbody2D.AddForce(new Vector2(ballSpeed, 10));
	} else {
		// simple code, can change later
		rigidbody2D.AddForce(new Vector2(-ballSpeed, -10));
	}
}

function ResetBall() {
	rigidbody2D.velocity.y = 0;
	rigidbody2D.velocity.x = 0;
	transform.position.x = 0;
	transform.position.y = 0;
	yield WaitForSeconds (0.5);
	GoBall();
}

function OnCollisionEnter2D (colInfo : Collision2D) {
    if(colInfo.collider.tag == "Player"){
    	var sum=rigidbody2D.velocity.y/2+colInfo.collider.rigidbody2D.velocity.y/3;
    	if(sum>0) {
    		rigidbody2D.velocity.y = sum+Random.Range(1f, 3f);
    	} else { 
    		rigidbody2D.velocity.y = sum+Random.Range(-3f, 1f);
    	}
    }
}