import { useState } from "react";

function UserCard() {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);
  const [school, setSchool] = useState("SKKU");

  return (
    <div>
      <h1>이름: {name}</h1>
      <h2>나이: {age}</h2>
      <h3>학교: {school}</h3>
      <button
        onClick={() => {
          setName("홍길순");
          setAge("22");
          setSchool("SNU");
        }}
      >
        사람 변경
      </button>
    </div>
  );
}

export default UserCard;
