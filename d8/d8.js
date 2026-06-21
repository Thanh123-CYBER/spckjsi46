import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDt581zguElnsRwq644r5AHGYDug19Jldk",
    authDomain: "bt1-jsi46.firebaseapp.com",
    databaseURL: "https://bt1-jsi46-default-rtdb.firebaseio.com",
    projectId: "bt1-jsi46",
    storageBucket: "bt1-jsi46.firebasestorage.app",
    messagingSenderId: "170782245744",
    appId: "1:170782245744:web:f22a394add6e24021685b5"
};

const db = getDatabase(initializeApp(firebaseConfig));
const $ = id => document.getElementById(id);
let localProducts = {};

// Chờ toàn bộ trang web tải xong hoàn toàn rồi mới gán sự kiện click
window.onload = () => {

    // --- 1. LẤY DATA VÀ HIỂN THỊ ---
    onValue(ref(db, "products"), (snapshot) => {
        $('list').innerHTML = "";
        localProducts = snapshot.val() || {};

        Object.keys(localProducts).forEach(id => {
            const p = localProducts[id];
            $('list').innerHTML += `
                <div class="card">
                    <img src="${p.image || 'https://via.placeholder.com/150'}" alt="${p.name}">
                    <h2>${p.name}</h2>
                    <p>Giá: ${Number(p.price).toLocaleString()}đ</p>
                    <p>Mô tả: ${p.description || 'Chưa có mô tả'}</p>
                    <p>Số lượng: ${p.quantity || 0}</p>
                    <button class="btn-edit" data-id="${id}">Edit</button>
                </div>`;
        });

        // Gán sự kiện click cho các nút Edit vừa được tạo ra
        document.querySelectorAll(".btn-edit").forEach(btn => {
            btn.onclick = (e) => {
                const id = e.target.dataset.id;
                const p = localProducts[id];

                $('id').value = id;
                $('name').value = p.name || "";
                $('price').value = p.price || "";
                $('img').value = p.image || "";
                $('qty').value = p.quantity || "";
                $('desc').value = p.description || "";
                $('form-title').innerText = "Đang sửa: " + p.name;
            };
        });
    });

    // --- 2. XỬ LÝ SỰ KIỆN BẤM LƯU (SAVE) ---
    $('btn-save').onclick = () => {
        const id = $('id').value;
        const pData = {
            name: $('name').value,
            price: Number($('price').value),
            image: $('img').value,
            quantity: Number($('qty').value),
            description: $('desc').value
        };

        // Kiểm tra xem người dùng có nhập thiếu dữ liệu bắt buộc không
        if (!pData.name || !pData.price) {
            alert("Vui lòng điền ít nhất Tên và Giá sản phẩm!");
            return;
        }

        if (id) {
            // Chế độ UPDATE
            pData.id = id;
            const updates = {};
            updates["/products/" + id] = pData;
            
            update(ref(db), updates)
                .then(() => {
                    alert("Cập nhật thành công!");
                    resetForm();
                })
                .catch(err => alert("Lỗi khi update: " + err.message));
        } else {
            // Chế độ THÊM MỚI (Dùng uuidv4)
            if (!window.uuidv4) {
                alert("Lỗi phần mềm: Thư viện uuidv4 chưa tải xong hoặc bị chặn!");
                return;
            }
            const user_id = window.uuidv4();
            pData.id = user_id;

            set(ref(db, "products/" + user_id), pData)
                .then(() => {
                    alert("Thêm sản phẩm mới thành công!");
                    resetForm();
                })
                .catch(err => alert("Lỗi khi thêm mới: " + err.message));
        }
    };
};

function resetForm() {
    $('id').value = $('name').value = $('price').value = $('img').value = $('qty').value = $('desc').value = "";
    $('form-title').innerText = "Thêm / Sửa sản phẩm";
}