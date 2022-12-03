import React, { useContext } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import { ProductContext } from '../contexts/product.context';

const data = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            size: '',
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            size: '',
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            size: '',
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

const Directory = () => {
    const {products} = useContext(ProductContext);
    return (
        <div className='directory-menu'>
        {
            !(Object.keys(products).length === 0 && products.constructor === Object) &&
            Object.entries(products).map((item) => {
                const category = item[0];
                const _products = item[1];
                return <MenuItem key={category} title={category} imageUrl={_products[0].imageUrl} />
            })
        }
        </div>
    )
}

// class Directory extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             sections: [
//                 {
//                     title: 'hats',
//                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                     id: 1,
//                     size: '',
//                     linkUrl: 'shop/hats'
//                 },
//                 {
//                     title: 'jackets',
//                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                     id: 2,
//                     size: '',
//                     linkUrl: 'shop/jackets'
//                 },
//                 {
//                     title: 'sneakers',
//                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                     id: 3,
//                     size: '',
//                     linkUrl: 'shop/sneakers'
//                 },
//                 {
//                     title: 'womens',
//                     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                     size: 'large',
//                     id: 4,
//                     linkUrl: 'shop/womens'
//                 },
//                 {
//                     title: 'mens',
//                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                     size: 'large',
//                     id: 5,
//                     linkUrl: 'shop/mens'
//                 }
//             ]
//         }
//     }

//     render() {
//         return (
//             <div className='directory-menu'>
//                 {                    
//                     this.state.sections.map(({title, imageUrl, id, size}) => {
//                         return (
//                             <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
//                         )
//                     })
//                 }
//             </div>
//         );
//     }
// }

export default Directory;