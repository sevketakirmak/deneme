import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isDatePickerActive, setDatePickerActive] = useState(false);

  const handleFocus = () => {
    setDatePickerActive(true);
  };

  const handleBlur = () => {
    setDatePickerActive(false);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <input
        placeholder="Date"
        className="textbox-n"
        type={isDatePickerActive ? "date" : "text"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        id="date"
      />
    </main>
  );
}
