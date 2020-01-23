import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const ServiceContent = () => (
  <div className="service-content">
    <h2 className="service-content__title">サービス内容</h2>
    <div className="service-content__content">
      
      <div className="container">
        <div className="row">

          <div className="service-content__box col-12 col-md-4">
            <h2>カットコース</h2>
            <p>通常のカットのみのコースです。<br/>所要時間は約１時間です。</p>
            <div className="sevice-content__price">¥5,000-</div>
          </div>
          
          <div className="service-content__box col-12 col-md-4">
            <h2>パーマコース</h2>
            <p>カット＋パーマのコースです。<br/>所要時間は約1.5時間です。</p>
            <div className="sevice-content__price">¥7,000-</div>
          </div>

          <div className="service-content__box col-12 col-md-4">
            <h2>カラーコース</h2>
            <p>カット＋カラーのコースです。<br/>所要時間は約2時間です。</p>
            <div className="sevice-content__price">¥8,000-</div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
);

export default ServiceContent;