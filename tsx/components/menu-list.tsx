import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

interface MyProps {menuItems: any, selectPanel: any}
interface MyState {selectedMenu: string, menuItems: any}
interface SelectMenu {propTypes: any}

function SelectMenu (props){
    let menuItems = props.menuItems;
    let homeLink = null;
    if (props.selectedMenu !== '') {
      homeLink = <li key="home"><Link to="/" onClick={props.onSelect.bind(null,'')}>Home</Link></li>;
    }  else {
        homeLink = null
    }
    return (
        <div>
                {homeLink}
                {menuItems.map((menuItem)=> {
                    return (
                    <li key={menuItem.mlid} className={menuItem.title === props.selectedMenu? 'active' : null} >
                      <a onClick={props.onSelect.bind(null, menuItem.title) 
                      }>{menuItem.title}</a>
                       {/*<Link to={menuItem.path}  onClick={props.onSelect.bind(null, menuItem.title)}>*/}
                        {/*{menuItem.title}*/}
                        {/*</Link>*/}
                    </li>
                    )
                })}
        </div>
    )
}


class MenuList extends Component<MyProps, MyState> {
    constructor (props, state){
        super(props)
        this.state = {
            selectedMenu: '',
            menuItems: props.menuItems,
        };

        this.updateMenu = this.updateMenu.bind(this);
    }
    componentWillReceiveProps(props){
        this.setState(function () {
        return {
            menuItems : props.menuItems,
            selectPanel: props.selectPanel
        }
        });
    }
    updateMenu(menuItem) {
        // console.log (menuItem, this.props, this.state)
        this.props.selectPanel(menuItem)
        this.setState(function () {
        return {
            selectedMenu: menuItem,
            menuPanel: menuItem
        }
        });
    }
    
    render() {
        return (
            <ul className='menu-list'>
                <SelectMenu 
                    selectedMenu = {this.state.selectedMenu}
                    menuItems = {this.state.menuItems}  
                    onSelect={this.updateMenu}

                /> 
            </ul>
        );
    }
}

export default MenuList;