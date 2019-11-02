import React from 'react';
class List extends React.Component {
    markComplete = e => {
        e.target.style.textDecoration = "line-through";
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i.id} className="list-group-item">
                                    <span onClick={this.markComplete}>{i.name}</span>
                                    <span className="float-right" onClick={this.props.handleDelete.bind(this, i.id)}>Delete
                                    </span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>);
    }
};
export default List;