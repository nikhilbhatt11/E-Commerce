import React from "react";
import { GiSpinningBlades } from "react-icons/gi";

function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <GiSpinningBlades className="text-8xl text-violet-600 animate-spin" />
    </div>
  );
}
export default Loading;
