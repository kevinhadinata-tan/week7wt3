import React, { Component } from 'react';
import Candidate from './Candidate';

class Election extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: []
        }

        // gunakan fungsi bind(this)
        // agar component dapat mengakses fungsi handleCandidateVote
        this.handleCandidateVote = this.handleCandidateVote.bind(this);
    }

    componentDidMount() {
        this.setState({ candidates: candidateData });
    }

    handleCandidateVote(candidateId) {
        // ingatlah untuk copy data state ke sebuah variabel sebelum diubah
        var copyOfCandidate = this.state.candidates.slice();

        // logic handler dimasukkan dalam bagian ini
        for (var i = 0; i < copyOfCandidate.length; i++) {
            if (copyOfCandidate[i].id === candidateId) {
                copyOfCandidate[i].votes += 1;
            }
        }
        
        // update state dengan memanggil fungsi this.setState
        this.setState({
            candidates: copyOfCandidate
        });
    }

    render() {
        const candidateComponents = this.state.candidates.map(candidate => (
            <Candidate
                key={'candidate-' + candidate.id}
                id={candidate.id}
                name={candidate.name}
                detail={candidate.detail}
                url={candidate.url}
                votes={candidate.votes}
                photo={candidate.photoUrl}
                onVote={this.handleCandidateVote}
            />
        ));

        return (
            <React.Fragment>
                <h1 style={{ padding: 10 }}>Voting</h1>
                <div>
                    {candidateComponents}
                </div>
            </React.Fragment>
        );
    }
}

const candidateData = [
{
    id: 1,
    name: 'Alpha',
    detail: 'Tomorrow is looking great.',
    url: '#',
    votes: 0,
    photoUrl: 'photo/student-1.png'
},
{
    id: 2,
    name: 'Beta',
    detail: 'New leadership for a brighter future.',
    url: '#',
    votes: 0,
    photoUrl: 'photo/student-2.png'
},
{
    id: 3,
    name: 'Gamma',
    detail: 'The right experience, the right choice.',
    url: '#',
    votes: 0,
    photoUrl: 'photo/student-3.png'
}
];

export default Election;