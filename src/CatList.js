// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render (){
        const {catPics} = this.props
        const catPicList = catPics.map(catPic =>{
         
           return <img src = {catPic.url} key = {catPic.id} alt = "Pretty Cat"></img>
        })

        return(
            <div>
                {catPicList}

            </div>
        )
    }


}

export default CatList