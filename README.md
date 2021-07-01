# code-20200701-nirmal
BMI Calculator

This app calculates the BMI and returns overweight count with the given payload 

Steps to run:
1. Clone
2. Install dependencies - npm i
3. Run app - npm run start
4. To run test suite - npm run test

API Spec:
URL: http://localhost:5000/bmi
Method: POST
Request:
[
    {
      "Gender": "Female",
      "HeightCm": 150,
      "WeightKg": 70
    },
    {
      "Gender": "Female",
      "HeightCm": 167,
      "WeightKg": 82
    }
]

Response:
{
  "overweightCount": 1,
  "data": [
    {
      "Gender": "Female",
      "HeightCm": 150,
      "WeightKg": 70,
      "BMI": 31.11,
      "BMICategory": "Moderately obese",
      "HealthRisk": "Medium risk"
    },
    {
      "Gender": "Female",
      "HeightCm": 167,
      "WeightKg": 82,
      "BMI": 29.39,
      "BMICategory": "Overweight",
      "HealthRisk": "Enhanced risk"
    }
  ]
}

