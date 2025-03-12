// import React from "react";

// interface CheckboxProps {
//   value: string;
//   className?: string; // Optional className
// }

// function Checkbox({ value, className }: CheckboxProps) {
//   const handleCheckboxClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     const checkbox = e.currentTarget.querySelector(
//       'input[type="checkbox"]'
//     ) as HTMLInputElement;

//     if (checkbox) {
//       checkbox.checked = !checkbox.checked;
//       if (checkbox.checked) {
//         (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FD853A";
//       } else {
//         (e.currentTarget as HTMLDivElement).style.backgroundColor =
//           "transparent";
//       }
//     }
//   };

//   return (
//     <div
//       onClick={handleCheckboxClick}
//       className={`border border-primary animation rounded-md p-4 ${className}`}
//     >
//       <input
//         type="checkbox"
//         className="w-0 h-0 invisible"
//         value={value}
//         name="interest"
//         required
//       />
//       {value}
//     </div>
//   );
// }

// export default Checkbox;
import React from "react";

interface CheckboxProps {
  value: string;
  className?: string; // Optional className
}

function Checkbox({ value, className }: CheckboxProps) {
  const handleCheckboxClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const checkbox = e.currentTarget.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;

    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      if (checkbox.checked) {
        (e.currentTarget as HTMLDivElement).style.backgroundColor = "#FD853A";
      } else {
        (e.currentTarget as HTMLDivElement).style.backgroundColor =
          "transparent";
      }
    }
  };

  return (
    <div
      onClick={handleCheckboxClick}
      className={`border border-primary animation rounded-md p-4 ${className}`}
    >
      {/* Position the input off-screen but still accessible */}
      <input
        type="checkbox"
        className="absolute opacity-0 h-0 w-0"
        value={value}
        name="interest"
      />
      {value}
    </div>
  );
}

export default Checkbox;
