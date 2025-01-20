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

    handleClicKButton = () => {
        alert("Click me")
    }

    render(){
        console.log('>>>>> call render : ', this.state)
        return(
            <>
                <div className="first"> 
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}></input>
                    hello my component, my name is {this.state.name};
                </div>

                <div className="second">
                    my youtube channel: {this.state.channel}
                </div>

                <div className="third">

                    <button onClick={() => this.handleClicKButton()}> Click me</button>
                </div>

            </>
        )
    }

}

export default MyComponent;