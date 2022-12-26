import { useState } from "react";

function UserCardSquashed() {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 20,
    school: "SKKU",
  });

  return (
    <div>
      <h1>이름: {user.name}</h1>
      <h2>나이: {user.age}</h2>
      <h3>학교: {user.school}</h3>
      <button
        onClick={() => {
          setUser({
            name: "홍길순",
            age: 22,
            school: "SNU",
          });
        }}
      >
        사람 변경
      </button>
    </div>
  );
}

export default UserCardSquashed;
