import React ,{ useState,useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import {Link} from 'react-router-dom'
import {Button,Container,Alert,Row,Col,Image} from 'react-bootstrap';
import '../Css/Home.css';
import slide1 from '../images/slide_5.jpg';
import slide2 from '../images/slide_6.jpg';
import slide3 from '../images/slide_7.jpg';
import bg from '../images/bg.jpg';
import fresh from '../images/fresh.png';
import freeparking from '../images/freeparking.png';
import freewifi from '../images/freewifi.png';
import onlineorder from '../images/onlineorder.png';
import ship from '../images/shiptannha.png';
import hoitruong from '../images/phonghoitruong.png';
import bg2 from '../images/bg2.jpg';
import bg4 from '../images/bg4.jpg';
import iconmail from '../images/mail-icon.png';
import iconmap from '../images/map-icon.png';
import iconphone from '../images/phone-icon.png';
import * as FetchAPI from '../Utils/FetchAPI';
import {link} from '../Utils/Link';

export default function Home() {
    const [show, setShow] = useState(false);
    let [product,setProduct] = useState([]);
    const Slideshow = ()=>{
        return(
            <div>
                <Slide easing="ease" indicators = {false}  >
                <div className="each-slide">
                    <div  style={{backgroundImage: `url(${slide1})`}}>
                    <span>Chào mừng đến với HIGHLANDS COFFEE </span>
                    <Button variant="outline-light" onClick={() => {setShow(true); window.scroll(0,300)}}>Khám phá</Button>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slide2})`}}>
                    <span></span>
                   
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${slide3})`}}>
                    <span></span>
                    </div>
                </div>
                </Slide>
            </div>
        )
    }
    let elementSale = product.map((item,type)=>{
        return(
            <div className="ban-chay">
            <Link to={{pathname:`/details/${"id="+item.id}`, state:{id:item.id}}}>    
            <Image className="img-ban-chay" src={item.hinhanh} style={{ width:'80%',height:200,borderRadius:20,padding:15}}></Image>
            </Link>
            <p style={{ textAlign:'start', paddingLeft:30,fontWeight:'bold' }}>{item.ten}</p>
            </div>
        )

    })
    async function getFoodHighLight(){
        try {
            var arrTemp = [];
            for(var i = 1;i<=3;i++){
                const res = await FetchAPI.getDataApi(link+"getFoodHighLight.php?trang="+i);
                arrTemp = arrTemp.concat(res);
                if(i==3){
                    setProduct(arrTemp);
                }
            }
        } catch (error) {
        }
     
        // setTimeout(()=>{
        //     setProduct(arrTemp);
        // },300)
    }
    useEffect(() => {
        getFoodHighLight();
    },[]);
    return(
        <div className="body">
            {Slideshow()}
            <Alert show={show} variant="success">
                <Alert.Heading>HIGHLANDS COFFEE </Alert.Heading>
                <p>
                Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài,<br/>
                chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái<br/>
                và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc<br/>
                mà còn mang trên mình một sứ mệnh văn hóa, phản ánh một phần nếp sống hiện đại của người Việt Nam..<br/> 
                    Và mong bạn sẽ hài lòng về dịch vụ của chúng tôi. Yub!!!!!!
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => {setShow(false); window.scroll(0,0);}} variant="outline-success">
                    Đóng
                </Button>
                </div>
            </Alert>
            
            <div style={{ backgroundImage:`url(${bg2})`,textAlign:'center' }}>
                <Container>
               <p className="banchay">Thức uống nên thử khi đến Highlands coffee </p>
               <p>Chúng tôi gợi ý cho bạn một số thức uống đã trở thành
                thương hiệu của chúng tôi và có doanh thu bán chạy nhất của cửa hàng.</p>
                <Container >
                    <Row className="justify-content-md-between " md={4} style={{ paddingBottom:40,columnCount:4,columnGap:10 }}>
                    {elementSale}
                    </Row>
                </Container>
                </Container>
            </div>
           
            <div className="Advertisement" style={{ backgroundImage:`url(${bg4})`,color:'white' }}>
                <Container style={{ padding:20 }}>
                    <Row >
                        <Col style={{display:'flex',flexDirection:'row',paddingBottom:10 }} md={4}>
                            <Col md={4} xs={2}>
                            <Image className="descrepInforimg" src={iconphone} width={60} ></Image>
                            </Col>
                            <Col className="descrepInfor" md={8} xs={10} style={{ paddingLeft:20 }}>
                                <Row style={{ height:'50%',fontWeight:'bold' }}>(0236) 710 9778</Row>
                                <Row style={{ height:'50%' }}>Hotline tư vấn </Row>
                            </Col>
                        </Col>
                        <Col style={{display:'flex',flexDirection:'row',paddingBottom:10 }} md={4}>
                            <Col  md={4} xs={2}>
                            <Image className="descrepInforimg" src={iconmail} width={60} ></Image>
                            </Col>
                            <Col className="descrepInfor" md={8} xs={10} style={{ paddingLeft:20 }}>
                                <Row style={{ height:'50%',fontWeight:'bold' }}>service@gmail.com</Row>
                                <Row style={{ height:'50%' }}>Email nhận báo giá, yêu cầu xuất hóa đơn</Row>
                            </Col>
                        </Col>
                        <Col style={{display:'flex',flexDirection:'row',paddingBottom:10 }} md={4}>
                            <Col  md={4} xs={2}>
                            <Image className="descrepInforimg" src={iconmap} width={60} ></Image>
                            </Col>
                            <Col className="descrepInfor" md={8} xs={10} style={{ paddingLeft:20 }}>
                                <Row style={{ height:'50%',fontWeight:'bold' }}>258 Bạch Đăng, Q.Hải Châu, Tp. Đà Nẵng</Row>
                                <Row style={{ height:'50%' }}>Địa chỉ HIGHLANDS COFFEE VTV8 DA NANG </Row>
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div> 
                <div  style={{color:'white'}} className="header" >
                <Image className="bg-image" src={bg}/>  
                <div className="content">  
                <Container >
                    <Row style={{ justifyContent:'center' }}>
                       <p style={{ fontSize:30 }}>HIGLANDS COFFEE</p>
                    </Row>
                    <Row style={{ justifyContent:'center' }}>
                        <p style={{ fontSize:15 }}>Thương hiệu bắt nguồn từ cà phê Việt Nam </p>
                    </Row>
                    <Row style={{justifyContent:'center', textAlign:'center'}}>
                        <p className="des" style={{ fontSize:25 }}>Chào mừng bạn đến với Highlands Coffee</p>
                    </Row>
                    <Row>
                    <p className="des" style={{ textAlign:'center',fontSize:15,paddingLeft:'10%',paddingRight:'10%' }}>
                    Highlands Coffee® được sinh ra từ niềm đam mê bất tận với hạt cà phê Việt Nam. Qua một chặng đường dài,
                     chúng tôi đã không ngừng mang đến những sản phẩm cà phê thơm ngon, sánh đượm trong không gian thoải mái 
                     và lịch sự với mức giá hợp lý. Những ly cà phê của chúng tôi không chỉ đơn thuần là thức uống quen thuộc
                      mà còn mang trên mình một sứ mệnh văn hóa, phản ánh một phần nếp sống hiện đại của người Việt Nam.</p>
                    </Row>
                    <Row style={{ fontSize:15 ,textAlign:'center'}}>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={fresh} />
                            <p>Sản phẩm luôn tươi sống</p>
                        </Col>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={onlineorder}/>
                            <p>Hỗ trợ đặt hàng online dễ dàng</p>    
                        </Col>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={freewifi}/>
                            <p>Sóng wifi mạnh phủ khắp nhà hàng</p>   
                        </Col>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={freeparking}/>
                            <p>Có chỗ đậu xe ô tô miễn phí</p>  
                        </Col>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={ship}/>
                            <p>Giao hàng tận nơi với các đơn online</p>  
                        </Col>
                        <Col className="c" md={2} sm={6} xs={6}>
                            <Image className="imgc" src={hoitruong}/>
                            <p>Có phòng lớn tổ chức hội nghị</p>  
                        </Col>

                    </Row>
                </Container>
                </div>
                </div>
             
               
            </div>
        </div>
    )
}