import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    //const BASE_URL = "http://localhost:4000"
    const BASE_URL = "https://kanbas-node-server-app-dt3m.onrender.com"
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${BASE_URL}/a5/welcome`}
             className="list-group-item">
            Welcome
          </a>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
        </div>
        {/* <SimpleAPIExamples /> */}
      </div>
    );
  }
  export default Assignment5;