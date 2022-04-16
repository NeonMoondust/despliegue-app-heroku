let table = document.getElementById('table');

async function getUsers(){
  let response;
  const get_object = {
    method: "get",
  }

  try {
    response = await fetch("/users", get_object);
    let data = await response.json();
    table.innerHTML = "";
    data.forEach((user, index) => {
      table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.fecha}</td>
        <td><button class="btn btn-danger" onclick="deleteUser(${index + 1},'${user.id}')">Eliminar</button></td>
      </tr>
      `;
    });
  } catch (e) {
      console.log(e);
      alert("Something went wrong");
  }
};

async function deleteUser(index, id){
  let data;
  const delete_object = {
    method: "delete",
  }

  try {
    data = await fetch(`/users/${id}`, delete_object);
    await getUsers();
  } catch (e) {
    console.log(e);
    alert("Something went wrong");
  }
};

getUsers();