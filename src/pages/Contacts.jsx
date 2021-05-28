import {useHistory} from 'react-router-dom';

function Contacts(){
    const {goBack}=useHistory();
    return (<>
      <button className="btn" onClick={goBack}>Go Back</button>
    <h1>Contacts page</h1>
    <h5>Alexander Korobko</h5>
    <h6>e-mail: ol.korobkoo@gmail.com</h6>
  
    </>)
}

export default Contacts