import React from "react";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteCard({props}) {
 

  const dispatch = useDispatch()

  function deleteQuote(){
    dispatch(removeQuote(props.id))
  }

  function upVote(){
    dispatch(upvoteQuote(props.id))
  }

  function downVote(){
    dispatch(downvoteQuote(props.id))
  }

  
  
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={upVote}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={downVote}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger" onClick={deleteQuote}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
