function searchNews() {
	$("#news").html(`
	<div class="col-md-4">
        <div class="col d-flex justify-content-center">
            <div class="lds-roller"><div></div><div></div><div></div>
        </div>
    </div>`);
	$.ajax({
		url: "https://newsapi.org/v2/everything?apiKey=1fb6ffde575e427b8befadc1a76de898",
		type: "GET",
		dataType: "JSON",
		data: {
			q: $("#cari").val(),
		},
		success: function (r) {
			if (r.totalResults > 0) {
				$("#news").html("");
				let news = r.articles;
				$.each(news, function (i, data) {
					$("#news").append(
						`
					<div class="col-md-4">
						<div class="card">
						<img src="` +
							data.urlToImage +
							`" class="card-img-top" alt="` +
							data.title +
							`">
						<div class="card-body">
							<h5 class="card-title text-center">` +
							data.title +
							`</h5>
							    <h6 class="card-subtitle mb-2 mt-1 text-muted">` +
							data.publishedAt +
							`</h6>
							<p class="card-text">` +
							data.description +
							`</p>
							<a href="` +
							data.url +
							`" class="btn btn-primary" target="_blank">Baca Lebih</a>
						</div>
						</div>
					</div>
					`,
					);
				});
				$("#cari").val("");
			} else {
				$("#news").html(`<div class="row d-flex justify-content-center mt-5">
									<div class="col bg-warning">
									<h1 class="text-danger text-center">Data tidak Ditemukan!</h1>
									</div>
								</div>	`);
			}
		},
	});
}

$("#tombol-cari").on("click", function (e) {
	searchNews();
	e.preventDefault();
});

$("#cari").on("keyup", function (e) {
	if (e.keyCode === 13 || e.keyCode === 9) {
		searchNews();
	}
});
