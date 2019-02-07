import React, { PureComponent } from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent {

    // Inicializar una variable de estado con es7.
    state = {
        author: this.props.author
    }   
    

    handleClick = (event) => {
        this.props.openModal(this.props.id)
    }


    render() {
        const { cover, title, author } = this.props

        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image"
                        src={cover}
                        alt=""
                        width={240}
                        height={160}
                    />
                    <h3 className="Media-title">{title}</h3>
                    <p className="Media-author">{author}</p>
                </div>
            </div>            
        );
    }
}


Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video','audio'])
}

export default Media