const todoObjectlist = [];
class Todo {
  constructor(item) {
    this.ulElement = item;
  }
  add(){
    const todoinput = document.querySelector("#myInput").value;
    if (todoinput == "") {
      alert("할 일을 입력하십시오.")
    }else {
      const todoObject = {
        id : todoObjectlist.length,
        todoText : todoinput,
        isDone: false
      }
      todoObjectlist.unshift(todoObject);
      this.display();
      document.querySelector("#myInput").value = '';
    }
  }
  done_undone(x){
    const selectedTodoIndex = todoObjectlist.findIndex((item)=> item.id == x);
    console.log(todoObjectlist[selectedTodoIndex].isDone);
    todoObjectlist[selectedTodoIndex].isDone == false ? todoObjectlist
    [selectedTodoIndex].isDone = true : todoObjectlist[selectedTodoIndex].isDone = false;
      this.display();

  }
  deleteElement(z){
    const selectedTOdoIndex = todoObjectlist.findIndex((item)=> item.id == z);
    todoObjectlist.splice(selectedTOdoIndex,1);
    this.display();

  }

  display(){
    this.ulElement.innerHTML = "";

    todoObjectlist.forEach((object_item) => {
      const liElemet = document.createElement("li");
      const delBtn = document.createElement("i");

      liElemet.innerHTML = object_item.todoText;
      liElemet.setAttribute("data-id", object_item.id);

      delBtn.setAttribute("data-id", object_item.id);
      delBtn.classList.add("far", "fa-trash-alt");

      liElemet.appendChild(delBtn);

      delBtn.addEventListener("click", function(e){
        const deletedId = e.target.getAttribute("data-id");
        mytodolist.deleteElement(deletedId);
      })

      liElemet.addEventListener("click", function(e){
        const selectedID = e.target.getAttribute("data-id");
        mytodolist.done_undone(selectedID);
      })

      if (object_item.isDone) {
        liElemet.classList.add("checked");
      }
      this.ulElement.appendChild(liElemet);

    })


  }

}
const listsection = document.querySelector("#myul");
mytodolist = new Todo(listsection);

document.querySelector(".addBtn").addEventListener("click", function(){
  mytodolist.add()
})
