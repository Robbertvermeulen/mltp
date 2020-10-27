import React from "react";

// Import components
import Contributor from "../components/Contributor";

const ContributorsPage = (props) => {
  return (
    <main className="app-main">
      <div className="container">
        <h1 className="mb-4">Contributors</h1>
        <div className="row">
          {props.contributors.map((contributor) => (
            <div className="col-md-4">
              <Contributor
                data={contributor}
                key={contributor.id}
              ></Contributor>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ContributorsPage;
