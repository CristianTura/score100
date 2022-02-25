import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";


interface IProgressBarProps {
  value: number;
  className: string;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({ value = 40, className=''}) => {
  return (
    <Box sx={{ width: "100%" }} color="black" >
      <Box sx={{ display: "flex", alignItems: "center" }} className={className}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" value={value} />
        </Box>
      </Box>
    </Box>
  );
};


