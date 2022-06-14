import classes from './Header.module.css';
import mealsImage from '../../..//assets/meals.jpeg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton numberItem={3} onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='' />
      </div>
    </>
  );
};

export default Header;