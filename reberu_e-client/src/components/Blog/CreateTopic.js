import { FormInput } from '../Common/FormInput';
import { useState } from 'react';
import { useService } from '../../hooks/useService';
import { useForm } from '../../hooks/useForm';

export const CreateTopic = ({ onCreateTopicSubmit }) => {
  let [doObj, setDoObj] = useState([
    {
      name: '',
      img: '',
    },
  ]);

  let [stayObj, setStayObj] = useState([
    {
      name: '',
      img: '',
    },
  ]);

  let [eatObj, setEatObj] = useState([
    {
      name: '',
      img: '',
    },
  ]);
  const { values, changeHandler } = useForm({
    title: '',
    description: '',
    img: '',
    continent: '',
  });


  const Do = {};
  const Stay = {};
  const Eat = {};

  const onSubmit = (e) => {
    e.preventDefault();



    console.log(doObj);
    console.log(stayObj);
    console.log(eatObj);
    // TODO - Add data from InputForm and useForm together
    // and compose whole the data to send and create Topic
    // Object.assign(doObj);
    console.log(values);
    //onCreateTopicSubmit(values);
  };

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    if (e) {
      let id = e.target.getAttribute('id');
      if (id === 'todoBtn' && doObj.length < 4) {
        let doObjCurrent = {
          name: '',
          img: '',
        };
        setDoObj((x) => [...x, doObjCurrent]);
        console.log(doObj);
      }
      if (id === 'tostayBtn' && stayObj.length < 4) {
        let stayObjCurrent = {
          name: '',
          img: '',
        };
        setStayObj((x) => [...x, stayObjCurrent]);
        console.log(stayObj);
      }
      if (id === 'toeatBtn' && eatObj.length < 4) {
        let eatObjCurrent = {
          name: '',
          img: '',
        };
        setEatObj((x) => [...x, eatObjCurrent]);
        console.log(eatObj);
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
      <div className="container ie-h-align-center-fix">
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
                type="email"
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

              {doObj.map(
                (singleField, index) =>
                  index > 0 && (
                    <div className="test" key={index}>
                      <FormInput
                        id={index}
                        label={'Name'}
                        labelValue={'Name'}
                        type={'text'}
                        name={'name'}
                        // onChange={useInput} // TO DO USE HERE TO PASS SETDATA HANDLER, SO THERE IS ACCESS TO STATE COMPONENT INPUT DATA ! ! !
                        initValue={singleField.name}
                      />
                      <FormInput
                        id={index}
                        label={'Image'}
                        labelValue={'Image'}
                        type={'text'}
                        name={'img'}
                        // onChange={useInput}
                        initValue={singleField.img}
                      />
                    </div>
                  )
              )}
              <button id="tostayBtn">TO STAY +</button>
              {stayObj.map(
                (singleField, index) =>
                  index > 0 && (
                    <div className="test" key={index}>
                      <FormInput
                        id={index}
                        label={'Name'}
                        labelValue={'Name'}
                        type={'text'}
                        name={'name'}
                        // onChange={useInput}
                        initValue={singleField.name}
                      />
                      <FormInput
                        id={index}
                        label={'Image'}
                        labelValue={'Image'}
                        type={'text'}
                        name={'img'}
                        // onChange={useInput}
                        initValue={singleField.img}
                      />
                    </div>
                  )
              )}
              <button id="toeatBtn">TO EAT +</button>
              {eatObj.map(
                (singleField, index) =>
                  index > 0 && (
                    <div className="test" key={index}>
                      <FormInput
                        id={index}
                        label={'Name'}
                        labelValue={'Name'}
                        type={'text'}
                        name={'name'}
                        // onChange={useInput}
                        initValue={singleField.name}
                      />
                      <FormInput
                        id={index}
                        label={'Image'}
                        labelValue={'Image'}
                        type={'text'}
                        name={'img'}
                        // onChange={useInput}
                        initValue={singleField.img}
                      />
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
