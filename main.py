import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")

nuclear_factor = 12
coal_factor = 820

total_energy = data["energy_MWh"].sum()

nuclear_emissions = total_energy * nuclear_factor
coal_emissions = total_energy * coal_factor
CO2_saved = coal_emissions - nuclear_emissions

print(f"Total Energy: {total_energy} (MWh)")
print(f"Nuclear CO2 Emissions: {nuclear_emissions} (kg)")
print(f"Coal CO2 Emissions: {coal_emissions} (kg)")
print(f"CO2 Saved: {CO2_saved} (kg)")

labels = ["Nuclear", "Coal"]
emissions = [nuclear_emissions, coal_emissions]

plt.bar(labels, emissions)
plt.ylabel("CO2 Emissions (kg)")
plt.title("Weekly CO2 Emissions Comparison")
plt.show()
