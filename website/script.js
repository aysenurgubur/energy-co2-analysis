const energySource = document.getElementById("energySource");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const unit = document.getElementById("unit");

const emissionFactors = {
    coal: 2.42,
    naturalGas: 2.75
};

function calculateEmissions() {

    const selectedSource = energySource.value;
    const amountUsed = Number(amount.value);

    if (amountUsed <= 0 || isNaN(amountUsed)) {
        result.textContent = "Enter a valid amount.";
        return;
    }

    const emissionFactor = emissionFactors[selectedSource];

    const emissions = amountUsed * emissionFactor;

    result.textContent =
        emissions.toFixed(2) + " kg CO₂";
}

energySource.addEventListener("change", calculateEmissions);

amount.addEventListener("input", calculateEmissions);
