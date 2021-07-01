// const input = require('./input.json');

const bmiCalc = (input) => {
    // let start = Date.now();
    let overweightCount = 0;

    input.map((_element, index) => {
        let _b = bmiHelper(+(Math.round(_element['WeightKg'] / +(Math.round(Math.pow((_element['HeightCm'] / 100), 2) + "e+2") + "e-2") + "e+2") + "e-2"));
        let op = { ..._element, ..._b };
        input[index] = op;
        if (_b['BMICategory'] === 'Overweight') overweightCount++;
    });

    return {
        overweightCount: overweightCount,
        data: input
    }
}

const bmiHelper = (ip) => {
    if (ip < 18.4) return { 'BMI': ip, 'BMICategory': 'Underweight', 'HealthRisk': 'Malnutrition risk' };
    else if (ip >= 18.5 && ip <= 24.9) return { 'BMI': ip, 'BMICategory': 'Normal weight', 'HealthRisk': 'Low risk' };
    else if (ip >= 25 && ip <= 29.9) return { 'BMI': ip, 'BMICategory': 'Overweight', 'HealthRisk': 'Enhanced risk' };
    else if (ip >= 30 && ip <= 34.9) return { 'BMI': ip, 'BMICategory': 'Moderately obese', 'HealthRisk': 'Medium risk' };
    else if (ip >= 35 && ip <= 39.9) return { 'BMI': ip, 'BMICategory': 'Severely obese', 'HealthRisk': 'High risk' };
    else if (ip >= 40) return { 'BMI': ip, 'BMICategory': 'Very severely obese', 'HealthRisk': 'Very high risk' };
}

// bmiCalc(input);

module.exports = {
    bmiCalc: bmiCalc
}