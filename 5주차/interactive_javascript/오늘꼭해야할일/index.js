const toDoList = document.querySelector("#to-do-list");

function addNewTodo(text) {
  const li = document.createElement("li");
  li.textContent = text;
  toDoList.append(li);
}

// 테스트 코드
addNewTodo("코드잇 과제 제출하기");
addNewTodo("아르바이트 일정 확인하기");
addNewTodo("일찍 잠들기");
