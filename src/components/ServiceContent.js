import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

const ServiceContent = () => (
  <div className="service-content">
    <div className="container">
    <h1 className="service-content__title border-bottom">サービス内容</h1>
      <div className="service-content__content">
        <div className="row">

          <div className="service-content__box col-12 col-md-4">
            <h2>カットコース</h2>
            <p>通常のカットのみのコースです。<br/>所要時間：約１時間</p>
            <div className="sevice-content__price font-weight-bold text-muted">¥5,000-</div>
          </div>
          
          <div className="service-content__box col-12 col-md-4">
            <h2>パーマコース</h2>
            <p>カット＋パーマのコースです。<br/>所要時間：約1.5時間</p>
            <div className="sevice-content__price font-weight-bold text-muted">¥7,000-</div>
          </div>

          <div className="service-content__box col-12 col-md-4">
            <h2>カラーコース</h2>
            <p>カット＋カラーのコースです。<br/>所要時間：約2時間</p>
            <div className="sevice-content__price font-weight-bold text-muted">¥8,000-</div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
);

export default ServiceContent;