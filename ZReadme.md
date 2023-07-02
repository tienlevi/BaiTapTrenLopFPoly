Mua hàng thành công
formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    success.classList.add("active-success");
    successInside.classList.add("active-success-inside");
})

<div class="success">
        <div class="success-inside">
            <h2>Mua hàng thành công</h2>
        </div>
    </div>

    .success {
    display: none;
}

.active-success {
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
}

.success-inside {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 1px solid #000;
    width: 600px;
    height: 400px;
    position: fixed;
    top: 20%;
    left: 50%;
}

.active-success-inside {
    transform: translateX(-50%);
}