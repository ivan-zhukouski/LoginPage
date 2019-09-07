import React,{Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import VerticalTabs from "./GoodsPage";

const url = 'https://www.api.fastbuy.by/kiosk/api/v1/kiosks/5d372f320d2567534c1ba603';
export default class KioskPage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'',
            title:'',
            currency:'',
            addressRu:'',
            addressEn:'',
            hoursFrom:'',
            hoursTo:'',
            categoryTitle:'',
            categoryId:'',
            categoryOrder:'',
            productsTitle:'',
            productsId:'',
            productsPrice:'',
            productsCount:'',
            productsDescription:'',

        }
    }
    componentDidMount() {
     fetch(url, {
          method:'GET',
          headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }
      }).then(response=>{
          return response.json()
      }).then(data=>{
          console.log(data);
          this.setState({title:`${data.items[0].products[0].title}`});
         console.log(this.state.title);
      }).catch(error=>{
          console.log(error)
      })
    }

    render(){
        return(
            <div className='container_'>
                <header>
                    <h1>Блюда</h1>
                </header>
                <VerticalTabs/>
            </div>
        )
    }
}