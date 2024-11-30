import TodoApp from "./components/TodoApp";
import ThemeProvider from "./context/ThemeProvider";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <ThemeProvider>
        <TodoApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
