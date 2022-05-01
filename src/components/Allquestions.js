import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Question, { iscore } from './Question';

export default class Allquestions extends Component {
    quest = [
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "Seoul is the capital of North Korea.",
            "correct_answer": "False",
            "incorrect_answers": [
                "True"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who is the main character of the game Half-Life: Opposing Force?",
            "correct_answer": "Adrian Shephard",
            "incorrect_answers": [
                "Gordon Freeman",
                "Alyx Vance",
                "Barney Calhoun"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the game Dark Souls, what is the name of the region you&#039;re in for the majority of the game?",
            "correct_answer": "Lordran",
            "incorrect_answers": [
                "Drangleic",
                "Oolacile",
                "Catarina"
            ]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who is the founder of &quot;The Lego Group&quot;?",
            "correct_answer": "Ole Kirk Christiansen",
            "incorrect_answers": [
                " Jens Niels Christiansen",
                "Kirstine Christiansen",
                " Gerhardt Kirk Christiansen"
            ]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "medium",
            "question": "What is the bloodiest event in United States history, in terms of casualties?",
            "correct_answer": "Battle of Antietam",
            "incorrect_answers": [
                "Pearl Harbor",
                "September 11th",
                "D-Day"
            ]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "hard",
            "question": "What is the second-largest city in Lithuania?",
            "correct_answer": "Kaunas",
            "incorrect_answers": [
                "Panevėžys",
                "Vilnius",
                "Klaipėda"
            ]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "What year was Super Mario Bros. released?",
            "correct_answer": "1985",
            "incorrect_answers": [
                "1983",
                "1987",
                "1986"
            ]
        },
        {
            "category": "Entertainment: Music",
            "type": "boolean",
            "difficulty": "easy",
            "question": "Scatman John&#039;s real name was John Paul Larkin.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which director directed the movie &quot;Pan&#039;s Labyrinth&quot;?",
            "correct_answer": "Guillermo Del Toro",
            "incorrect_answers": [
                "Alfonso Cuar&oacute;n",
                "Alejandro Gonz&aacute;lez I&ntilde;&aacute;rritu",
                " Alejandro Jodorowsky"
            ]
        },
        {
            "category": "Politics",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Between 1973 to 1990, what country was ruled by dictator Augusto Pinochet?",
            "correct_answer": "Chile",
            "incorrect_answers": [
                "Ethiopia",
                "Indonesia",
                "Nicaragua"
            ]
        }
    ]
    constructor() {
        super();
        this.state = {
            quest: this.quest,
            loading: false,
            score:0
        }
    }

    async componentDidMount(){
        let url="https://opentdb.com/api.php?amount=10"
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({quest: parsedData.results})
        console.log(parsedData);
    }
    scoreKeeper=(sc)=>{
        this.setState({"score":sc});
    }
    render() {
        return (
            <div>
                <button type="button" class="btn btn-light">Score:{this.state.score}</button>
                <div className="row">
                    {this.state.quest.map((q) => {
                        return <div key={q.question}> <Question key={q.question} question={q.question}
                            category={q.category} type={q.type} cans={q.correct_answer} inans={q.incorrect_answers} scoreKeeper={this.scoreKeeper}/>
                        </div>

                    })
                    }
                </div >
            </div>
        )
    }
}
