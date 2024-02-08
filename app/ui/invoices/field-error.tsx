export default function FieldError({ errors }: { errors?: string[] }) {
  if (!errors) return null;
  return errors.map((error) => (
    <p className="mt-2 text-sm text-red-500" key={error}>
      {error}
    </p>
  ));
}
