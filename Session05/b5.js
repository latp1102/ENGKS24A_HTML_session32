function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Vui lòng nhập nhiệm vụ!");
    return;
  }

  const li = document.createElement("li");
  li.innerText = taskText;

  const delBtn = document.createElement("button");
  delBtn.innerText = "X";
  delBtn.className = "delete-btn";

  delBtn.onclick = function () {
    if (confirm("Bạn có chắc muốn xóa nhiệm vụ này không?")) {
      li.remove();
    }
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
