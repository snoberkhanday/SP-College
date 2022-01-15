import {
  faSearchPlus,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./Gallery.css"
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import GalleryService from '../../../services/GalleryService';
import ErrorBox from '../../utils/ErrorBox';
import PageLoader from '../../utils/PageLoader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GalleryContent = () => {

  let { slug } = useParams();
  const [galleryContent, setGalleryContent] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [activeImagePath, setActiveImagePath] = useState("");
  const [activeImageCaption, setActiveImageCaption] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const getCurrentImage = (path, caption) => {
    setActiveImagePath(path);
    setActiveImageCaption(caption);
    setIsPreviewOpen(true);
  }

  const handleClose = () => {
    setIsPreviewOpen(false);
  }

  const handleClosePreview = (event) => {
    if(event.target.id === "previewImage") {setIsPreviewOpen(false);}
  }

  const loadGalleryContent = () => {
    setLoaded(false);
    GalleryService.loadGalleryItemContent(slug)
    .then(response => {
      setGalleryContent(response);
      setLoaded(true);
    })
    .catch(error => {
      setError(error);
      setLoaded(true);
    })
  }

  useEffect(() => {
    loadGalleryContent();
  }, [slug])

  if(!loaded) {
    return <PageLoader />
  } else {
    if(error) {
      return <ErrorBox text="Failed to load data." />
    } else {
      return (
        <>
        <div className='container my-3'>
          <div className='galleryContent-gallery'>
          {galleryContent.map(galleryItem => (
              <div key={galleryItem.id} className='galleryContent-imageWrapper' onClick={() => {getCurrentImage(galleryItem.path, galleryItem.caption)}}>
                <img className='galleryContent-image' src={galleryItem.path} alt={galleryItem.caption} />
                <div className='galleryContent-image-overlay'>
                  <span className='zoom-icon'><FontAwesomeIcon icon={faSearchPlus} /></span>
                </div>
              </div>
          ))}
          </div>
        </div>

        {isPreviewOpen && 
        <div id="previewImage" className='modal-overlay' onClick={handleClosePreview}>
          <div className='modal-body container'>
            <span onClick={handleClose} className='modal-close'><FontAwesomeIcon icon={faTimes} /></span>
            <figure>
              <img className="active-image" src={activeImagePath} alt={activeImageCaption} />
              <figcaption className="image-caption">
              {activeImageCaption}
              </figcaption>
            </figure>
          </div>
        </div> }
        </>
      )
    }
  }
}

export default GalleryContent;