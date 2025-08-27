export default function HomePage() {
  return (
    <>
      <section className="bg-dark text-light text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
          <p className="lead mb-4">Build modern apps with Next.js + Bootstrap 5 + TypeScript.</p>
          <a href="/about" className="btn btn-primary btn-lg me-3">Learn More</a>
          <a href="#features" className="btn btn-outline-light btn-lg">Explore Features</a>
        </div>
      </section>

      <section id="features" className="py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <h2 className="fw-bold">Features</h2>
            <p className="text-muted">What you get when using this starter template</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">⚡ Fast Development</h5>
                  <p className="card-text">Get started quickly with Next.js and Bootstrap pre-configured.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">📱 Responsive Design</h5>
                  <p className="card-text">Fully responsive layout that works on all devices out of the box.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">🎨 Easy to Customize</h5>
                  <p className="card-text">Use Bootstrap’s utility classes or add your own styles easily.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-light text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Ready to get started?</h2>
          <p className="mb-4">Check out the About page to learn more.</p>
          <a href="/about" className="btn btn-light btn-lg">Go to About Page</a>
        </div>
      </section>
    </>
  );
}
