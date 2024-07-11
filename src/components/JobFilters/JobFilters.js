// src/components/JobFilters/JobFilters.js
import React from 'react';
import './JobFilters.css';

const JobFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="job-filters">
      <select
        value={filters.type}
        onChange={(e) => onFilterChange('type', e.target.value)}
      >
        <option value="">All Types</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        value={filters.location}
        onChange={(e) => onFilterChange('location', e.target.value)}
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="On-site">On-site</option>
      </select>
    </div>
  );
};

export default JobFilters;