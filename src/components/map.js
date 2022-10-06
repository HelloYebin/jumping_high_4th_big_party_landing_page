import React, { useEffect } from "react";
import "../styles/map.css";
const { kakao } = window;

export default function Map() {
  useEffect(() => {
    let mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(37.5643, 126.8242), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(37.5643, 126.8242);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    let content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/26785200" target="_blank">' +
      '    <span class="title">점핑하이</span>' +
      "  </a>" +
      "</div>";

    // 커스텀 오버레이가 표시될 위치입니다
    let position = new kakao.maps.LatLng(37.5643, 126.8242);

    // 커스텀 오버레이를 생성합니다
    let customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });
  }, []);

  return (
    <div>
      <div>
        <div id="map" style={{ width: "450px", height: "400px" }}></div>
      </div>
    </div>
  );
}
