function powerMeter(){
  let count = 0;
  let up = true;

  setInterval(() => {
  	if (up) {
  		count++;
  		if (count === 100) {
  			up = false;
  		}
  	} else {
  		count --;
  		if (count === 0) {
  			up = true;
  		}
  	}
  	console.log(count);
  }, 100);
}

var newMeter = new powerMeter();

// Reference for meter css:
// https://css-tricks.com/html5-meter-element/
