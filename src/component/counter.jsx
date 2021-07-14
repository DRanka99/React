import React, { Component } from 'react';
class Counter extends Component {
    state={
        count:this.props.counter.value
        //tags:[]
    };
    handleIncrement=()=>{
        //console.log("increment clicked",this);
        //console.log(this.state.count);
        this.setState({count:this.state.count+1})
    }
    renderTags(){
        if(this.state.tags.length===0)
           return <p>ther are no render tags</p>;
        return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
    }
    render() {
        //console.log(this.props);
        return (
        <div>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">delete</button>
        </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //return this.state.count===0?"zero":"one";
        if(this.props.counter===0)
        {
            return "zero";
        }
        else
        {
            return this.props.counter.value;
        }
    }
}
 
export default Counter ;