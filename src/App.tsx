import React from "react";
import YoutubeForm from "./components/YoutubeForm";
import TestValdation from "./components/TestValdation";

const App: React.FC = () => {
  return (
    <main>
      <YoutubeForm />

      <br />
      <h2>Async Validation without zod</h2>
      <TestValdation />
      <p style={{ marginBottom: "5rem" }}></p>
    </main>
  );
};

export default App;
