import React from "react";

/**
 * 2 component : class / function 
 * JSX
 */

class MyComponent extends React.Component{

    state = {
        name: "nguyen cuong",
        channel: "hoi dan IT"
    }

    handleOnChangeName = (event) => {
       this.setState({name:event.target.value})
    };

    render(){
        return(
            <>
                <div className="first"> 
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
                    hello my component, my name is {this.state.name};
                </div>

                <div className="second">
                    my youtube channel: {this.state.channel}
                </div>
            </>
        )
    }

}

export default MyComponent;