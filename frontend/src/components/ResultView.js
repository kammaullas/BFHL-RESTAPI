import React from "react";

const ResultView = ({ data }) => {
    return (
        <div>
            <h3>Result</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ResultView;