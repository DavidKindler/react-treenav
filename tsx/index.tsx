import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TreeNav from './components/tree-nav';
import dataSource from './utils/data-source';


interface MyProps {}
interface MyState {
  treeData: any[]
}

const data = dataSource;

class Root extends Component<MyProps, MyState> {
   constructor(props){
    super(props);
     this.state = {
      treeData: data.children,
    };
   }
 
  render(){ 
    return (
        <div  id="master-container">
          <TreeNav data={this.state.treeData}  />
        </div>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector('div#root'));
