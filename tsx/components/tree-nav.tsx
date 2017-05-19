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
  
  handleClick(e) {
    if ( !e.target.className.includes('list-anchor') ) return;
    if ( e.target.className.includes('contracted') ) {
      e.target.className = 'list-anchor expanded'
    } else {
      e.target.className = 'list-anchor contracted'
    }

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
        }
      }
      return nodes.map(node => {        
        return ( 
         <li key={node.attr.id} className={node.children.length > 0 ? 'list-anchor contracted' : 'no-children'} onClick={(e) => {
           e.stopPropagation();
           this.handleClick(e);
         }}>
          <span className={node.children.length > 0 ? 'hit-area' : ''} />
          <a href={node.attr.webpageUrl}> {node.data} </a>
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