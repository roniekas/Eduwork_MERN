import {tabel} from './miniLibrary.js';
    
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => response.json())
				.then((data) => {
					let i = 0;
					console.log(data.length);
					for (i = 0; i < data.length; i++) {
						let tabelBaru = new tabel({
							baris: [
								[
									data[i].id,
									data[i].name,
									data[i].username,
									data[i].email,
									[
										data[i].address.street,
										data[i].address.suite,
										data[i].address.city,
									],
									data[i].company.name,
								],
							],
						});
						let buat = document.getElementById("app");
						console.log(tabelBaru);
						tabelBaru.render(buat);
					}
				});
    }

    getData();