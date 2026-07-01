import Input from "./components/Input";

const App = () => {
  return (
    <div className="bg-[#2A1911] p-6 flex gap-2">
      <Input placeholder="E-mail" type="e-mail" />
      <Input placeholder="Senha" type="password"/>
    </div>
  )
}

export default App;