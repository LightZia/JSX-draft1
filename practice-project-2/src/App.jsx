import Card from "./components/Card"

const App = () => {
  return (
    <div id="parent">
      <Card user = 'Zia' img = 'https://images.unsplash.com/photo-1659698314782-fe80a44632b2?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user = 'Farah' img = "https://images.unsplash.com/photo-1730451306804-f7d3b0a3c4d5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user = 'Asif' img = 'https://images.unsplash.com/photo-1754634266934-e24523beb2ca?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App