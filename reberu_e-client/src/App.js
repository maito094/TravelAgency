import { Routes, Route, useNavigate } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { LandingPage } from './components/LandingPage/LandingPage';
import { CreateTopic } from './components/Blog/CreateTopic';
import { Footer } from './components/Footer/Footer';
import { Blog } from './components/Blog/Blog';
import React, { useEffect, useState } from 'react';
import { blogServiceFactory } from './services/blogService';
import { authServiceFactory } from './services/authService';
import { BlogEntries } from './components/Blog/BlogEntries';
import { AuthContext } from './contexts/AuthContext';
import { Logout } from './components/Logout/Logout';
import { EditTopic } from './components/Blog/EditTopic';

function App() {
  const navigate = useNavigate();

  const [blog, setBlog] = useState([]);
  const [auth, setAuth] = useState({});
  const blogService = blogServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

  //   useEffect(() => {
  //     blogService.getOne())
  //         .then(result => {
  //             setBlog(result)
  //         })
  // }, []);

  const getRecentBlog = (blogId) => {
    blogService.getOne(blogId).then((result) => {
      setBlog(result);
    });
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/blogs');
    } catch (error) {
      alert('There is a problem. Try Login again or check if email & password is correct');
    }
  };

  const onRegisterSubmit = async (values) => {
    // const { confirmPassword, ...registerData } = values;

    // if (confirmPassword !== registerData.password) {
    //   return;
    // }

    try {
      const result = await authService.register(values);

      setAuth(result);

      navigate('/blogs');
    } catch (error) {
      console.log('There is a problem');
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const onCreateTopicSubmit = async (data) => {
    const newTopic = await blogService.create(data);

    setBlog((state) => [...state, newTopic]);

    navigate(`/blogs/${newTopic._id}`);
  };

  const onEditTopicSubmit = async (values) => {
    const result = await blogService.edit(values._id, values);

    setBlog((state) => state.map((x) => (x._id === values._id ? result : x)));

    navigate(`/blogs/${values._id}`);
  };

  const onDeleteTopicSubmit = async (blogId) => {
    await blogService.delete(blogId);

    navigate(`/blogs`);
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <div className="tm-main-content" id="top">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          {contextValues.isAuthenticated ? (
            <React.Fragment>
              <Route path="/create-topic" element={<CreateTopic onCreateTopicSubmit={onCreateTopicSubmit} />} />
              <Route path="/edit-topic/:blogId" element={<EditTopic onTopicEditHandler={onEditTopicSubmit} />} />
            </React.Fragment>
          ) : (
            <Route path="/create-topic" element={<Login />} />
          )}
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:blogId" element={<BlogEntries onDeleteHandler={onDeleteTopicSubmit} />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
