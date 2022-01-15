import React, { useState, useEffect } from 'react'
import GalleryService from '../../../services/GalleryService';
import ErrorBox from '../../utils/ErrorBox';
import PageLoader from '../../utils/PageLoader';
import "./Gallery.css";

const Gallary = () => {
  const [loaded, setLoaded] = useState(false);
  const [galleryData, setGalleryData] = useState([]);
  const [error, setError] = useState(false)

  const loadGalleryData = () => {
    setLoaded(false);
    GalleryService.loadGallery()
    .then(response => {
      setGalleryData(response);
      setLoaded(true)
    })
    .catch(error => {
      setError(true);
      setLoaded(true);
    });
  }

  useEffect(() => {
    loadGalleryData();
  }, [])

  if(!loaded) {
    return <PageLoader />
  } else {
    if(error) {
      return <ErrorBox />
    } else {
      return (
        <div className='container'>
          <div className="gallery-heading mt-5 section-row">
            <h3 className="fs-5">
              <span>Image</span> Gallery
            </h3>
            <div className="line-bottom"></div>
          </div>

          <div className='row mb-5'>
            {galleryData.map(category => (
              <div key={category.id} className='col-6 col-md-4 col-lg-2 mt-3'>
                <a className='galleryPage-galleryItem' href={"#/gallery/item/"+category.slug}>
                  <img src={process.env.REACT_APP_APPURL + "images/spcgallery.png"} alt="Gallery catagory" />
                  <span className='d-block text-center mt-2 text-dark'>{category.name}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )
    }
  }
}

export default Gallary
