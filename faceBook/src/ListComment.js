
import React from 'react';

class ListComment extends React.Component {

render() {
  return (<div>
    <ul>
      {
        this.props.commentlist.map((i) => {
       return <li key={i.id} className="list-group-item"><h3></h3><span>{i}</span></li>
        })
      }
</ul>
  </div>);
};
    }
export default ListComment;