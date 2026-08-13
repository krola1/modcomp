export const componentTemplate = (
  component,
) => `import styles from "./${component}.module.css";

function ${component}() {
  return (
    <div className={styles.wrapper}>
      <h2>${component}</h2>
    </div>
  );
}

export default ${component};
`;

export const cssTemplate = () => `.wrapper{
}`;

export const indexTemplate = (component) =>
  `export {default} from "./${component}"`;
