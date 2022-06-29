class tabel {
	constructor(i) {
		this.i = i;
	}

	tHead(a) {
		let b = "<thead>";
		let t = "</thead>";
		a.forEach((element) => {
			b += `<th>${element}</th>`;
		});

		return b + t;
	}

	tBody(a) {
		let b = "<tbody class='table-group-divider'>";
		let t = "</tbody>";
			let c = a[0].length;

		a.forEach((element) => {
			b += `<tr>`;
			for (a = 0; a < c; a++) {
				b += `<td>${element[a]}</td>`;
			}
			b += `</tr>`;
		});

		return b + t;
	}

	render(e) {
		let tabel =
			// this.tHead(this.i.kolom) +
			this.tBody(this.i.baris) 
		e.innerHTML += tabel;
	}
}


  export {tabel};