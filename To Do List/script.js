function newElement() {
  const taskInput = document.getElementById("task");
  const taskValue = taskInput.value.trim();
  const successToast = document.querySelector(".toast.success");
  const errorToast = document.querySelector(".toast.error");

  function showToast(toast) {
    $(toast).toast('show');
  }

  if (taskValue === "") {
    showToast(errorToast);
  } else {
    const li = document.createElement("li");
    li.textContent = taskValue;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Sil";
    deleteBtn.className = "btn btn-danger btn-sm ml-2";
    deleteBtn.onclick = function () {
      li.remove();
    };
    
    li.appendChild(deleteBtn);
    document.getElementById("list").appendChild(li);
    taskInput.value = "";
    showToast(successToast);
  }
}

$(document).ready(function() {
  $('.toast').toast({
    delay: 4000
  });

  $('#list li').each(function() {
    const li = $(this);
    const deleteBtn = $('<button>Sil</button>').addClass('btn btn-danger btn-sm ml-2');
    deleteBtn.click(function() {
      li.remove();
    });
    li.append(deleteBtn);
  });
});

