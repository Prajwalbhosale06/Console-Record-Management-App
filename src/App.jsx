import { useState } from "react";
import {
  LayoutDashboard,
  Plus,
  Search,
  Users,
  UserPlus,
  Activity,
  MoreHorizontal,
  ArrowLeft,
  Save,
} from "lucide-react";
import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  const [form, setForm] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    course: "Python Fundamentals",
    status: "Active",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Record:", form);

    alert("Record ready to be saved!");
  };

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="logo-icon">R</div>
          <span>RecordHub</span>
        </div>

        <nav>

          <button
            className={`nav-item ${
              page === "dashboard" ? "active" : ""
            }`}
            onClick={() => setPage("dashboard")}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>

          <button
            className={`nav-item ${
              page === "records" ? "active" : ""
            }`}
            onClick={() => setPage("records")}
          >
            <Users size={20} />
            All Records
          </button>

          <button
            className={`nav-item ${
              page === "add" ? "active" : ""
            }`}
            onClick={() => setPage("add")}
          >
            <UserPlus size={20} />
            Add Record
          </button>

        </nav>

        <div className="sidebar-bottom">
          <div className="status-dot"></div>

          <div>
            <strong>System ready</strong>
            <p>RecordHub is ready</p>
          </div>
        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="main">

        {page === "dashboard" && (
          <Dashboard setPage={setPage} />
        )}

        {page === "records" && (
          <Records setPage={setPage} />
        )}

        {page === "add" && (
          <AddRecord
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setPage={setPage}
          />
        )}

      </main>

    </div>
  );
}


/* =========================
   DASHBOARD
========================= */

function Dashboard({ setPage }) {
  return (
    <>
      <header className="topbar">

        <div>
          <p className="eyebrow">
            RECORD MANAGEMENT SYSTEM
          </p>

          <h1>Dashboard</h1>

          <p className="subtitle">
            Manage and organize your records in one place.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setPage("add")}
        >
          <Plus size={20} />
          Add record
        </button>

      </header>


      <section className="stats">

        <StatCard
          icon={<Users size={22} />}
          title="Total records"
          value="0"
        />

        <StatCard
          icon={<Activity size={22} />}
          title="Active records"
          value="0"
        />

        <StatCard
          icon={<UserPlus size={22} />}
          title="Added this month"
          value="0"
        />

      </section>


      <section className="records-section">

        <div className="section-header">

          <div>
            <h2>All records</h2>
            <p>
              View and manage your records.
            </p>
          </div>

          <div className="search-box">
            <Search size={18} />

            <input
              placeholder="Search records..."
            />
          </div>

        </div>


        <div className="table-container">

          <table>

            <thead>

              <tr>
                <th>Record</th>
                <th>Email</th>
                <th>Course</th>
                <th>Status</th>
                <th>Created</th>
                <th></th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td>

                  <div className="record-person">

                    <div className="avatar">
                      —
                    </div>

                    <div>
                      <strong>
                        No records yet
                      </strong>

                      <span>
                        Start by adding a record
                      </span>
                    </div>

                  </div>

                </td>

                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>

                <td>
                  <MoreHorizontal size={20} />
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>
    </>
  );
}


/* =========================
   STAT CARD
========================= */

function StatCard({ icon, title, value }) {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

    </div>
  );
}


/* =========================
   RECORDS
========================= */

function Records({ setPage }) {
  return (
    <>
      <header className="topbar">

        <div>
          <p className="eyebrow">
            RECORD MANAGEMENT SYSTEM
          </p>

          <h1>All records</h1>

          <p className="subtitle">
            View and manage all your records.
          </p>
        </div>

        <button
          className="add-button"
          onClick={() => setPage("add")}
        >
          <Plus size={20} />
          Add record
        </button>

      </header>


      <section className="records-section records-page">

        <div className="section-header">

          <div>
            <h2>Records</h2>

            <p>
              No records have been added yet.
            </p>
          </div>

          <div className="search-box">

            <Search size={18} />

            <input
              placeholder="Search records..."
            />

          </div>

        </div>

      </section>
    </>
  );
}


/* =========================
   ADD RECORD
========================= */

function AddRecord({
  form,
  handleChange,
  handleSubmit,
  setPage,
}) {
  return (
    <>
      <header className="topbar">

        <div>

          <p className="eyebrow">
            RECORD MANAGEMENT SYSTEM
          </p>

          <h1>Add record</h1>

          <p className="subtitle">
            Create a new record in RecordHub.
          </p>

        </div>

      </header>


      <section className="form-section">

        <div className="form-header">

          <button
            className="back-button"
            onClick={() => setPage("dashboard")}
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <div>
            <h2>Add a new record</h2>

            <p>
              Fill in the details below.
              Fields marked with an asterisk are required.
            </p>
          </div>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            {/* NAME */}

            <div className="form-group">

              <label>
                Full name <span>*</span>
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter full name"
                required
              />

            </div>


            {/* ID */}

            <div className="form-group">

              <label>
                Record ID <span>*</span>
              </label>

              <input
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="e.g. 1001"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="form-group">

              <label>
                Email address <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />

            </div>


            {/* PHONE */}

            <div className="form-group">

              <label>
                Phone number
              </label>

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />

            </div>


            {/* COURSE */}

            <div className="form-group">

              <label>
                Course / category <span>*</span>
              </label>

              <select
                name="course"
                value={form.course}
                onChange={handleChange}
              >
                <option>
                  Python Fundamentals
                </option>

                <option>
                  Data Science
                </option>

                <option>
                  Web Development
                </option>

                <option>
                  Machine Learning
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>


            {/* STATUS */}

            <div className="form-group">

              <label>
                Status <span>*</span>
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
              >

                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>

                <option>
                  Pending
                </option>

              </select>

            </div>

          </div>


          {/* NOTES */}

          <div className="form-group notes">

            <label>
              Notes
            </label>

            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Optional notes about this record"
              rows="5"
            />

          </div>


          {/* ACTIONS */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() => setPage("dashboard")}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-button"
            >
              <Save size={18} />
              Save record
            </button>

          </div>

        </form>

      </section>
    </>
  );
}

export default App;