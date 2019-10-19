import React, { Component } from 'react';
import './Candidate.css';

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className="divCandidate">
                <div className="divVote">
                    <div className="divVoteValue">{this.props.votes}</div>
                    <button className="btnVote" onClick={this.handleVote}>
                        Vote
                    </button>
                </div>
                <div className="divCandidatePhoto">
                    <img src={this.props.photo}/>
                </div>
                <div className="divCandidateData">
                    <a href={this.props.url} className="divCandidateName">
                        {this.props.name}
                    </a>
                    <div className="divCandidateDetail">
                        {this.props.detail}
                    </div>
                </div>
            </div>
        );
    }
}

export default Candidate;