import React from "react";
import QuoteCard from "./QuoteCard";
import { useSelector } from "react-redux";

function Quotes() {

  const quotes = useSelector(state => state.quotes)

  const renderQuotes = quotes.map( q => {
    return <QuoteCard key={q.id} props={q}/>
  })

  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {renderQuotes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
