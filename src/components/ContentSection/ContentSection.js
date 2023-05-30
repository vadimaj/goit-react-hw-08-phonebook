import css from './ContentSection.module.css';
const Login = () => {
  return (
    <section>
      <div>
        <h2 className={css['content-title']}>Welcome to phonebook app.</h2>
        <p className={css['content-text']}>
          To continue please register or log in.
        </p>
      </div>
    </section>
  );
};

export default Login;
