import { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target:{value}}) => {
    setInputValue( value );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValue);

    const trimmedInputValue = inputValue.trim();
    if ( trimmedInputValue.length <= 1) return;
    
    onNewCategory(trimmedInputValue);
    
    // setCategories( categories => [trimmedInputValue, ...categories] );

    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmit } aria-label='form'>

      <input 
        type="text" 
        placeholder="Buscar GIFs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};

export default AddCategory;