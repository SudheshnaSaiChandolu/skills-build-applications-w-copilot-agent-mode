import { Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="container py-5">
      <nav className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-5">
        <div>
          <p className="text-uppercase text-secondary mb-1 small">OctoFit Tracker</p>
          <h1 className="display-6 fw-bold mb-0">Train with structure.</h1>
        </div>
        <div className="d-flex gap-2">
          <Link className="btn btn-outline-dark" to="/teams">
            Teams
          </Link>
          <Link className="btn btn-dark" to="/workouts">
            Workouts
          </Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <section className="row align-items-center g-4 py-4">
              <div className="col-lg-7">
                <span className="badge text-bg-warning text-dark mb-3">React 19 + Vite</span>
                <h2 className="display-5 fw-semibold lh-sm">
                  Track activity, compete on leaderboards, and keep every workout in one place.
                </h2>
                <p className="lead text-secondary mt-3">
                  This frontend is wired for router-driven navigation and Bootstrap styling on port 5173.
                </p>
              </div>
              <div className="col-lg-5">
                <div className="card shadow-sm border-0">
                  <div className="card-body p-4">
                    <h3 className="h5">Starter routes</h3>
                    <ul className="mb-0 text-secondary">
                      <li>Home dashboard</li>
                      <li>Team management</li>
                      <li>Workout planning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          }
        />
        <Route
          path="/teams"
          element={<div className="alert alert-info">Teams page placeholder for OctoFit Tracker.</div>}
        />
        <Route
          path="/workouts"
          element={<div className="alert alert-success">Workouts page placeholder for OctoFit Tracker.</div>}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
