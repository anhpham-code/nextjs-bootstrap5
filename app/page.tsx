//page.tsx
"use client";

export default function HomePage() {
  return (
    <div className="container py-5">
      <button type="button" className="btn btn-primary">Primary</button>
      <h1 className="mb-4">Demo Modal với Bootstrap 5 + Next.js</h1>      
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Mở Modal
      </button>     
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Xin chào
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Đóng"
              ></button>
            </div>
            <div className="modal-body">
              Đây là nội dung modal Bootstrap chạy trong Next.js.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Đóng
              </button>
              <button type="button" className="btn btn-primary">
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>       
      </div>
      
    </div>

  );
}
