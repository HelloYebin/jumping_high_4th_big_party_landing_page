import React, { useEffect } from "react";
import "../styles/map.css";
const { kakao } = window;

export default function Map() {
  useEffect(() => {
    let mapContainer = document.getElementById("map");

    let mapOption = {
      center: new kakao.maps.LatLng(36.3676, 127.388), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    let map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    let markerPosition = new kakao.maps.LatLng(36.3676, 127.388);

    // 마커를 생성합니다
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    let content =
      '<div class="customoverlay">' +
      '  <a href="https://map.kakao.com/link/map/14543526" target="_blank">' +
      '    <span class="title">엑스포시민광장</span>' +
      "  </a>" +
      "</div>";

    // 커스텀 오버레이가 표시될 위치입니다
    let position = new kakao.maps.LatLng(36.3676, 127.388);

    // 커스텀 오버레이를 생성합니다
    let customOverlay = new kakao.maps.CustomOverlay({
      map: map,
      position: position,
      content: content,
      yAnchor: 1,
    });

    customOverlay.setMap(map);
  }, []);

  return (
    <div>
      <div>
        <div id="map"></div>
      </div>
    </div>
  );
}
