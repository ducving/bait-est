document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll('.slider img');

    function nextSlide() {
        images[index].classList.remove('active'); // Ẩn ảnh hiện tại
        index = (index + 1) % images.length; // Chuyển sang ảnh tiếp theo
        images[index].classList.add('active'); // Hiển thị ảnh mới
    }

    setInterval(nextSlide, 3000); // Chuyển ảnh mỗi 3 giây
});
//////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search input");

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `search.html?q=${encodeURIComponent(query)}`;
            }
        }
    });
});

///////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("q");

    const products = [
        { name: "Váy cưới trắng", img: "tải xuống (1).jpg" },
        { name: "Váy cưới đẹp", img: "tải xuống (2).jpg" },
        { name: "Váy cưới công chúa", img: "tải xuống (3).jpg"},
        { name: "Váy", img: "tải xuống.jpg"},
        { name: "Váy cưới ", img: "tải xuống (3).jpg"},
        { name: "Váy đẹp", img: "tải xuống.jpg"}
    ];

    const resultContainer = document.getElementById("searchResults");
    const resultCount = document.querySelector(".search_content p"); 

    if (query) {
        const results = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

        if (results.length > 0) {
            resultContainer.innerHTML = results.map(p => `
                <div class="sr_img">
                    <img src="${p.img}" alt="${p.name}">
                    <p>${p.name}</p>
                </div>
            `).join("");

            resultCount.textContent = `Đang hiển thị ${results.length} kết quả`; // Hiển thị số lượng kết quả
        } else {
            resultContainer.innerHTML = "<p>Không tìm thấy sản phẩm nào.</p>";
            resultCount.textContent = "Không có kết quả nào.";
        }
    } else {
        resultContainer.innerHTML = "<p>Vui lòng nhập từ khóa tìm kiếm.</p>";
        resultCount.textContent = "Vui lòng nhập từ khóa tìm kiếm.";
    }
});

/////////////////////////
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
