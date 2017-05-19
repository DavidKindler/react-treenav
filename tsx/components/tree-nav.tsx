import React, { Component } from 'react';

interface MyProps {data: any; }
interface MyState {data: any; }

export default class TreeNav extends Component < MyProps, MyState > {

  constructor(props) {
    super(props)
    this.state = {
      data: props.data
    };
  }

  componentDidMount(props){
      this.setState(function () {
        return {
            data: this.props.data
        }
        });
    }


  mapStructure(nodes) {
     let self = this;
      function getChild(node){
        if (node.children.length > 0 ) { 
          return (
            <ul>
              {self.mapStructure(node.children)}
            </ul>
          )
        } else {
          return node.data
        }
      }
      return nodes.map(node => {        
        return ( 
         <li key={node.attr.id} className="list-anchor">
          {node.data}
          {getChild(node)} 
         </li>
        );
      })
  }


  render() {
    return ( 
      <ul className="treeview">
        {this.mapStructure(this.state.data)}
      </ul>
    );
  }
}