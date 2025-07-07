import React, { useState } from "react";

const HealthTracker = () => {
  const [selectedDisease, setSelectedDisease] = useState("");

  const diseases = [
    "Gestational Diabetes",
    "Pregnancy-Induced Hypertension",
    "Asthma",
    "Congenital Heart Disease (Infants)",
    "Immune Deficiency",
    "Severe Anemia",
    "Severe Allergies",
  ];

  return (
    <div className="h-[calc(100vh-75px)] bg-gradient-to-br from-color-bg to-purple-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-4">
          Health Tracker for Mothers and Infants
        </h2>

        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          Select the chronic condition affecting the mother or infant to help us
          better track their health status. This includes common chronic
          illnesses during pregnancy and early infancy.
        </p>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="disease"
          >
            Select Disease
          </label>
          <select
            id="disease"
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
            className="text-black w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">-- Choose from the list --</option>
            {diseases.map((disease, idx) => (
              <option key={idx} value={disease}>
                {disease}
              </option>
            ))}
          </select>
        </div>

        {selectedDisease && (
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200 text-indigo-700">
            <strong>Selected Disease:</strong> {selectedDisease}
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthTracker;
