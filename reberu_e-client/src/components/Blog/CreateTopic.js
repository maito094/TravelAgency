import { useState } from 'react';
import { useForm } from '../../hooks/useForm';

export const CreateTopic = ({ onCreateTopicSubmit }) => {
  const { values, changeHandler } = useForm({
    title: '',
    description: '',
    img: '',
    continent: '',
  });

  let [Do, setDo] = useState({
    // 1: {
    //   name: '',
    //   img: '',
    // },
  });

  let [Stay, setStay] = useState({
    // 1: {
    //   name: '',
    //   img: '',
    // },
  });

  let [Eat, setEat] = useState({
    // 1: {
    //   name: '',
    //   img: '',
    // },
  });

  const onChangeDoInputHandler = (e, index) => {
    setDo((state) => {
      let copy = { ...state };

      copy[index][e.target.name] = e.target.value;

      return copy;
    });
  };

  const onChangeStayInputHandler = (e, index) => {
    setStay((state) => {
      let copy = { ...state };

      copy[index][e.target.name] = e.target.value;

      return copy;
    });
  };

  const onChangeEatInputHandler = (e, index) => {
    setEat((state) => {
      let copy = { ...state };

      copy[index][e.target.name] = e.target.value;

      return copy;
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // console.log(doObj);
    // console.log(stayObj);
    // console.log(eatObj);
    // TODO - Add data from InputForm and useForm together
    // and compose whole the data to send and create Topic
    if (!!Do && Object.keys(Do).length > 0) {
      values.Do = Object.values(Do);
    }
    if (!!Stay && Object.keys(Stay).length > 0) {
      values.Stay = Object.values(Stay);
    }
    if (!!Eat && Object.keys(Eat).length > 0) {
      values.Eat = Object.values(Eat);
    }

    console.log(values);

    // onCreateTopicSubmit(values);

    // Redirect to Topic Details
  };

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    if (e) {
      let id = e.target.getAttribute('id');
      let doCounts = Object.keys(Do).length;
      let stayCounts = Object.keys(Stay).length;
      let eatCounts = Object.keys(Eat).length;
      if (id === 'todoBtn' && doCounts < 4) {
        const increment = doCounts + 1;

        let ObjCurrent = {
          [increment]: {
            name: '',
            img: '',
          },
        };

        setDo((state) => {
          let copy = { ...state };

          Object.assign(copy, ObjCurrent);
          return copy;
        });
      }
      if (id === 'tostayBtn' && stayCounts < 4) {
        const increment = stayCounts + 1;

        let ObjCurrent = {
          [increment]: {
            name: '',
            img: '',
          },
        };

        setStay((state) => {
          let copy = { ...state };

          Object.assign(copy, ObjCurrent);
          return copy;
        });
      }
      if (id === 'toeatBtn' && eatCounts < 4) {
        const increment = eatCounts + 1;

        let ObjCurrent = {
          [increment]: {
            name: '',
            img: '',
          },
        };

        setEat((state) => {
          let copy = { ...state };

          Object.assign(copy, ObjCurrent);
          return copy;
        });
      }
    }
  };

  return (
    <div
      style={{ overflow: 'scroll', height: '90vh', marginTop: '1.8rem' }}
      className="tm-section tm-section-pad tm-bg-img tm-position-relative"
      id="tm-section-6"
    >
      <h1 className="tm-color-white">
        Please fill all the necessary fields and create a Topic of the places you've been to and share it with the World!
      </h1>
      <div style={{ overflow: 'scroll', height: '90vh', marginTop: '240px' }} className="container ie-h-align-center-fix">
        <div className="tm-bg-white tm-p-4">
          <form onSubmit={onSubmit} method="post" className="contact-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                value={values.title}
                onChange={changeHandler}
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Title"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input
                value={values.description}
                onChange={changeHandler}
                type="text"
                id="description"
                name="description"
                className="form-control"
                placeholder="Content description"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="img">Image:</label>
              <input
                value={values.img}
                onChange={changeHandler}
                type="text"
                id="img"
                name="img"
                className="form-control"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="continent">Continent:</label>
              <input
                value={values.continent}
                onChange={changeHandler}
                type="text"
                id="continent"
                name="continent"
                className="form-control"
                placeholder="Continent"
                required
              />
            </div>
            <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button id="todoBtn">TO DO +</button>

              {Object.entries(Do).map(
                (singleField, index) =>
                  Object.keys(Do).length > 0 && (
                    <div className="test" key={index + 1}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id={`name` + Number(index + 1)}
                          name="name"
                          className="form-control"
                          placeholder=""
                          required
                          value={Do[index + 1]['name']}
                          onChange={(e) => onChangeDoInputHandler(e, index + 1)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="img">Image:</label>
                        <input
                          type="text"
                          id={`img` + Number(index + 1)}
                          name="img"
                          className="form-control"
                          placeholder=""
                          required
                          value={Do[index + 1]['img']}
                          onChange={(e) => onChangeDoInputHandler(e, index + 1)}
                        />
                      </div>
                    </div>
                  )
              )}
              <button id="tostayBtn">TO STAY +</button>
              {Object.entries(Stay).map(
                (singleField, index) =>
                  Object.keys(Stay).length > 0 && (
                    <div className="test" key={index + 1}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id={`name` + Number(index + 1)}
                          name="name"
                          className="form-control"
                          placeholder=""
                          required
                          value={Stay[index + 1]['name']}
                          onChange={(e) => onChangeStayInputHandler(e, index + 1)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="img">Image:</label>
                        <input
                          type="text"
                          id={`img` + Number(index + 1)}
                          name="img"
                          className="form-control"
                          placeholder=""
                          required
                          value={Stay[index + 1]['img']}
                          onChange={(e) => onChangeStayInputHandler(e, index + 1)}
                        />
                      </div>
                    </div>
                  )
              )}

              <button id="toeatBtn">TO EAT +</button>
              {Object.entries(Eat).map(
                (singleField, index) =>
                  Object.keys(Eat).length > 0 && (
                    <div className="test" key={index + 1}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                          type="text"
                          id={`name` + Number(index + 1)}
                          name="name"
                          className="form-control"
                          placeholder=""
                          required
                          value={Eat[index + 1]['name']}
                          onChange={(e) => onChangeEatInputHandler(e, index + 1)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="img">Image:</label>
                        <input
                          type="text"
                          id={`img` + Number(index + 1)}
                          name="img"
                          className="form-control"
                          placeholder=""
                          required
                          value={Eat[index + 1]['img']}
                          onChange={(e) => onChangeEatInputHandler(e, index + 1)}
                        />
                      </div>
                    </div>
                  )
              )}
            </div>

            <input value="Create Topic" type="submit" className="btn btn-primary tm-btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};
