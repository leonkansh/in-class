// Main.js file
'use strict';

// Data: a group of people
const PEOPLELIST = [
    { name: "Jacob", interest: "Board Games", location: "Seattle" },
    { name: "Vishank", interest: "Music", location: "Seattle" }
];

// Class for an individual person
class Person extends React.Component {
    render() {
        return (
            <div class='person'>
                <p>Hello, my name is {this.props.name} and I am interested in {this.props.interest}.</p>
                <p>I'm located in {this.props.location}!</p>
            </div>
        );
    }
}
// Class to represent a group of people
class People extends React.Component {
    render() {
        return (this.props.group.map((d) => {
            return <Person key={d.name} name={d.name} name={d.name} interest={d.interest} location={d.location}/>
        }))
    }
}

// Render your component in the `main` section
ReactDOM.render(
    <People group={PEOPLELIST} />, // thing we want to render for
    document.querySelector('main') // place we want to render at
)