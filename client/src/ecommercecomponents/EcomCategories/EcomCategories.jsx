import React from 'react'
import './EcomCategories.scss'
import {Link, useNavigate} from 'react-router-dom'
function EcomCategories({item}) {
  const navigate = useNavigate();
  return (
    <div className="categories">
         <div className="col">
        <div className="row">
            <div className="elements">

              <Link className="link"  to={`/ecommerceproducts/${6}`}>
                <img
                  src="https://i.etsystatic.com/18514025/r/il/17eec9/4400097227/il_1080xN.4400097227_cjk5.jpg"
                  alt=""
                  />
                    <button>
                        Sale
                     
                    </button>
                </Link>
            </div>
        </div>
        <div className="row">
        <div className="elements">

          <Link to={`/ecommerceproducts/${6}`} className="link">
          <img
            src='https://ae01.alicdn.com/kf/H78683ab66fdc402f92a761ff3fbad65b1/Customized-electric-guitar-rosewood-fingerboard-3-pickups-can-be-bound-change-color-stock.jpg_.webp'
            alt=""
            />
          <button>
              Guitars
          </button>
            </Link>
            </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <div className="elements">
            <Link to={`/ecommerceproducts/${8}`} className="link">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2019_RiP_Deadland_Ritual_-_Geezer_Butler_-_by_2eight_-_8SC9785.jpg/1200px-2019_RiP_Deadland_Ritual_-_Geezer_Butler_-_by_2eight_-_8SC9785.jpg"
            alt=""
            />
          <button>
              Bass Guitars
          </button>
            </Link>
            </div>
        </div>
      </div>


      
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
            <div className="elements">

              <Link to={`/ecommerceproducts/${4}`} className="link">
              <img
                src="https://takelessons.com/blog/wp-content/uploads/2022/05/Teenage-girl-playing-a-ukulele.jpg"
                alt=""
                />
              <button>
                  Ukulele
              </button>
                </Link>
                </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <div className="elements">

                <Link to={`/ecommerceproducts/${7}`}className="link">
              <img
                src="https://i.etsystatic.com/7314652/r/il/a853ce/2284322428/il_570xN.2284322428_5492.jpg"
                alt=""
                />
              <button>
                  Mandoline
              </button>
                </Link>
            </div>
                </div>
          </div>
        </div>
        <div className="row">
        <div className="elements">

          <Link to={`/ecommerceproducts/${9}`} className="link">
          <img
            src="https://cdn.mos.cms.futurecdn.net/cNAZM5nqjFT2DJA3C3jpE4.jpg"
            alt=""
            />
          <button>
            Synthesizer
          </button>
            </Link>
            </div>
        </div>
      </div>
    </div>


 
  )
}

export default EcomCategories