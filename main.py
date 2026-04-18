import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")

nuclear_factor = 12
coal_factor = 820

total_energy = data["energy_MWh"].sum()

nuclear_emissions = total_energy * nuclear_factor
coal_emissions = total_energy * coal_factor

print("Total Energy (MWh) :", total_energy)
print("Nuclear CO2 Emissions (kg) :", nuclear_emissions)
print("Coal CO2 Emissions (kg) :", coal_emissions)
print("CO2 Saved (kg) :", coal_emissions - nuclear_emissions)

labels = ["Nuclear", "Coal"]
emissions = [nuclear_emissions, coal_emissions]

plt.bar(labels, emissions)
plt.ylabel("CO2 Emissions (kg)")
plt.title("Weekly CO2 Emissions Comparison")
plt.show()
