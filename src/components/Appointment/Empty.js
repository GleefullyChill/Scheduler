


import React from "react";

import "./styles.scss";

const Empty = function(props) {

  const { onAdd } = props;
  
  return (
    <main className="appointment__add" data-testid="add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  );
};

export default Empty;