import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const BASE_URL = "http://localhost:3001/students";

const fetchStudents = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

const createStudent = async (newStudent) => {
  const { data } = await axios.post(BASE_URL, newStudent);
  return data;
};

const updateStudent = async ({ id, updatedData }) => {
  const { data } = await axios.put(`${BASE_URL}/${id}`, updatedData);
  return data;
};

const deleteStudent = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};




const Home = () => {
  const queryClient = useQueryClient();

  // Form states
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [joinedOn, setJoinedOn] = useState("");

  // Edit mode
  const [editId, setEditId] = useState(null);

  // Fetch students
  const { data: students, isLoading, isError } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  // CREATE Mutation
  const createMutation = useMutation({
    mutationFn: createStudent,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:["students"]});
      resetForm();
    },
  });

  // UPDATE Mutation
  const updateMutation = useMutation({
    mutationFn: updateStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
      resetForm();
      setEditId(null);
    },
  });

  // DELETE Mutation
  const deleteMutation = useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => {
      queryClient.invalidateQueries(["students"]);
    },
  });

  const resetForm = () => {
    setId("");
    setName("");
    setEmail("");
    setCourse("");
    setJoinedOn("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const studentData = {
      id: Number(id),
      name,
      email,
      course,
      joined_on: joinedOn,
    };

    if (editId) {
      // UPDATE
      updateMutation.mutate({ id: editId, updatedData: studentData });
    } else {
      // CREATE
      createMutation.mutate(studentData);
    }
  };

  const handleEdit = (student) => {
    setEditId(student.id);
    setId(student.id);
    setName(student.name);
    setEmail(student.email);
    setCourse(student.course);
    setJoinedOn(student.joined_on);
  };

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="container">
      <h3>Student CRUD</h3>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
        <input
          placeholder="Joined On"
          value={joinedOn}
          onChange={(e) => setJoinedOn(e.target.value)}
        />

        <button type="submit">{editId ? "Update" : "Create"}</button>
      </form>

      <hr />

      {/* Student List */}
      <div>
        {students.map((s) => (
          <div key={s.id} style={{ marginBottom: "10px" }}>
            <b>{s.name}</b> — {s.email} — {s.course}
            <br />
            <button onClick={() => handleEdit(s)}>Edit</button>
            <button onClick={() => handleDelete(s.id)} style={{ color: "red" }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
