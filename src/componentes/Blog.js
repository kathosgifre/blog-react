import React from 'react';
import '../styles/blog.css';

class Blog extends React.Component {
	render() {
			return (
				<div className='contain-blog'>
					<img className='imagen-blog'
					src={require(`../imagenes/blog-${this.props.imagen}.jpg`)}
					alt={this.props.img} />
					<div className='contain-text-blog'>
						<p className='name-blog'><span>{this.props.name}</span> Nacido en {this.props.country}</p>
						<p className='position-blog'>{this.props.position} Creador de <span>{this.props.business}</span></p>
						<p className='text-blog'>{this.props.blog}</p>
						</div> 
				</div>
			);
	}
}

export default Blog;