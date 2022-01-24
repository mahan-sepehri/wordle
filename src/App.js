import React, { useState } from "react";

import Row from "./components/Row";

const App = () => {
  const [activeRow, setActiveRow] = useState(1);
  return (
    <div>
      <Row
        active={activeRow === 1 ? true : false}
        setActiveRow={setActiveRow}
      />
      <Row
        active={activeRow === 2 ? true : false}
        setActiveRow={setActiveRow}
      />
      <Row
        active={activeRow === 3 ? true : false}
        setActiveRow={setActiveRow}
      />
      <Row
        active={activeRow === 4 ? true : false}
        setActiveRow={setActiveRow}
      />
    </div>
  );
};

export default App;
