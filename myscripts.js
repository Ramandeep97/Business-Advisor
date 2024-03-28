// Counter for 82%
var counter1 = document.getElementById("counter1");
var target1 = 82;
var current1 = 0;

function updateCounter1() {
  if (current1 < target1) {
    current1++;
    counter1.textContent = current1;
    setTimeout(updateCounter1, 20); // Adjust the speed of counting here (in milliseconds)
  }
}

updateCounter1();

// Counter for 100+
var counter2 = document.getElementById("counter2");
var target2 = 100;
var current2 = 0;

function updateCounter2() {
  if (current2 < target2) {
    current2++;
    counter2.textContent = current2;
    setTimeout(updateCounter2, 20); // Adjust the speed of counting here (in milliseconds)
  }
}

updateCounter2();
