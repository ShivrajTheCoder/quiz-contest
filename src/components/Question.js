import React,{useState} from 'react'
// import PropTypes from 'prop-types'
let s=0;
function Question(props) {
    let q = props;
    const {scoreKeeper}=props;

    const diableBtns=(buttons)=>{
        buttons.forEach(button=>{
            button.disabled=true;
        })
    }


    const calculateScore=(evt)=>{
        let ide="#"+evt.target.id;
        let btns=document.querySelectorAll(ide);
        
        diableBtns(btns);
        s++;
        scoreKeeper(s);
    }

    const wrongAnswer=(evt)=>{
        let ide="#"+evt.target.id;
        let btns=document.querySelectorAll(ide);
        diableBtns(btns);
    }
    
    let options = [];
    options.push(<button onClick={calculateScore} key={q.cans} id={q.cans} type='button' className='btn btn-primary mx-3 my-2 opt'>{q.cans}</button>)
    return (
        <div className='container my-3 col-sm-8'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{q.question}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{q.category}</h6>
                    {q.inans.map((ele) => {
                        options.push(<button onClick={wrongAnswer} key={ele} type='button' className="btn btn-warning mx-3 my-2" id={q.cans} >{ele}</button>)
                    })}
                    {options.sort(() => Math.random() - 0.5)}
                    
                </div>
            </div>
        </div>
    )
}

// Question.propTypes = {

// }
export const iscore=s;
export default Question


