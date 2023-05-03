import React, { useState } from "react";

function App() {
  // Define state variables for Sunita's health metrics
  const [age, setAge] = useState(65);
  const [weight, setWeight] = useState(60);
  const [height, setHeight] = useState(1.5);
  const [exercise, setExercise] = useState(false);
  const [meals, setMeals] = useState(0);
  const [water, setWater] = useState(0);

  // Define a function to calculate Sunita's body mass index (BMI)
  function calculateBMI() {
    let bmi = weight / (height ** 2);
    return bmi.toFixed(2); // round to 2 decimal places
  }

  // Define a function to check if Sunita has met her daily exercise goal
  function checkExerciseGoal() {
    if (exercise) {
      return <p>Great job, Sunita! You have met your daily exercise goal.</p>;
    } else {
      return <p>Remember to get some physical activity today, Sunita.</p>;
    }
  }

  // Define a function to check if Sunita has consumed enough water
  function checkWaterIntake() {
    if (water >= 2) { // recommended daily intake for adults
      return <p>Well done, Sunita! You have met your daily water intake goal.</p>;
    } else {
      return <p>Make sure to drink more water throughout the day, Sunita.</p>;
    }
  }

  // Define a function to remind Sunita to eat meals at regular intervals
  function remindMeals() {
    if (meals === 0) {
      return <p>It's important to have breakfast, Sunita. Don't skip your meals.</p>;
    } else if (meals === 1) {
      return <p>It's time for lunch, Sunita. Make sure to have a balanced meal.</p>;
    } else if (meals === 2) {
      return <p>Don't forget to have dinner, Sunita. Avoid eating too late at night.</p>;
    } else {
      return <p>You have had enough meals today, Sunita. Make sure to eat at regular intervals.</p>;
    }
  }

  // Render the component
  return (
    <div>
      <h1>Sunita's Health Metrics</h1>
      <p>Age: {age}</p>
      <p>Weight: {weight} kg</p>
      <p>Height: {height} m</p>
      <p>BMI: {calculateBMI()}</p>
      <p>Exercise: <input type="checkbox" checked={exercise} onChange={() => setExercise(!exercise)} /></p>
      {checkExerciseGoal()}
      <p>Meals: <input type="number" min="0" max="3" value={meals} onChange={(e) => setMeals(parseInt(e.target.value))} /></p>
      {remindMeals()}
      <p>Water Intake: <input type="number" min="0" value={water} onChange={(e) => setWater(parseInt(e.target.value))} /> L</p>
      {checkWaterIntake()}
    </div>
  );
}

export default App;


