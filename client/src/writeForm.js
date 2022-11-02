import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "../node_modules/react-quill/dist/quill.snow.css";
import "./writeForm.css";
import ImageResize from "quill-image-resize";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
Quill.register("modules/ImageResize", ImageResize);

export default function WriteForm() {
  const [inputTitle, setInputTitle] = useState("");
  const [textValue, setTextValue] = useState("");
  const [enters, setEnters] = useState([]);
  const navigate = useNavigate();

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };

  const handleBody = (e) => {
    setTextValue(e);
  };

  //글 등록하기
  const register = (e) => {
    const password = 1234;
    const que = prompt("비밀번호를 입력해주세요");
    if (Number(que) === password) {
      e.preventDefault();
      Axios.post("http://localhost:8000/api/insert", {
        title: inputTitle,
        content: textValue,
      }).then(() => {
        setTextValue("");
        setInputTitle("");
        alert("등록 완료!");
        navigate("/news/notice/admin");
      });
    } else {
      e.preventDefault();
      alert("비밀번호가 틀렸습니다.");
    }
  };

  WriteForm.modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
    ],

    ImageResize: {
      parchment: Quill.import("parchment"),
    },
  };

  WriteForm.formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
    "font",
    "size",
    "code-block",
  ];

  return (
    <div className="App">
      <form className="board" onSubmit={register}>
        <div className="boardTop">
          <select style={{ height: "45px" }}>
            <option>공지사항</option>
            <option>보도자료</option>
            <option>점핑자료</option>
          </select>
          <input
            type="text"
            className="writeTitle"
            name="title"
            onChange={handleTitle}
            value={inputTitle}
            required
          ></input>
        </div>
        <ReactQuill
          placeholder="Write somthing amazing"
          modules={WriteForm.modules}
          formats={WriteForm.formats}
          onChange={handleBody}
          value={textValue}
        />
        <input type="submit"></input>
      </form>
      <div className="boardContent">
        {enters.map((con, idx) => (
          <div className="content" key={idx}>
            <h2 className="title">{con.title}</h2>
            <span
              className="contentBody"
              dangerouslySetInnerHTML={{ __html: con.body }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
