import { useNavigate } from "react-router-dom";
import Question from "../../components/test/question/questions";
import './test.css';

export default function Test() {
   const navigate = useNavigate();
   return (
      <div className="test">
         <div className="container">
            <div className="test_header">
               <h2 className="test_title title2">Тест</h2>
               <button className="test_button button" onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className='questions_box'>
               <Question />
            </div>
         </div>
      </div>
   );
}