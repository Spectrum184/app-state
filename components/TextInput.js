import { memo, useEffect, useRef, useState } from 'react';
import { debounceTextAction } from '../store/action';
import { debounce } from '../utils/debounce';

const TextInput = ({ content, index, dispatch }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  // get the default value of input
  useEffect(() => {
    setInputValue(content);
  }, [content]);

  //debounce on key up event
  const debouncedHandler = debounce(() =>
    debounceTextAction({
      currentValue: inputRef.current?.value,
      defaultValue: content,
      dispatch,
      index,
    })
  );

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyUp={debouncedHandler}
      placeholder="Input text!"
      ref={inputRef}
    />
  );
};

export default memo(TextInput);
