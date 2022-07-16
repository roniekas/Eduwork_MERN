import React from "react";

class List extends React.Component{
    state = {
        users: ['1','2','3','4','5','6','7','8']
    }
    render(){
        return(
            <div>
                <ul>
                {
                    this.state.users.map((user, i) => <li key={i}>{user}</li>)
                }
                </ul>
            </div>
        )
    }
}

export default List;