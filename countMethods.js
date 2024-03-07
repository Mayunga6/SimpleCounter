// Select increment and decrement buttons
const incrementCount = document.getElementById("increase");
const decrementCount = document.getElementById("decrease");
const zero_reset = document.getElementById("reset_count");

// Select total count
const totalCount = document.getElementById("totalCount");

// Variable to track count
var count = 0;
// Display initial count value
totalCount.innerHTML = count;

const handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
};

const handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
};
const handleReset = () => {
    count = 0;
    totalCount.innerHTML = count;
}

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
zero_reset.addEventListener("click", handleReset);