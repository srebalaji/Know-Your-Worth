import React, { Component, Fragment } from "react"
import ReactDOM from "react-dom"

import './argon-design-system.min.css'
import './custom.css'

import $ from './js/jquery.min.js'
import './js/bootstrap.bundle.min.js'

class Worth extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
				<Header />
				<Filters />
			</Fragment>
		)
	}
}

const Header = () => {
	return (
		<div className="page-header">
      <div className="container shape-container d-flex align-items-center pt-6">
        <div className="col px-0">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="display-1">Know your worth</h1>
              <h6 className="display-4 font-weight-normal">All data collected from <a href="https://twitter.com/search?q=%23KnowYourWorth&src=typeahead_click" target="_blank">#KnowYourWorth</a></h6>
              <h6 className="display-6 font-weight-normal text-muted">Inspired from @ZacSweers <a href="https://twitter.com/ZacSweers/status/1228205724255154177" target="_blank">tweet</a></h6>
              <div className="btn-wrapper mt-4">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	)
}

const Filters = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="nav-wrapper">
			    <ul className="nav nav-pills nav-fill flex-column flex-md-row text-center" id="tabs-icons-text" role="tablist">
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0 active" id="tabs-icons-text-1-tab" data-toggle="tab" href="#tabs-icons-text-1" role="tab" aria-controls="tabs-icons-text-1" aria-selected="true"><i className="ni ni-cloud-upload-96 mr-2"></i>All</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-2-tab" data-toggle="tab" href="#tabs-icons-text-2" role="tab" aria-controls="tabs-icons-text-2" aria-selected="false"><i className="ni ni-bell-55 mr-2"></i>United Kingdom</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-3-tab" data-toggle="tab" href="#tabs-icons-text-3" role="tab" aria-controls="tabs-icons-text-3" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>Germany</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-4-tab" data-toggle="tab" href="#tabs-icons-text-4" role="tab" aria-controls="tabs-icons-text-4" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>New York</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-5-tab" data-toggle="tab" href="#tabs-icons-text-5" role="tab" aria-controls="tabs-icons-text-5" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>Remote</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-6-tab" data-toggle="tab" href="#tabs-icons-text-6" role="tab" aria-controls="tabs-icons-text-6" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>Brazil</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-7-tab" data-toggle="tab" href="#tabs-icons-text-7" role="tab" aria-controls="tabs-icons-text-7" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>France</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-8-tab" data-toggle="tab" href="#tabs-icons-text-8" role="tab" aria-controls="tabs-icons-text-8" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>India</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-9-tab" data-toggle="tab" href="#tabs-icons-text-9" role="tab" aria-controls="tabs-icons-text-9" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>Turkey</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link mb-sm-3 mb-md-0" id="tabs-icons-text-10-tab" data-toggle="tab" href="#tabs-icons-text-10" role="tab" aria-controls="tabs-icons-text-10" aria-selected="false"><i className="ni ni-calendar-grid-58 mr-2"></i>Others</a>
			        </li>
			    </ul>
				</div>
				<div className="card" style={{border: 0}}>
			    <div className="card-body">
			        <div className="tab-content" id="myTabContent">
			            <div className="tab-pane no-shadow fade show active" id="tabs-icons-text-1" role="tabpanel" aria-labelledby="tabs-icons-text-1-tab">
		            			<div className="row margin-around">
												<Profile url="https://twitter.com/suckup_de/status/1228508924904640512" />
												<Profile url="https://twitter.com/dan_abramov/status/1228454264915271683" />
												<Profile url="https://twitter.com/NikkitaFTW/status/1228450760926560273" />
												<Profile url="https://twitter.com/tuzgai/status/1228691570792259584" />
												<Profile url="https://twitter.com/selcukitmis/status/1228691565603848193" />
												<Profile url="https://twitter.com/thecaitcode/status/1228479220638154753" />
												<Profile url="https://twitter.com/kentcdodds/status/1228455789427404800" />
												<Profile url="https://twitter.com/JAldrichCMU/status/1228691017014140929" />
												<Profile url="https://twitter.com/ZacSweers/status/1228205724255154177" />
												<Profile url="https://twitter.com/jon_milner/status/1228690975121428481" />
												<Profile url="https://twitter.com/naosoucoach/status/1228690900567707648" />
												<Profile url="https://twitter.com/DarthVectivus_/status/1228690585386672128" />
												<Profile url="https://twitter.com/iAmAdrianMejia/status/1228690542852288514" />
												<Profile url="https://twitter.com/felipedemorais_/status/1228690494680637446" />
												<Profile url="https://twitter.com/anima/status/1228667595277996032" />
												<Profile url="https://twitter.com/mathewmorriswd/status/1228690431388594178" />
												<Profile url="https://twitter.com/sodevious/status/1228438243017814016" />
												<Profile url="https://twitter.com/matonguinha/status/1228690400715694080" />
												<Profile url="https://twitter.com/prosquid/status/1228636965786079232" />
												<Profile url="https://twitter.com/dare_adekoya_/status/1228636213231439878" />
												<Profile url="https://twitter.com/Mydde/status/1228690097425518592" />
												<Profile url="https://twitter.com/lucafmarques/status/1228690039992967169" />
												<Profile url="https://twitter.com/bitandbang/status/1228475398876540928" />
												<Profile url="https://twitter.com/zkat__/status/1228463146999808001" />
												<Profile url="https://twitter.com/kraln/status/1228689754558009345" />
												<Profile url="https://twitter.com/jsoverson/status/1228669263063416833" />
												<Profile url="https://twitter.com/Donutsonhudson/status/1228689270417821697" />
												<Profile url="https://twitter.com/fadhilmunonice/status/1228679450562195458" />
												<Profile url="https://twitter.com/mathdroid/status/1228555626629885952" />
												<Profile url="https://twitter.com/katiekovalcin/status/1228676198290612225" />
												<Profile url="https://twitter.com/prvnbist/status/1228688667511648256" />
												<Profile url="https://twitter.com/zomars/status/1228688392243703815" />
												<Profile url="https://twitter.com/velopert/status/1228609013023043584" />
												<Profile url="https://twitter.com/just_kathee/status/1228687955767824386" />
												<Profile url="https://twitter.com/InitialDi/status/1228687871009153024" />
												<Profile url="https://twitter.com/just_kathee/status/1228687591848980481" />
												<Profile url="https://twitter.com/helenasometimes/status/1228479187238957059" />
												<Profile url="https://twitter.com/ericlewis/status/1228687423200251907" />
												<Profile url="https://twitter.com/seafoam6/status/1228687028117786625" />
												<Profile url="https://twitter.com/computersaredum/status/1228686920965816320" />
												<Profile url="https://twitter.com/leandroico/status/1228686911880994817" />
												<Profile url="https://twitter.com/r4dixx/status/1228664004672925696" />
												<Profile url="https://twitter.com/TheRealPaganda/status/1228686698265141249" />
												<Profile url="https://twitter.com/PaulDJohnston/status/1228666240648044544" />
												<Profile url="https://twitter.com/PaulDJohnston/status/1228660481818316800" />
												<Profile url="https://twitter.com/stvnyung/status/1228668044303634433" />
												<Profile url="https://twitter.com/enunomaduro/status/1228632286628847617" />
												<Profile url="https://twitter.com/alexguangaa/status/1228686504966356992" />
												<Profile url="https://twitter.com/__device__/status/1228670737600393217" />
												<Profile url="https://twitter.com/widdyjp/status/1228686191006044161" />
												<Profile url="https://twitter.com/peetsnack/status/1228686086236516352" />
												<Profile url="https://twitter.com/k40s/status/1228674730800164865" />
												<Profile url="https://twitter.com/jarcodallo/status/1228675657049214978" />
												<Profile url="https://twitter.com/lkaybob/status/1228641967787008000" />
												<Profile url="https://twitter.com/VivekNayyar09/status/1228542343734755328" />
												<Profile url="https://twitter.com/mccraveiro/status/1228676072142712833" />
												<Profile url="https://twitter.com/ogirginc/status/1228677561024155648" />
												<Profile url="https://twitter.com/MateusMoog/status/1228681672087998466" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-2" role="tabpanel" aria-labelledby="tabs-icons-text-2-tab">
				            	<div className="row margin-around">
				                <Profile url="https://twitter.com/dan_abramov/status/1228454264915271683" />
												<Profile url="https://twitter.com/computersaredum/status/1228686920965816320" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-3" role="tabpanel" aria-labelledby="tabs-icons-text-3-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/suckup_de/status/1228508924904640512" />
												<Profile url="https://twitter.com/NikkitaFTW/status/1228450760926560273" />
												<Profile url="https://twitter.com/kraln/status/1228689754558009345" />
												<Profile url="https://twitter.com/TheRealPaganda/status/1228686698265141249" />
												<Profile url="https://twitter.com/k40s/status/1228674730800164865" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-4" role="tabpanel" aria-labelledby="tabs-icons-text-4-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/ZacSweers/status/1228205724255154177" />
												<Profile url="https://twitter.com/DarthVectivus_/status/1228690585386672128" />
												<Profile url="https://twitter.com/bitandbang/status/1228475398876540928" />
												<Profile url="https://twitter.com/Donutsonhudson/status/1228689270417821697" />
												<Profile url="https://twitter.com/alexguangaa/status/1228686504966356992" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-5" role="tabpanel" aria-labelledby="tabs-icons-text-5-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/jon_milner/status/1228690975121428481" />
												<Profile url="https://twitter.com/fadhilmunonice/status/1228679450562195458" />
												<Profile url="https://twitter.com/mathdroid/status/1228555626629885952" />
												<Profile url="https://twitter.com/ericlewis/status/1228687423200251907" />
												<Profile url="https://twitter.com/__device__/status/1228670737600393217" />
											</div>
			            </div>
			             <div className="tab-pane fade" id="tabs-icons-text-6" role="tabpanel" aria-labelledby="tabs-icons-text-6-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/matonguinha/status/1228690400715694080" />
												<Profile url="https://twitter.com/just_kathee/status/1228687955767824386" />
												<Profile url="https://twitter.com/just_kathee/status/1228687591848980481" />
												<Profile url="https://twitter.com/leandroico/status/1228686911880994817" />
												<Profile url="https://twitter.com/mccraveiro/status/1228676072142712833" />
												<Profile url="https://twitter.com/MateusMoog/status/1228681672087998466" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-7" role="tabpanel" aria-labelledby="tabs-icons-text-7-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/Mydde/status/1228690097425518592" />
												<Profile url="https://twitter.com/r4dixx/status/1228664004672925696" />
												<Profile url="https://twitter.com/stvnyung/status/1228668044303634433" />
												<Profile url="https://twitter.com/enunomaduro/status/1228632286628847617" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-8" role="tabpanel" aria-labelledby="tabs-icons-text-8-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/prvnbist/status/1228688667511648256" />
												<Profile url="https://twitter.com/VivekNayyar09/status/1228542343734755328" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-9" role="tabpanel" aria-labelledby="tabs-icons-text-9-tab">
			                <div className="row margin-around">
				                <Profile url="https://twitter.com/selcukitmis/status/1228691565603848193" />
												<Profile url="https://twitter.com/ogirginc/status/1228677561024155648" />
											</div>
			            </div>
			            <div className="tab-pane fade" id="tabs-icons-text-10" role="tabpanel" aria-labelledby="tabs-icons-text-10-tab">
			                <div className="row margin-around">
												<Profile url="https://twitter.com/tuzgai/status/1228691570792259584" />
												<Profile url="https://twitter.com/naosoucoach/status/1228690900567707648" />
												<Profile url="https://twitter.com/felipedemorais_/status/1228690494680637446" />
												<Profile url="https://twitter.com/anima/status/1228667595277996032" />
												<Profile url="https://twitter.com/prosquid/status/1228636965786079232" />
												<Profile url="https://twitter.com/lucafmarques/status/1228690039992967169" />
												<Profile url="https://twitter.com/jsoverson/status/1228669263063416833" />
												<Profile url="https://twitter.com/katiekovalcin/status/1228676198290612225" />
												<Profile url="https://twitter.com/zomars/status/1228688392243703815" />
												<Profile url="https://twitter.com/velopert/status/1228609013023043584" />
												<Profile url="https://twitter.com/PaulDJohnston/status/1228666240648044544" />
												<Profile url="https://twitter.com/PaulDJohnston/status/1228660481818316800" />
												<Profile url="https://twitter.com/widdyjp/status/1228686191006044161" />
												<Profile url="https://twitter.com/peetsnack/status/1228686086236516352" />
												<Profile url="https://twitter.com/lkaybob/status/1228641967787008000" />
											</div>
			            </div>
			        </div>
			    </div>
				</div>
			</div>
		</div>
	)
}

const Profile = (props) => {
	return (
		<div className="col-sm">
			<blockquote className="twitter-tweet"><a href={props.url}></a></blockquote> 
		</div>
	)
}

export default Worth;