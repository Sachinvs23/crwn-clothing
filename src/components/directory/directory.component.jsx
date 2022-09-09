import React from "react";
import './directory.style.scss';
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
    constructor() {
        super();


        this.state = {
            sections: [{
                title: 'hats',
                imageUrl: 'https://manofmany.com/wp-content/uploads/2017/10/Guide-to-Wearing-Mens-Hats-With-Suits-20.jpg',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://kingstonhsc.ca/sites/default/files/styles/featured_news/public/images/news/coat-drive-fotolia_137307280_m_0.jpg?itok=xBEn-be0',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'https://diyprojects.com/wp-content/uploads/2020/05/sneakers-mounted-in-rack-diy-shoe-rack-us-featured.jpg',
                id: 3
            },
            {
                title:  'womens',
                imageUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/03/27/11/woman-clothing-happy.jpg?quality=75&width=990&auto=webp&crop=982:726,smart',
                size: 'large',
                id: 4
            },
            {
                title : 'mens',
                imageUrl: 'https://www.apetogentleman.com/wp-content/uploads/2022/03/1960s-mens-fashion.jpg',
                size: 'large',
                id: 5
            }
          ]
        }
    }


    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl ={imageUrl} size={size} />
                    ))
                }

            </div>
        )
    }
}

export default Directory;