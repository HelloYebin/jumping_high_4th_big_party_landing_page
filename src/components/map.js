import React, { useEffect } from "react";
const { kakao } = window;

export default function Map() {
  useEffect(() => {
    let mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new kakao.maps.Map(mapContainer, mapOption);
  }, []);

  return (
    <div>
      <div>
        <div id="map" style={{ width: "500px", height: "400px" }}></div>
      </div>
    </div>
  );
}
