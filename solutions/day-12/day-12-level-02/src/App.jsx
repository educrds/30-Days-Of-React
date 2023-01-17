import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => alert(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='firstName'>Name</label>
        <input
          {...register('firstName', { required: true })}
          aria-invalid={errors.firstName ? 'true' : 'false'}
        />
        {errors.firstName?.type === 'required' && (
          <p role='alert'>First name is required</p>
        )}
      </div>

      <div>
        <label htmlFor='lastName'>Last name</label>
        <input
          {...register('lastName', { required: 'Last name is required' })}
          aria-invalid={errors.lastName ? 'true' : 'false'}
        />
        {errors.lastName && <p role='alert'>{errors.lastName?.message}</p>}
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          {...register('mail', {
            required: 'Email Address is required',
            pattern: { value: /^\S+@\S+.\S+$/, message: 'Email address is invalid' },
          })}
          aria-invalid={errors.mail ? 'true' : 'false'}
        />
        {errors.mail && <p role='alert'>{errors.mail?.message}</p>}
      </div>
      <input type='submit' />
    </form>
  );
}

export default Form;
