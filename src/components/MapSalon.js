import React from 'react';
import { GoogleApiWrapper, Map, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
  // 'display': 'inline-block',
  // width: '100%',
  // height: '50%',
  // 'position': 'relative',
  // top: '30rem'

};

class MapSalon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {name: "東京"},
    };
  };

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  
  render() {
    return (
      <div className="map_container">
        <div className="container">
          <h1 className="map_name border-bottom">アクセスマップ</h1>
          <div className="map">
            <Map
              style={mapStyles}
              google = { this.props.google }
              zoom = { 14 }
              center = {{ lat: 35.681236, lng: 139.767125 }}
              initialCenter = {{ lat: 35.681236, lng: 139.767125 }}
            >
              <Marker
                onClick={this.onMarkerClick}
                name={ "SALON STYLETTO" }
                title = { "現在地" }
                position = {{ lat: 35.681236, lng: 139.767125 }}
              />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </div>
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("")
})(MapSalon);


//最寄り駅からの道筋
//ピンに情報を表示
