const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">

      <div className="p-4 bg-white shadow rounded">
        <h3>Total Emails</h3>
        <h2>{stats.total_emails}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <h3>High Priority</h3>
        <h2>{stats.high_priority}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <h3>Medium Priority</h3>
        <h2>{stats.medium_priority}</h2>
      </div>

      <div className="p-4 bg-white shadow rounded">
        <h3>Low Priority</h3>
        <h2>{stats.low_priority}</h2>
      </div>

    </div>
  );
};

export default StatsCards;