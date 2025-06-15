import { useSearchParams } from "react-router";
import styles from "./styles.module.css";
import { useEffect } from "react";

const SubNavbar = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleOnCategoryPress = (value) => {
    setSearchParams({ cat: value });
  };

  useEffect(() => {
    if (
      searchParams.get("cat") === "todos" ||
      searchParams.get("cat") === "entradas" ||
      searchParams.get("cat") === "parrilla" ||
      searchParams.get("cat") === "hamburguer"
    ) {
      const div = document.getElementById(searchParams.get("cat"));
      div.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchParams]);

  return (
    <div className={styles.row}>
      <div onClick={() => handleOnCategoryPress("todos")}>
        <div className={styles.category}>Todos</div>
        {searchParams.get("cat") === "todos" && <div className={styles.dot} />}
      </div>
      <div onClick={() => handleOnCategoryPress("entradas")}>
        <div className={styles.category}>Entradas</div>
        {searchParams.get("cat") === "entradas" && (
          <div className={styles.dot} />
        )}
      </div>
      <div onClick={() => handleOnCategoryPress("parrilla")}>
        <div className={styles.category}>Parrilla</div>
        {searchParams.get("cat") === "parrilla" && (
          <div className={styles.dot} />
        )}
      </div>
      <div onClick={() => handleOnCategoryPress("hamburguer")}>
        <div className={styles.category}>Hambúrguer</div>
        {searchParams.get("cat") === "hamburguer" && (
          <div className={styles.dot} />
        )}
      </div>
    </div>
  );
};

export default SubNavbar;
