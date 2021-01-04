import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1552060155-4eac706a5515?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=889&q=80',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
    }
  }
  render(){
    return(
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id, size}) => (
            <MenuItem title={title} id={id} imageUrl={imageUrl} size={size}/>
          ))
        }
      </div>
    )
  }
}

export default Directory;