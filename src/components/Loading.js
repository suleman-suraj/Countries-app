import React from "react";
import { MagicSpinner } from "react-spinners-kit";
function Loading() {
  return (
    <section className="loading">
      <MagicSpinner size={100} color="green" />
    </section>
  );
}

export default Loading;
