const energySource = document.getElementById("energySource");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const unit = document.getElementById("unit");

const emissionFactors = {
    coal: {
        factor: 2.42,
        unit: "kg"
    },

    naturalGas: {
        factor: 2.75,
        unit: "m³"
    }
};

function calculateEmissions() {

    const selectedSource = energySource.value;
    const amountUsed = Number(amount.value);

    const sourceData = emissionFactors[selectedSource];

    unit.textContent = sourceData.unit;

    if (amount.value === "" || amountUsed < 0) {
        result.textContent = "Enter a valid amount.";
        return;
    }

    if (amountUsed === 0) {
        result.textContent = "0.00 kg CO₂";
        return;
    }

    const emissions = amountUsed * sourceData.factor;

    result.textContent =
        emissions.toFixed(2) + " kg CO₂";
}

energySource.addEventListener("change", calculateEmissions);

amount.addEventListener("input", calculateEmissions);
