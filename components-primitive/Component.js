export default function Component({ id, children }) {
  return (
    <fieldset className="component">
      <legend>{`Component${id}`}:</legend>
      {children}
    </fieldset>
  );
}
