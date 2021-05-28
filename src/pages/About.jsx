import {useHistory} from 'react-router-dom';

function About(){
    const {goBack}=useHistory();
  
    return (<>
      <button className="btn" onClick={goBack}>Go Back</button>
      <h1>About page</h1>
        <p>This is a SPA implemented with React.</p>
        <p>Here you can find some interesting recipes for you and your familly.</p>
       </>)
}

export default About