function DarkTheme(params) {
  return (
    <style jsx global>{`
      /* Dark theme */
      :root {
        --background-color: black;
        --text-color: white;
      }
    `}</style>
  );
}

export default DarkTheme;
