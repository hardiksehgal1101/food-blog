
import "./App.css";
import CardList from "./components/CardList";
import ContentWithImage from "./components/ContentWithImage";
import Header from "./components/Header";
import HeroContent from "./components/HeroContent";
import ListItem from "./components/ListItem";
function App() {
	return (
		<div className="App">
      <div className="app__header">
      <Header />
			<HeroContent />
		
      </div>
      <CardList />
      <div className="list__section">
        <div  className="content__section">
        <ContentWithImage />
        
        </div>
        <div className="list">
          <ListItem imgSrc="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" title="Lorem ipsum doler" description="Lorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum doler" />
          <ListItem imgSrc="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" title="Lorem ipsum doler" description="Lorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum doler" />
          <ListItem imgSrc="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" title="Lorem ipsum doler" description="Lorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum doler" />
          <ListItem imgSrc="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" title="Lorem ipsum doler" description="Lorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum doler" />
          <ListItem imgSrc="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" title="Lorem ipsum doler" description="Lorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum dolerLorem ipsum doler" />
        
        </div>
      </div>
			</div>
	);
}

export default App;
