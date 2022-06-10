import React from 'react'

import { Select, SIZE } from "baseui/select";

function Dropdown() {
  const [value, setValue] = React.useState([
    { label: "Aqua", id: "#00FFFF" }
  ]);
  return (
      <div className="w-25 h-25">

          <Select
            size={SIZE.compact}
            options={[
              { label: "AliceBlue", id: "#F0F8FF" },
              { label: "AntiqueWhite", id: "#FAEBD7" },
              { label: "Aqua", id: "#00FFFF" },
              { label: "Aquamarine", id: "#7FFFD4" },
              { label: "Azure", id: "#F0FFFF" },
              { label: "Beige", id: "#F5F5DC" }
            ]}
            value={value}
            placeholder="Select color"
            onChange={params => setValue(params.value)}
          />

      </div>
      
  );
}

export default Dropdown