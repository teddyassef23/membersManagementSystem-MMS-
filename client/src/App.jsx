
import Member from './pages/member'
import SideMenu from './pages/side'
function App() {
  return (
   
      <div className="flex-column justify-flex-start min-100-vh">
      
       
     <SideMenu>
 <div className="container">
          <Member/>
        </div>
     </SideMenu>
      </div>
    // </ApolloProvider>
  );
}

export default App;
