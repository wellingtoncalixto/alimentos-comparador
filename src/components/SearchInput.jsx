import React from "react";
import style from "./SearchInput.module.css";

const SearchInput = ({
  options,
  searchValue,
  setSearchValue,
  error,
  setError,
  name,
  placeholder,
}) => {
  //const's
  const staticMapOptions = options.map((option) => ({
    ...option,
    active: false,
  }));

  // States
  const [value, setValue] = React.useState();
  const [mapOptions, setMapOptions] = React.useState(staticMapOptions);
  const [open, setOpen] = React.useState(false);

  // Ref
  const container = React.useRef();

  // useEffect
  React.useEffect(() => {
    const handler = (event) => {
      if (!container.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  React.useEffect(() => {
    function validade(changeValue) {
      if (Object.keys(searchValue).length === 0 && changeValue) {
        setError("Por favor selecione um item valido");
        return;
      }

      if (Object.keys(searchValue).length === 0) {
        setError("Por favor selecione um item");
        return;
      }

      setError("");
    }
    if (!open) {
      if (value || value === "") {
        validade(value);
      }
    }
  }, [open, searchValue, setError, value, mapOptions, setSearchValue]);

  // Functions
  function verifyInputValue(changeValue) {
    staticMapOptions.forEach((option) => {
      if (option.value === changeValue) {
        option.active = true;
        setSearchValue(option);
      }
    });
  }

  function filter(changeValue) {
    const filterOption = [];
    if (changeValue !== "") {
      staticMapOptions.forEach((option) => {
        updateActiveOptionStatus();
        if (option.value.includes(changeValue)) filterOption.push(option);
      });
    }

    if (changeValue && filterOption.length === 0) {
      setMapOptions([{ value: "Opção não encontrada", id: "n/d" }]);
      return;
    }

    if (filterOption.length > 0) {
      setMapOptions(filterOption);
      return;
    }
    setMapOptions(staticMapOptions);
  }

  function updateActiveOptionStatus(option) {
    if (option) {
      mapOptions.map((mapOption) => {
        if (mapOption.id === option.id) {
          mapOption.active = true;
        }
        if (mapOption.active && mapOption.id !== option.id) {
          mapOption.active = false;
        }
      });
    } else {
      mapOptions.map((mapOption) => {
        mapOption.active = false;
      });
    }
  }

  // Handle Functions
  function handleChange(changeValue) {
    setValue(changeValue);
    setSearchValue({});
    verifyInputValue(changeValue);
    filter(changeValue);
  }

  function handleClick(option) {
    setSearchValue(option);
    setValue(option.value);
    updateActiveOptionStatus(option);
    setOpen(false);
  }

  return (
    <div ref={container} className={`${style.searchContainer}`}>
      <label htmlFor={`input`} className={`${style.searchLabel} label-1`}>
        Categoria
      </label>
      <input
        name={name}
        id="options"
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        onFocus={() => setOpen(true)}
        value={value || ""}
        style={{
          borderBottomLeftRadius: open && 0,
          borderBottomRightRadius: open && 0,
          border: error && `1px solid #af0404`,
        }}
        className={style.searchInput}
        autoComplete="off"
      />
      {!open && error && (
        <span className={`${style.searchErrorMessage} small-label-upercase`}>
          {error}
        </span>
      )}
      {open && (
        <div className={style.searchBox} onBlur={() => setOpen(false)}>
          {mapOptions.map((option) => (
            <span
              key={option.id}
              className={`${style.searchBoxItem} label-2 ${
                option.active ? style.searchBoxItemActive : ""
              }`}
              onClick={() => handleClick(option)}
            >
              {option.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
