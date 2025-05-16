import "../styles/Reports.css";

const Reports = ({ tasks }) => {
  return (
    <div className="reports">
      <h2>Task Reports</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>{task.priority}</td>
              <td>{task.deadline}</td>
              <td className={task.status.toLowerCase().replace(" ", "-")}>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
