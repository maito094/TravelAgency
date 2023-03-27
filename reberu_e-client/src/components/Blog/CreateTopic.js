import { FormInput } from '../Common/FormInput';
import { useState } from 'react';
import { useService } from '../../hooks/useService';
import { useForm } from '../../hooks/useForm';

export const CreateTopic = ({ onCreateTopicSubmit }) => {
  const [fieldsList, setFieldsList] = useState([
    {
      Do: {
        name: 'Bright Angel Trail',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/84/4e/38/caption.jpg?w=1400&h=-1&s=1',
      },
    },
  ]);

  const { values, changeHandler, onSubmit } = useForm(
    {
      name: '',
      img: '',
    },
    onCreateTopicSubmit
  );

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.nodeName !== 'BUTTON') {
      return;
    }

    if (e) {
      let id = e.target.getAttribute('id');
      if (id === 'todoBtn' && fieldsList.length < 4) {
        let doObj = { do: '' };
        setFieldsList((x) => [...x, doObj]);
        console.log(fieldsList);
      }
    }
  };

  return (
    <div
      style={{ height: '90vh', marginTop: '1.8rem' }}
      className="tm-section tm-section-pad tm-bg-img tm-position-relative"
      id="tm-section-6"
    >
      <h1 className="tm-color-white">
        Please fill all the necessary fields and create a Topic of the places you've been to and share it with the World!
      </h1>
      <div className="container ie-h-align-center-fix">
        <div className="tm-bg-white tm-p-4">
          <form action="index.html" method="post" className="contact-form">
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" name="title" className="form-control" placeholder="Title" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <input type="email" id="description" name="description" className="form-control" placeholder="Content description" required />
            </div>
            <div className="form-group">
              <label htmlFor="img">Image:</label>
              <input type="text" id="img" name="img" className="form-control" placeholder="Image URL" required />
            </div>
            <div className="form-group">
              <label htmlFor="continent">Continent:</label>
              <input type="text" id="continent" name="continent" className="form-control" placeholder="Continent" required />
            </div>
            <div onClick={onClick} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <button id="todoBtn">TO DO +</button>

              {fieldsList.map(
                (singleField, index) =>
                  index > 0 && (
                    <div className="test" key={index}>
                      <FormInput
                        label={'Name'}
                        labelValue={'Name'}
                        type={'text'}
                        name={'name'}
                        onChange={onSubmit}
                        initValue={singleField.name}
                      />
                      <FormInput
                        label={'Image'}
                        labelValue={'Image'}
                        type={'text'}
                        name={'img'}
                        onChange={onSubmit}
                        initValue={singleField.img}
                      />
                    </div>
                  )
              )}
              <button id="tostayBtn">TO STAY +</button>
              <button id="toeatBtn">TO EAT +</button>
            </div>

            <button type="submit" className="btn btn-primary tm-btn-primary">
              Create Topic
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
