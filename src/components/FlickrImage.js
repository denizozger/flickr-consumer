import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import $ from 'jquery'; 
import { replaceSpacesWithCommas, truncate } from '../utils'

class FlickrImage extends Component {

	setItemDescriptionText(item) {
    // if there are 5 elements in description HTML, last element is always the actual text
    if ($(item.description).length === 5) {
      item.descriptionText = $(item.description).last().text();
    }
    return item;
	}

	setItemTag(item) {
    if (item.tags) {
      item.tagsText = replaceSpacesWithCommas(item.tags);
    }
    return item;
	}

	truncateLongFields(item) {
		item.title = truncate(item.title);
		item.tags = truncate(item.tags);
		return item;
	}

	render() {
		let item = this.props.item;
		item = this.setItemDescriptionText(item);
		item = this.setItemTag(item);
		item = this.truncateLongFields(item);

		return (
			<Thumbnail src={item.media.m} alt="242x200">
        <h3>
        	<a href={item.link}><span>{item.title}</span></a> by 
        	<a href={`https://www.flickr.com/photos/${item.author_id}/`}>{item.author}</a>
      	</h3>
        <p>{item.descriptionText}</p>
        <p>{item.tagsText ? 'Tags: ' + item.tagsText : ''}</p>
      </Thumbnail>
		)
	}  

}

export default FlickrImage;
