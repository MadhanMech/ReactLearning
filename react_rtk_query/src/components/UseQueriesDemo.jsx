import { useQueries } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const fetchStudentById = async (id) => {
  const response = await axios.get(`http://localhost:3001/students/${id}`);
  return response.data;
};

const MultipleStudents = ({ studentIds }) => {
  const postQueries = useQueries({
    queries: studentIds.map((id) => ({
      queryKey: ["students", id],
      queryFn: () => fetchStudentById(id),
    })),
  });

  console.log("postQueries:", postQueries);

  return (
    <div>
      <h3>Students List</h3>

      {postQueries.map((query, index) => {
        if (query.isLoading) return <p key={index}>Loading student {studentIds[index]}...</p>;
        if (query.isError) return <p key={index}>Error loading ID {studentIds[index]}</p>;

        return (
          <div key={index}>
            <p>
              <b>{query.data.name}</b> - {query.data.email}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const UseQueriesDemo = () => {
  const studentIds = [1, 3, 4, 5];

  return (
    <div>
      <h2>UseQueries Demo</h2>
      <MultipleStudents studentIds={studentIds} />
      {/* instead of using as Componenet can direclty use   */}
    </div>
  );
};

export default UseQueriesDemo;
